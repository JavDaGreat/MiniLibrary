import books from './assets/childrensbooks.json';
import BookShow from './bookShow';

function BookList(){
 
  const content =books.map((book)=>{
    return <BookShow  title={book.title} author={book.author} id={book.id} key={book.id} plot={book.plot} year={book.year} color={book.color}/>

  })


  
  return <div className='bookList'>{content}</div>
}
export default BookList


