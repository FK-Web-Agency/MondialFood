import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Section } from './styled';

const Espacialty = () => {
  return (
    <Section id="espacialty">
      <Container>
        <div>
          <h2 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing!
          </h2>

          <div className="button">
            <Link href="#">See more</Link>
          </div>
        </div>

        <Wrap>
          <div>
            <i className="bx bx-chat"></i>

            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              laudantium?
            </p>
          </div>

          <div>
            <i className="bx bx-chat"></i>

            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              laudantium?
            </p>
          </div>

          <div>
            <i className="bx bx-chat"></i>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              laudantium?
            </p>
          </div>
        </Wrap>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  /*=====   h2 {
    position: relative;
    font-size: var(--h1-font-size);
    padding-left: 1.25rem;
    margin-bottom: 2.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
      width: 3px;
      height: 20px;
      background-color: var(--first-color);
    }

    @media screen and (min-width: 1040px) {
      padding-right: 15rem;
      padding-left: 1.75rem;

      &::before {
        height: 28px;
        width: 4px;
        top: 12px;
      }
    }
  }
 =====*/
  .button {
    margin-left: 1.25rem;
  }
`;

const Wrap = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 2.5rem;

  i {
    color: var(--first-color);
    font-size: calc(var(--biggest-font-size) + 2rem);
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 200px);
    column-gap: 3rem;
  }

  @media screen and (min-width: 1040px) {
    grid-template-columns: repeat(3, 250px);
    column-gap: 8rem;

    div:nth-child(1),
    div:nth-child(2) {
      position: relative;

      &::before {
        content: '';
        width: 1px;
        height: 120px;
        background-color: var(--text-color-light);
        position: absolute;
        right: -5rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
  }
`;

export default Espacialty;
