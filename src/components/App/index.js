import { useEffect, useState } from "react";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("http://localhost:8000/shows/");

      // '{ "name": "Picture of dorian grey", ""... }'

      const result = await response.json(response);
      setShows(result);
    };
    fetchShows();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgb(120, 52, 90)",
      }}
    >
      <h1
        style={{
          fontSize: 44,
          color: "yellow",
          fontWeight: "bold",
        }}
      >
        90's TV shows
      </h1>
      <div>
        {shows.map((show) => (
          <div
            style={{
              padding: 15,
              fontSize: 24,
              color: "yellow",
              borderRadius: 5,
              border: "2px solid yellow",
            }}
          >
            {show.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// const myFunction = (name) => {
//   console.log('hello', name);
// }

// myFunction(name = 'Andre')
