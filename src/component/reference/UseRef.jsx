
// //without ref


// import { useState, useEffect } from "react";

// export const InputField = () => {
//   const [inputValue, setInputValue] = useState(""); 

  
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   useEffect(() => {
//     console.log("Component rendered. Current input value:", inputValue);
//   }, [inputValue]); 

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue} 
//         onChange={handleInputChange} 
//         placeholder="Type something"
//       />
//       <p>Input value is: {inputValue}</p> 
//     </div>
//   );
// };





//with ref

import { useRef, useEffect } from "react";

export const InputField = () => {
    
  const inputRef = useRef(null); 

 
  const getInputValue = () => {
    console.log("Input value is:", inputRef.current.value);
  };

 
  useEffect(() => {
    console.log("Component mounted.");
    console.log("Initial input value (via ref):", inputRef.current.value);
  }, []); 

  return (
    <div>
      <input
        ref={inputRef} 
        type="text"
        placeholder="Type something"
      />
      <button onClick={getInputValue}>Get input value</button>
    </div>
  );
};
