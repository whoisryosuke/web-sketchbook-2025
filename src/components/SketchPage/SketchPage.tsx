import Head from "next/head";
import React, { PropsWithChildren } from "react";

type Props = { title: string };

const SketchPage = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <title>{title} - Ryo's Web Sketchbook</title>
      </Head>
      {children}
    </div>
  );
};

export default SketchPage;
