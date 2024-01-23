import { useRef, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const SearchForm: React.FC = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText.current) searchText.current.focus();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current?.value.trim() || "";

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("My book...");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigate("/book");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default SearchForm;

