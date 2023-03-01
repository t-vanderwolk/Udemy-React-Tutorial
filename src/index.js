import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

const BookList =() => {
  return <section className="booklist">
    <Book1 />
    <Book2 />
    <Book3 />
   
  </section>
}
const Book1 = () => {
  return <article className="book">
<Image1 />
<Title1 />
<Author1 />
  </article>
}
const Image1 = () => <img src="./images/book-1.jpg" alt="The Courage to Be Free"/>
const Title1 = () => <h2>The Courage to Be Free: Florida's Blueprint for America's Revival</h2>
const Author1 = () => {
  return (
  <h4>Ron DeSantis</h4>
  )
}
const Book2 = () => {
  return <article className="book">
<Image2 />
<Title2 />
<Author2 />
  </article>
}
const Image2 = () => <img src="./images/book-2.jpg" alt="Atomic Habits"/>
const Title2 = () => <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
const Author2 = () => {
  return (
  <h4>James Clear</h4>
  )
}
const Book3 = () => {
  return <article className="book">
<Image3 />
<Title3 />
<Author3 />
  </article>
}
const Image3 = () => <img src="./images/book-3.jpg" alt="The Courage to Be Free"/>
const Title3 = () => <h2>My Little Golden Book About Betty White</h2>
const Author3 = () => {
  return (
  <h4>Deborah Hopkinson</h4>
  )
}



  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
 
