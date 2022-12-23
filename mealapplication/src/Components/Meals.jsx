import React from "react";
import { AppContext } from "../Context";
import { useContext } from "react";
import {CustomContext} from "../Context"
function Meals(){
    const meals = CustomContext()
    console.log(meals)
    
    
    return(
        <div>
            {meals.map((meal) => {
                const mealArray = Object.entries(meal)
                const filteredIngredient = mealArray.filter(([k,v]) => {
                    return(v !== "")
                }).filter(([k,v]) => {
                    return (k.includes("strIngredient"))
                }) 
                
                const filteredMeasures = mealArray.filter(([k,v]) => {return(k.includes("strMeasure"))})
                .filter(([k,v]) => {
                    return (v && v.trim() != '')
                })
                
                
                {/* .map(([k,v]) => {
                    return(v)
                }) */}
                console.log("one",filteredIngredient)
                console.log("two",filteredMeasures)
                return(
                    <div key={meal.idMeal}>
                     <h2 >{meal.strMeal}</h2>
                     {filteredIngredient.map(([k,v]) => {
                        filteredMeasures.forEach(([k1,v1]) => {
                            return (
                            <ul key={k}>
                                <li>{v}</li>
                            </ul>
                        )
                        })
                        
                     })} 
                    
                    </div>
                    )
                {/* return(filteredIngredient) */}
            })}
        </div>
     
    )
}

export default Meals;