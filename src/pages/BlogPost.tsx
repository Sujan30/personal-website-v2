import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Calendar } from "lucide-react";

// This would typically come from a CMS or API
const blogPostsData = {
  "feeling-lost-in-life": {
    title: "Feeling Lost in Life",
    date: "April 23, 2025",
    content: [
      {
        type: "heading",
        text: "Finding Purpose During Uncertainty"
      },
      {
        type: "paragraph",
        text: "I feel so lost in life. I am honestly not sure what I need to feel more fulfilled. People usually reach this point after getting a job or after a major acquisition, but I am experiencing this feeling as a freshman in college."
      },
      {
        type: "paragraph",
        text: "There's this urge in the back of my mind to just go homeless for a year, explore the world to let my mind relax a bit and hopefully find purpose in bigger things. It has been so hard for me to get a job or to 'do something with my life.'"
      },
      {
        type: "paragraph",
        text: "I have worked on projects and built up my resume, but I feel like I haven't really been rewarded for my efforts. Given that none of my projects were ever deployed, there wasn't really an opportunity to monetize my efforts."
      },
      {
        type: "paragraph",
        text: "I have no money coming in, and I feel like I am leeching off of my parents, because they are paying for my housing, college, and food, but I don't even care about college the way my peers do."
      },
    
      {
        type: "paragraph",
        text: "I know college education will help me get to where I want to get in life, but all the education I need, I can get through cheaper methods. The best way I learn is by teaching myself."
      },
      {
        type: "paragraph",
        text: "Even then, I can't make a bold decision and drop out because I don't have a solidified plan on what to do in life. My GPA is pretty low at around 3.56, but it'll probably drop even more, because I don't really care about most of my classes. They aren't interesting or they cover ancient topics that I don't really see the relevance to what I want to do in life."
      },
      {
        type: "heading",
        text: "Finding Meaning in the Journey"
      },
      {
        type: "paragraph",
        text: "Thuggin it out doesn't make logical sense either because I've been doing that all through high school and now in college. I want to do things with higher purpose rather than just exist and thug it out. But purpose isn't something that you get at the beginning; from my experience, it's something you always find out in the journey."
      },
      {
        type: "paragraph",
        text: "But I don't even know what the destination is, and I don't even know if I am even travelling."
      },
      {
        type: "heading",
        text: "The Value of Taking a Break"
      },
      {
        type: "paragraph",
        text: "Taking a bit of time off from going down the regular path allows me to come up with more creative methods, and avoid social conformity. I know I can and will succeed because I have what it takes, but right now, I just need some time to heal, connect with spirituality, increase my consciousness so I can come back better than ever ready to take it on."
      },
      {
        type: "paragraph",
        text: "Luckily, summer is right around the corner, and while I may not be working on advancing the world by interning anywhere, I'll be able to advance myself by connecting with my inner spiritual self, increase my consciousness, and come back stronger than ever to get to that success."
      }
    ],
    tags: ["Spirituality", "Purpose", "Taking a break"]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPostsData[slug as keyof typeof blogPostsData];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <PageTransition>
        <div className="container-custom pt-32 pb-16">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </PageTransition>
    );
  }
  
  return (
    <PageTransition>
      <main>
        <article className="pt-32 pb-16">
          <div className="container-custom max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
            
            <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-6 text-lg">
              {Array.isArray(post.content) && post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {block.text}
                    </h2>
                  );
                } else if (block.type === "paragraph") {
                  return (
                    <p key={index} className="leading-relaxed text-base md:text-lg text-muted-foreground">
                      {block.text}
                    </p>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </article>
      </main>
    </PageTransition>
  );
};

export default BlogPost; 