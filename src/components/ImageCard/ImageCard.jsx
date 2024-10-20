import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};
export default ImageCard;
