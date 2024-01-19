import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function SearchForm() {
  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
          />
          <button type="submit" className="flex flex-c">
              <FaSearch className= "text-grey m-5" size = {20} />
          </button>
          
    </div>
  );
}
