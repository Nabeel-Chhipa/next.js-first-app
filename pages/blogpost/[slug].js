import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router.query)
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
};

export default Post;
