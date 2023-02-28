import React from "react";
import ReactDOM  from "react-dom/client";

function Greeting () {
    return( 
    <h2>Hello world</h2>);
//       <>
//     <div className="someValue">
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a href="#">
// Hello World
//           </a>
//         </li>
//       </ul>
//     </div>
//     <h2>hello world</h2>
//     <input type='text' name='' id='' />
//     </>);
  };


  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
 
