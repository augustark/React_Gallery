export default function Gallery({ current }) {
  return (
    <div
      className="gallery"
      style={{
        transform: current ? "scale(1)" : "scale(0)"
      }}
    >
      <img src={current} alt="" />
    </div>
  );
}
