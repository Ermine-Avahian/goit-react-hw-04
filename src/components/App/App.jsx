import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMore/LoadMoreBtn ";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "tBK1OcRHFpNOwEr3Hkt2GI19pGIW1HEf4czTTeTa-p8";
const API_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          `${API_URL}?query=${query}&page=${page}&client_id=${API_KEY}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch {
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
export default App;
