import React from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './ListItem.css'


const StyledRandom = styled.div`

@media screen and (min-width: 1280px)
 {
  max-width: 1280px;
  margin: 0 auto;
 }
  
height: 100%;
  position: relative;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  padding-top: 48px;
  width: 50%;
  
`;

const MainHeader = styled.div`
  padding-top: 5px;
  width: 100%;
`;


const AreaWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 48px;
  width: 100%;
`;

const StyledButton = styled.div`
  width: 100%;
`;
const StyledInput = styled.div`
  width: 50%;
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
 font-size: 25px;
 `;


 interface SomeInterface{
   id: number;
   value: string;
 }
export default function MultilineTextFields() {

  const [value, setValue] = React.useState('Your result will be here');
  const [result, setResult] = React.useState<SomeInterface[]>([]);
  const [inputValue, setInputValue]= React.useState(1);;
  
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
  let numberOfItems: number = 2;

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
                <TextField
                id="outlined-multiline-static"
                multiline
                rows="10"
                defaultValue=" "
                variant="outlined"
                fullWidth={true}
                onChange={handleChange}
                />
                <TextField
                id="outlined-multiline-static2"
                multiline
                rows="10"
                defaultValue=" "
                variant="outlined"
                fullWidth={true}
                value={result.map((item) => {
                  return item.value + "\n"
                  })}
                />
                <div className="result_container">
              
                </div>
                
                </AreaWrapper>
              </MainHeader>
     
    </StyledRandom>
    
  );
}





// (
//   <StyledRandom>
//         <RandomControlContainer>
//             <RandomTitleContainer>Random control</RandomTitleContainer>
//             <TextField
//             id="outlined-multiline-static"
//             multiline
//             rows="10"
//             defaultValue=" "
//             variant="outlined"
//             onChange={handleChange}
//             />
//             <Input type="number" color="primary" onChange={handleInputChange}></Input>
//             <Button variant="contained" color="primary" onClick={randomize}>
//             Randomize
//             </Button>
//         </RandomControlContainer>
//         <div className="result_container">
//         <RandomTitleContainer>Result area</RandomTitleContainer>


//         <RandomResultsContainer>
//           <ResultUnmarkedList>
//             {result.map((item) => {
//               return <li key={item.id}>{item.value}</li>     
//               })
//             }
//           </ResultUnmarkedList>
//         </RandomResultsContainer>
//         </div>
//     </StyledRandom>
//   );






// <StyledRandom>
// <RandomControlContainer>
//         {/* <RandomTitleContainer>Random control</RandomTitleContainer> */}
        
//         <MainHeader>
//           <AreaWrapper>
//           <NavWrapper>
//             <TextField
//             id="outlined-multiline-static"
//             multiline
//             rows="10"
//             defaultValue=" "
//             variant="outlined"
//             fullWidth={true}
//             onChange={handleChange}
//             />
//             <div className="result_container">
//             {/* <RandomTitleContainer>Result area</RandomTitleContainer> */}
//             {/* <RandomResultsContainer> */}
//               <ul className="theList">
//                 {result.map((item) => {
//                   return <li key={item.id}>{item.value}</li>     
//                   })
//                 }
//               </ul>
//             {/* </RandomResultsContainer> */}
//             </div>
//             </NavWrapper>
//             </AreaWrapper>
//           </MainHeader>
//   </RandomControlContainer>
//   <StyledInput>
//         <Input type="number" color="primary" onChange={handleInputChange}></Input>
//         </StyledInput>

//         <Button variant="contained" color="primary" onClick={randomize}>
//         Randomize
//         </Button>
// </StyledRandom>

// );