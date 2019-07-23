import React from "react";

/**
 * Components
 */
import { Heading, SubHeading, Button } from '../common';


// import Heading from "../common/heading";
// import SubHeading from "../common/sub-heading";
// import Button from '../common/button';

import "./styles.css";

function App() {
  const clickHandler = e => console.log(e, 'e inside clickHandler');
  return (
    <div className="App">
      <h1>Let's start</h1>
      <Heading className='app' as='h2'>
        This is heading
        <br/>
        <SubHeading>This is sub SubHeading</SubHeading>
        <br/>
        <Button onClick={clickHandler}>Click Me!</Button>
      </Heading>
    </div>
  );
}

export default App;
