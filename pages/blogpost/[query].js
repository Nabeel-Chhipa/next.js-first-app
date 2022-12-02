import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { query } = router.query;

  return <p>Post: {query}</p>;
};

export default Post;
