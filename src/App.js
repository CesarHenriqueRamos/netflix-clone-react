import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/header';

function App() {
  const [movieList,setMovieList] =  useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setBlackHearer] = useState(false);
  useEffect( () =>{
    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      //pegando a lista
      setMovieList(list)
      //pegando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setfeaturedData(chosenInfo);
    }
    loadAll();
  },[]);
  useEffect( () =>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHearer(true)
      }else{
        setBlackHearer(false);
      }
    }
    window.addEventListener('scroll',scrollListener);
    return ()=>{
      window.removeEventListener('scroll',scrollListener);
    }
  },[]);
  return (
    
    <div className="page">
        <Header black={blackHeader} />
        {featuredData && <FeaturedMovie item={featuredData} />}        
        <section className="lists">
            {movieList.map((item,key) =>(
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
        </section>
        <footer>
          <div>
            <p>Feito por Cesar Henrique Ramos</p>
            <p>Direitos de Imagem da Netflix</p>
            <p>Dados pegos da Api do Themoviedb.org</p>
          </div>
        </footer>
        {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" alt="Carregando"/>
        </div>
        }
    </div>
  );
}

export default App;
