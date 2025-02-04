"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Banner } from "@/types";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "@hello-pangea/dnd";
import { Loader2, Upload, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";
import debounce from "lodash/debounce";

export default function HeroBannersPage() {
  const router = useRouter();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);

  // Debounced update function
  const debouncedUpdate = useCallback(
    debounce(async (banner: Banner) => {
      try {
        const response = await fetch("/api/banners", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(banner),
        });

        if (!response.ok) {
          throw new Error("Failed to update banner");
        }

        const updatedBanner = await response.json();
        setBanners(prev => prev.map(b => b.id === banner.id ? updatedBanner : b));
        toast.success("Banner updated successfully");
      } catch (error) {
        console.error("Error updating banner:", error);
        toast.error("Failed to update banner");
      }
    }, 500),
    []
  );

  // Fetch banners on load
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/banners");
        if (!response.ok) throw new Error("Failed to fetch banners");
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        toast.error("Failed to fetch banners");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const handleFileUpload = async (file: File, index: number) => {
    try {
      setUploadingIndex(index);
      const formData = new FormData();
      formData.append("file", file);

      // Use the banner API endpoint directly
      const response = await fetch("/api/banners", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { banner } = await response.json();
      
      // Update banners array with the new banner
      const updatedBanners = [...banners];
      updatedBanners[index] = banner;
      setBanners(updatedBanners);
      
      toast.success("Banner updated successfully");
      router.refresh();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleBannerUpdate = (banner: Banner) => {
    // Update local state immediately
    setBanners(prev => prev.map(b => b.id === banner.id ? banner : b));
    // Debounce the API call
    debouncedUpdate(banner);
  };

  const handleBannerDelete = async (id: string) => {
    try {
      setIsLoading(true);
      await fetch(`/api/banners/${id}`, {
        method: "DELETE",
      });
      setBanners(banners.filter(banner => banner.id !== id));
      toast.success("Banner deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete banner");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(banners);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order numbers
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setBanners(updatedItems);

    // Save new order to database
    try {
      await fetch("/api/banners/reorder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ banners: updatedItems }),
      });
    } catch (error) {
      toast.error("Failed to update banner order");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Manage Hero Banners</h1>
        <p className="text-gray-600">Drag and drop to reorder banners. Click on fields to edit.</p>
      </div>

      {isLoading && banners.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="banners">
            {(provided: DroppableProvided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {banners.map((banner, index) => (
                  <Draggable key={banner.id} draggableId={banner.id} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-shadow hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div {...provided.dragHandleProps} className="mt-2 cursor-move">
                            <GripVertical className="text-gray-400 hover:text-gray-600" />
                          </div>
                          
                          <div className="flex-1 space-y-6">
                            {/* Image upload */}
                            <div className="relative group">
                              {banner.image ? (
                                <div className="relative">
                                  <img
                                    src={banner.image}
                                    alt={banner.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors rounded-lg flex items-center justify-center">
                                    <Upload className="text-white/0 group-hover:text-white/90 transition-opacity" />
                                  </div>
                                </div>
                              ) : (
                                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                  <Upload className="text-gray-400" />
                                </div>
                              )}
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleFileUpload(file, index);
                                }}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                              {uploadingIndex === index && (
                                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                  <Loader2 className="animate-spin text-white" />
                                </div>
                              )}
                            </div>

                            {/* Banner details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  value={banner.title}
                                  onChange={(e) => {
                                    const updatedBanner = {
                                      ...banner,
                                      title: e.target.value,
                                    };
                                    handleBannerUpdate(updatedBanner);
                                  }}
                                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter banner title"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  CTA Text
                                </label>
                                <input
                                  type="text"
                                  value={banner.cta}
                                  onChange={(e) => {
                                    const updatedBanner = {
                                      ...banner,
                                      cta: e.target.value,
                                    };
                                    handleBannerUpdate(updatedBanner);
                                  }}
                                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter call to action text"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Link
                                </label>
                                <input
                                  type="text"
                                  value={banner.link}
                                  onChange={(e) => {
                                    const updatedBanner = {
                                      ...banner,
                                      link: e.target.value,
                                    };
                                    handleBannerUpdate(updatedBanner);
                                  }}
                                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter banner link"
                                />
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-between items-center pt-4 border-t">
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={banner.active}
                                  onChange={(e) => {
                                    const updatedBanner = {
                                      ...banner,
                                      active: e.target.checked,
                                    };
                                    handleBannerUpdate(updatedBanner);
                                  }}
                                  className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-600">Active</span>
                              </div>
                              <button
                                onClick={() => handleBannerDelete(banner.id)}
                                className="text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                disabled={isLoading}
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {/* Add new banner button */}
      <button
        onClick={async () => {
          try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append("title", "New Banner");
            formData.append("link", "/");
            formData.append("cta", "Learn More");
            
            const response = await fetch("/api/banners", {
              method: "POST",
              body: formData,
            });
            
            if (!response.ok) throw new Error("Failed to create banner");
            
            const { banner } = await response.json();
            setBanners([...banners, banner]);
            toast.success("New banner created");
          } catch (error) {
            toast.error("Failed to create banner");
          } finally {
            setIsLoading(false);
          }
        }}
        disabled={isLoading}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add New Banner
      </button>
    </div>
  );
} 