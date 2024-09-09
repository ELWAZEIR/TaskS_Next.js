async function Post({ params }) {
  const { postId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();
  return (
    <div>
      <h1>Post ID {post.id}</h1>
      <h3>Single Post</h3>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
