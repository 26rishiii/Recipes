import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';


function Searched({input}) {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params =useParams();
    const getSearched =async (name) => {
        const data =await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=5c00e9e84f30441db3204c762ca79e75?ingredients=${input}&number=2`);
        const recipes = await data.json();
        console.log("recipes", recipes);
        setSearchedRecipes(recipes.results);
    }
   useEffect((input) => {
    getSearched(input)
  },[]);

  return (
    <Grid>
        {console.log("searchedrecipes", searchedRecipes)}
        {searchedRecipes?.map((item) => {
           return (
            <Card key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </Card>
           ); 
        })}
    </Grid>
  ) 
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
  border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
    
    
    `;

export default Searched;