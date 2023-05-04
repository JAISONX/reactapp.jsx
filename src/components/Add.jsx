import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Add = () => {
  const{register,handleSubmit}=  useForm();
  const getval=(val)=>{
    console.log(val);
    alert('Form Submitted');
    axios.post('https://reqres.in/api/users',val).then((res)=>{
      alert(`The data is posted with id ${res.data.id}`)
    })
  }
  return (
    <div>
      <Stack
      marginLeft={75}
      marginTop={20}
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        name="EmpName"
        {...register('EmpName')}
        id="filled-hidden-label-small"
        label="EmployeenName"
        variant="filled"
      />
      <TextField
        hiddenLabel
        name='EmpLoc'
        {...register("EmpLoc")}
        id="filled-hidden-label-normal"
        label="EmployeeLocation"
        variant="filled"
      />
      <TextField
        hiddenLabel
        name='EmpDes'
        {...register("EmpDes")}
        id="filled-hidden-label-normal"
        label="EmployeeDesignation"
        variant="filled"
      />
      <Button onClick={handleSubmit(getval)}variant="contained">SUBMIT</Button>
    </Stack> 
     </div>
  )
}

export default Add
