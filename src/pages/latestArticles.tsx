import React from "react";
import "./../stylesheets/latestArticle.css";
import logo from "./../assets/logo.png";
import Article from "../components/article";

type Props = {};

function LatestArticles({}: Props) {
  return (
    <main className="">
      <h3 className="section-heading">Latest Articles</h3>
      <section className="wrapper-articles">
        <Article />
        <Article />
        <Article />
      </section>
    </main>
  );    
}

export default LatestArticles;
