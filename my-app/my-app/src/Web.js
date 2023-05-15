import React from 'react'

function Web() {
    const onSubmit=()=>{

    }
    return (
        <div>
            <h1> What Does Web Programming Mean?</h1> <br />
            Web programming refers to the writing, markup and coding involved in Web development, which includes Web content,
            Web client and server scripting and network security. The most common languages used for Web programming are XML,
            HTML, JavaScript, Perl 5 and PHP. Web programming is different from just programming, which requires
            interdisciplinary knowledge on the application area, client and server scripting, and database technology.



            <h1>What is a programming language?</h1> <br />
            A programming language is a computer language that programmers use to create software. This way they are able to
            indicate to the programs the structure to be followed in order to make the process as safe as possible.

            Nowadays, there are many programming languages, so the programmer is free to choose the one he/she feels most
            comfortable with, the one that best suits what he/she is asked to do.
            One of the most widely used languages in web programming today is HTML5 as it’s compatible with the vast majority of
            computer browsers and mobile devices, such as smartphones.

            The programming language allows you to set the structure of the website. Elements such as media files and fonts
            depend entirely on the language that is used.

            Choosing the right language for your company’s website is an important task, as it’s one of the ways in which your
            customers can interact with you and your brand.
            <h1> 1. Frontend</h1>
            The frontend is the part of the website that users can interact with. This is where the entire customer experience takes place and where the most detailed programming takes place.

            It’s also the part that is referred to as the interface and client side. Multimedia files, action buttons, colours and typography are some of the aspects that can be found on this side of the web.

            As we mentioned before, it’s important that the programmer knows your needs and requirements. This way, the structure of the website and the project in general will have the right specifications and will offer the user a more fluid and pleasant interface.

            <h1> 2. Backend</h1>
            The backend is where the programming language that the programmer has chosen for your website comes into play. It’s also what hosts the code of the website and what allows the browser to correctly read the information on the site.
            The backend is where all our data is stored and it’s the part of the site that users do not interact with directly. However, without this aspect of the page, the frontend would not be possible, so it plays an important role in the programming of the site.

            <br />
            <hr />
            <form method="post" action="/newmain">
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="description" name="description" />
                <input type="text" placeholder="rating" name="rating" />
                <button onClick={onSubmit} >Submit</button>
            </form>


        </div>
    )
}


export default Web;