//create a button 



// export const MyButton = ()=>{

//    return(
// <div>
//     <h1>hello</h1>
//     <button>CLICK ME</button>
// </div>
//    )
// }




// const product = [
//     {item:'mango',isFriut:true,id:'1'},
//     {item:'carrot',isFriut:false,id:'2'}

// ]


// export const ListItems =()=>{
  
        
//             const allProduct = product.map((produucts)=>(

//                 <li
//                 key={produucts.id}
//                 style={{
//                     color:produucts.isFriut?'green':'red',
//                 }}>
//                    {produucts.item}
//                 </li>
//             ))
//             return(
//                 <ul>{allProduct}</ul>
//             )

   
// }


// export const MyButton =()=>{
//    function handleClick(){
//         alert('you clicked me!')
//     }

//     return(
//         <button onClick={handleClick}>CLICK</button>
//     )
// }






// import { useState } from "react";


// const image={
//     imageUrl:'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',

// }


// export const MyButton =()=>{



//     const [count,setCount]=useState(0);

//     function handleIncrement(){
//         setCount(count + 1)
//     }
    

//     function handleDecrement(){
//         setCount(count - 1)
//         if(count<=0){
//            setCount(0)
//         }
//     }

//     return(
//        <div>

//         <img
//         src={image.imageUrl}
//         alt="carrot"
//         style={
//             {
//                 width:200,
//                 height:200,
//                 paddingTop:30,
//                 borderRadius:10, 
            

//             }
//         }
        
//         ></img>

//          <div style={{display:"flex",justifyContent:"center"}}>
//          <button onClick={handleDecrement} style={{}}>- </button>
//         {count}
//         <button onClick={handleIncrement} style={{}}> + </button>
        
   
//         </div>
        

//        </div>
        
       

//     )
// }
