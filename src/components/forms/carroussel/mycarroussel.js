import { Image } from "semantic-ui-react";

import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image className="doc" src={require("./doc1.jpg")} />
          </div>
          <div>
            <Image className="doc" src={require("./doc2.jpg")} />
          </div>
          <div>
            <Image className="doc" src={require("./doc3.jpg")} />
          </div>
          <div>
            <Image className="doc" src={require("./doc4.jpg")} />
          </div>
          <div>
            <Image className="doc" src={require("./doc5.png")} />
          </div>
        </Slider>
      </div>
    );
  }
}

