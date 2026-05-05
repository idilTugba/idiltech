import Link from "next/link";
import { notFound } from "next/navigation";
import blogData from "../../../components/blog.json";

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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts: BlogPost[] = blogData;

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const posts: BlogPost[] = blogData;
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/" className="text-[#4b00ff] hover:underline mr-4">
          ← Back to Home
        </Link>
        <Link href="/blog" className="text-[#4b00ff] hover:underline">
          ← Back to Blog
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-md p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#333] mb-4">{post.title}</h1>

          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#90ee90] text-[#333] text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
