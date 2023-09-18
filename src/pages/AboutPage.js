import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main> 
    <PageHero title=' about' />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="great quality" />
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className="underline"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat cum, earum temporibus recusandae dolore libero eius architecto autem culpa explicabo ea amet voluptatem natus cumque soluta ut quod nemo at dolorem ducimus rerum impedit qui. Numquam eveniet sapiente accusantium, amet nulla aperiam magnam obcaecati officiis error nobis architecto porro.</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
