import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/book/Show";
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
          <title>{`Show Book ${book["@id"]}`}</title>
        </Head>
      </div>
      <Show book={book} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const book = await fetch(context.resolvedUrl);

  return { 
    props : {
      book
    } 
  };
};

export default Page;
