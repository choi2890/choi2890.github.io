import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Design conferences in 2022",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-1.jpg",
      imgAlt: "Design conferences in 2022",
      description:
        "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
      title: "Best fonts every designer",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-2.jpg",
      imgAlt: "Best fonts every designer",
      description:
        "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      title: "Design digest #80",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-3.jpg",
      imgAlt: "Design digest #80",
      description:
        "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      title: "UI interactions of the week",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-4.jpg",
      imgAlt: "UI interactions of the week",
      description:
        "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      title: "The forgotten art of spacing",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-5.jpg",
      imgAlt: "The forgotten art of spacing",
      description:
        "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Design digest #79",
      category: "Design",
      date: "2022-02-23",
      imgSrc: "./assets/images/blog-6.jpg",
      imgAlt: "Design digest #79",
      description:
        "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    },
  ];

  return (
    <article className="blog active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-fs-1 text-white-2 font-semibold mb-4">Blog</h2>
      </header>
      <section className="blog-posts mb-10">
        <ul className="blog-posts-list grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title} className="blog-post-item">
              <a
                href="#"
                className="block bg-border-gradient-onyx shadow-shadow-4 rounded-xl overflow-hidden"
              >
                <figure className="blog-banner-box w-full h-52 overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </figure>
                <div className="blog-content p-4">
                  <div className="blog-meta flex items-center space-x-2 text-light-gray-70 text-fs-6 mb-2">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot w-1 h-1 bg-light-gray-70 rounded-full"></span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toDateString().slice(4)}
                    </time>
                  </div>
                  <h3 className="blog-item-title text-fs-5 text-white-2 font-medium mb-2 transition-colors duration-300 hover:text-orange-yellow-crayola">
                    {post.title}
                  </h3>
                  <p className="blog-text text-light-gray text-fs-6 font-light leading-6">
                    {post.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
