import {useState,useEffect} from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom'
import { FormControl, FormGroup,InputLabel,Input, Typography,Button, styled } from '@mui/material'
import React from 'react'

const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
  margin-top:20px;
}
`
const initialValue={
  name:'',
  userName:'',
  email:'',
  phone:''


}



export const AddUsers = () => {
  const [user,setUser]=useState(initialValue);
  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    // console.log(user);
  }
  const navigate=useNavigate();
  const addUserDetails=async()=>{
       await addUser(user);
       navigate('/all');
  }
  return (
    <Container>
      <Typography variant="h4">Add Student Details</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Roll Number</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="userName"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Marks</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="phone"/>
        </FormControl>
        <FormControl>
        <Button onClick={()=>addUserDetails()} variant="contained">Submit</Button>
        </FormControl>
        
    </Container>
  )
}
