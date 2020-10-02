import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/Layout/layout";
import Date from "../../components/Date";

export default function Post({ data }) {
  return (
    <Layout>
      <h1>{data.title}</h1>
      <Date dateString={data.date} />
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await getSortedPostsData();

  const availableIds = data.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths: availableIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id: post_id } = params;
  const data = await getSortedPostsData();

  const selectedPost = data.find(({ id }) => id === post_id);

  return {
    props: {
      data: selectedPost,
    },
  };
}
