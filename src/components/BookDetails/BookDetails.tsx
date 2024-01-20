import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import cover from "../../assets/images/cover.jpg";

const URL = "https://openlibrary.org/works/";
const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : cover,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);
  console.log(book);
  if (loading) return <Loading />;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={book?.cover_img} alt="cover img" className="mx-auto" />
      </figure>
      <div className="card-body">
        <h2 className="text center text-xl font-bold">{book?.title}</h2>
        <p>{book?.description}</p>
        <p>Subject Places: {book?.subject_places}</p>
        <p>Subject Times: {book?.subject_times}</p>
        <p>Subjects: {book?.subjects}</p>
      </div>
      <div className="flex items-center justify-center">
  <button
    className="btn btn-circle btn-outline"
    onClick={() => navigate("/book")}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

    </div>
  );
};

export default BookDetails;
