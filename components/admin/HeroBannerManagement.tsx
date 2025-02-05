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
    date: "2024-03-20",
    ctaText: "Learn More",
    ctaLink: "/about",
  },
  {
    id: 2,
    title: "Join Our Community",
    subtitle: "Connect with Leading Gastroenterologists",
    imageUrl: "/images/banner2.jpg",
    active: true,
    order: 2,
    date: "2024-03-21",
    ctaText: "Join Now",
    ctaLink: "/join",
  },
];

interface BannerFormData {
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroBannerManagement() {
  const [banners, setBanners] = useState(mockBanners);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<BannerFormData>({
    title: "",
    subtitle: "",
    date: "",
    imageUrl: "",
    ctaText: "",
    ctaLink: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add validation here if needed
    if (!formData.title || !formData.subtitle || !formData.date) {
      alert("Please fill in all required fields");
      return;
    }

    // Create new banner object
    const newBanner = {
      id: banners.length + 1,
      ...formData,
      active: true,
      order: banners.length + 1,
    };

    // Update local state
    setBanners([...banners, newBanner]);
    
    // Reset form
    setFormData({
      title: "",
      subtitle: "",
      date: "",
      imageUrl: "",
      ctaText: "",
      ctaLink: "",
    });
    setShowAddForm(false);

    // TODO: Add API call to save to database
    // try {
    //   const response = await fetch('/api/banners', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newBanner),
    //   });
    //   if (!response.ok) throw new Error('Failed to save banner');
    // } catch (error) {
    //   console.error('Error saving banner:', error);
    //   alert('Failed to save banner. Please try again.');
    // }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter banner title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter banner subtitle"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text</label>
              <input
                type="text"
                name="ctaText"
                value={formData.ctaText}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter call-to-action text"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CTA Link</label>
              <input
                type="text"
                name="ctaLink"
                value={formData.ctaLink}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
                placeholder="Enter call-to-action link"
                required
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
                      onChange={(e) => {
                        // Handle file upload
                        const file = e.target.files?.[0];
                        if (file) {
                          // TODO: Implement file upload logic
                          // For now, just set a placeholder URL
                          setFormData(prev => ({
                            ...prev,
                            imageUrl: URL.createObjectURL(file)
                          }));
                        }
                      }}
                    />
                    <label
                      htmlFor="banner-image"
                      className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 cursor-pointer hover:border-[#003366] transition-colors"
                    >
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaImage />
                        <span>Choose an image</span>
                      </div>
                    </label>
                  </div>
                </div>
                {formData.imageUrl && (
                  <div className="w-24 h-24 bg-gray-100">
                    <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
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
                className="px-4 py-2 bg-[#003366] text-white hover:bg-[#004488] transition-colors"
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
            className="flex items-center gap-6 p-4 bg-white border hover:shadow-sm transition-shadow"
          >
            <div className="w-32 h-20 bg-gray-100 overflow-hidden">
              {banner.imageUrl && (
                <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{banner.title}</h3>
              <p className="text-sm text-gray-500">{banner.subtitle}</p>
              <p className="text-sm text-gray-400 mt-1">Date: {new Date(banner.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-400">CTA: {banner.ctaText} ({banner.ctaLink})</p>
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