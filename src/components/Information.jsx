import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import Users from './Users';
import Imguc from "../assets/uc2.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Information() {
  return (
    <Box sx={{ flexGrow: 0 ,backgroundColor:"black"}}>
      <Grid container spacing={0} columns={8} >

        <Grid xs={8} sx={{display:"inline-flex",flexDirection:"row",ml:"190px",mt:"0"}}>
          <Item >

          <div style={{ backgroundImage: `url(${Imguc})`,height:"45vh",width:"35vh",backgroundRepeat:"no-repeat",backgroundColor:"black",marginLeft:"0%",marginBottom:"0%",paddingBottom:"0px"}}>
          <Button sx={{ml:"150px",mt:"140px",backgroundColor:"#f7d705",width:'150px'}} variant="contained">Learn now</Button></div>
          
          </Item>
        </Grid>

        <Grid xs={4} sx={{mt:"0px"}}>
          <Item sx={{backgroundColor:"black"}} >

                        <Typography variant="h6" component="h2" sx={{display: 'inline-flex' ,ml:"50px",pl:"0px",mt:"0px",mb:"0px",fontSize: 20,fontWeight:"bold",color:"white"}}>
                        East Germany's
                        </Typography>;

          </Item>
        </Grid>

        <Grid xs={8} sx={{mt:"0px"}}>
          <Item sx={{backgroundColor:"black"}}>
            
                        <Typography variant="h6" component="h2" sx={{display: 'inline-flex' ,ml:"50px",pl:"0px",mt:"0px",mt:"0px",fontSize: 60,fontWeight:"bold",background: "-webkit-linear-gradient(70deg, #FFB800 60%,#FFFFFF 90% )",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>
                        Soviet Heritage
                        </Typography>;

          </Item>
        </Grid>

        <Grid xs={8}>
          <Item sx={{backgroundColor:"black"}}>

                        <Typography variant="h6" component="h2" sx={{display: 'inline-flex' ,ml:"50px",mr:"100px",pl:"0px",mt:"0px",fontSize: 20,color:"white"}}>
                        Statue of kneeling Soviet soldier at the Soviet War Memorial in Treptower Park in Berlin
                        </Typography>;

          </Item>
        </Grid>

        <Grid xs={8}>
          <Item sx={{backgroundColor:"black"}}>

                        <Typography variant="h6" component="h2" sx={{display: 'inline-flex' ,ml:"50px",pl:"0px",mt:"0px",fontSize: 20,fontWeight:"bold",background: "-webkit-linear-gradient(70deg, #FFB800 800%,#FFFFFF 90% )",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>
                        Read more
                        </Typography>;

          </Item>
        </Grid>

        <Grid xs={8}>
          <Item sx={{backgroundColor:"black",mt:"20px"}}>

            <Users/>

          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}