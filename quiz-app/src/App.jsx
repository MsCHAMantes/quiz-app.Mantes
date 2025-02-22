import React from 'react';
import Body from './component/Body';
import Part2 from './component/Part2';
import Part3 from './component/Part3';

function App() {

  return(
    <>
    <Header/>
    <Body 
    option1="Berlin"
    option2="Madrid"
    option3="Paris"
    option4="Lisbon"/>

    <Part2 
    option1-1="Google"
    option1-2="Facebook"
    option1-3="Microsoft"
    option1-4="Apple"/>

    <Part3
    option2-1="Python"
    option2-2="Java"
    option2-3="Javascript"
    option2-4="C++"
    />

    </>
  )
}
export default App;
