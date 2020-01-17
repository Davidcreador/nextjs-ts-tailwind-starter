import * as React from "react";
import Link from "next/link";
import { Layout, Card } from "../components";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="font-display">Hello Next.js 👋</h1>
      <Card />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
