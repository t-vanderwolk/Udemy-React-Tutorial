import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';


const author = 'Ron DeSantis';
const title = "The Courage to Be Free: Florida's Blueprint for America's Revival";
const img = './images/book-1.jpg';

const BookList =() => {
  return (
  <section className="booklist">
    <Book author={author} title={title} img={img}/>
    <Book author={author} title={title} />

  </section>
  );
};
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
// const Book1 = () => {
//   return <article className="book">
// <Image1 />
// <Title1 />
// <Author1 />
//   </article>
// }
// const Image1 = () => <img src="./images/book-1.jpg" alt="The Courage to Be Free"/>
// const Title1 = () => <h2>The Courage to Be Free: Florida's Blueprint for America's Revival</h2>
// const Author1 = () => {
//   return (
  
//   <h4>
//   Ron DeSantis</h4>
//   )
// }
// const Book2 = () => {
//   return <article className="book">
// <Image2 />
// <Title2 />
// <Author2 />
//   </article>
// }
// const Image2 = () => <img src="./images/book-2.jpg" alt="Atomic Habits"/>
// const Title2 = () => <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
// const Author2= () => {


// return <h4> Jordan Moore </h4>;
// };
  

// const Book3 = () => {
//   return <article className="book">
// <Image3 />
// <Title3 />
// <Author3 />
//   </article>
// }
// const Image3 = () => <img src="./images/book-3.jpg" alt="The Courage to Be Free"/>
// const Title3 = () => <h2>My Little Golden Book About Betty White</h2>
// const Author3 = () => {
//   return (
   
//   <h4>Deborah Hopkinson</h4>
//   )
// }



  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
 
