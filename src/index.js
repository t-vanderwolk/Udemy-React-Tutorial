import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

const books = [
{
  author: "Ron DeSantis",
  title: "The Courage to Be Free: Florida's Blueprint for America's Revival",
  img: './images/book-1.jpg',
  id: 1
 
},

{
  author: "James Clear",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  img: './images/book-2.jpg',
  id: 2,
},

{
  author: "Deborah Hopkinson",
  title: "My Little Golden Book About Betty White",
  img: './images/book-3.jpg',
  id: 3,
  
},
];

const BookList =() => {

  return (
  <section className="booklist">
    <EventExamples />
    {books.map((book) => {
     
      return <Book {...book} key={book.id}/>;
      })}
  </section>
  );
};


const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};


const Book = (props) => {
  const { img, title, author } = props;
console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
 
