import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [sticky, setSticky] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleWidth);

    const headerObserver = new IntersectionObserver(handleSticky, {
      root: null,
      threshold: 0.9,
    });

    headerObserver.observe(document.querySelector('#banner'));

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [sticky]);

  // Handle Function Toggle
  const handleWidth = () => setWidth(window.innerWidth);
  const handleToggle = () => setToggle(!toggle);
  // Handle Observer
  function handleSticky(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) setSticky(true);
    else setSticky(false);
  }

  return (
    <Container sticky={sticky}>
      <nav>
        <a href="#" passHref>
          Mondial <span>Food</span>
        </a>

        <Menu toggle={toggle} id="menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="#home">Home</Link>
            </li>
            <li className="nav__item">
              <Link href="#products">Products</Link>
            </li>
            <li className="nav__item">
              <Link href="#premium">Premium</Link>
            </li>
            <li className="nav__item">
              <Link href="#blog">Blog</Link>
            </li>
          </ul>
        </Menu>
        {width < 767 && (
          <Toggle onClick={handleToggle}>
            <i className={toggle ? 'bx bx-x' : 'bx bx-grid-alt'}></i>
          </Toggle>
        )}
      </nav>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  ${({ sticky }) =>
    sticky &&
    `
  background-color: var(--body-color);
  box-shadow: 0 1px 4px hsla(0, 4%, 15%, .1);

  nav>a, .bx-grid-alt{
    color: var(--title-color) !important;
  }
`}

  nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.5rem;

    // Logo
    & > a {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      font-weight: var(--font-bold);
      color: var(--text-color-light);

      span {
        color: var(--first-color);
      }
    }

    @media screen and (min-width: 767px) {
      height: calc(var(--header-height) + 1.5rem);
      justify-content: space-between;

      padding-inline: 2.5rem;
    }
  }
`;

const Menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 3rem;
    padding-top: 9rem;

    a {
      text-transform: uppercase;
      // color: #fdd974;
      color: var(--text-color-light);
      font-size: var(--h2-font-size);
      transition: 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: var(--black-color);
    top: 0;
    right: ${({ toggle }) => (toggle ? css`0` : css`-100%`)};
    width: 100%;
    height: 100%;
    transition: 0.3s;
  }

  @media screen and (min-width: 767px) {
    ul {
      padding-top: 0;
      flex-direction: row;
      column-gap: 4rem;

      a {
        position: relative;
        font-size: var(--normal-font-size);
        text-transform: initial;

        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 12px;
          background-color: var(--text-color-light);
          transform: translateX(1.25rem);
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }
    }
  }
`;

const Toggle = styled.div`
  display: inline-flex;
  font-size: 1.35rem;
  color: var(--text-color-light);
  cursor: pointer;
  z-index: var(--z-tooltip);
`;

export default Header;
