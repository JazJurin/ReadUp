import { useGlobalContext } from "../../context";
import Loading from "../Loader/Loader";
import cover from "../../assets/images/cover.jpg";
import Book from "../BookList/Book";
const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : cover
    }
  });

  console.log(booksWithCovers);
  if (loading) return <Loading />;
  return (
    <section className='booklist'>
    <div className='container'>
      <div className='section-title'>
        <h2>{resultTitle}</h2>
      </div>
      <div className='booklist-content grid'>
        {
          booksWithCovers.slice(0, 30).map((item, index) => {
            return (
              <Book key = {index} {...item} />
            )
          })
        }
      </div>
    </div>
  </section>
  )
}

export default BookList