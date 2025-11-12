import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import ArticleItem from "../../components/article/ArticleItem";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <div dir="rtl">
      <MyNavbar />

      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-4">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
