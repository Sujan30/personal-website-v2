import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  
  {
    id: 1,
    title: "Feeling Lost in Life",
    excerpt: "Feeling lost in my life pre-career",
    date: "April 23, 2025",
    slug: "feeling-lost-in-life",
    tags: ["Spirtuality", "Purpose", "Taking a break"]
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main>
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Thoughts, insights, and explorations on software development, technology trends, and my journey as a developer, builder, and as a human.
            </p>
            
            <div className="grid gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md">
                  <div className="mb-2 flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="mb-4 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Blog; 