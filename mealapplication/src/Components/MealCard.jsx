import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CustomContext } from '../Context';
import { bgcolor } from '@mui/system';
import { FormatBold } from '@mui/icons-material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const {meals,loading,handleOpen,text,filteredMeals,searchClicked} = CustomContext()
    const [expanded, setExpanded] = React.useState(false);
    if (loading){
        return(
            <div style={{textAlign:"center "}}>
                    <h2 >Loading....</h2>
            </div>
        )
    }

    if (meals.length < 1){
        return(
            <div style={{textAlign:"center "}}>
                <h2>No data found . Pls try after some time !!!</h2>
            </div>
        )
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // console.log(meals)
    return (
        <div className='align'>

            {( text.length > 0 ? filteredMeals : meals ).map((meal) => {
                const { idMeal, strMeal: title, strMealThumb: image, strArea: cusine, strCategory: category } = meal
                return (
                    <Card sx={{ width: 335 }} key={idMeal} className='card ' onClick={() => handleOpen(idMeal)}>
                        <CardHeader className='header'
                            avatar={
                                <Avatar className='avatar' sx={{ bgcolor: category[0] === "V" ? green[500] : red[500] }} style={{ fontSize: "0.8rem", textAlign: "center", color: 'black',borderRadius:'50px' }} aria-label="recipe">
                                    {category[0] === "V" ? "V" : "NV"}

                                </Avatar>
                            }

                            title=<h2 className='title'>{title}</h2>

                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={image}
                            alt="image"
                        />
                        <div className='content-container'>
                            <CardContent className='content'>
                                <Typography className='typo' variant="body2" color="text.secondary">
                                    Cusine: {cusine}<br></br>
                                    Category: {category}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing className='content1'>
                                <IconButton aria-label="add to favorites" >
                                    <FavoriteIcon className='btn' />
                                </IconButton>
                                <IconButton aria-label="share" >
                                    <ShareIcon className='btn' />
                                </IconButton>

                            </CardActions>
                        </div>

                    </Card>
                )


            })}


        </div>
    );

}
