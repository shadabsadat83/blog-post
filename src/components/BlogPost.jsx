import "./BlogPost.css";

function BlogPost() {
  return (
    <article className="blog-post">
      <img
        className="blog-image"
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
        alt="React programming"
      />

      <div className="blog-content">
        <h1 className="blog-title">
          Learn React Components
        </h1>

        <p className="blog-author">
          By Ahmad • Sep 14, 2026
        </p>

        <p className="blog-description">
          Learn the basics of React components and JSX...
        </p>

        <button className="read-more">
          Read More
        </button>
      </div>
    </article>
  );
}

export default BlogPost;