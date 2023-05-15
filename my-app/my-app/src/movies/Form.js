import React from 'react'


function Form(){
    return(
       <form method='post' action='/newmovies' class='movieform'>
        <input type='text' placeholder='movieName' name='movieName'/>
        <input type='text' placeholder='imgUrl' name='imgUrl'/>
        <input type='text' placeholder='year' name='year'/>
        <input type='text' placeholder='director' name='director'/>
        <input type='text' placeholder='description' name='description'/>
        <input type='text' placeholder='budget' name='budget'/>
        <input type='text' placeholder='income' name='income'/>
        <input type='text' placeholder='rating' name='rating'/>
        <input type='submit' name='submit' />
       </form>
    )
}








export default Form