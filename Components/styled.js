import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 4.5rem 0 2rem;

  .title {
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

  @media screen and (min-width: 1040px) {
    margin-inline: auto;
  }

  @media screen and (min-width: 767px) {
    padding: 7rem 0 2rem;
  }

  @media screen and (max-width: 320px) {
    margin-inline: 1rem;
  }
`;
