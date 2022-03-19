import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';
import photo from './product-img.png';

const Product = () => {
  useEffect(() => {
    let mixerProducts = mixitup('.content', {
      selectors: {
        target: '.card',
      },
      animation: {
        duration: 300,
      },
    });

    /* Default filter products */
    mixerProducts.filter('.bladi');
  }, []);

  return (
    <Section id="product">
      <Container>
        <h2 className="title">Choose our delicious and best products</h2>

        <Filter>
          <li className="active" data-filter=".bladi">
            <h3>New bladi</h3>
            <span>3 products</span>
          </li>

          <li data-filter=".findus">
            <h3>Hot findus</h3>
            <span>4 products</span>
          </li>

          <li data-filter=".cake">
            <h3>Cakes And bladi</h3>
            <span>4 products</span>
          </li>
        </Filter>

        <Content className="content">
          <Article className="mix card bladi">
            <div>
              <Image src={photo} alt="product" />
            </div>

            <div>
              <h2>5€</h2>
              <h3>Brands</h3>

              <i>ref:1352580986</i>
            </div>
          </Article>
          <Article className="mix card findus">
            <div>
              <Image src={photo} alt="product" />
            </div>

            <div>
              <h2>5€</h2>
              <h3>Brands</h3>

              <i>ref:1352580986</i>
            </div>
          </Article>
          <Article className="mix card findus">
            <div>
              <Image src={photo} alt="product" />
            </div>

            <div>
              <h2>5€</h2>
              <h3>Brands</h3>

              <i>ref:1352580986</i>
            </div>
          </Article>
          <Article className="mix card bladi">
            <div>
              <Image src={photo} alt="product" />
            </div>

            <div>
              <h2>5€</h2>
              <h3>Brands</h3>

              <i>ref:1352580986</i>
            </div>
          </Article>
          <Article className="mix card bladi">
            <div>
              <Image src={photo} alt="product" />
            </div>

            <div>
              <h2>5€</h2>
              <h3>Brands</h3>

              <i>ref:1352580986</i>
            </div>
          </Article>
        </Content>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 4.5rem 0 2rem;

  @media screen and (min-width: 767px) {
    padding: 7rem 0 2rem;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  & > h2 {
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

  @media screen and (max-width: 320px) {
    margin-inline: 1rem;
  }

  @media screen and (min-width: 1040px) {
    margin-inline: auto;
  }
`;

const Filter = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 2rem;
  margin-bottom: 3.5rem;

  li {
    cursor: pointer;
  }

  li:nth-child(1),
  li:nth-child(2) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 40px;
      background-color: var(--text-color-light);
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media screen and (min-width: 1040px) {
    margin: 4rem 0 5.5rem;
    column-gap: 4rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 200px));
  gap: 1.5rem;
  justify-content: center;
`;

const Article = styled.article`
  background-color: var(--container-color);
  border-radius: 0.5rem;

  &:hover img {
    transform: translateY(-0.25rem);
  }

  img {
    width: 150px;
    transition: 0.4s;
  }

  div:first-child {
    background-color: var(--card-color);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    padding: 0.25rem 0;
  }

  div:last-child {
    padding: 1rem 0 1.25rem 1rem;
  }

  h2 {
    font-size: var(--h2-font-size);
  }

  h3 {
    font-size: var(--normal-font-size);
  }

  i {
    font-size: var(--smaller-font-size);
    color: var(--first-color-alt);
  }

  @media screen and (min-width: 1040px) {
    border-radius: 0.75rem;

    img {
      width: 200px;
    }

    div:first-child {
      padding: 2rem 0;
      border-radius: 0.75rem 0.75rem 0 0;
    }

    div:last-child {
      padding: 1rem 0 1.5rem 1.5rem;
    }
  }
`;

export default Product;
