"use client";

import { useEffect, useState } from "react";
import { FaGraduationCap, FaTrophy, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

interface ProfileData {
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  specialization: string;
  hospital: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
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

export default function ProfilePage({ params }: { params: { slug: string } }) {
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
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <Skeleton className="h-32 w-32 rounded-full mx-auto" />
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto" />
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600">The profile you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return <FaLinkedin className="w-6 h-6" />;
      case "twitter":
        return <FaTwitter className="w-6 h-6" />;
      default:
        return <FaGlobe className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            {profile.firstName} {profile.lastName}
          </h1>
          {profile.title && (
            <p className="mt-2 text-xl text-gray-600">{profile.title}</p>
          )}
          {profile.specialization && (
            <p className="mt-1 text-gray-500">{profile.specialization}</p>
          )}
          {profile.hospital && (
            <p className="mt-1 text-gray-500">{profile.hospital}</p>
          )}
        </div>

        {/* Bio */}
        {profile.bio && (
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <p className="text-gray-700 text-center">{profile.bio}</p>
          </div>
        )}

        {/* Social Links */}
        {profile.socialLinks && profile.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-4">
            {profile.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#003366] transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        )}

        {/* Education */}
        {profile.education && profile.education.length > 0 && (
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGraduationCap className="mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h3 className="font-medium text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">
                    {edu.startYear} - {edu.endYear || "Present"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {profile.achievements && profile.achievements.length > 0 && (
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaTrophy className="mr-2" />
              Achievements
            </h2>
            <div className="space-y-4">
              {profile.achievements.map((achievement, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="text-gray-600 mt-1">{achievement.description}</p>
                  )}
                  {achievement.year && (
                    <p className="text-gray-500 text-sm mt-1">{achievement.year}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
