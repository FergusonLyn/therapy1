// pages/blog.js

import DashboardHeader from '@/app/components/DashboardHeader';
import Image from 'next/image';

const BlogPage = () => {
  // Sample blog posts related to mental health
  const blogPosts = [
    {
      id: 1,
      title: 'Managing Anxiety During Uncertain Times',
      excerpt: 'Discover practical tips and techniques to manage anxiety effectively during challenging and uncertain times. Learn to cope with stress and maintain your mental well-being.',
      image: '/anxiety.jpg', 
    },
    {
      id: 2,
      title: 'The Importance of Self-Care for Mental Health',
      excerpt: 'Self-care is crucial for maintaining good mental health. Explore various self-care practices that can help you reduce stress, improve your mood, and enhance your overall well-being.',
      image: '/depression.png', 
    },
    {
      id: 3,
      title: 'Understanding and Overcoming Depression',
      excerpt: 'Gain insights into depression, its symptoms, and effective strategies to overcome it. This blog provides guidance on seeking help, managing symptoms, and improving your mental health.',
      image: '/anger.png', 
    },
    {
      id: 4,
      title: 'The Importance of Self-Care for Mental Health',
      excerpt: 'Self-care is crucial for maintaining good mental health. Explore various self-care practices that can help you reduce stress, improve your mood, and enhance your overall well-being.',
      image: '/griefs.png', 
    },
    {
      id: 5,
      title: 'Understanding and Overcoming Depression',
      excerpt: 'Gain insights into depression, its symptoms, and effective strategies to overcome it. This blog provides guidance on seeking help, managing symptoms, and improving your mental health.',
      image: '/depression.jpg', 
    }
  ];

  return (
    <> 
    <DashboardHeader />
    <div className="min-h-screen m-2 p-4">
      <h1 className="text-3xl font-bold text-center mb-10">Mental Health Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.id}`} // Assuming you have dynamic routing for individual blog posts
                className="text-blue-600 hover:text-blue-800 mt-4 block"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default BlogPage;
