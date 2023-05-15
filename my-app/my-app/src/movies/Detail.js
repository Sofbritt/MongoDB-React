import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Detail() {
    const [data, setData] = useState([]);
    const [year, setYear] = useState('');


    let params = useParams()

    const remove = (id) => {
        console.log(id);
        axios.delete('http://localhost:4500/movieDelete/' + id).then(() => console.log('deleted'))
    };

    const update = (id) => {
        console.log(id);
        axios.put('http://localhost:4500/movieUpdate/' + id, {
            year: year
        }).then(() => console.log('updated'))
    }




    useEffect(() => {
        axios.get('http://localhost:4500/movies/' + params.id).then((response) => {
            setData(response.data);
        })
    },[]);

        return (

            <div>

                <div className='films'>
                    <img className='posters' alt='' src={data.img} />
                    <h4>{data.movieName}  </h4>
                    <h4>{data.year} </h4>
                    <ul>{data.genre?.map((item) => <li key={item.id}>{item.genreName}</li>)}</ul>
                    <p className='aboutmovie'> Cher Horowitz (Alicia Silverstone) is a wealthy, popular 15-year-old living in Beverly Hills with her widowed father, Mel (Dan Hedaya), a successful lawyer. Though good-natured, Cher is naive and caught up in a superficial lifestyle revolving around expensive clothes and the social hierarchy of her high school.</p>
                    <button className='delete' type='button' onClick={() => remove(data._id)} >delete</button> <br />
                    <br />
                    <form className='form' method='post'>
                        <input type='text' name='movieName' placeholder='movie Name' />
                        <input type='text' name='year' placeholder='year' onChange={(e)=>setYear(e.target.value)}/>
                        <button type="button" onClick={() => update(data._id)} >Send</button>
                    </form>
                </div>
            </div>
        )
    }


export default Detail;