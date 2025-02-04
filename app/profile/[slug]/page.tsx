"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GlobeIcon, 
  BookOpenIcon,
  AwardIcon,
  GraduationCapIcon,
  ExternalLinkIcon 
} from "lucide-react";

interface ProfileData {
  firstName: string;
  lastName: string;
  image: string | null;
  title: string | null;
  bio: string | null;
  specialization: string | null;
  hospital: string | null;
  socialLinks: Array<{ platform: string; url: string; }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startYear: number;
    endYear?: number;
  }>;
  achievements: Array<{
    title: string;
    description?: string;
    year?: number;
  }>;
}

const platformIcons: { [key: string]: React.ReactNode } = {
  LINKEDIN: <LinkedinIcon className="h-5 w-5" />,
  TWITTER: <TwitterIcon className="h-5 w-5" />,
  WEBSITE: <GlobeIcon className="h-5 w-5" />,
  RESEARCHGATE: <BookOpenIcon className="h-5 w-5" />,
  GOOGLESCHOLAR: <BookOpenIcon className="h-5 w-5" />,
  ORCID: <BookOpenIcon className="h-5 w-5" />,
  OTHER: <ExternalLinkIcon className="h-5 w-5" />
};

export default function PublicProfile({ params }: { params: { slug: string } }) {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/profile?slug=${params.slug}`);
        if (!response.ok) {
          throw new Error("Profile not found");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [params.slug]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h1>
            <p className="text-gray-500">We couldn&apos;t find the profile you&apos;re looking for.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src={profile.image || ""} />
                <AvatarFallback>
                  {profile.firstName?.[0]}{profile.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h1>
              {profile.title && (
                <p className="text-xl text-gray-600 mt-2">{profile.title}</p>
              )}
              {profile.specialization && (
                <p className="text-gray-500 mt-1">{profile.specialization}</p>
              )}
              {profile.hospital && (
                <p className="text-gray-500">{profile.hospital}</p>
              )}
              {profile.bio && (
                <p className="mt-4 text-gray-600 max-w-2xl">{profile.bio}</p>
              )}
              
              {/* Social Links */}
              {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="flex gap-4 mt-6">
                  {profile.socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        {platformIcons[link.platform] || platformIcons.OTHER}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        {profile.education && profile.education.length > 0 && (
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCapIcon className="h-6 w-6 text-gray-400" />
                <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      {edu.startYear} - {edu.endYear || 'Present'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Achievements */}
        {profile.achievements && profile.achievements.length > 0 && (
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <AwardIcon className="h-6 w-6 text-gray-400" />
                <h2 className="text-2xl font-semibold text-gray-900">Achievements</h2>
              </div>
              <div className="space-y-6">
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    {achievement.description && (
                      <p className="text-gray-600 mt-1">{achievement.description}</p>
                    )}
                    {achievement.year && (
                      <p className="text-sm text-gray-500 mt-1">{achievement.year}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <Skeleton className="h-32 w-32 rounded-full" />
              <Skeleton className="h-8 w-64 mt-4" />
              <Skeleton className="h-6 w-48 mt-2" />
              <Skeleton className="h-6 w-40 mt-1" />
              <Skeleton className="h-24 w-full max-w-2xl mt-4" />
              <div className="flex gap-4 mt-6">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-10 w-10 rounded-full" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 