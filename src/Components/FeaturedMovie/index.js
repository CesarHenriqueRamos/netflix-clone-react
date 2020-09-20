import React from 'react';
import './FeaturedMovie.css';
export default ({item}) =>{
    console.log(item);
    let firt_date = new Date(item.first_air_date);
    let genrer = [];
    for(let i in item.genres){
        genrer.push(item.genres[i].name);
    }
    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0,200)+'...';
    }
    return(
        <section className="featured" style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
           <div className="featured--vertical">
                <div className="featured--orizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--point">{item.vote_average} pontos</div>
                        <div className="featured--year">{firt_date.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} {item.number_of_seasons !== 1 ? 'Temporadas' : 'Temporada'}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchButton">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--myListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genrer"><strong>Generos:</strong>{genrer.join(', ')}</div>
                </div>
              
           </div> 
           
        </section>
    )
}