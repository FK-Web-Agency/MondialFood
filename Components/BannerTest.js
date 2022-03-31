import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Bannertest from './Bannertest';
import photo from '/public/banner/3D-Samossa-Legumes.png';
import photo2 from '/public/banner/El Msamen 20+1.png';
import photo3 from '/public/banner/El Msamen Nature x4.png';
const Banner = () => {
  return (
    <Section id="banner">
      <Container>
        <Content>
          <h1>
            Choose Your Favorite Brands Food And Enjoy<span>.</span>
          </h1>
          <p>Buy the best and delicious coffees.</p>

          <div>
            <Data>
              <h2>20K</h2>
              <h3>Testimonials</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, velit!
              </p>
            </Data>

            <Data>
              <h2>20</h2>
              <h3>Exclusif brands</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, velit!
              </p>
            </Data>
          </div>
        </Content>
      </Container>

      <Bannertest/>
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  gap: 0;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    position: relative;
  }

  /*=====   @media screen and (min-width: 1700px) {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  } =====*/
`;

const Container = styled.div`
  padding: 7rem 0 2.5rem;
  background: linear-gradient(
    160deg,
    hsla(206, 5%, 24%, 1) -4%,
    hsla(206, 12%, 12%, 1) 46%
  );

  h1 {
    color: #fff;
    font-size: var(--biggest-font-size);
    margin-bottom: 1.5rem;

    & > span {
      color: var(--first-color);
    }
  }

  p {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 10rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 3rem;
    }
  }
`;

const Content = styled.div`
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  & > div {
    border-top: 1px solid var(--text-color);
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
`;

const Data = styled.div`
  h2 {
    color: var(--first-color);
    font-size: var(--h1-font-size);
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #fff;
    font-size: var(--h3-font-size);
    margin-bottom: 0.5rem;
  }
`;

const WrapImage = styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/2;
  background-color: #724532;

  @media screen and (min-width: 767px) {
    height: auto;
    grid-column: 2/-1;
  }
`;
export default Banner;
