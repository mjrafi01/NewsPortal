import React, { useEffect, useState } from "react";
import { Button, Jumbotron } from "react-bootstrap";

const TopHeadline = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=HGLS3I4p8BkaOm8AfccMlrZIqw0QTt6U"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);
  return (
    <div>
      <p>Top Headline:{articles.length}</p>
    </div>
  );
};

export default TopHeadline;
