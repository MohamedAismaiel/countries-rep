import Head from "next/head";

const X = (props) => {
  return (
    <div>
      <Head>
        <title>Next app</title>
      </Head>
      {props.children}
    </div>
  );
};

export default X;
