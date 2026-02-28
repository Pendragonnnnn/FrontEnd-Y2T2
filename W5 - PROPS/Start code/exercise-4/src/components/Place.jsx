export default function Place({prop:{id, image:{src, alt}, title}}) {
  return (
    <li key={id} className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
