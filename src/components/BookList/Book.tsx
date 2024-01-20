import { Link } from "react-router-dom";
export default function Book(book) {
  return (
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
    <div className="flex-none card w-full sm:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={book.cover_img} alt="Cover" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/book/${book.id}`} {...book}>
          <h2 className="card-title">{book.title}</h2>
          <p>Author: {book.author.join(", ")}</p>
          <p>Edition: {book.edition_count}</p>
          <p>First Publish Year: {book.first_publish_year}</p>
        </Link>
      </div>
    </div>
  </div>
  );
}
