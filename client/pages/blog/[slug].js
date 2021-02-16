import { data } from "autoprefixer";
import client from "../../client";

const Post = (props) => {

  return (
    <article>
      <h1 className='overflow-hidden' style={{fontSize: '48rem'}}>{props.data.title}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const allPosts = await client.fetch(`
        *[_type == "post"]
    `);

  const paths = allPosts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await client.fetch(
    `
          *[_type == "post" && slug.current == $slug][0]
      `,
    { slug }
  );


  return {
    props: {
      data,
    },
  };
}

export default Post;
