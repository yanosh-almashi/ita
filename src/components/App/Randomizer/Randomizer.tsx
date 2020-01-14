import React from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledRandom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(25),
        width: 400,
      },
    },
  }),
);

 //const MultilineTextFields = () =>{
export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
  <StyledRandom>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="randomize area "
          multiline
          rows="4"
          defaultValue=" "
          variant="outlined"
          //onChange={handleChange}
        />
      
    </form>
    <br/>         
        <Button variant="contained" color="primary">
        Randomize
        </Button><br/> 
        <p>result area</p>
    </StyledRandom>
  );
}

//export default MultilineTextFields;

//<Route path="/randomizer" component={ MultilineTextFields } />

