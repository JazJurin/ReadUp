import { useGlobalContext } from "../../context";
import Loading from "../Loader/Loader";
import cover from "../../assets/images/cover.jpg";
import Book from "../BookList/Book";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : cover,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {booksWithCovers.slice(0, 30).map((item, index) => (
            <Book key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
