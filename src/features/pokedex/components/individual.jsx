import { useEffect, useState } from "react";
import "./individual.css";
import flechaAtras from "../assets/img/svg/arrow_back.svg"; // Ajuste de ruta a assets del test
import anterior from "../assets/img/svg/chevron_left.svg";
import posterior from "../assets/img/svg/chevron_right.svg";
import pesa from "../assets/img/svg/weight.svg";
import regla from "../assets/img/svg/straighten.svg";
import pokebola from "../assets/img/svg/pokeball.svg";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// 1. LIMITES DE ID
const MIN_POKEMON_ID = 1;

const Individual = () => {
  const [data, setData] = useState();
  let { id } = useParams();

  // Obtenemos el límite de la API guardado, o usamos 1025 por defecto si no existe.
  const MAX_POKEMON_ID = parseInt(localStorage.getItem('max_pokemon_id'), 10) || 1025;

  useEffect(() => {
    const getPokemon = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const fetching = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
          requestOptions
        ).then((response) => response.json());

        const species = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        ).then((response) => response.json());

        // 1. BUSCAR DESCRIPCIÓN: Prioridad absoluta al español
        let descriptionEntry = species.flavor_text_entries.find(
          (entry) => entry.language.name === "es"
        );
        
        // Si no hay descripción en español, buscamos en inglés para evitar que quede crashee la app.
        if (!descriptionEntry) {
          descriptionEntry = species.flavor_text_entries.find(
            (entry) => entry.language.name === "en"
          );
        }

        // 2. BUSCAR NOMBRE EN ESPAÑOL
        const spanishNameEntry = species.names.find(
          (n) => n.language.name === "es"
        );
        const nameInSpanish = spanishNameEntry ? spanishNameEntry.name : fetching.name;

        setData({
          ...fetching,
          name: nameInSpanish, // Reemplazamos el nombre técnico en inglés por el traducido
          descripcion: descriptionEntry ? descriptionEntry.flavor_text : "No description available.",
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    getPokemon();
  }, [id]);

  return (
    <div className={`${data?.types[0].type.name || 'normal'} detalles`}>
      <div className="titulo">
        {/* Volver a la sección de la lista Pokédex */}
        <Link to="/pokedex" className="flecha-atras">
          <img src={flechaAtras} alt="Back" />
        </Link>
        <span className="nombre">{data ? data.name : <Skeleton width={100} />}</span>
        <span className="numero">
          {data ? `# ${data.id}` : <Skeleton width={40} />}
        </span>
      </div>
      <header className="headerIndividual">
        
        {/* 2. CONTROL DE NAVEGACIÓN ANTERIOR */}
        {parseInt(id) > MIN_POKEMON_ID ? (
          <Link to={`/pokedex/pokemons/${parseInt(id) - 1}`} className="anterior">
            <img src={anterior} alt="Anterior" />
          </Link>
        ) : (
          <div className="anterior" style={{ opacity: 0, pointerEvents: 'none' }}>
            <img src={anterior} alt="" />
          </div>
        )}

        <div className="Imagen">
          {data && (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              className="overlay-image"
              alt={data?.name}
            />
          )}
        </div>

        {/* 3. CONTROL DE NAVEGACIÓN POSTERIOR */}
        {parseInt(id) < MAX_POKEMON_ID ? (
          <Link to={`/pokedex/pokemons/${parseInt(id) + 1}`} className="posterior">
            <img src={posterior} alt="Posterior" />
          </Link>
        ) : (
          <div className="posterior" style={{ opacity: 0, pointerEvents: 'none' }}>
            <img src={posterior} alt="" />
          </div>
        )}

      </header>

      <div className="tarjeta">
        <div className="fichas">
          {data?.types.map((type, idx) => (
            <div key={idx} className={`fichaTipo ${type.type.name}`}>
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="tipo"></div>
        <div className="acerca">
          <span className="sobre">About</span>
        </div>
        <div className="atributos">
          <div className="peso">
            <div className="detallesPeso">
              <img className="pesasvg" src={pesa} alt="Weight" />
              <span className="kilos">
                {data ? `${data.weight / 10} KG` : <Skeleton width={50} />}
              </span>
            </div>
            <span className="totalPeso">Weight</span>
          </div>
          <div className="divider"></div>
          <div className="altura">
            <div className="detalleAltura">
              <img className="reglasvg" src={regla} alt="Height" />
              <span className="metros">
                {data ? `${data.height / 10} m` : <Skeleton width={50} />}
              </span>
            </div>
            <span className="totalAltura">Height</span>
          </div>
          <div className="divider"></div>
          <div className="movimientos">
            <div className="tipoMovimientos">
              {data?.abilities.map((ability, idx) => (
                <span key={idx} className="tipoMovimientos">{ability.ability.name}</span>
              ))}
            </div>
            <span className="totalMovimientos">Moves</span>
          </div>
        </div>
        <div className="describe">
          <p className="descripcion">
            {data ? data.descripcion : <Skeleton count={3} />}
          </p>
        </div>
        <div className="baseEstadisticas">
          <span className="base">Base Stats</span>
        </div>
        <div className="estadisticas">
          <div className="etiqueta">
            <span className="nombreValores">HP</span>
            <span className="nombreValores">ATK</span>
            <span className="nombreValores">DEF</span>
            <span className="nombreValores">SATK</span>
            <span className="nombreValores">SDEF</span>
            <span className="nombreValores">SPD</span>
          </div>

          <div className="divider"></div>

          <div className="numerosEstadisticas">
            <span className="numeroValores">{data?.stats?.[0]?.base_stat}</span>
            <span className="numeroValores">{data?.stats?.[1]?.base_stat}</span>
            <span className="numeroValores">{data?.stats?.[2]?.base_stat}</span>
            <span className="numeroValores">{data?.stats?.[3]?.base_stat}</span>
            <span className="numeroValores">{data?.stats?.[4]?.base_stat}</span>
            <span className="numeroValores">{data?.stats?.[5]?.base_stat}</span>
          </div>
          <div className="barras">
            {/* 4. SE RENDERIZAN LAS BARRAS CON SAFREGUARDA SI DATA NO EXISTE AÚN */}
            {data?.stats ? (
              data.stats.map((stat, idx) => (
                <div key={idx} className="barraValores">
                  <div className="marcaValores">
                    <div
                      className="contenidoValores"
                      style={{ width: `${stat.base_stat / 2}%` }}
                    ></div>
                    <div className="fondoValores"></div>
                  </div>
                </div>
              ))
            ) : (
              /* Muestra barras de esqueleto mientras carga */
              Array(6).fill(0).map((_, idx) => (
                <div key={idx} className="barraValores">
                  <Skeleton height={8} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <img className="pokebola" src={pokebola} alt="Pokeball BG" />
    </div>
  );
};

export default Individual;