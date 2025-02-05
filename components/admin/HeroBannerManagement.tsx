"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaImage, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { toast } from "sonner";

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  active: boolean;
  order: number;
  date: string;
  ctaText: string;
  ctaLink: string;
}

interface BannerFormData {
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroBannerManagement() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState<BannerFormData>({
    title: "",
    subtitle: "",
    date: "",
    imageUrl: "",
    ctaText: "",
    ctaLink: "",
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch("/api/admin/banners");
      if (!response.ok) throw new Error("Failed to fetch banners");
      const data = await response.json();
      setBanners(data);
    } catch (error) {
      console.error("Error fetching banners:", error);
      toast.error("Failed to load banners");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.subtitle || !formData.date) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const url = editingBanner 
        ? `/api/admin/banners/${editingBanner.id}`
        : '/api/admin/banners';
      
      const method = editingBanner ? 'PATCH' : 'POST';
      
      const payload = {
        title: formData.title,
        subtitle: formData.subtitle,
        imageUrl: formData.imageUrl,
        date: new Date(formData.date).toISOString(),
        ctaText: formData.ctaText,
        ctaLink: formData.ctaLink,
        ...(editingBanner && { active: editingBanner.active }),
        ...(editingBanner && { order: editingBanner.order }),
      };

      console.log('Sending payload:', payload);

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server response:', errorData);
        throw new Error('Failed to save banner');
      }

      // Refresh banners list
      await fetchBanners();
      
      // Reset form
      setFormData({
        title: "",
        subtitle: "",
        date: "",
        imageUrl: "",
        ctaText: "",
        ctaLink: "",
      });
      setShowForm(false);
      setEditingBanner(null);
      
      toast.success(editingBanner ? "Banner updated successfully" : "Banner created successfully");
    } catch (error) {
      console.error('Error saving banner:', error);
      toast.error('Failed to save banner. Please try again.');
    }
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle,
      date: new Date(banner.date).toISOString().split('T')[0],
      imageUrl: banner.imageUrl,
      ctaText: banner.ctaText,
      ctaLink: banner.ctaLink,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;

    try {
      const response = await fetch(`/api/admin/banners/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete banner');

      await fetchBanners();
      toast.success("Banner deleted successfully");
    } catch (error) {
      console.error('Error deleting banner:', error);
      toast.error('Failed to delete banner');
    }
  };

  const handleToggleActive = async (banner: Banner) => {
    try {
      const response = await fetch(`/api/admin/banners/${banner.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: banner.title,
          subtitle: banner.subtitle,
          imageUrl: banner.imageUrl,
          date: new Date(banner.date).toISOString(),
          ctaText: banner.ctaText,
          ctaLink: banner.ctaLink,
          active: !banner.active,
          order: banner.order,
        }),
      });

      if (!response.ok) throw new Error('Failed to update banner');

      await fetchBanners();
      toast.success("Banner status updated");
    } catch (error) {
      console.error('Error updating banner:', error);
      toast.error('Failed to update banner status');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-gray-900">Hero Banner Management</h2>
        <button
          onClick={() => {
            setEditingBanner(null);
            setFormData({
              title: "",
              subtitle: "",
              date: "",
              imageUrl: "",
              ctaText: "",
              ctaLink: "",
            });
            setShowForm(true);
          }}
          className="px-4 py-2 bg-[#003366] text-white hover:bg-[#004488] transition-colors"
        >
          Add New Banner
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="mb-8 p-6 bg-gray-50">
          <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
            {editingBanner ? "Edit Banner" : "Add New Banner"}
          </h3>
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
                onClick={() => {
                  setShowForm(false);
                  setEditingBanner(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#003366] text-white hover:bg-[#004488] transition-colors"
              >
                {editingBanner ? "Update Banner" : "Save Banner"}
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
              <button 
                onClick={() => handleEdit(banner)}
                className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => handleDelete(banner.id)}
                className="p-2 text-red-600 hover:text-red-800 transition-colors"
              >
                <FaTrash />
              </button>
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={banner.active}
                  className="sr-only peer"
                  onChange={() => handleToggleActive(banner)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003366]"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 