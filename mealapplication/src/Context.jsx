import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useContext } from "react";

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppContext = React.createContext();
function AppProvider({ childern }) {

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
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedMeal,setSelectedMeal] = useState({});
    const [text,setText] = useState('');

    const handleOpen = (idMeal) => {
        let meal = meals.find((meal)=> meal.idMeal === idMeal);
        setSelectedMeal(meal);
        // console.log(selectedMeal)
        setOpen(true);
       
    }
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    // console.log(text)
    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios(url)
            if (data.meals) {
                setMeals(data.meals)
            }
            else {
                setMeals([])
            }

        } catch (error) {
            console.log(error.response)
        }
        setLoading(false)
    }
    console.log(meals)
    // console.log({meals})
    useEffect(() => {
        fetchMeals(allMealUrl)
    }, [])


    return (
        <AppContext.Provider value={{ meals, loading ,open,handleOpen,handleClose,selectedMeal,text,handleChange,handleSubmit}}>
            {childern}
        </AppContext.Provider>
    )

}

function CustomContext() {
    return (
        useContext(AppContext)
    )
}
export { AppContext, AppProvider, CustomContext };