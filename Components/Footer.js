import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div>
        <h1>
          Mondial <span>Food</span>
        </h1>

        <Wrapper>
          <div>
            <p>Subscribe to our newsletter</p>

            <Newsletter>
              <input type="email" placeholder="Your email address" />
              <button className="button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </Newsletter>
          </div>

          <div>
            <h2>Address</h2>
            <p>
              9876 Hacienda Av. <br />
              Lima, La Libertad 123, Perú
            </p>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              +987654321 <br />
              coffee@email.com
            </p>
          </div>

          <div>
            <h2>Office</h2>
            <p>
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
        </Wrapper>

        <WrapperSocial>
          <ul>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
          </ul>

          <span>&#169; <Link href="/moo" passHref>FK Web Agency</Link> . All rigths reserved</span>
        </WrapperSocial>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background-color: var(--black-color);
  padding: 4rem 0 2.5rem;
  margin-top: 3.5rem;

  h1 {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: var(--font-bold);
    color: var(--text-color-light);
    margin-bottom: 2rem;
    span {
      color: var(--first-color);
    }
  }

  & > div:nth-child(1) {
    max-width: 1024px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  & div:nth-child(1) > p {
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 1040px) {
    h1 {
      font-size: var(--h2-font-size);
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  row-gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--text-color);

  h2 {
    color: #fff;
    font-size: var(--h2-font-size);
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  @media screen and (min-width: 1040px) {
    grid-template-columns: repeat(4, max-content);
    column-gap: 4rem;
    padding-bottom: 5.5rem;
  }
`;

const Newsletter = styled.div`
  display: flex;
  column-gap: 0.5rem;

  input {
    border: none;
    outline: none;
    padding: 1.25rem 1rem;
    border-radius: 0.25rem;
    width: 70%;
    color: var(--text-color);
  }

  .button {
    padding: 0.75rem;
    font-size: 2rem;
    border-radius: 0.25rem;
    display: inline-flex;
    background-color: var(--first-color);

    &:hover i {
      transform: rotate(-30deg) translate(0.25rem);
    }

    i {
      transform: rotate(-30deg);
      transition: 0.4s;
    }
  }

  @media screen and (min-width: 576px) {
    width: 350px;
  }
`;

const WrapperSocial = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1.5rem;

  ul {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    font-size: 1.25rem;
    margin-bottom: 2rem;

    a {
      color: #fff;
      transition: 0.4s;
    }
  }

  span{
    font-size: var(--smaller-font-size);

    a{
      color: var(--first-color-alt);
    }
  }

  @media screen and (min-width: 1040px) {
    margin-top: 3rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1040px) {
    ul {
      column-gap: 2rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Footer;
