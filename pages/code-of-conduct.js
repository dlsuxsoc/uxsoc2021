import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import SEO from "./../components/seo";
import ContentfulApi from "./api/utils/contentfulApi";

const CODE_OF_CONDUCT_ID = "5NDFCWJ0CpMppM6vMLHW8Y";

const Conduct = (props) => {
  // console.log(title, content);
  return (
    <Layout active={0}>
      <SEO title="Code of Conduct" />
      <div className="container mx-auto">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-center" {...props} />
            ),
            h3: ({ node, ...props }) => <h3 className="text-gray" {...props} />,
            li: ({ node, ...props }) => <li className="list-disc" {...props} />,
          }}
        >
          {props.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await ContentfulApi.getDocument(CODE_OF_CONDUCT_ID);
  const { title, content } = data.documents;
  return {
    props: {
      title,
      content,
    },
  };
}

export default Conduct;
