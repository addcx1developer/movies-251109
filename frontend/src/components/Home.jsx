import Ticket from "../images/movie_tickets.jpg";

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold border-b border-gray-300 p-2">
        Find a movie to watch tonight!
      </h2>
      <div className="flex justify-center p-2">
        <img src={Ticket} alt="movie tickets" />
      </div>
    </div>
  );
}

export default Home;
