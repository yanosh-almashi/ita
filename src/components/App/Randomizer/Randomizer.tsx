import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './ListItem.css';
import {
  StyledTextArea,
  StyledRandom,
  AreaWrapper,
  NavWrapper,
  ResultArea,
  TheList
} from './StyledRandomizerComponents';
import { ResultInterface } from './ResultItemInterface';

const Randomizer = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<ResultInterface[]>([]);
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };
  const randomize = () => {
    const resultArray = value.split('\n');
    if (resultArray.length >= inputValue) {
      const res = chooseRandom(resultArray);
      setResult([...res]);
    } else {
      setResult([{ id: 0, value: 'Incorrect input.' }]);
    }
  };
  const chooseRandom = (resultArray: string[]) => {
    setResult([]);
    const uniqueValues = new Set(resultArray);
    const filteredArray = [...uniqueValues];
    uniqueValues.clear();
    if (
      resultArray.length <= inputValue ||
      filteredArray.length <= inputValue
    ) {
      return [{ id: 0, value: 'Incorrect input.' }];
    } else {
      return shuffle(resultArray);
    }
  };
  const shuffle = (resultArray: string[]) => {
    let currentIndex = resultArray.length,
      temporaryValue,
      randomIndex,
      resultIndex,
      arr: ResultInterface[] = [],
      loopCounter = 0;
    while (loopCounter < inputValue) {
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
      const ItemOfResult = { id: 0, value: '' };
      ItemOfResult.value = resultArray[resultIndex];
      ItemOfResult.id = Math.random() * 1e8;
      const isExists = arr.some(item => item.value === ItemOfResult.value);
      if (!isExists && ItemOfResult.value !== '') {
        arr.push(ItemOfResult);
      } else {
        loopCounter--;
      }
      loopCounter++;
    }
    return arr;
  };
  return (
    <StyledRandom id="main">
      <AreaWrapper>
        <NavWrapper>
          <Button
            id="Randomize-button"
            variant="contained"
            color="primary"
            onClick={randomize}
          >
            Randomize
          </Button>
          <Input
            id="Randomize-input"
            type="number"
            color="primary"
            onChange={handleInputChange}
            placeholder="Input number of results. Default value is 1"
          ></Input>
        </NavWrapper>
        <StyledTextArea onChange={handleChange} />
        <ResultArea>
          <TheList>
            {result.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </TheList>
        </ResultArea>
      </AreaWrapper>
    </StyledRandom>
  );
};

export default Randomizer;
