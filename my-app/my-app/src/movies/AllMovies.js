import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



function AllMovies() {
    // function seemore(){
    //     window.location.href='http://localhost:3000/moviedetail'
    //   }

    const [data, setData] = useState([])
    const [genres, setAllGenres] = useState([])
    const [input, setInput] = useState('')
    const [country, setCountry] = useState('')
    const [genre, setGenre] = useState([])
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')




    let filter = () => {
        let query = ''
        query += 'type=' + input
        query += '&country=' + country
        query += '&genre=' + genre
        query += '&year=' + year
        query += '&rating=' + rating

        console.log(query)

        axios.get('http://localhost:4500/movies?' + query).then((response) => setData(response.data))
    }


    useEffect(() => {
        axios.get('http://localhost:4500/genres').then((response) => setGenre(response.data))
        axios.get('http://localhost:4500/movies').then((response) => setData(response.data))

    }, [])


    return (

        <div>

            <h2 className='title'>Best Film And Movies Watch Online </h2> <br />

            <div className='choose'>
                <div className='options'>
                    <label className='label'>choose a genre</label> <br />
                    <select className='genre' onChange={(e) => setAllGenres(e.target.value)}>
                        <option value="choose a genre">Choose The Genre</option>
                        {genres.map((item) => (
                            <option key={item._id} value={item._id}>{item.genreName} </option>
                        ))}
                    </select>  <br />

                    <label className='label'>Choose The Country</label> <br />
                    <select className='country' onChange={(e) => setCountry(e.target.value)}>
                        <option value="choose country">Choose The Country</option>
                        <option value="USA">USA</option>
                        <option value="Aremenia">Armenia</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="Brazil">Brazil</option>
                        <option value="France">France</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Latvia">Latvia</option>
                    </select>
                </div>
                <div className='range'>
                    <label className='label'>Choose a year</label> <br />
                    <input className='year-inp' type='range' name='range' min='1990' max="2023" onChange={(e) => setYear(e.target.value)} /> {year} <br />
                    <label className='label'>Choose rating for your film</label> <br />
                    <input className='rating-inp' type='range' name='range' min='1' max='10' onChange={(e) => setRating(e.target.value)} /> {rating} <br />
                </div>


                <div className='checkbox'>
                    <div className='first-checkbox'>

                        <label className='label'>Setting of searching</label> <br />
                        <input className='movie-checkbox' type='radio' name='radio' onChange={(e) => setInput('film')} />
                        <label className='label'>Movies</label> <br />
                        <input className='cartoon' type='radio' name='radio' onChange={(e) => setInput('cartoon')} />
                        <label className='label'>Cartoons</label>

                    </div>

                    <div className='second-checkbox'>
                        <input className='series' type='radio' name='radio' onChange={(e) => setInput('series')} />
                        <label className='label'>Series</label> <br />
                        <input className='anime' type='radio' name='radio' onChange={(e) => setInput('anime')} />
                        <label className='label'>Anime</label> <br />

                        <button className='but' onClick={filter}>Search</button>  <br /> <br />
                        <button className='but'>Clean</button>

                    </div>
                </div> <br />


            </div>

            <br />
            <div className='all-films' >
                {
                    data.map((item) => {
                        return (
                            <Link className='link' to={'/moviedetail/' + item._id} key={item._id}>

                                <div className='names-films'>
                                    <img className='posters' alt='' src={item.img} />
                                    <h4>{item.movieName} </h4>
                                    <h4>{item.year} </h4>
                                    <h4>{item.genres} </h4>
                                </div>

                            </Link>
                        )
                    })
                }



            </div>

        </div>

    )
}

export default AllMovies;