import React, { useState, useEffect } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [recipe, setRecipe] = useState("");
  const [recipeArr, setRecipeArr] = useState([]);

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      async function getData() {
        console.log("effect");
        let response = await axios.get(
          `https://api.edamam.com/search?q=${recipe}&app_id=134dd4af&app_key=b2b8b9bbf0409f9239438c1effe312db`
        );
        console.log(response.data.hits);
        setRecipeArr(response.data.hits);
      }

      getData();
    }, 300);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [recipe]);

  return (
    <>
      <Navbar recipe={recipe} setRecipe={setRecipe} />
      <div className="container">
        {recipeArr.length ? (
          recipeArr.map((recipeObj, index) => {
            return (
              <Recipe
                key={index}
                imgSrc={recipeObj.recipe.image}
                name={recipeObj.recipe.label}
                url={recipeObj.recipe.url}
                ingredients={recipeObj.recipe.ingredients}
              />
            );
          })
        ) : (
          <img className="center-img" src="./hamburger.svg" alt="img" />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
