import React, {useEffect, useState} from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Card from "./Card"
import axios from "axios"
import "./Card.css";
import { Button,Center, Input,Skeleton } from "@chakra-ui/react"

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const [page,setPage]=useState(1);
    const [tot,setTot]=useState(2);
    const [load,setLoad]=useState(true);
    const {type} = useParams()

   

    useEffect(() => {
        setLoad(true);
        getData()
        setTimeout(()=>
        {
            setLoad(false)
        },1500)
        
    }, [page])
    useEffect(() => {
        setLoad(true);
        setPage(1)
        getData()
        setTimeout(()=>
        {
            setLoad(false)
        },1500)
        
    }, [type])

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c2899d71d30fa9c7b241d1e5cebff6b4&language=en-US&page=${page}`)
        .then(res => {setMovieList(res.data.results)
        setTot(res.data.total_pages)
       
    }
        )
    }

    return (<>
     <div className="movie__list">
     <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
     <div className="list__cards">
        
     {load?
     <>
     <div className="cards">
     <Skeleton height={300}/>
     
     </div>
     <div className="cards">
     <Skeleton height={300}/>
     
     </div>
     <div className="cards">
     <Skeleton height={300}/>
     
     </div>
     <div className="cards">
     <Skeleton height={300}/>
     
     </div>
     </>
     :
        <>
         {
             movieList.map(movie => (
                 <Card movie={movie} />
             ))
         }
         </>
    }

    
</div>
     <Center>
     <Button
     border='2px'
     borderColor='gold' 
     onClick={()=>{page>1?setPage(page-1):setPage(1)}}>Prev</Button>
     <div style={{minWidth:"50px"}}>

     <Center>
     <h1>{page}</h1>
     </Center>
     </div>
     <Button 
     border='2px'
     borderColor='gold'
     onClick={()=>{page<tot?setPage(page+1):setPage(1)}}>Next</Button>
     </Center>
     <h1>Total Pages:{tot}</h1>
     
 </div>
       
        </>
    )
}

export default MovieList