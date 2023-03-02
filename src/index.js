import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';




const Book1 ={
  author: "Ron DeSantis",
  title: "The Courage to Be Free: Florida's Blueprint for America's Revival",
  img: './images/book-1.jpg'
}

const Book2 ={
  author: "James Clear",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  img: './images/book-2.jpg'
}

const Book3 ={
  author: "Deborah Hopkinson",
  title: "My Little Golden Book About Betty White",
  img: './images/book-3.jpg'
}

const BookList =() => {

  return (
  <section className="booklist">
    <Book author={Book1.author} title={Book1.title} img={Book1.img}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
    </Book>
    <Book author={Book2.author} title={Book2.title} img={Book2.img} />
    <Book author={Book3.author} title={Book3.title} img={Book3.img} />

  </section>
  );
};
const Book = (props) => {
const {img, title, author, children} = props;
console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
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
 
