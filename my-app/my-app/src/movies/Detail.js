import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Detail() {
    const [data, setData] = useState({});
    const [year, setYear] = useState('');
    const [movieName, setMovieName] = useState('')
    const [poster, setPoster] = useState('')
    // const [genre, setGenre] = useState('')
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    let params = useParams()


    const remove = (id) => {

        axios.delete('http://localhost:4500/movieDelete/' + id).then((res) => {
            console.log(res)
            navigate('/')
        })
    };

    const update = (id) => {

        axios.put('http://localhost:4500/movieUpdate/' + id, {
            year: year,
            movieName: movieName,
            poster:poster
           

        }).then((res) => setData(res.data))
    }




    useEffect(() => {
        axios.get('http://localhost:4500/movies/' + params.id).then((response) => {
            setData(response.data);
        })
    }, []);
    console.log(data)

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
                <button className='open-but' onClick={() => setOpen(!open)}>Open Form</button>
                {
                    open === true && <form className='form' method='post'>
                        <input className='form-inp' type='text' name='movieName' placeholder='movie Name' onChange={(e) => setMovieName(e.target.value)} />
                        <input className='form-inp' type='text' name='year' placeholder='year' onChange={(e) => setYear(e.target.value)} />
                        <input className='form-inp' type='text' name='poster' placeholder='poster' onChange={(e) => setPoster(e.target.value)} />
                        {/* <input type='text' name='genre' placeholder='genre' onChange={(e) => setGenre(e.target.value)} />  */}
                       
                        <button className='send' type="button" onClick={() => update(data._id)} >Send</button>
                    </form>
                }
            </div>
        </div>
    )
}


export default Detail;