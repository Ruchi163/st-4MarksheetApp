import React from 'react'
import {AppBar, Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header=styled(AppBar)`
background:#FF0000;
color:#111111;
font-weight:bold;

`
const Tabs=styled(NavLink)`
font-size:18px;
margin-right:50px;
margin-left:50px;
color:inherit;
text-decoration:none;
`

const NavBar=()=> {
  return (
    <div>

<Header position='static'>
        <Toolbar>
            <Tabs to={"/"}>Project ST4</Tabs>
            <Tabs to={"/all"}>All Students</Tabs>
            <Tabs to={"/add"}>Add Students</Tabs>

        </Toolbar>
        
    </Header>

<div className='div1'>
        
        <img src={'https://media.glassdoor.com/sqll/518907/chitkara-university-squarelogo-1465211211827.png'}  />
        
      <p className='imgg'><h1>Chitkara University</h1>
        </p>
      </div>
    </div>
    
  )
}
export default NavBar;