import React from 'react'; // ESLint might warn about unused import if not used
import { useState, useEffect } from 'react'; // Redundant import

const TestingComp = (props: any) => {
  // Missing explicit return type (for TypeScript rules)
  console.log(props);
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('Button clicked'); // ESLint rule: no-console
    setCount(count + 1);
  }

  function unusedFunction() {
    // ESLint rule: no-unused-vars
    return 'I am not used';
  }

  const [newcount, setNewCount] = useState(0);
  console.log(newcount, setNewCount);
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
      <img src="image.png" /> {/* ESLint rule: @next/next/no-img-element */}
    </div>
  );
};

export default TestingComp;
