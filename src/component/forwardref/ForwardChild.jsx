// import React, { useRef } from 'react';

// const InputComponent = () => {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus(); // You cannot access this from the parent
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// const ParentComponent = () => {
//   const inputRef = useRef(null);

//   return <InputComponent ref={inputRef} />; // Error: ref is not forwarded
// };


// export default InputComponent





import React, { forwardRef } from 'react';

// Use forwardRef to forward the ref to the input element
export const InputComponent = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
});