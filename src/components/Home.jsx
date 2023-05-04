import { Table,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
//import { set } from 'react-hook-form';
const Home = () => {
  const [value,setvalue]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((response)=>{
      console.log(response.data.users);
      setvalue(response.data.users);
  });
  },[])
  return (
    <div>
        <Table className='table'>
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.map((data,ind)=>{
                return<TableRow>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>{data.address.city}</TableCell> 
                 </TableRow>
            })}
          </TableBody>
        </Table>
      
    </div>
  )
}

export default Home
