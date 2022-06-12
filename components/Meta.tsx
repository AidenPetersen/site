/** @jsx h */
import { h, Head } from "$fresh/runtime.ts";

interface HeaderProps {
  title?: string;
}

const defaultProps: HeaderProps = {
  title: "Aiden Petersen",
};

const Meta = (props: HeaderProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="stylesheet" href="/style.css" />
      <meta property="og:title" content={props.title} />
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
