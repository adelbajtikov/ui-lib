import React, { useState } from "react";
import Heading from "./components/Heading";
import { Button } from "./components/Button";
import Accordion from './components/Accordion';
import Input from "./components/Input";
import Tooltip from "./components/Tooltip";
import Typography from "./components/Typography";

function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [blueValue, setBlueValue] = useState(""); 
  const [dangerValue, setDangerValue] = useState(""); 
  return (
    <div style={{ padding: "20px" }}>
      {/* Заголовок */}
      <Heading level={1} color="#007bff" align="center">
        Welcome to My App
      </Heading>

      {/* Кнопки */}
      <div style={{ margin: "20px 0" }}>
        <Button size="sm" variant="primary"> Button</Button>
        <Button size="md" variant="primary"> Button</Button>
        <Button size="lg" variant="primary"> Button</Button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Button size="sm" variant="bordered"> Button</Button>
        <Button size="md" variant="bordered"> Button</Button>
        <Button size="lg" variant="bordered"> Button</Button>
      </div>

      <div style={{ padding: "20px" }}>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Input 
          type="text" 
          placeholder="Enter your name" 
          value={blueValue} 
          onChange={(e) => setBlueValue(e.target.value)} 
          label="Name"
          blue={true}
        />
        <Input
          label="Name"
          placeholder="Enter your name"
          value={dangerValue} 
          onChange={(e) => setDangerValue(e.target.value)}  
          danger={true}
        />
      </div>

      <div style={{ padding: "20px", width: "550px" }}>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>

        <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>

        <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer its process by providing innovative administrative and instructional technologies. Click here for our beliefs. If you are a school administrator and would like to use ecourse.org for your classes, please create school profiles. Instructors and students may signup independent user account. For questions, contact us.
        </Typography>
      </div>

      {/* Хеадинг */}
      <div style={{ padding: "20px" }}>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>

      <div className="tooltip-container">
        <Tooltip text="Tooltip text" position="top">Top Tooltip</Tooltip>
        <Tooltip text="Tooltip text" position="left">Left Tooltip</Tooltip>
        <Tooltip text="Tooltip text" position="right">Right Tooltip</Tooltip>
        <Tooltip text="Tooltip text" position="bottom">Bottom Tooltip</Tooltip>
      </div>

      {/* Аккордеон */}
      <Accordion title="Accordion 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
      <Accordion title="Accordion 2" defaultOpen>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion>
    </div>
  );
}

export default App;
