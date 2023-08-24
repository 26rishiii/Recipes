import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
  },[]);

  const getPopular =  async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=bd497b8c633449d8b2c750474b6e2d89&number=8`);
    const data = await api.json();
    console.log(data.recipes);
    setPopular(data.recipes);
  };


  return (
    <div>
      <h2>Popular Picks</h2>
      <Splide 
      options={{
        perPage: 3,
        drag: "free",
        gap: "5rem",
      }}>
      {popular.map((recipe) => (
          <SplideSlide key = {recipe.id}>
          <section>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </section>
          </SplideSlide>
      ))}
      </Splide>
    </div>
  )
}

const wrapper = styled.div`
  margin 4rem 0rem;
`;
const section = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    height: 40%;
    font-weight: 600;
    display: flex;
    justify-content; center;
    align-items: center;
  }
`;

export default Popular