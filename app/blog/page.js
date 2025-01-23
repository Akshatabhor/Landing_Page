import React from "react";
import Link from "next/link";
const data = await fetch("http://localhost:1337/api/articles?populate=*", {
  cache: "no-store",
});
const response = await data.json();

console.log(response);

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blogs</h1>
        <div className="space-y-6">
          {response.data &&
            response.data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    <Link href={`/blogpost/${data.slug}`}>{data.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{data.description}</p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>Slug: {data.slug}</span>
                    <span>Created: {new Date(data.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
