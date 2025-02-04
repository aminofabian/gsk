"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Banner } from "@/types";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "@hello-pangea/dnd";
import { Loader2, Upload, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";

export default function HeroBannersPage() {
  const router = useRouter();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);

  const handleFileUpload = async (file: File, index: number) => {
    try {
      setUploadingIndex(index);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { url } = await response.json();
      
      // Update banner image URL
      const updatedBanners = [...banners];
      updatedBanners[index] = {
        ...updatedBanners[index],
        image: url
      };
      
      // Save to database
      await fetch("/api/banners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: updatedBanners[index].id, image: url }),
      });

      setBanners(updatedBanners);
      toast.success("Banner updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to upload image");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleBannerUpdate = async (banner: Banner) => {
    try {
      setIsLoading(true);
      await fetch("/api/banners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(banner),
      });
      toast.success("Banner updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update banner");
    } finally {
      setIsLoading(false);
    }
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

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="banners">
          {(provided: DroppableProvided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {banners.map((banner, index) => (
                <Draggable key={banner.id} draggableId={banner.id} index={index}>
                  {(provided: DraggableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="bg-white p-4 rounded-lg shadow-sm mb-4 border"
                    >
                      <div className="flex items-start gap-4">
                        <div {...provided.dragHandleProps} className="mt-2">
                          <GripVertical className="text-gray-400" />
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          {/* Image upload */}
                          <div className="relative">
                            {banner.image ? (
                              <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
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
                          <div className="grid grid-cols-2 gap-4">
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
                                className="w-full p-2 border rounded-md"
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
                                className="w-full p-2 border rounded-md"
                              />
                            </div>
                            <div className="col-span-2">
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
                                className="w-full p-2 border rounded-md"
                              />
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleBannerDelete(banner.id)}
                              className="text-red-600 hover:text-red-700"
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

      {/* Add new banner button */}
      <button
        onClick={async () => {
          try {
            setIsLoading(true);
            const response = await fetch("/api/banners", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: "New Banner",
                image: "",
                link: "/",
                cta: "Learn More",
                order: banners.length,
              }),
            });
            const newBanner = await response.json();
            setBanners([...banners, newBanner]);
            toast.success("New banner added");
            router.refresh();
          } catch (error) {
            toast.error("Failed to add banner");
          } finally {
            setIsLoading(false);
          }
        }}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        disabled={isLoading}
      >
        Add New Banner
      </button>
    </div>
  );
} 