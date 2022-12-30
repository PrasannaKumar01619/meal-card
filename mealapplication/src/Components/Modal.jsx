import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomContext } from '../Context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const { open, handleOpen, handleClose, selectedMeal } = CustomContext()
    const mealArray = Object.entries(selectedMeal)
    const filteredIngredients = mealArray.filter(([k, v]) => { return (v && v.trim() !== "") }).filter(([k, v]) => { return (k.includes("strIngredient")) })
    const filteredMeasures = mealArray.filter(([k, v]) => { return (v && v.trim() !== "") }).filter(([k, v]) => { return (k.includes("strMeasure")) })
    const ingredients = filteredIngredients.map(([k, v]) => v)
    const measures = filteredMeasures.map(([k, v]) => v)
    
    // console.log(ingredients)
    // console.log(measures)
    return (
        <div>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style} className='modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='modalHeader'>
                        <div><b>Ingredients</b></div>
                        
                        <ul>
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <li key={index}>{ingredient} : {measures[index]}</li>
                                )
                            })}
                        </ul>


                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="modalContent">
                       <i >{selectedMeal.strInstructions}</i>
                       

                       
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
