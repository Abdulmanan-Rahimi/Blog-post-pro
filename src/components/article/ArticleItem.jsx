import React from "react";
import Card from "react-bootstrap/Card";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import "./ArticleItem.css";

import img1 from '../../assets/images/1.jpg'

const ArticleItem = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={img1}
      />
      <Card.Body dir="rtl">
        <Card.Title className="py-2">عنوان مقاله اول</Card.Title>
        <Card.Text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Card.Text>
        <span className="read-more">
          <span>ادامه مقاله</span>
          <TiArrowLeftThick size="25px" />
        </span>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : میلاد</span>
        <span>
          {" "}
          <BiTimeFive /> 5 دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
};

export default ArticleItem;
