import styled from "styled-components";

export const Tudo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202020;

  .div-titulo {
    display: flex;
    align-items: center;
  }

  .tudo1 {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  h1 {
    color: #fff;
  }
  .opan {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin: 5px;
  }
  .board {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 150px;
    margin: 5px;
  }
  p {
    cursor: pointer;
    width: 98px;
    height: 50px;
    background: #fff;
    color: black;
    border: 1px solid #202020;
  }
  img {
    width: 150px;
    border: 1px solid #202020;
    cursor: pointer;
    height: 150px;
    border-radius: 50%;
  }
  .div-recebe-imgs {
    display: flex;
    width: 80%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    flex-wrap: wrap;
    padding: 10px;
    padding-left: 80px;
    margin: 10px;
    box-sizing: border-box;
  }

  .titulo-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    margin: 5px;
    border-radius: 50%;
  }
  .board-2 {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    height: 150px;
    padding: 5px;
  }
  .div-local-imgs {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 20px;
  }
  .cosmos {
    margin-left: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 50vh;
    background: black;
    position: absolute;
    color: red;
    z-index: 2;
    transform: translateY(-500px);
    /* transition:2s ease; */
    animation: chama 2s ease;
    backdrop-filter: blur(10px);
  }
  @keyframes chama {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-650px);
    }
  }

  button {
    width: 240px;
    height: 41px;
    border-radius: 20px;
    background: #ffff00;
    font-weight: 550;
    border: none;
    margin-top: 20px;
    margin-left: 600px;
    cursor: pointer;
  }
`;

export const WrapperCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  container {
  }
  .container .carousel {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 50px;
    justify-content: center;

    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: #ffff00;
  }
  .board {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    flex-wrap: wrap;
  }
  .board-2 {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
  }
  .board-2 img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  .container .carousel::-webkit-scrollbar {
    display: none;
  }

  .container .carousel .item {
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;

    flex: none;
  }

  .container .carousel .item .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    flex-wrap: wrap;

    object-fit: cover;
  }

  .container .carousel .item .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container .carousel .item .info span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }

  .container .carousel .item .info .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #00a8fb;
  }

  .container .carousel .item .info .oldPrice {
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
  }

  .container .carousel .item .info .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }

  .container .buttons {
    width: 100%;
    text-align: center;
  }
  .container .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .container .buttons button:first-child img {
    transform: rotate(180deg);
  }
  button {
    font-size: 30px;
    color: #ffff00;
  }
`;

export const WrapperSlider = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);

  button {
    font-size: 30px;
    color: #ffff00;
  }

  .container {
    max-width: 75vw;
    max-width: 1100px;
    margin: 0 auto;
  }
  .container .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    border-radius: 20%;
    background: rgba(255, 255, 255, 0.05);
    border: 10px solid rgba(255, 255, 255, 0.05);
  }

  .container .carousel::-webkit-scrollbar {
    display: none;
  }

  .container .carousel .item {
    margin: 10px;
    width: 200px;
    height: 120px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container .carousel .item .image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;

    object-fit: cover;
  }

  .container .carousel .item .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container .carousel .item .info span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }

  .container .carousel .item .info .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #00a8fb;
  }

  .container .carousel .item .info .oldPrice {
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
  }

  .container .carousel .item .info .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }

  .container .buttons {
    width: 100%;
    text-align: center;
  }
  .container .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .container .buttons button:first-child img {
    transform: rotate(180deg);
  }
`;
