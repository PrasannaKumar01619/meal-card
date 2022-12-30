import * as React from 'react';
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
import { deepPurple,red ,purple, amber,indigo} from '@mui/material/colors';
import { CustomContext } from '../Context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 20,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[500]),
    marginRight:'20px',
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  }));

export default function ButtonAppBar() {
    const {handleChange,handleSubmit} = CustomContext();

  return (
    <Box sx={{ flexGrow: 1 }} className="navBar">
      <AppBar position="fixed">
        <Toolbar>
          
           <Search onChange={handleChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Button  variant="filledTonal"  type="submit" style={{marginRight:'20px',backgroundColor: deepPurple[500], color: red[100]}}>Search</Button> */}
          <ColorButton variant="contained" type="submit" className='btn-1' onSubmit={handleSubmit}>Search</ColorButton>
          {/* <Button  className='navbtn' type="button" variant="filledTonal" >Select Random</Button> */}
          <ColorButton variant="contained" className='btn-2'>Select Random</ColorButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
