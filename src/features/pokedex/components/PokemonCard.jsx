import { useEffect, useState } from "react";
import "./PokemonCard.css";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const PokemonCard = ({ url }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [url]);

  return data ? (
    <section
      className={`${data.types[0].type.name} seccion`}
      onClick={() => {
        // Redirige a la ruta dinámica estructurada bajo /pokedex
        navigate(`/pokedex/pokemons/${data.id}`);
      }}
    >
      <div className="top-section">
        <h2>#{data.id}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          alt={data.name}
        />
      </div>

      <div className="bottom-section">
        <h2>{data.name}</h2>
      </div>
    </section>
  ) : (
    <Skeleton height={150} />
  );
};

export default PokemonCard;