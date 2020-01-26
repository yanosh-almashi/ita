import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './ListItem.css'
import {StyledTextArea, StyledRandom, AreaWrapper, NavWrapper, ResultArea, TheList} from './StyledRandomizerComponents'
import {ResultInterface} from './ResultItemInterface'

export default function Randomizer() {
  const [value, setValue] = React.useState('Your result will be here');
  const [result, setResult] = React.useState<ResultInterface[]>([]);
  const [inputValue, setInputValue]= React.useState(1);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  //TYPE IS ANY DUE TO MATERIAL UI DOCUMENTATION ISSUES
  const handleInputChange = (event: any) => {
    setInputValue(Number(event.target.value));
  };

  let resultArray: string[] = [];
  const randomize = () => {
    resultArray = value.split('\n');
    if(resultArray.length>=inputValue){
      let res = chooseRandom(resultArray);
      setResult([...res]);
    } else {
      setResult([{id: 0, value: "Incorrect input."}]);
    }
  }
  
  const chooseRandom = (resultArray: string[]) =>
  {
    let currentIndex = resultArray.length, 
    temporaryValue, randomIndex, resultIndex, arr: ResultInterface[]=[], loopCounter=0;
    setResult([]);
    let filteredArray = [];
    let uniqueValues = new Set(resultArray);
     filteredArray = [...uniqueValues];
     uniqueValues.clear();
    if(resultArray.length <=inputValue || filteredArray.length <= inputValue){
      return [{id: 0, value: "Incorrect input."}];
    } else{
      while( loopCounter<inputValue){
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
            let isExists = arr.some((item) =>{
              return item.value === ItemOfResult.value
            })
           if(!isExists && ItemOfResult.value !== ""){
              arr.push(ItemOfResult);
           } else{
             loopCounter--;
           }
             loopCounter++;
          }
        return arr;
    }
  }
  return (
  <StyledRandom id="main">
      <AreaWrapper>
        <NavWrapper>   
          <Button id="RandomizeButton" variant="contained" color="primary" onClick={randomize}>
            Randomize
          </Button>
          <Input id="RandomizeInput" type="number" color="primary" onChange={handleInputChange} placeholder="Input number of results. Default value is 1"></Input>
        </NavWrapper> 
        <StyledTextArea onChange={(e: any) => handleChange(e)}>
        </StyledTextArea>
        <ResultArea>
          <TheList>
            {result.map((item) => {
            return <li key={item.id}>{item.value}</li>     
            })
            }
          </TheList>
        </ResultArea> 
      </AreaWrapper>
  </StyledRandom>
  );
}
