import React, { useRef } from 'react';
import { InputComponent } from './ForwardChild';

export const ParentComponent = () => {
    const inputRef = useRef(null);
  
    const focusInput = () => {
      inputRef.current.focus(); // Now you can access the input element in the child
    };
  
    return (
      <div>
        <InputComponent ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  };