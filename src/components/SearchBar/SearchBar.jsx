import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <RiSearchLine size={20} />
        </button>
      </form>
      <Toaster />
    </header>
  );
};
export default SearchBar;
