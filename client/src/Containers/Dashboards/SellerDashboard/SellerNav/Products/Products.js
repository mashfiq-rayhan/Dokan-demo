import React, { useState, useSelector } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Modal, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Backdrop, Fade } from "@mui/material";
import { Info } from '@mui/icons-material';
import EditProduct from './EditProduct';

import { itemData } from "./itemData";
import ProductDetails from "./ProductDetails";

const useStyles = makeStyles((theme) => ({
	
}));

const Products = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
    <Card>
      <ImageList >
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Products</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" onClick={handleOpen} />
          <ImageListItemBar title={item.title} subtitle={item.author} actionIcon={<EditProduct />} />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >
      <ProductDetails closeModal={handleClose} />
		</Modal>
    </Card>
  );
};


export default Products;
