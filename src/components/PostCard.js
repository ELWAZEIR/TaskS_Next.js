import Link from "next/link";

function PostCard({ title, body, id }) {
  return (
    <div className="post">
      <h3>Post No:{id}</h3>
      <h5>{title}</h5>
      {/* <p>{body}</p> */}
      <Link href={`/posts/${id}`}>Read More</Link>
    </div>
  );
}

export default PostCard;
