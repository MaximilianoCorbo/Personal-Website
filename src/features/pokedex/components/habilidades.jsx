import { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(data);

  return data ? (
    <section className={`${data.types[0].type.name} seccion`}>
      <div className="bottom-section">
        <h2>{data.types[0].type.name}</h2>
      </div>
    </section>
  ) : (
    <p> Loading {name} </p>
  );
};

export default habilidades;
