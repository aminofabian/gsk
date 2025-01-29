"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import BannerUpload from "@/components/admin/BannerUpload";

export default function HeroBannersPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-merriweather font-bold text-[#003366]">
            Hero Banners
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <BannerUpload />
          
          {/* Banner List - To be implemented */}
          <div className="bg-white  p-6 border border-gray-200">
            <h2 className="text-2xl font-merriweather font-bold text-[#003366] mb-6">
              Current Banners
            </h2>
            <div className="text-gray-500 text-center py-8">
              No banners uploaded yet.
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 