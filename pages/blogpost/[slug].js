import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;

  return (
    <>
      <style jsx>
        {`
          .center {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-top: 30px !important;
            max-width: 50%;
            margin: auto;
          }

          h3 {
            margin: 0px;
          }

          .divider {
            width: 50%;
          }
        `}
      </style>

      <div className="center">
        <h3>{slug}</h3>
        <hr className="divider" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis ducimus veniam aliquid eaque nam hic nobis a option</p>
      </div>
    </>
  );
};

export default Post;
