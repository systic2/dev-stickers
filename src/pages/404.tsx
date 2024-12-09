import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return <h1>404 not found page!!!</h1>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
