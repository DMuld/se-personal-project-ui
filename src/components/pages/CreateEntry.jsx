import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateEntry() {

    const [inputs, setInputs] = useState({
        food:"",
        calories:"",
        fat:"",
        carbs:"",
        protein:"",
    });

    // const [search, setSearch] = useState({
    //     food:"",
    // });

    // const [searchResult, setSearchResult] = useState([]);


                // const [comments,setComments]=useState([])

                // useEffect(() => {
                //     fetchComments();
                // }, [])

                // useEffect(() => {
                //     console.log(comments)
                // }, [comments])

                // const fetchComments=async()=>{
                //     const response=await Axios('https://jsonplaceholder.typicode.com/comments');
                //     setComments(response.data)    
                // }

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    // const handleSearchChange = e => {
    //     setSearch(prev => ({...prev, [e.target.name]: e.target.value}))
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("/insertFoodRow", inputs);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    // function handleSearchSubmit() {
    //     try {
    //         axios.post("/readFoodRows", search)
    //         .then(response => setSearchResult(response.data))
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // // function searchSubmit(){
    // //     
    // // }
    // useEffect(()=>{handleSearchSubmit()});


    return (
        <>
            <h1>Create Row</h1>
            <form>
                <input required type="text" placeholder='food' name='food' onChange={handleChange}/>
                <input required type="number" placeholder='calories' name='calories' onChange={handleChange}/>
                <input required type="number" placeholder='fat' name='fat' onChange={handleChange}/>
                <input required type="number" placeholder='carbs' name='carbs' onChange={handleChange}/>
                <input required type="number" placeholder='protein' name='protein' onChange={handleChange}/>
                <button onClick={handleSubmit}>Insert</button>
            </form>
            <br></br>
            {/* <h1>Query For Row By Name</h1>
            <form>
                <input type="text" placeholder='food' name='food' onChange={handleSearchChange}/>
                <button onClick={handleSearchSubmit}>Search</button>
            </form>
            <h2>{searchResult.name}</h2> */}
        </>
    )
}