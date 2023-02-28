import React from "react";
import ReactDOM  from "react-dom/client";

const BookList =() => {
  return <section>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}
const Book = () => {
  return <article>
<Image />
<Title />
<Author />
  </article>
}
const Image = () => <img src="https://m.media-amazon.com/images/I/41Pw77onK7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="The Courage to Be Free"/>
const Title = () => <h2>The Courage to Be Free: Florida's Blueprint for America's Revival</h2>
const Author = () => {
  return (
  <h4>Ron DeSantis</h4>
  )
}



  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
 
