"use client";
import Link from "next/link";
import blogData from "./blog.json";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
}

export default function LatestBlog() {
  const posts: BlogPost[] = blogData;
  const latestPosts = posts.slice(0, 1); // Show latest 3 posts

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        {/* <h2 className="text-medium font-bold text-[#333] mb-2">
          Latest Blog Posts
        </h2> */}
        <Link href="/blog" className="text-[#4b00ff] hover:underline text-sm">
          View all posts →
        </Link>
      </div>

      <div className="space-y-6 mb-6">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-[#4b00ff] transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-gray-700 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#90ee90] text-[#333] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>

              <Link
                href={`/blog/${post.id}`}
                className="text-[#4b00ff] hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
