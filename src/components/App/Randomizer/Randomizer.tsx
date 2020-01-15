import React from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledRandom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 50px;
`;

const RandomControlContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
const RandomResultsContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #24c3f9;
`;
 const RandomTitleContainer = styled.h3`
 padding-bottom: 10px;
 text-align-last: left;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0 auto 30px auto;
 border-bottom: 1px solid #dedde3;
 color: #20233f;
 font-size: 25px;`;

export default function MultilineTextFields() {

  const [value, setValue] = React.useState('Your result will be here');
  const [result, setResult] = React.useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  let resultArray = [];
  const randomize = () =>
  {
    resultArray = value.split('\n');
  
      let currentIndex = resultArray.length, temporaryValue, randomIndex, resultIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = resultArray[currentIndex];
        resultArray[currentIndex] = resultArray[randomIndex];
        resultArray[randomIndex] = temporaryValue;
      }
      resultIndex = Math.floor(Math.random() * resultArray.length);
      setResult(resultArray[resultIndex]);
  }

  return (
  <StyledRandom>
        <RandomControlContainer>
            <RandomTitleContainer>Random control</RandomTitleContainer>
            <TextField
            id="outlined-multiline-static"
            multiline
            rows="10"
            defaultValue=" "
            variant="outlined"
            onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={randomize}>
            Randomize
            </Button>
        </RandomControlContainer>
        <div className="result_container">
        <RandomTitleContainer>Result area</RandomTitleContainer>
        <RandomResultsContainer>{result}</RandomResultsContainer>
        </div>
    </StyledRandom>
  );
}




