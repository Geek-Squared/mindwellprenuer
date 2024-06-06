"use client";
import { useEffect, useState } from "react";
// import { useFetchPosts } from "../customHooks/queries/post";
import "./styles.scss";
// import Link from "next/link";

export default function Page() {
  // const { data, isLoading, isError, error } = useFetchPosts();
  const [posts, setPosts] = useState([]);

  //   if (isLoading) {
  //     return <div>Loading...</div>
  //   }

  // useEffect(() => {
  //   // if (isError) {
  //   //     console.error(error)
  //   // }
  //   setPosts(data);
  // }, [data]);

  console.log("post", posts);

  return (
    <ul>
      {posts?.map((post: any) => (
        <li key={post?.id}>
          {/* <Link href={`/blog/${post?.id}`}>{post?.title}</Link> */}
        </li>
        // <div key={post?.id} className="blog-container">
        //   <img src={post?.layout[0].media.url} alt="image" />
        //   <h1>{post?.title}</h1>
        //   <h1>{post?.populatedAuthors[0]?.name}</h1>
        // </div>
      ))}
    </ul>
  );
}
