import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './ListItem.css'
import {StyledTextArea, StyledRandom, MainHeader, AreaWrapper, NavWrapper, ResultArea} from './StyledRandomizerComponents'
import {ResultItemInterface} from './ResultItemInterface'

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Your result will be here');
  const [result, setResult] = React.useState<ResultItemInterface[]>([]);
  const [inputValue, setInputValue]= React.useState(1);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  //TYPE IS ANY DUE TO MATERIAL UI DOCUMENTATION ISSUES
  const handleInputChange = (event: any) => {
    setInputValue(Number(event.target.value));
    console.log(inputValue);
    console.log(typeof(inputValue));
  };
  let resultArray: string[] = [];
  const randomize = () =>
  {
    let currentIndex = resultArray.length, 
    temporaryValue, randomIndex, resultIndex, arr=[];
    setResult([]);
    for(let i = 0; i<inputValue; i++){
    resultArray = value.split('\n');
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
      let ItemOfResult = {id: 0, value: ""};
      ItemOfResult.value = resultArray[resultIndex];
      ItemOfResult.id = Math.random()*1e8;
      arr.push(ItemOfResult); 
    } 
    setResult( [...arr]);
  }
  return (
  <StyledRandom id="main">
    <MainHeader>
      <AreaWrapper>
        <NavWrapper>   
          <Button id="RandomizeButton" variant="contained" color="primary" onClick={randomize} >
            Randomize
          </Button>
          <Input id="RandomizeInput" type="number" color="primary" onChange={handleInputChange} placeholder="Please type number of results you want. Default value is 1" ></Input>
        </NavWrapper> 
        <StyledTextArea onChange={(e: any) => handleChange(e)}>
        </StyledTextArea>
        <ResultArea>
          <ul className="theList">
            {result.map((item) => {
            return <li key={item.id}>{item.value}</li>     
            })
            }
          </ul>
        </ResultArea> 
      </AreaWrapper>
    </MainHeader>
  </StyledRandom>
  );
}
