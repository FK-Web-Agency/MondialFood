import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';
import img1 from '/public/banner/3D-Samossa-Legumes.png';
import img2 from '/public/banner/El Msamen 20+1.png';
import img3 from '/public/banner/Meloui Nature x5.png';
import logo from '/public/banner/logo-banner.png';
const Banner = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 400,
      //  reset: true
    });

    sr.reveal('#logo', {delay: 2600})
    sr.reveal('#img1', { delay: 2650, origin: 'bottom' });
    sr.reveal('#img2', { delay: 3800, origin: 'bottom' });
    sr.reveal('#img3', { delay: 4800, origin: 'bottom' });
  }, []);

  return (
    <Container id="banner">
      <div>

      <Image id="logo" src={logo} alt="" layout="responsive" />
      </div>

      <section>
        <div>
          <Image id="img1" src={img3} alt="" />
        </div>
        <div>
          <Image id="img2" src={img1} alt="" />
        </div>
        <div>
          <Image id="img3" src={img2} alt="" />
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  background-color: #724532;
  & > div {
    padding: 3rem 0 2rem 0;
    height: 40;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: calc(100% / 3);
    }
    #img1 {
      transform: scale(1.6);
    }
  }
`;

export default Banner;
