import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout/layout";

import { getSortedPostsData } from "../lib/posts";

import styled from "./styles.index.module.scss";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>My Blog</h1>
      {allPostsData.map(({ id, date, title }) => (
        <section key={id} className={styled.postSection}>
          <h1>{title}</h1>
          <p>{id}</p>
          <span>{date}</span>
          <Link href={`/posts/${id}`}>
            <a>Read</a>
          </Link>
        </section>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
