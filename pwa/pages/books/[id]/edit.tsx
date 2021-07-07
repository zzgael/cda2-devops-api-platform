import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/book/Form";
import { Book } from "../../../types/Book";
import { fetch } from "../../../utils/dataAccess";
import Head from "next/head";

interface Props {
  book: Book;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({ book }) => {
  return (
    <div>
      <div>
        <Head>
          <title>{book && `Edit Book ${book["@id"]}`}</title>
        </Head>
      </div>
      <Form book={book} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const book = await fetch(context.resolvedUrl.replace("/edit", "/"));

  return { 
    props: {
      book
    }
  };
};

export default Page;
