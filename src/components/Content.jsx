import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Img from "../assets/f10.png"
import Information from './Information';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '0px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(0),
  borderRadius: '0px',
  textAlign: 'center',
}));

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={0} columns={18} sx={{height:"100px"}}>

        <Grid xs={10} sx={{backgroundColor:"black",marginLeft:"0px",paddingLeft:"0px"}}>
          <Item sx={{height:"102vh",backgroundColor:"black"}}>
          <div style={{backgroundImage: `url(${Img})`,height:"100vh",backgroundRepeat:"no-repeat",backgroundColor:"black",marginLeft:"0%",marginBottom:"0%",paddingBottom:"0px"}}></div>
          </Item>
        </Grid>
        
        <Grid xs={8}>
          <Item sx={{height:"102vh",backgroundColor:"black"}}><Information/></Item>
        </Grid>

      </Grid>
    </Box>
  );
}