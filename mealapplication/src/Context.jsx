import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useContext } from "react";

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppContext = React.createContext();
function AppProvider({childern}){

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try {
    //             const response = await fetch('https://randomuser.me/api/')
    //             const data = await response.json()
    //             console.log(response);
    //             console.log(typeof(response));
    //             console.log(data);
    //             console.log(typeof(data));
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // },[])
    const [meals,setMeals] = useState([]);
    const fetchMeals = async (url) => {
        try {
            const {data} = await axios(url)
            setMeals(data.meals)
           
        } catch (error) {
            console.log(error.response)
        }
    }
    // console.log(meals)
    // console.log({meals})
    useEffect(() => {
        fetchMeals(allMealUrl)
    },[])
    return(
        <AppContext.Provider value={meals}>
            {childern}
        </AppContext.Provider>
    )

}

function CustomContext(){
    return(
        useContext(AppContext)
    )
}
export {AppContext,AppProvider,CustomContext};