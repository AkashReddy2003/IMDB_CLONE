import React,{useEffect, useState} from "react";
import "./Home.css";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";


const Home=()=>{
    const [pmovies,setPmovies]=useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c2899d71d30fa9c7b241d1e5cebff6b4&language=en-US&page=1")
        .then((res)=>{
            
            setPmovies(res.data.results);
        })
    },[])
    return(
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
                {
                    pmovies.map(movie=>(
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        
                    ))
                }

            </Carousel>
            <MovieList/>

        </div>
    )
}

export default Home;

//c2899d71d30fa9c7b241d1e5cebff6b4