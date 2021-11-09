import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";

const Info = () => {

    //we use useParams to pass variables info
    const { id, category } = useParams();
    const [info, setInfo] = useState({})

    useEffect(() => {
        //make an api call to starwars to get information.
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response)
                setInfo(response.data)
            })
            .catch(error => console.log(error))
    }, [id, category])
    /*  // the id being in this dependency aray is saying that the code inside of useEffect() will only run upon the initial render of the component, and any other time that the variable id changes.
  */


    return (
        <div>
            {category == "people" ?
            <>
            <p>Showing info aboout person number: {id}</p>
            <h1>{info.name}</h1>
            <p> Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            </>: category == "planets"?
            <>
                <h1>Planet name: {info.name}</h1>
                <p>Climate: {info.climate}</p>
            </>: <h1>Its a a different category</h1>
    }
        </div>
    );
};

export default Info;