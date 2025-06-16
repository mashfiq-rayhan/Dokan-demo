import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Card, CardHeader, Stack, CardContent, Avatar, IconButton, Button } from "@mui/material";
import { Favorite, Share, ExpandMore, Settings } from "@mui/icons-material";
import { styled } from '@mui/material/styles';




const BasicInformation = () => {
  const [expanded, setExpanded] = useState(false);


  return (
    <Card sx={{ maxWidth: '50%', border: "2px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }} >
      <CardHeader sx={{ border: "1px solid #900C3D" }} avatar={<Avatar aria-label="recipe">R</Avatar>} title="Basic Information" action={ <IconButton aria-label="settings" color="primary"><Settings fontSize="large" /></IconButton> } />
      <CardContent >
        
        <Stack spacing={8} sx={{ justifyContent: 'space-around', alignItems: 'flex-start' }}  >
          <Stack spacing={8}   direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
            <Button sx={{ maxWidth: '100%'}} variant="contained">Email</Button>
            <p>A piece of informations</p>
          </Stack>
          <Stack spacing={8} direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }} >
            <Button sx={{ maxWidth: '100%'}} variant="contained">Mobile</Button>
            <p>A piece of informations</p>
          </Stack>
          <Stack spacing={8} direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }} >
            <Button sx={{ maxWidth: '100%'}} variant="contained">District</Button>             
            <p>A piece of informations</p>
          </Stack>
          <Stack spacing={8} direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }} >
            <Button sx={{ maxWidth: '100%'}} variant="contained">Country</Button>
            <p>A piece of informations</p>
          </Stack>
          <Stack spacing={8} direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }} >
            <Button sx={{ maxWidth: '100%'}} variant="contained">Present Address</Button>
            <p>A piece of informations</p>
          </Stack>
          <Stack spacing={8} direction="row" sx={{ justifyContent: 'space-around', alignItems: 'center' }} >
            <Button sx={{ maxWidth: '100%'}} variant="contained">Permanent Address</Button>
            <p>A piece of informations</p>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default BasicInformation;