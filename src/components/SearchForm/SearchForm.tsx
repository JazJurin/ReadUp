import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
export default function SearchForm() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("My book...");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="My book"
        ref={searchText}
        className="input input-bordered w-24 md:w-auto"
      />
      <button
        type="submit"
        className="btn mt-5 btn-xs btn-outline"
        onClick={handleSubmit}
      >
        SEARCH MY BOOK
      </button>
    </div>
  );
}
