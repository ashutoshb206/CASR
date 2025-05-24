import React from 'react';

function Blog() {
  const posts = [
    {
      title: 'Understanding Vastu for Modern Homes',
      preview: 'Learn how to apply ancient Vastu principles in contemporary living spaces...',
      date: 'June 15, 2023'
    },
    {
      title: 'The Impact of Planetary Positions on Career',
      preview: 'Discover how celestial movements can influence your professional life...',
      date: 'June 10, 2023'
    },
    {
      title: 'Balancing Energy in Your Workspace',
      preview: 'Tips for creating a harmonious and productive office environment...',
      date: 'June 5, 2023'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.preview}</p>
              <div className="flex justify-between items-center">
                <span className="text-gold text-sm">{post.date}</span>
                <button className="text-gold hover:text-gold/80 font-medium">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;