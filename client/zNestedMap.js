// Object.keys(categoryObject).map((key, value) => {
	// 	console.log(key);
	// 	Object.keys(categoryObject[key]).map((value, index) => {
	// 		console.log(value);
			
	// 		categoryObject[key][value].map((index, loc) => {
	// 		console.log(index);
			
	// 	});
	// 	});
	// });


	// Object.keys(categoryObject).map((key, value) => {
	// 	console.log(key)
	// 	return (
	// 		Object.keys(categoryObject[key]).map((value, index) => {
	// 			console.log(value);
	// 			return (
	// 				categoryObject[key][value].map((index, loc) => {
	// 					console.log(index);
						
						
	// 				})
	// 			)
				
	// 		})
	// 	)
	// })



    // const list = (
    //     <Box sx={"auto"} role="presentation">
    //       <List
    //         sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    //         component="nav"
    //       >
    //         {Object.keys(categoryObject).map((key, value) => {
    //           console.log(key);
    //           return (
    //             <div key={key}>
    //               <ListItemButton onClick={handleClickMain}>
    //                 <ListItemText primary={key} />
    //                 {openMain ? <ArrowLeft /> : <ArrowRight />}
    //               </ListItemButton>
    //               <Collapse in={openMain} timeout="auto" unmountOnExit>
    //                 {Object.keys(categoryObject[key]).map((value, index) => {
    //                   console.log(value);
    //                   return (
    //                     <div key={value}>
    //                       <ListItemButton onClick={handleClick2nd}>
    //                         <ListItemText primary={value} />
    //                         {open2nd ? <ArrowLeft /> : <ArrowRight />}
    //                       </ListItemButton>
    //                       <Collapse in={open2nd} timeout="auto" unmountOnExit>
    //                         <List component="div" disablePadding>
    //                           {categoryObject[key][value].map((index, loc) => {
    //                             console.log(index);
    //                             return (
    //                               <div key={index}>
    //                                 <ListItemButton sx={{ pl: 4 }}>
    //                                   <ListItemText primary={index} />
    //                                 </ListItemButton>
    //                               </div>
    //                             );
    //                           })}
    //                         </List>
    //                       </Collapse>
    //                     </div>
    //                   );
    //                 })}
    //               </Collapse>
    //             </div>
    //           );
    //         })}
    //       </List>
    //     </Box>
    //   );
   
   
   
   
   
    // {navObject.map((key, loc) => {
    //     return (
    //         <div key={key}>
    //         <ListItemButton>
    //           <img src={logo} className={classes.logo} alt="logo" />
    //           <ListItemText primary={key} className={classes.listItemText} />
    //         </ListItemButton>
    //       </div>
    //     );
    //   })}