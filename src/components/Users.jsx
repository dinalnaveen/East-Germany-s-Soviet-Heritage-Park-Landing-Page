import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.png';
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Users() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={14}>

        <Grid xs={6}>
          <Item sx={{display: 'flex', flex:"columns",padding:"0px 0px",margin:"0px 0px", ml:"55px", mr:"100px",backgroundColor:"black"}}>

                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src={Img1} />
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                    <Avatar src={Img2} />
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src={Img3} />
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Avatar src={Img4} />
                    </Grid>

          </Item>
        </Grid>

        <Grid xs={8} sx={{ml:"0px"}}>
          <Item sx={{backgroundColor:"black"}}>

                        <Typography variant="h6" component="h2" sx={{display: 'inline-flex' ,ml:"0px",mr:"100px",pl:"0px",mt:"0px",fontSize: 18,color:"white"}}>
                         1,245+ (last 24hours)
                        </Typography>;


          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}