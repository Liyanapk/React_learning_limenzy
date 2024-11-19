import { useReducer } from "react";

//defining the reducer function
const reducer =(state,action)=>{
   
    switch(action.type){

        case "INCREASE":
        return state+1;

        case "DECREASE":
        return state-1;
        
        case "RESET":
        return 0;

        default:return state
    }

   
}
    //initilizing reducer

     export const Reducer=()=>{
        const [count, dispatch]=useReducer(reducer,0) //initial state


    return (
        <div>
          <h1>Count: {count}</h1>
    
          {/* Step 3: Dispatch actions when buttons are clicked */}
          <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
          <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
      );
    };

    
    



