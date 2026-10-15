import "./Trending.css";

const movies = [
  { id: 1, title: "Royals", img: "./images/img1.jpg" },
  { id: 2, title: "Chhapaak", img: "./images/img2.jpg" },
  { id: 3, title: "Beast", img: "./images/img3.jpg" },
  { id: 4, title: "The Diplomat", img: "./images/img4.jpg" },
  { id: 5, title: "Court", img: "./images/img5.jpg" },
];

function Trending() {
  return (
    <section className="trending">
      <h2>Trending Now</h2>
      <div className="movie-row">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <span className="rank">{movie.id}</span>
            <img src={movie.img} alt={movie.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;