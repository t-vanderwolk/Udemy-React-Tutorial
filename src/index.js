import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

const books = [
{
  author: "Ron DeSantis",
  title: "The Courage to Be Free: Florida's Blueprint for America's Revival",
  img: './images/book-1.jpg'
},

{
  author: "James Clear",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  img: './images/book-2.jpg'
},

{
  author: "Deborah Hopkinson",
  title: "My Little Golden Book About Betty White",
  img: './images/book-3.jpg'
},
];

const names = ['Taylor','Ava','Trish'];
const newNames = names.map((name)=> {
 return <h1>{name}</h1>
});
console.log(newNames);
const BookList =() => {

  return (
  <section className="booklist">{newNames}</section>
  );
};
const Book = (props) => {
const {img, title, author, } = props;
console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
   
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


// return <h4> James Clear </h4>;
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
 
