import Image from "next/image"
import "./styles.scss"

export default function Page() {
  return (
    <div className="blog-page">
    <div className="main-content">
    <Image 
     src="/hero.jpeg"
     alt="Blog Hero"
     width={800}
     height={500}
    />
      <h1>Blog Page</h1>
      <p>This is a sample blog page.</p>
    </div>
    <div className="sidebar">
      <h2 className="sidebar-title">Related Posts</h2>
      <ul>
        <li className="post-list-item">
          <a href="#">Healthy Lifestyle</a>
        </li>
        <li className="post-list-item">
          <a href="#">Post 2</a>
        </li>
        <li className="post-list-item">
          <a href="#">Post 3</a>
        </li>
      </ul>
    </div>
  </div>
  );
}
