import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {Item:{backgroundColor:"black",height:"60px"}};

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"black",height:"80px"}} >
      <Grid container spacing={0} columns={60} >

        <Grid item xs={14} >
          <Item style={style.Item}>
          <Box
                sx={{
                    pt:"0px",
                    marginTop:"0px",
                    ml:20,
                    width: 60,
                    height: 80,
                    backgroundColor: '#f7d705',
                    '&:hover': {
                    backgroundColor: '#ffd54f',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}
    >
        <Typography variant="h4" component="h2" sx={{ color:"white",alignItems:"center", pt:"30px" , fontWeight:"bold"}}>
            S
        </Typography>;
        </Box>
 
          </Item>
        </Grid>

        <Grid item xs={8} >
          <Item style={style.Item}>
        <Typography variant="h6" component="h2" sx={{ color:"white",alignItems:"center", pt:"15px",fontSize: 16, cursor:"pointer"}}>
            History
        </Typography>;
            </Item>
        </Grid>

        <Grid item xs={8} >
          <Item style={style.Item}>
        <Typography variant="h6" component="h2" sx={{ color:"white",alignItems:"center", pt:"15px",fontSize: 16}}>
            Commision
        </Typography>;
            </Item>
        </Grid>

        <Grid item xs={8} >
          <Item style={style.Item}>
        <Typography variant="h6" component="h2" sx={{ color:"white",alignItems:"center", pt:"15px",fontSize: 16}}>
            Placement
        </Typography>;
            </Item>
        </Grid>

        <Grid item xs={8} >
          <Item style={style.Item}>
        <Typography variant="h6" component="h2" sx={{ color:"white",alignItems:"center", pt:"15px",fontSize: 16}}>
            Learn
        </Typography>;
            </Item>
        </Grid>

        <Grid item xs={14} >
          <Item style={style.Item}>
        
            </Item>
        </Grid>
       
        
      </Grid>
    </Box>
  );
}