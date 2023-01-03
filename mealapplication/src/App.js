import React from "react";
import Meals from "./Components/Meals";
import RecipeReviewCard from "./Components/MealCard"
import BasicModal from "../src/Components/Modal"
import ButtonAppBar from "../src/Components/Search"
import Favorites from "./Components/Favorites";
function App() {

  return (
    <>
      
        {/* <Meals /> */}
        <ButtonAppBar></ButtonAppBar>
        {/* <Favorites></Favorites> */}
        <RecipeReviewCard />
        <BasicModal></BasicModal>
    </>
  )
}

export default App;