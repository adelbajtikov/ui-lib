import React, { useState } from "react";
import Heading from "./components/Heading";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";
import Input from "./components/Input";
import Tooltip from "./components/Tooltip";
import Typography from "./components/Typography";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      {/* Заголовок */}
      <Heading level={1} color="#007bff" align="center">
        Welcome to My App
      </Heading>

      {/* Кнопки */}
      <div style={{ margin: "20px 0" }}>
        <Heading level={2} color="black" align="left">
          Button component
        </Heading>
        <Button size="sm" variant="primary"> Button</Button>
        <Button size="md" variant="primary"> Button</Button>
        <Button size="lg" variant="primary"> Button</Button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Button size="sm" variant="bordered"> Button</Button>
        <Button size="md" variant="bordered"> Button</Button>
        <Button size="lg" variant="bordered"> Button</Button>
      </div>

      {/* Поле ввода с подсказкой */}
      <div style={{ margin: "20px 0" }}>
        <Tooltip text="Enter your name" position="top">
          <Input
            placeholder="Your name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ width: "300px" }}
          />
        </Tooltip>
      </div>

      {/* Типографика */}
      <Typography variant="body">
        Tooltip appears when you hover over the input field. Enter your name to see it in action.
      </Typography>

      {/* Аккордеон */}
      <div style={{ marginTop: "20px" }}>
        <Accordion title="Section 1">
          <p>Content for section 1. This section can contain any content.</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>Content for section 2. You can expand or collapse this section.</p>
        </Accordion>
        <Accordion title="Section 3">
          <p>Content for section 3. Use this component to organize content neatly.</p>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
