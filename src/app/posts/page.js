import PostCard from "@/components/PostCard";

async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="posts-page">
      <h2>Posts</h2>
      <div className="posts">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
