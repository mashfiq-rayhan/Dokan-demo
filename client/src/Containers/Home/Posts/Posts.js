import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Stack, Collapse, Badge, Avatar, IconButton, Typography, Modal } from '@mui/material';
import { Bolt, Favorite, Share, AddShoppingCart, Info, Comment, Send, Drafts } from '@mui/icons-material';
import ShareCom from './Share';


const ExpandMoreFunc = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Posts = (props) => {

  const [expanded, setExpanded] = useState(false);

  const [chat, setChat] = useState(false);
  const [liked, setLiked] = useState(false);
  const [ seeComment, setSeeComment] = useState(false);
  const [ share, setShare] = useState(false);
  const [ info, setInfo] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const LikedOrNot = () => {
      console.log(!liked)
    setLiked(!liked);
  };
  const SeeComment = () => {
      console.log(!seeComment)
      setSeeComment(!seeComment);
  };
  const LetsChat = () => {
    console.log(chat);
  };

  const LetsShare = () => {
      console.log(share)
      setShare(!share);
  };
  const showInfo = () => {
      console.log(info)
      setInfo(!info);
  };

  
  return (
      <Stack direction="row" sx={{ justifyContent: "space-evenly" }}>

    <Card sx={{ maxWidth: '63%', border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
      <CardHeader
        avatar={ <Avatar sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>R</Avatar> }
        action={
          <Stack direction="row" spacing={4} sx={{pr: "10px"}}>
            <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LetsChat}>
                <Bolt color="primary" />
            </IconButton>
            <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>
                <AddShoppingCart color="primary" />
            </IconButton> 
            <Badge badgeContent={4} color="secondary" >
              <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LetsShare}>
                <Share color="primary" />
              </IconButton>
            </Badge>
          </Stack>
        }
        title="Yamaha"
        subheader="September 14, 2016"
      />
      <Modal open={share} onClose={LetsShare}>
				<ShareCom closeModal={LetsShare} />
			</Modal>
      <CardMedia component="img" height="350" image="/images/Home/R1.jpg" alt="LandCruiser" />
      <CardContent>
        <Typography variant="body2" color="#FFDEE8">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2} >

        <IconButton >
          { liked ? <Badge  badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary" onClick={LikedOrNot}><Favorite color="primary" /></IconButton></Badge> : <Badge badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LikedOrNot} ><Favorite/></IconButton></Badge> }
        </IconButton>
        <IconButton >
          { expanded ? <Badge badgeContent={4} color="secondary" ><ExpandMoreFunc sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} ><Comment color='primary' /></ExpandMoreFunc></Badge> : <Badge badgeContent={4} color="secondary" ><ExpandMoreFunc sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} ><Comment/></ExpandMoreFunc></Badge> }
        </IconButton>
        </Stack>
        <IconButton >
        <IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary" onClick={showInfo}>
          <Info color="primary" />
        </IconButton>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

{ !info ? 
<Card sx={{ width: '33%', border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
      <CardHeader avatar={ <Avatar sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>R</Avatar> } title="Yamaha" />

      <Stack direction="row" spacing={1} sx={{padding: '5px', justifyContent: "space-evenly"}}>
        <Stack spacing={2}>
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
        </Stack>
        <Stack spacing={2}>
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
          <CardMedia component="img" height="100" image="/images/Home/R1.jpg" alt="LandCruiser" />
        </Stack>
      </Stack> 
    </Card>
    :
    <Card sx={{ width: '33%', border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
      <CardHeader avatar={ <Avatar sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>R</Avatar> } title="Yamaha" />
      <Stack spacing={6}  direction="row" sx={{ justifyContent:"space-evenly", alignItems:"center", alignContent: "center", padding: "20px"}}>
      <Stack spacing={1}  sx={{ justifyContent:"space-evenly", alignItems:"center"}}>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Title</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Description</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Category</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Type</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Item</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Height</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Width</Typography>
        <Typography variant="button" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Weight</Typography>
        <Typography variant="h6" sx={{ boxShadow: '1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 2 }}>Price</Typography>
      </Stack>
      <Stack spacing={1} sx={{ alignItems:"center"}}>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="button" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>Hello lets play</Typography>
        <Typography variant="h6" sx={{ boxShadow:'1px 0px 8px 1px #F60F56', padding: "8px", borderRadius: 1 }}>100</Typography>
      </Stack>
    </Stack> 
    </Card>
    }

      </Stack>
  );
}

export default Posts;


{/* <IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary" onClick={handleExpandClick}></IconButton> */}

{/* <Card sx={{ maxWidth: '33%', border: "1px solid #900C3D", boxShadow: '1px 0px 8px 1px #F60F56' }}>
      <CardHeader
        avatar={ <Avatar sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>R</Avatar> }
        action={
          <Stack direction="row" spacing={4} sx={{pr: "10px"}}>
            <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LetsChat}>
                <Bolt color="primary" />
            </IconButton>
            <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }}>
                <AddShoppingCart color="primary" />
            </IconButton> 
            <Badge badgeContent={4} color="secondary" >
              <IconButton color="secondary" sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LetsShare}>
                <Share color="primary" />
              </IconButton>
            </Badge>
          </Stack>
        }
        title="Yamaha"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="350" image="/images/Home/R1.jpg" alt="LandCruiser" />
      <CardContent>
        <Typography variant="body2" color="#FFDEE8">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Stack direction="row">

        <IconButton >
          { liked ? <Badge  badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary" onClick={LikedOrNot}><Favorite color="primary" /></IconButton></Badge> : <Badge badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={LikedOrNot} ><Favorite/></IconButton></Badge> }
        </IconButton>
        <IconButton >
          { seeComment ? <Badge badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary" onClick={SeeComment}><ExpandMoreFunc expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} ><Comment color='primary' /></ExpandMoreFunc></IconButton></Badge> : <Badge badgeContent={4} color="secondary" ><IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} onClick={SeeComment} ><Comment/></IconButton></Badge> }
        </IconButton>
        </Stack>
        <IconButton >
        <IconButton sx={{ boxShadow: '1px 0px 8px 1px #F60F56' }} color="secondary">
          <Info color="primary" />
        </IconButton>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card> */}