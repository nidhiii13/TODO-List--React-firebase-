import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';
const Todotext = () => {
    const [text,setext]=useState("");
    const [item,setitem]=useState([]);
    const [val,reset]=useState("");
    const handleSubmit = e => {
      e.preventDefault();
      console.log("submit");
  };
  const addList = () => {

        /* const msg = {
            id: Math.random(),
            value: text
        } */
        db.collection('todos').add({
            text:text,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setitem([...item,text]);
        setext("");
    }
  const deletee =(user) =>{
    //const updated=item.filter(it => it.id !== id);
   // console.log(updated);
    db.collection('todos').doc(user.id).delete();
   // setitem(updated);
    console.log(item);
  
  };
  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
          console.log(snapshot.docs.map(doc=>doc.data()));
       setitem(snapshot.docs.map(doc=>({id:doc.id ,text:doc.data().text})));
        
      });
     
  }, [])
    return (
        <>
            <div className="add">
                <form className="form" noValidate autoComplete="off" on onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" value={text} variant="outlined" onChange={(e) => { setext(e.target.value); }} />
                    <Button style={{marginTop:10,marginLeft:10}} variant="contained" color="primary" onClick={addList} >
                        Add
                    </Button>
                </form>
            </div>
            <br></br>
            <div className="list">
                {item.map((user) => (
                    <Paper className="indd">
                        <Grid container wrap="nowrap" spacing={0}>
                            <Grid item>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap className="ind"  key={user.id}  >{user.text} <IconButton aria-label="delete" className="del"  onClick={() => deletee(user)}  >
                                    <DeleteIcon />
                                </IconButton> </Typography>
                            </Grid>
                        </Grid>
                    </Paper>))}
            </div>
        </>
    )
}

export default Todotext;
