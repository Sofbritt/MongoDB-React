import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



function AllMovies() {
    // function seemore(){
    //     window.location.href='http://localhost:3000/moviedetail'
    //   }

    const [data, setData] = useState([])
   

    useEffect(() => {

        axios.get('http://localhost:4500/movies').then((response) => setData(response.data))

    }, [])

    console.log(data)
    return (

        <div>

            <h2 className='title'>Best Film And Movies Watch Online </h2> <br />

            <div className='choose'>
                <div className='options'>
                    <label className='label'>choose a genre</label> <br />
                    <select className='genre'>
                        <option value="choose a genre">Drama</option>
                        <option value="choose a genre">Thriller</option>
                        <option value="choose a genre">Biography</option>
                        <option value="choose a genre">Documentary</option>
                        <option value="choose a genre">Comedy</option>
                        <option value="choose a genre">Horror</option>
                        <option value="choose a genre">Detective</option>
                        <option value="choose a genre">Action</option>
                        <option value="choose a genre">Romantic Comedy</option>
                        <option value="choose a genre">Crime Film</option>
                    </select>  <br />

                    <label className='label'>Choose Your Country</label> <br />
                    <select className='country'>
                        <option value="1">USA</option>
                        <option value="2">Aremenia</option>
                        <option value="3">Spain</option>
                        <option value="4">Italy</option>
                        <option value="5">Brazil</option>
                        <option value="6">France</option>
                        <option value="7">Moldova</option>
                        <option value="8">Denmark</option>
                        <option value="9">Egypt</option>
                        <option value="10">Latvia</option>
                    </select>
                </div>
                <div className='range'>
                    <label className='label'>Choose a year</label> <br />
                    <input className='year-inp' type='range' /> <br />
                    <label className='label'>Choose rating for your film</label> <br />
                    <input className='rating-inp' type='range' /> <br />
                </div>


                <div className='checkbox'>
                    <div className='first-checkbox'>

                        <label className='label'>Setting of searching</label> <br />
                        <input className='movie-checkbox' type='checkbox' />
                        <label className='label'>Movies</label> <br />
                        <input className='cartoon' type='checkbox' />
                        <label className='label'>Cartoons</label>

                    </div>

                    <div className='second-checkbox'>
                        <input className='series' type='checkbox' />
                        <label className='label'>Series</label> <br />
                        <input className='anime' type='checkbox' />
                        <label className='label'>Anime</label> <br />

                        <button className='but'>Search</button>  <br /> <br />
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