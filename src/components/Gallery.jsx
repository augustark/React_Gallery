export default function Gallery({ current, blur }) {
  return (
    <div
      className="gallery"
      style={{
        transform: blur ? "scale(0)" : "scale(1)"
      }}
    >
      <img src={current} alt="" />
    </div>
  );
}
