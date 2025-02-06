"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBook, FaFilePdf, FaVideo, FaNewspaper, FaSearch } from 'react-icons/fa';

// Sample resources data - in a real app, this would come from an API
const resources = [
  {
    id: 1,
    title: 'Clinical Guidelines 2024',
    description: 'Latest clinical practice guidelines for primary care physicians',
    type: 'PDF',
    category: 'Guidelines',
    icon: FaFilePdf,
    url: '#',
  },
  {
    id: 2,
    title: 'Medical Education Series',
    description: 'Video lectures on recent medical advancements',
    type: 'Video',
    category: 'Education',
    icon: FaVideo,
    url: '#',
  },
  {
    id: 3,
    title: 'Research Publications',
    description: 'Recent medical research papers and publications',
    type: 'Article',
    category: 'Research',
    icon: FaNewspaper,
    url: '#',
  },
  {
    id: 4,
    title: 'Medical Reference Books',
    description: 'Digital collection of essential medical reference books',
    type: 'E-Book',
    category: 'Reference',
    icon: FaBook,
    url: '#',
  },
];

export default function ResourcesList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(resources.map(resource => resource.category)))];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Link href={resource.url} key={resource.id}>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      {resource.type}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching your criteria</p>
        </div>
      )}
    </div>
  );
} 