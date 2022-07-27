import images from "../images";

export default function Thumbnails({ handleClick, setCurrent }) {
  const handleBlur = (e) => {
    setCurrent("");
  };

  return (
    <div className="container">
      <div className="thumbnails">
        {images.map((url, i) => (
          <button onClick={handleClick} key={i} onBlur={handleBlur}>
            <img src={url} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
