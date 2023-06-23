import "./header.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button,Input,HStack } from "@chakra-ui/react"
import img  from "../Im/img.jpeg";
const Header=()=>{
    const [nam,setNam]=useState("marvel");
    return(
        <div className="header">
            <div className="headerLeft">
            <HStack spacing='0.5rem'>
            <Link to="/"><img src={img} alt="Home"></img></Link>
                <Link to="movielist/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="movielist/top_rated" style={{textDecoration:"none"}}><span>TopRated</span></Link>
                <Link to="movielist/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
                <Input placeholder='Searh' minW="150px" onChange={e=>setNam(e.target.value)}/>
                <Link to={"moviesearch/"+nam} style={{textDecoration:"none"}}><Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='gold'
>
  Search
</Button></Link>

            </HStack>
                
            </div>

        </div>
    )
}

export default Header;