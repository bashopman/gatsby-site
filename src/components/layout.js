import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="p-20">
            <Link to="/">
                <h1 className="font-bold text-xl">{title}</h1>
            </Link>
        {children}
      </div>
    </>
  );
};