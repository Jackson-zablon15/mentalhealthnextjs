import Link from 'next/link';
import React from 'react';

const BlogPost = ({ title, date, excerpt, author, image, slug }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
    <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-5 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <div className="text-xs text-gray-500 mb-2">By {author} &middot; {date}</div>
      <p className="text-gray-700 mb-4 flex-1">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="inline-block mt-auto px-4 py-2 rounded bg-[var(--deep-red)] text-white font-semibold hover:bg-[var(--grayish-blue)] transition-colors duration-200">Read More</Link>
    </div>
  </div>
);

export default BlogPost; 