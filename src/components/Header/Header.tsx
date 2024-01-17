import NavBar from "../NavBar/NavBar";
import Hero from "../../assets/images/Hero.jpg"
import SearchForm from "../SearchForm/SearchForm";
const Header = () => {
  return (
    <div>
      <header>
        <div
          className="hero min-h-screen flex flex-col items-start"
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          <NavBar />
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-left text-neutral-content mt-9">
            <div className="max-w-md mt-40">
              <h1 className="mb-5 text-5xl font-bold">
                FIND YOUR FAVORITE BOOK
              </h1>
              <p className="mb-5">
                Welcome to ReadUp, where the world of literature
                unfolds at your fingertips! Discover the joy of choosing your
                next captivating read from our extensive library. Dive into a
                realm of diverse genres, compelling stories, and literary
                adventures that cater to every taste.
              </p>
              <SearchForm />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
