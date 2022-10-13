import React from 'react'
import './index.css';
import {Table,TableHead,TableBody,TableCell, TableRow,styled,Button} from '@mui/material'

const StyledTable =styled(Table)`
width:80%;
margin:auto;
`;

const Thead=styled(TableRow)`
background:#FF0000;

 & > th{
  color:#111111;
  font-size:20px;
}
`;


const Tbody=styled(TableRow)`

&>td{

  font-size:20px;
}
`
export const ProjectST4 = () => {
  return (
    <div>
      
    <StyledTable>
      <TableHead>
      <Thead>
         <TableCell>Subject Code</TableCell>
         <TableCell>Subject Name</TableCell>
         <TableCell>Credit Score</TableCell>
         <TableCell>Platform</TableCell>
         
      </Thead>
      </TableHead>
      <TableBody>
        {
          
            <Tbody>
                <TableCell>CS-101</TableCell>
                <TableCell>Programming Abstraction</TableCell>
                <TableCell> 5 </TableCell>
                <TableCell>MyMapit </TableCell>
                
                
            </Tbody>

        }
        {
          
          <Tbody>
              <TableCell>CS-202</TableCell>
              <TableCell>Front-end Development</TableCell>
              <TableCell> 4 </TableCell>
              <TableCell> MyMapit </TableCell>
              
              
          </Tbody>
      }
     
      {
          
          <Tbody>
              <TableCell>CS-214</TableCell>
              <TableCell>Apitiude</TableCell>
              <TableCell> 4 </TableCell>
              <TableCell> Mockopedia </TableCell>
              
              
          </Tbody>
      }

{
          
          <Tbody>
              <TableCell>CS-142</TableCell>
              <TableCell>Business Communication</TableCell>
              <TableCell> 2 </TableCell>
              <TableCell> ImagineXP </TableCell>
              
              
          </Tbody>
      }
      </TableBody>
    </StyledTable>
    </div>
  )
}
