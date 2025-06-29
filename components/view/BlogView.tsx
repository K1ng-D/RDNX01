"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaTimes,
  FaBug,
  FaLightbulb,
  FaBook,
} from "react-icons/fa";

const CyberBlog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  // Blog post data with sections and images
  const blogPosts = [
    {
      id: 1,
      title: "XSS Vulnerability in Popular CMS",
      date: "2023-11-15",
      type: "Bug Report",
      excerpt:
        "How I discovered and reported a persistent XSS vulnerability...",
      tags: ["XSS", "Web Security", "Responsible Disclosure"],
      sections: [
        {
          title: "Discovery Process",
          content: `
            <p>While testing a client's website built with [CMS Name], I noticed unusual behavior in the comment section. The platform wasn't properly sanitizing user input in the admin panel.</p>
            <img src="/blog/xss-discovery.jpg" alt="XSS Discovery Screenshot" class="my-4 rounded border border-cyan-400/20" />
            <p>The vulnerability allowed injection through SVG tags containing JavaScript event handlers.</p>
          `,
          image: "/blog/xss-discovery.jpg",
        },
        {
          title: "Exploitation Details",
          content: `
            <p>By crafting this payload, I could execute arbitrary code when admins viewed comments:</p>
            <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>&lt;svg onload="alert(document.cookie)"&gt;&lt;/svg&gt;</code></pre>
            <img src="/blog/xss-exploit.jpg" alt="XSS Exploit Screenshot" class="my-4 rounded border border-cyan-400/20" />
          `,
          image: "/blog/xss-exploit.jpg",
        },
        {
          title: "Impact Analysis",
          content: `
            <p>This vulnerability had serious consequences:</p>
            <ul class="list-disc pl-6 my-4 space-y-2">
              <li>Full admin account compromise</li>
              <li>Potential for site-wide defacement</li>
              <li>Data exfiltration possibilities</li>
            </ul>
            <img src="/blog/xss-impact.jpg" alt="XSS Impact Screenshot" class="my-4 rounded border border-cyan-400/20" />
          `,
          image: "/blog/xss-impact.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Secure Coding Practices for Node.js",
      date: "2023-10-22",
      type: "Security Tips",
      excerpt:
        "Essential security practices every Node.js developer should know...",
      tags: ["Node.js", "Secure Coding", "Best Practices"],
      sections: [
        {
          title: "Input Validation",
          content: `
            <p>Always validate and sanitize user input using libraries like Joi or validator.js.</p>
            <img src="/blog/input-validation.jpg" alt="Input Validation Code" class="my-4 rounded border border-cyan-400/20" />
            <p>Example of proper input validation middleware:</p>
            <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>app.post('/user', validateUserInput, createUser);</code></pre>
          `,
          image: "/blog/input-validation.jpg",
        },
        {
          title: "Dependency Management",
          content: `
            <p>Use npm audit regularly and consider tools like Snyk to monitor for vulnerable dependencies.</p>
            <img src="/blog/dependency-check.jpg" alt="Dependency Check" class="my-4 rounded border border-cyan-400/20" />
            <p>Key commands every developer should run:</p>
            <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>npm audit
npm outdated
npx snyk test</code></pre>
          `,
          image: "/blog/dependency-check.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Secure Coding Practices for Node.js",
      date: "2023-10-22",
      type: "Security Tips",
      excerpt:
        "Essential security practices every Node.js developer should know...",
      tags: ["Node.js", "Secure Coding", "Best Practices"],
      sections: [
        {
          title: "Input Validation",
          content: `
              <p>Always validate and sanitize user input using libraries like Joi or validator.js.</p>
              <img src="/blog/input-validation.jpg" alt="Input Validation Code" class="my-4 rounded border border-cyan-400/20" />
              <p>Example of proper input validation middleware:</p>
              <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>app.post('/user', validateUserInput, createUser);</code></pre>
            `,
          image: "/blog/input-validation.jpg",
        },
        {
          title: "Dependency Management",
          content: `
              <p>Use npm audit regularly and consider tools like Snyk to monitor for vulnerable dependencies.</p>
              <img src="/blog/dependency-check.jpg" alt="Dependency Check" class="my-4 rounded border border-cyan-400/20" />
              <p>Key commands every developer should run:</p>
              <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>npm audit
  npm outdated
  npx snyk test</code></pre>
            `,
          image: "/blog/dependency-check.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "XSS Vulnerability in Popular CMS",
      date: "2023-11-15",
      type: "Bug Report",
      excerpt:
        "How I discovered and reported a persistent XSS vulnerability...",
      tags: ["XSS", "Web Security", "Responsible Disclosure"],
      sections: [
        {
          title: "Discovery Process",
          content: `
              <p>While testing a client's website built with [CMS Name], I noticed unusual behavior in the comment section. The platform wasn't properly sanitizing user input in the admin panel.</p>
              <img src="/blog/xss-discovery.jpg" alt="XSS Discovery Screenshot" class="my-4 rounded border border-cyan-400/20" />
              <p>The vulnerability allowed injection through SVG tags containing JavaScript event handlers.</p>
            `,
          image: "/blog/xss-discovery.jpg",
        },
        {
          title: "Exploitation Details",
          content: `
              <p>By crafting this payload, I could execute arbitrary code when admins viewed comments:</p>
              <pre class="bg-black/50 p-4 my-4 border border-cyan-400/20 overflow-x-auto"><code>&lt;svg onload="alert(document.cookie)"&gt;&lt;/svg&gt;</code></pre>
              <img src="/blog/xss-exploit.jpg" alt="XSS Exploit Screenshot" class="my-4 rounded border border-cyan-400/20" />
            `,
          image: "/blog/xss-exploit.jpg",
        },
        {
          title: "Impact Analysis",
          content: `
              <p>This vulnerability had serious consequences:</p>
              <ul class="list-disc pl-6 my-4 space-y-2">
                <li>Full admin account compromise</li>
                <li>Potential for site-wide defacement</li>
                <li>Data exfiltration possibilities</li>
              </ul>
              <img src="/blog/xss-impact.jpg" alt="XSS Impact Screenshot" class="my-4 rounded border border-cyan-400/20" />
            `,
          image: "/blog/xss-impact.jpg",
        },
      ],
    },
    // Add more posts as needed...
  ];

  const handleNextSection = () => {
    const post = blogPosts.find((p) => p.id === selectedPost);
    if (post && currentSection < post.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-cyan-100 pt-24 pb-12 px-6 sm:px-8 lg:px-12">
      {/* Background overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6 text-cyan-400">
            <span className="text-white">$</span> SECURITY_BLOG
          </h1>
          <div className="h-1 w-20 bg-cyan-400 mb-6"></div>
          <p className="font-mono text-cyan-300 max-w-3xl">
            // Bug reports, security tips, and personal experiences from the
            field
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedPost(post.id);
                setCurrentSection(0);
              }}
            >
              <div className="h-full bg-black/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  {post.type === "Bug Report" && (
                    <FaBug className="text-cyan-400 mr-2" />
                  )}
                  {post.type === "Security Tips" && (
                    <FaLightbulb className="text-cyan-400 mr-2" />
                  )}
                  {post.type === "Experience" && (
                    <FaBook className="text-cyan-400 mr-2" />
                  )}
                  <span className="text-cyan-400 font-mono text-sm">
                    {post.type}
                  </span>
                </div>

                <h3 className="text-xl font-mono text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-cyan-100 mb-4 flex-grow">{post.excerpt}</p>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400/80 text-sm">{post.date}</span>
                  <div className="flex space-x-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyan-400/10 text-cyan-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog post modal */}
        <AnimatePresence>
          {selectedPost !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 50 }}
                className="relative bg-black border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 text-cyan-400 hover:text-white z-10"
                >
                  <FaTimes className="text-xl" />
                </button>

                {/* Modal content */}
                {blogPosts
                  .filter((post) => post.id === selectedPost)
                  .map((post) => (
                    <div key={post.id} className="p-8">
                      <div className="flex items-center mb-6">
                        {post.type === "Bug Report" && (
                          <FaBug className="text-cyan-400 mr-3 text-xl" />
                        )}
                        {post.type === "Security Tips" && (
                          <FaLightbulb className="text-cyan-400 mr-3 text-xl" />
                        )}
                        {post.type === "Experience" && (
                          <FaBook className="text-cyan-400 mr-3 text-xl" />
                        )}
                        <h2 className="text-2xl font-mono text-white">
                          {post.type}
                        </h2>
                      </div>

                      <h1 className="text-3xl font-mono text-cyan-400 mb-4">
                        {post.title}
                      </h1>
                      <div className="flex items-center mb-8">
                        <span className="text-cyan-300 font-mono mr-4">
                          {post.date}
                        </span>
                        <div className="flex space-x-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Current section content */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-mono text-cyan-400 mb-4">
                          {post.sections[currentSection].title}
                        </h3>
                        <div
                          className="prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: post.sections[currentSection].content,
                          }}
                        />
                      </div>

                      {/* Section navigation */}
                      <div className="flex justify-between mt-8 pt-6 border-t border-cyan-400/20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevSection();
                          }}
                          disabled={currentSection === 0}
                          className={`flex items-center ${
                            currentSection === 0
                              ? "text-cyan-400/50"
                              : "text-cyan-400 hover:text-white"
                          } transition-colors`}
                        >
                          <FaArrowLeft className="mr-2" /> PREV SECTION
                        </button>

                        <span className="text-cyan-300 font-mono">
                          SECTION {currentSection + 1} / {post.sections.length}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextSection();
                          }}
                          disabled={currentSection === post.sections.length - 1}
                          className={`flex items-center ${
                            currentSection === post.sections.length - 1
                              ? "text-cyan-400/50"
                              : "text-cyan-400 hover:text-white"
                          } transition-colors`}
                        >
                          NEXT SECTION <FaArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center px-4 py-2 bg-black/70 border border-cyan-400/30 rounded-sm font-mono text-sm text-cyan-300">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
            ARTICLES: {blogPosts.length} | LATEST_UPDATE:{" "}
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberBlog;
