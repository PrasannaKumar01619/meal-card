import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import {CustomContext} from "../Context"
function Meals(){
    const meals = CustomContext()
    // console.log(meals)
    
    
    return(
        <div>
            {meals.map((meal) => {
                const mealArray = Object.entries(meal)
                const filteredIngredient = mealArray.filter(([k,v]) => {return(v && v.trim() !== "")})
                .filter(([k,v]) => {
                    return (k.includes("strIngredient"))
                }) 
                
                const filteredMeasures = mealArray.filter(([k,v]) => {return(k.includes("strMeasure"))})
                .filter(([k,v]) => {
                    return (v && v.trim() !== '')
                })
                
                const ingredient  = filteredIngredient.map(([k,v]) => {
                    return (v)
                })
               
                const measure  = filteredMeasures.map(([k,v]) => {
                    return (v)
                })

               
                console.log("one",ingredient)
                console.log("two",measure)
                return(
                    <div key={meal.idMeal}>
                     <h2 >{meal.strMeal}</h2>
                    <ul>
                        {ingredient.map((item,index) => {
                            return (
                                <li key={index}>{item} : {measure[index]}</li>
                            )
                        })}
                    </ul>
                    </div>
                    )
               
            })}
        </div>
     
    )
}

export default Meals;