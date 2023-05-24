import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-bootstrap-icons";


function Web() {
    return <div>
        <div className='header'>
            <img className='logo' src='https://i.fbcd.co/products/resized/resized-750-500/sf-fs-modern-logo-designs-2-f6a94cb89c415dc12a346af7ca2e5d2e5077f0687cdc5184030fd397aa46b777.jpg' />
            <input type='text' name='search' className='search-inp' placeholder='search' />  <Icon.Search className='search-icon'/>
            <h3 className='menu'>Menu</h3>
            <button className='sign-in'>Sign in</button>

            <Icon.Basket className='basket-icon' />
            <select className='choose-language'>
                <option value='Eng'>Eng</option>
                <option value='Rus'>Rus</option>
                <option value='Arm'>Arm</option>
            </select>

        </div> <br />
        <div className='carousel'>

            <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src='https://nypost.com/wp-content/uploads/sites/2/2021/09/Best-Clear-Lip-Glosses.png?w=1024' class="d-block w-100" alt="Wild Landscape" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.ltwebstatic.com/images3_pi/2023/05/18/168437919102ddff3d2d45ac3ec1e8a066e013b3e1_thumbnail_600x.webp" class="d-block w-100" alt="Camera" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
              
            </div>
        </div>
    </div>
}

export default Web;