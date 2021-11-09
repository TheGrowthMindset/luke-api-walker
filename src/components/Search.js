import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Search = () => {
    const [categories, setCategories] = useState([])

    //useHistory is used to redirect to a new route when the form is 
    //submitted. 
    const history = useHistory();

    const [formInfo, setFormInfo] = useState({
        id:"",
        category: ""
    })
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log("logging response", response.data)
                let type = Object.keys(response.data)
                console.log(`These are the differnt things you can search for: ${type}`)
                setCategories(type)
            })
            .catch(error => console.log(error))
    }, [])


    //ChangeHandler// will help to update state variable formInfo to ////represent what is in the form
    const changeHandler = (e) =>{
        console.log("Changing inputs")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value 
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("form Info --> ",formInfo)

        //to make an api call to the starwars api we use axios
        axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
            .then(response =>{
                console.log("response from api after submitting form --->", response)
                history.push(`/${formInfo.category}/${formInfo.id}`)
            })
            .catch(error => console.log(error))
    }



    return (
        <div>
            <form onSubmit= {submitHandler} class="d-flex justify-content-between">
                <div>
                    <label htmlFor="">Search for: </label>
                    <select onChange={changeHandler} class="rounded" name="category" id="">
                    <option selected disabled value="">Choose Category</option>
                        {
                            categories.map((category, i) => {
                                return ( 
                                <option key = {i} value= {category}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input onChange = {changeHandler} className="rounded" type="number" name="id" id="id"></input>
                </div>
                <button class="rounded" type="submit" class="btn btn-primary">Search</button>
            </form>
        </div>
    );
}

export default Search;
