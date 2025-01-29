"use client";

import { useState } from "react";
import { FaEdit, FaTrash, FaImage, FaArrowUp, FaArrowDown } from "react-icons/fa";

// Mock data - replace with actual API calls
const mockBanners = [
  {
    id: 1,
    title: "Welcome to GSK",
    subtitle: "Advancing Digestive Health Care",
    imageUrl: "/images/banner1.jpg",
    active: true,
    order: 1,
  },
  {
    id: 2,
    title: "Join Our Community",
    subtitle: "Connect with Leading Gastroenterologists",
    imageUrl: "/images/banner2.jpg",
    active: true,
    order: 2,
  },
];

export default function HeroBannerManagement() {
  const [banners, setBanners] = useState(mockBanners);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-gray-900">Hero Banner Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-[#003366] text-white  hover:bg-[#004488] transition-colors"
        >
          Add New Banner
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="mb-8 p-6 bg-gray-50 ">
          <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Add New Banner</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2  border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter banner title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input
                type="text"
                className="w-full px-4 py-2  border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter banner subtitle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="file"
                      className="hidden"
                      id="banner-image"
                      accept="image/*"
                    />
                    <label
                      htmlFor="banner-image"
                      className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300  cursor-pointer hover:border-[#003366] transition-colors"
                    >
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaImage />
                        <span>Choose an image</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="w-24 h-24 bg-gray-100 "></div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#003366] text-white  hover:bg-[#004488] transition-colors"
              >
                Save Banner
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Banners List */}
      <div className="space-y-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="flex items-center gap-6 p-4 bg-white border  hover:shadow-sm transition-shadow"
          >
            <div className="w-32 h-20 bg-gray-100  overflow-hidden">
              {/* Replace with actual image component */}
              <div className="w-full h-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{banner.title}</h3>
              <p className="text-sm text-gray-500">{banner.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <FaArrowUp />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <FaArrowDown />
              </button>
              <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                <FaEdit />
              </button>
              <button className="p-2 text-red-600 hover:text-red-800 transition-colors">
                <FaTrash />
              </button>
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={banner.active}
                  className="sr-only peer"
                  onChange={() => {}}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after: after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 