"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, Trash2, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface SliderInfo {
  id: string;
  text: string;
  link?: string | null;
  active: boolean;
  order: number;
}

export default function SliderManagementPage() {
  const [sliderItems, setSliderItems] = useState<SliderInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSliderItems();
  }, []);

  const fetchSliderItems = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/slider");
      if (!response.ok) throw new Error("Failed to fetch slider items");
      const data = await response.json();
      setSliderItems(data);
    } catch (error) {
      toast.error("Failed to fetch slider items");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/slider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: "New Announcement",
          link: "",
        }),
      });

      if (!response.ok) throw new Error("Failed to create slider item");
      
      const newItem = await response.json();
      setSliderItems([...sliderItems, newItem]);
      toast.success("New slider item created");
    } catch (error) {
      toast.error("Failed to create slider item");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateItem = async (id: string, data: Partial<SliderInfo>) => {
    try {
      const response = await fetch(`/api/slider/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update slider item");

      const updatedItem = await response.json();
      setSliderItems(items => 
        items.map(item => item.id === id ? updatedItem : item)
      );
      toast.success("Slider item updated");
    } catch (error) {
      toast.error("Failed to update slider item");
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/slider/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete slider item");

      setSliderItems(items => items.filter(item => item.id !== id));
      toast.success("Slider item deleted");
    } catch (error) {
      toast.error("Failed to delete slider item");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnd = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(sliderItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order numbers
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setSliderItems(updatedItems);

    // Save new order to database
    try {
      await Promise.all(
        updatedItems.map(item =>
          fetch(`/api/slider/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: item.order }),
          })
        )
      );
    } catch (error) {
      toast.error("Failed to update slider order");
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Manage Slider Information</h1>
          <p className="text-gray-600 text-lg">
            Manage the announcements that appear in the sliding text at the top of the website.
          </p>
        </div>

        {isLoading && sliderItems.length === 0 ? (
          <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="slider-items">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {sliderItems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-gray-200"
                        >
                          <div className="flex items-start gap-4">
                            <div {...provided.dragHandleProps} className="mt-2 cursor-move">
                              <GripVertical className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
                            </div>
                            
                            <div className="flex-1 space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="block text-sm font-semibold text-gray-700">
                                    Announcement Text
                                  </label>
                                  <input
                                    type="text"
                                    value={item.text}
                                    onChange={(e) => handleUpdateItem(item.id, { text: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter announcement text"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="block text-sm font-semibold text-gray-700">
                                    Link (Optional)
                                  </label>
                                  <input
                                    type="text"
                                    value={item.link || ""}
                                    onChange={(e) => handleUpdateItem(item.id, { link: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                    placeholder="Enter link URL"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                  <div className="relative inline-flex items-center">
                                    <input
                                      type="checkbox"
                                      checked={item.active}
                                      onChange={(e) => handleUpdateItem(item.id, { active: e.target.checked })}
                                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors duration-200"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700">Active</span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleDeleteItem(item.id)}
                                  className="text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all duration-200"
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

        <button
          onClick={handleAddItem}
          disabled={isLoading}
          className="mt-8 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Add New Announcement
        </button>
      </div>
    </div>
  );
} 