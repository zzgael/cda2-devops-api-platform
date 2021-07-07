import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/greeting/Show";
import { Greeting } from "../../../types/Greeting";
import { fetch } from "../../../utils/dataAccess";
import Head from "next/head";

interface Props {
  greeting: Greeting;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  greeting,
}) => {
  return (
    <div>
      <div>
        <Head>
          <title>{`Show Greeting ${greeting["@id"]}`}</title>
        </Head>
      </div>
      <Show greeting={greeting} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const greeting = await fetch(context.resolvedUrl);

  return { 
    props : {
      greeting
    } 
  };
};

export default Page;
