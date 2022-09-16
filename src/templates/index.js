import React, { useState, useRef } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

import Loading from "../components/Loading";
import Board from "../components/Board";
import Card from "../components/Card";
import { Tudo, WrapperSlider, WrapperCard } from "./styles";

import ImageData from "../Data/images";
import titles from "../Data/desciptionCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PageConquer() {
  const [luis, setLuis] = useState(false);
  const [numberOfImages, setNumberOfImage] = useState(0);
  const carousel = useRef(null);
  const carousel1 = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleLeftClick1 = (e) => {
    e.preventDefault();
    carousel1.current.scrollLeft -= carousel1.current.offsetWidth;
  };

  const handleRightClick1 = (e) => {
    e.preventDefault();

    carousel1.current.scrollLeft += carousel1.current.offsetWidth;
  };

  const totalImages = ImageData.length;
  // console.log(numberOfImages);

  return (
    <>
      <Tudo>
        <div className="tudo">
          <main className="tudo1">
            <div className="div-titulo">
              <Loading />
              <h1>COSMOS LAND</h1>
            </div>

            <div className="div-local-imgs"></div>
          </main>
        </div>
      </Tudo>
      <WrapperCard>
        <div className="container">
          <div className="logo"></div>
          <div className="carousel" ref={carousel1}>
            {titles.map((item, id) => {
              return (
                <div key={id}>
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="board">
                    <Board id="board-2" className="board-2"></Board>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </WrapperCard>
      {numberOfImages != totalImages.length && (
        <WrapperSlider>
          <div className="container">
            <div className="logo"></div>
            <div className="carousel" ref={carousel}>
              {ImageData.map((item, id) => {
                return (
                  <Board id="board-2" className="board-2" key={id}>
                    <Card className="item" dragrable="true">
                      <div className="image">
                        <img
                          id={item.id}
                          src={item.image}
                          alt={id}
                          onClick={() => setNumberOfImage((state) => state + 1)}
                        />
                      </div>
                      <div className="info"></div>
                    </Card>
                  </Board>
                );
              })}
            </div>
            <div className="buttons">
              <button onClick={handleLeftClick}>
                <HiArrowNarrowLeft />
              </button>
              <button onClick={handleRightClick}>
                <HiArrowNarrowRight />
              </button>
            </div>
          </div>
        </WrapperSlider>
      )}
    </>
  );
}

export default PageConquer;
