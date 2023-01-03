import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useContext } from "react";
import { json } from "body-parser";

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
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
    const [selectedMeal, setSelectedMeal] = useState({});
    const [text, setText] = useState([]);
    const [autoText,setAutotext] = useState("");
    const [x,setX] = useState("");
    const [textSelected,setTextSelected] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
    const [showFavorites,setShowFavorites] = useState(false);

    // var filteredMeals1 = meals.filter((m) => {
    //     return (m.strMeal.toLowerCase().trim().startsWith(text))
    // })
    var filteredMeals1 = meals.filter((m) => {
        return (m.strMeal)
    })
    const filteredMeals = meals.filter((m) => {
        return ( (text.includes(m.strMeal)))
    })

    
    // var filteredMeals = meals.filter((m) => {
    //     if(text.length > 1){
    //         return ( (text.includes(m.strMeal)))
    //     }else{
    //         return (m.strMeal.toLowerCase().trim().includes(text))
    //     }
        
    // })
    const favoritesClicked = () => {
        setShowFavorites(true)
    }
    const favoritesCloseClicked = () => {
        setShowFavorites(false)
    }
    const addToFavorites = (idMeal) => {
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        if (alreadyFavorite) return
        const meal = meals.find((meal) => meal.idMeal === idMeal)
        const updatedFavorites = [...favorites,meal]
        setFavorites(updatedFavorites)
        localStorage.setItem("favorites",JSON.stringify(updatedFavorites))
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((favorite) => favorite.idMeal !== idMeal)
        setFavorites(updatedFavorites)
        localStorage.setItem("favorites",JSON.stringify(updatedFavorites))
    }
    const handleOpen = (idMeal) => {
        let meal = meals.find((meal) => meal.idMeal === idMeal);
        setSelectedMeal(meal);
        // console.log(selectedMeal)
        setOpen(true);

    }
    const handleClose = () => setOpen(false);

    const handleChange = (event,value) => {
        // setText((e.target.value).split(/[,-:]+/))
        // setAutotext(e.target.value)
        // if(e.target.value){
        // setTextSelected(true)
        // }else{
        //     setTextSelected(false)
        // }
        // console.log(value)
        const textInput = value.map((v) => v.strMeal)
        setText(textInput)
        
        console.log(textInput)
        
        
    }

    
    const handleSubmit = (event) => {
        event.preventDefault()

        setSearchClicked(true)
        // console.log('clicked')
        // if (searchClicked === true){
        //     setInput(filteredMeals)
        // }

    }

    useEffect(() => {
        // if(text.map((x) => x="")){
        // setTextSelected(false)
        // }
      
        setSearchClicked(false)
        // if (text.length === 0){
        //     setSearchClicked(false)
        // }
        
        // if(text.length>0){
        //     setSuggestions(filteredMeals)
        // }else{
        //     setSuggestions([])
        // }
        
    }, [text])
    console.log(searchClicked)
    console.log(filteredMeals1,'fm')
    // console.log(textSelected)
    console.log(text,"text")
    // console.log(filteredMeals1)
    // console.log(textSelected)
    // console.log(text.toLowerCase())
    // console.log(suggestions, 'sugg')
    
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
    // console.log(meals)
    // console.log({meals})
    useEffect(() => {
        fetchMeals(allMealUrl)
    }, [])

    
    return (
        <AppContext.Provider value={{favoritesCloseClicked,showFavorites,favoritesClicked,favorites,removeFromFavorites,addToFavorites,autoText,textSelected,filteredMeals1, meals, loading, open, handleOpen, handleClose, selectedMeal, text, handleChange, filteredMeals, searchClicked,handleSubmit }}>
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