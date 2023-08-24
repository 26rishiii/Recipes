import { styled } from "styled-components";
import { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import Searched from './Searched';


function Search() {
    const [searchinput, setsearchInput] = useState("");
    
    const [searched , setsearched] = useState("false");

    const onInputchange =  (event) => {
      setsearchInput(event.target.value)
    }
    const onSubmit = (input) => {
      setsearched("true");
    }
  if (searched === "true") {
    return(
    <div>
      <Searched input = {searchinput}></Searched> </div>
    )
  }

  else {
  return (
    <FormStyle onSubmit={() => onSubmit(searchinput)}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e) => onInputchange(e)} 
        type="text"
        />
        </div> 
    </FormStyle>
  )
}
}

const FormStyle = styled.form`
margin: 0rem 20rem;
div {
position: relative;
width: 100%;
}
input{
  border: none;
  background: linear-gradient(35deg,#494949,#313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem; 
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 100%;
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%,-50%);
    color: white;
}
`

export default Search
