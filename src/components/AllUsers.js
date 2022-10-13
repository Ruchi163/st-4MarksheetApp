import React from 'react'

import {useEffect, useState} from 'react'
import {Table,TableHead,TableBody,TableCell, TableRow,styled,Button} from '@mui/material'

import { getUsers , deleteUser} from '../service/api';
import { Link } from 'react-router-dom';

var async = require('async');
var _ = require('lodash');


const StyledTable =styled(Table)`
width:80%;
margin:auto;
`;

const Thead=styled(TableRow)`
background:#000;
 & > th{
  color: #fff;
  font-size:20px;
}
`;


const Tbody=styled(TableRow)`

&>td{

  font-size:20px;
}
`




const AllUsers = () => {

  const[users,setUsers]=useState([]);

  useEffect(()=>{
    getUserDetails();
  },[])

  const getUserDetails=async()=>{
    let response =await getUsers();
    // console.log(response);
    setUsers(response.data);
  }

const deleteUserData= async(id)=>{
  await deleteUser(id);
  getUserDetails();
}


  return (
    
    
    <StyledTable>
      <TableHead>
      <Thead>
         <TableCell>Id</TableCell>
         <TableCell>Name</TableCell>
         <TableCell>Roll Number</TableCell>
         <TableCell>Email</TableCell>
         <TableCell>Marks</TableCell>
         <TableCell></TableCell>
      </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user =>(
            <Tbody>
                <TableCell>{user.id} </TableCell>
                <TableCell>{user.name} </TableCell>
                <TableCell>{user.userName} </TableCell>
                <TableCell>{user.email} </TableCell>
                <TableCell>{user.phone} </TableCell>
                <TableCell>
                  <Button variant="contained" style={{marginRight:10}} component={Link} to= { `/edit/${user.id}`} >Edit</Button>
                  <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                </TableCell>
            </Tbody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers