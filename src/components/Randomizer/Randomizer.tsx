import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import "./ListItem.css";
import {
  StyledTextArea,
  StyledRandom,
  AreaWrapper,
  NavWrapper,
  ResultArea,
  TheList,
} from "./StyledRandomizerComponents";
import { ResultInterface } from "./ResultItemInterface";

const Randomizer = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ResultInterface[]>([]);
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };
  const randomize = () => {
    const resultArray = value.split("\n");
    if (resultArray.length >= inputValue) {
      const res = chooseRandom(resultArray);
      setResult([...res]);
    } else {
      setResult([{ id: 0, value: "Incorrect input." }]);
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
      return [
        { id: 0, value: "Incorrect input. Check number of unique characters" },
      ];
    } else {
      return shuffle(resultArray);
    }
  };
  const shuffle = (resultArray: string[]) => {
    let randomIndex,
      arr: ResultInterface[] = [];
    for (let i = 0; i < inputValue; i++) {
      // While there remain elements to shuffle...
      for (
        let currentIndex = resultArray.length - 1;
        currentIndex > 0;
        currentIndex--
      ) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        // And swap it with the current element.
        [resultArray[currentIndex], resultArray[randomIndex]] = [
          resultArray[randomIndex],
          resultArray[currentIndex],
        ];
      }
      //pick random item
      randomIndex = Math.floor(Math.random() * resultArray.length);
      //create result object
      const ItemOfResult = {
        id: Math.random() * 1e8,
        value: resultArray[randomIndex],
      };
      //check if it is unique and not empty string and push. If not, then one more looping through
      const isExists = arr.some((item) => item.value === ItemOfResult.value);
      if (!isExists && ItemOfResult.value !== "") {
        arr.push(ItemOfResult);
      } else {
        i--;
      }
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
            placeholder="Input your value. Default is 1"
          />
        </NavWrapper>
        <StyledTextArea onChange={handleChange} />
        <ResultArea>
          <TheList>
            {result.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </TheList>
        </ResultArea>
      </AreaWrapper>
    </StyledRandom>
  );
};

export default Randomizer;
