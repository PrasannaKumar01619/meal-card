import React from "react";
import { CustomContext } from "../Context";
import Avatar from '@mui/material/Avatar';
import { RxCross2 } from "react-icons/rx"
import Tooltip from '@mui/material/Tooltip';
const Favorites = () => {
    const { removeFromFavorites, favorites, showFavorites, favoritesCloseClicked, handleOpen } = CustomContext();
    {
        return (
            showFavorites &&
            <div className="favorite-container">

                <div className="favourites-img">
                    <div>
                        <h3 className="fav-title">Favourites</h3>
                    </div>
                    <div className="favourites-img" >
                        {favorites.map((favorite) => {
                            return (
                                <div className="avatDiv">
                                    {/* <div className="favourite-img">
                    <img src={favorite.strMealThumb}></img>
                </div> */}
                                    <Tooltip title={favorite.strMeal}>
                                        <Avatar src={favorite.strMealThumb} onClick={() => handleOpen(favorite.idMeal)} className="avat" variant="solid" style={{ fontSize: "0.8rem", textAlign: "center", color: 'black', borderRadius: '50px' }}>
                                        </Avatar>
                                    </Tooltip>

                                    <RxCross2 className="favimgClose" onClick={() => removeFromFavorites(favorite.idMeal)}></RxCross2>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <RxCross2 className="favClose" onClick={favoritesCloseClicked}></RxCross2>
            </div>)
    }

}

export default Favorites;