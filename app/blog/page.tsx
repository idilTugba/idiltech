import Link from "next/link";
import blogData from "../../components/blog.json";

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

export default function BlogPage() {
  const posts: BlogPost[] = blogData;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/"
        className="text-[#4b00ff] hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-[#333] mb-8">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-[#333] mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-[#4b00ff] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-gray-700 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#90ee90] text-[#333] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
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
