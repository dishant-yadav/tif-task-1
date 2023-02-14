import React from "react";
import "./../stylesheets/article.css";
import image from "./../assets/about.png";

type Props = {};

function Article({}: Props) {
  return (
    <div className="wrapper-article">
      <img src={image} alt="image" id="img" />
      <h3 className="dish-title">Grilled Tomatoes at Home</h3>
      <p className="dist-desc">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard...
      </p>
      <button className="read-more-btn-dish">Read More</button>
    </div>
  );
}

export default Article;
