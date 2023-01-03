import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { deepPurple, red, purple, amber, indigo } from '@mui/material/colors';
import { CustomContext } from '../Context';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ImportantDevices } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import Meals from './Meals';
import Favorites from './Favorites';


const Root = styled('div')(
    ({ theme }) => `
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
    font-size: 14px;
  `,
);

// const Label = styled('label')`
//     padding: 0 0 4px;
//     line-height: 2.5;
//     display: block;
//   `;

const InputWrapper = styled('div')(
    ({ theme }) => `
    max-width: 300px;
    min-width: 150px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : indigo[500]};
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : indigo[600]};
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 1px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : indigo[900]};
      
    }
  
    // &.focused {
    //   // border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : 'red'};
    //   // box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    //   border: none;
    // }
  
    & input {
      background-color: ${theme.palette.mode === 'dark' ? '#141414' : indigo[600]};
      color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'white'
        };
      height: 32px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
      
    }

    & input:hover{
        background-color: ${theme.palette.mode === 'dark' ? '#141414' : indigo[900]};
    }
  `,
);

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'grey'
        };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 20px;
      color:red;
      cursor: pointer;
      padding: 4px;
    }
  `,
);

const Listbox = styled('ul')(
    ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    top: 50px;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : 'beige'};
    color: black;
    fontFamily: "Georgia, 'Times New Roman', Times, serif";
    font-weight: 900;
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
);

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[500]),
    marginRight: '10px',
    marginBottom: '8px',
    marginTop: '8px',
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    backgroundColor: indigo[500],
    '&:hover': {
        backgroundColor: indigo[900],
    },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function ButtonAppBar() {
    const { handleChange, handleSubmit, filteredMeals1, textSelected, text, handleClick, autoText, favoritesClicked } = CustomContext();
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: filteredMeals1 ,
        onChange: handleChange,
        multiple: true,
        options: filteredMeals1,
        
        getOptionLabel: (option) => option.strMeal,
    });
    // console.log(text,"text")

    return (



        <Box sx={{ flexGrow: 1 }} className="navBar">
            <AppBar position="fixed" >
                <Toolbar className='navBar1'>

                    <div {...getRootProps()}>
                        
                        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                            {value.map((option, index) => (
                                <StyledTag label={option.strMeal} {...getTagProps({ index })} />
                            ))}

                            <input {...getInputProps()} />
                        </InputWrapper>
                    </div>
                    {groupedOptions.length > 0 ? (
                        <Listbox {...getListboxProps()}>
                            {groupedOptions.map((option, index) => (
                                <li {...getOptionProps({ option, index })}>
                                    <span>{option.strMeal}</span>
                                    <CheckIcon fontSize="small" />
                                </li>
                            ))}
                        </Listbox>
                    ) : null}




                    {/* <Button  variant="filledTonal"  type="submit" style={{marginRight:'20px',backgroundColor: deepPurple[500], color: red[100]}}>Search</Button> */}
                    <ColorButton variant="contained" type="button" className='btn-1' onClick={handleSubmit}>Search</ColorButton>
                    {/* <Button  className='navbtn' type="button" variant="filledTonal" >Select Random</Button> */}
                    <ColorButton variant="contained" className='btn-2' onClick={favoritesClicked}>Show Favorites</ColorButton>
                </Toolbar>
                <Favorites></Favorites>
            </AppBar>
            
        </Box>

    );
}
