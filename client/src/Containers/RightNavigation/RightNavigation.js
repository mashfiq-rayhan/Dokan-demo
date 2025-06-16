import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Stack, Collapse, Badge, Avatar, IconButton, Typography, List, ListItemText, ListItemIcon, ListSubheader, ListItemButton, } from '@mui/material';
import { Star, Favorite, Share, AddShoppingCart, Info, Comment, Send, Drafts } from '@mui/icons-material';


const Posts = (props) => {

  return (
      <Stack direction="row" >
        <Card sx={{ maxWidth: '100%', border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
          <CardHeader avatar={ <IconButton sx={{boxShadow: '1px 0px 8px 1px #FFFF00'}}><Star sx={{color: "#FF4D00"}} /></IconButton> } title="Top Products"  />
          <Stack direction="row" spacing={1} sx={{padding: '5px'}}>
            <Stack spacing={2}>
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
            </Stack>
            <Stack spacing={2}>
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
              <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" sx={{boxShadow: '1px 0px 8px 1px #F60F56'}} />
            </Stack>
          </Stack>
        </Card>
      </Stack>
  );
}

export default Posts;
