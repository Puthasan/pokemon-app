import { fetchDataAction } from "../actions/index.js"; // Import your action(s) here



function HomePage({data}) {
  const fetchData = () => {
    const id = Math.floor(Math.random() * 1302) + 1;
    dispatch(fetchDataAction(id));
  };

  


  return(
    <div>
      <h1>Random Pokemon</h1>
      <button onClick={fetchData}>Fetch Random Pokemon Data</button>
      {data ? (
        <div>
          <img src={data.sprite} alt={data.name} />
          <p>
            Name: {data.name.charAt(0).toUpperCase() + data.name.substring(1)}
          </p>
          <p>
            Type:{" "}
            {Array.isArray(data.type)
              ? data.type.map((type, index) => (
                  <span key={index}>
                    {type} {typeEmojis[type]}{" "}
                  </span>
                ))
              : `${data.type} ${typeEmojis[data.type]}`}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HomePage;