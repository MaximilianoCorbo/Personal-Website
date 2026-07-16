import { useEffect, useState, useRef } from 'react'
import './pokedex.css'
import PokemonCard from './components/PokemonCard'
import Pokeball from './assets/img/svg/pokeballwhite.svg'
import Search from './assets/img/svg/search.svg'
import Sort from './assets/img/svg/sort.svg'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  // 1. ESTADO DE ORDENAMIENTO (4 opciones posibles)
  const [sortType, setSortType] = useState('numeric-asc') 

  // 2. ESTADOS PARA EL INFINITE SCROLL
  const [visibleCount, setVisibleCount] = useState(24) // Lote inicial
  const loaderRef = useRef(null)

  // Unificación de Fetch: Carga todos los Pokémon de forma dinámica y guarda el total
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    // Usamos un límite alto (2000) para asegurar que traiga a todos los Pokémon existentes
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0", requestOptions)
      .then(response => response.json())
      .then(result => {
        setPokemons(result.results);
        
        // GUARDAMOS EL TOTAL DINÁMICO DE LA API EN EL NAVEGADOR
        if (result.count) {
          localStorage.setItem('max_pokemon_id', result.count);
        }
      })
      .catch(error => console.log('error', error));  
  }, []);

  // Auxiliar para extraer el ID desde el URL del Pokémon
  const getPokemonId = (url) => {
    const parts = url.split("/");
    return parseInt(parts[parts.length - 2], 10);
  }

  // Función para rotar de forma secuencial por los 4 tipos de ordenamiento
  const handleSortRotation = () => {
    const orderCycle = {
      'numeric-asc': 'numeric-desc',
      'numeric-desc': 'alphabetical-asc',
      'alphabetical-asc': 'alphabetical-desc',
      'alphabetical-desc': 'numeric-asc'
    };
    setSortType(orderCycle[sortType]);
    setVisibleCount(24); // Al reordenar, volvemos a mostrar desde el principio
  };

  // Función auxiliar para obtener el texto descriptivo del botón
  const getSortLabel = () => {
    switch (sortType) {
      case 'numeric-asc':
        return 'Nº Pokédex (Menor a Mayor)';
      case 'numeric-desc':
        return 'Nº Pokédex (Mayor a Menor)';
      case 'alphabetical-asc':
        return 'Alfabético (A - Z)';
      case 'alphabetical-desc':
        return 'Alfabético (Z - A)';
      default:
        return 'Ordenar';
    }
  };

  // 3. FILTRADO Y ORDENADO EN TIEMPO REAL
  const processedPokemons = [...pokemons]
    .filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const idA = getPokemonId(a.url);
      const idB = getPokemonId(b.url);

      switch (sortType) {
        case 'numeric-asc':
          return idA - idB;
        case 'numeric-desc':
          return idB - idA;
        case 'alphabetical-asc':
          return a.name.localeCompare(b.name);
        case 'alphabetical-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  // Recortar la lista para mostrar solo lo que el scroll ha cargado
  const displayedPokemons = processedPokemons.slice(0, visibleCount);

  // 4. CONFIGURAR EL INTERSECTION OBSERVER (Infinite Scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setVisibleCount((prevCount) => prevCount + 24);
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [displayedPokemons]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setVisibleCount(24); // Volvemos al inicio al buscar para evitar desbordes de renderizado
  };

  return (
    <div className='pokedex-app-wrapper'> 
      <div className='Estructura Primary'>
        <header className='buscador'>
          <div className='todo'>
            <div>
              <img src={Pokeball} alt="Logo"/>
              <h1>Pokédex</h1>
            </div>
            
            <button 
              onClick={handleSortRotation}
              className="btn-sort"
            >
              <img src={Sort} alt="Ordenar" />
              <span>{getSortLabel()}</span>
            </button>
          </div>

          <div className='search'>
            <button>
              <img src={Search} alt="Buscar"/> 
            </button>
            
            <input 
              type="text" 
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </header>
        
        <div className='BodyWrapper'>
          {/* Renderizado de tarjetas controladas por el Infinite Scroll */}
          {!!displayedPokemons.length && displayedPokemons.map((pokemon) => (
            <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
          ))}
        </div>

        {/* Disparador de carga del Infinite Scroll */}
        {displayedPokemons.length < processedPokemons.length && (
          <div ref={loaderRef} className="loading-trigger" style={{ height: '40px', margin: '20px 0', textAlign: 'center' }}>
            <p>Cargando más Pokémon...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App