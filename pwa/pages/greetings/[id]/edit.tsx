import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/greeting/Form";
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
          <title>{greeting && `Edit Greeting ${greeting["@id"]}`}</title>
        </Head>
      </div>
      <Form greeting={greeting} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const greeting = await fetch(context.resolvedUrl.replace("/edit", "/"));

  return { 
    props: {
      greeting
    }
  };
};

export default Page;
