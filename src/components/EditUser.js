import {useState,useEffect} from 'react'
import { getUser, editUser } from '../service/api'
import { useNavigate,useParams } from 'react-router-dom'
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



export const EditUsers = () => {


  const [user,setUser]=useState(initialValue);

  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }

  const {id} =useParams();

  useEffect( () =>{
    getUserData();
  },[]);

  const getUserData = async() =>{
    let response=await getUser(id);
    console.log(response);
    setUser(response.data);
  };




 
 


  const navigate=useNavigate();
  const addUserDetails=async()=>{
       await editUser(user,id);
       navigate('/all');
  }
  return (
    <Container>
      <Typography variant="h4">Edit Students</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Roll Number</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="userName" value={user.userName}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Marks</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
        <Button onClick={()=>addUserDetails()} variant="contained">Edit Student Details</Button>
        </FormControl>
        
    </Container>
  )
}
