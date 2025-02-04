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
  namePrefix: string | null;  // "Dr"
  fullName: string | null;    // "Fabian Amino"
  designation: string | null; // "MBChB, MMed (Internal Medicine) (UoN) / MSc Gastroenterology (London), FAM (New Delhi)"
  title: string | null;      // "Consultant Gastroenterologist & Hepatologist"
  specialization: string | null; // "Gastroenterology"
  subspecialties?: string[]; // ["Digestive Disorders", "Liver Diseases", "Endoscopic Procedures", etc.]
  hospital: string | null;   // "Kenyatta National Hospital"
  bio: string | null;
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
                <AvatarFallback className="bg-[#003366] text-white text-2xl">
                  {profile.firstName?.[0]}{profile.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  {profile.namePrefix && (
                    <span className="font-medium">{profile.namePrefix.toUpperCase()}. </span>
                  )}
                  {profile.fullName || `${profile.firstName} ${profile.lastName}`}
                </h1>
                
                {/* Qualifications */}
                <p className="text-lg text-gray-600 font-medium">
                  {profile.designation && (
                    <span>{profile.designation}</span>
                  )}
                </p>

                {/* Specialization Badge */}
                {profile.specialization && (
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700">
                    {profile.specialization}
                  </div>
                )}

                {/* Hospital/Institution */}
                {profile.hospital && (
                  <p className="text-gray-700 font-medium flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    {profile.hospital}
                  </p>
                )}

                {/* Professional Title */}
                {profile.title && (
                  <p className="text-lg text-gray-800 font-medium">{profile.title}</p>
                )}

                {/* Subspecialties */}
                {profile.subspecialties && profile.subspecialties.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {profile.subspecialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bio */}
                {profile.bio && (
                  <div className="mt-4">
                    <p className="text-gray-600 max-w-3xl leading-relaxed whitespace-pre-line">
                      {profile.bio}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Social Links */}
              {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="flex gap-4 mt-6">
                  {profile.socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-[#003366]"
                        title={link.platform}
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
                <GraduationCapIcon className="h-6 w-6 text-[#003366]" />
                <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900 text-lg">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-600 mt-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
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
                <AwardIcon className="h-6 w-6 text-[#003366]" />
                <h2 className="text-2xl font-semibold text-gray-900">Achievements</h2>
              </div>
              <div className="space-y-6">
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900 text-lg">{achievement.title}</h3>
                    {achievement.description && (
                      <p className="text-gray-600 mt-2 leading-relaxed">{achievement.description}</p>
                    )}
                    {achievement.year && (
                      <p className="text-sm text-gray-500 mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {achievement.year}
                      </p>
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