import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  const [glassList, setGlassList] = useState([
    { "name": "Sunglasses_1", "price": "150", "img": "images/glass1.png" },
    { "name": "Sunglasses_2", "price": "250", "img": "images/glass2.png" },
    { "name": "Sunglasses_3", "price": "350", "img": "images/glass3.png" },
    { "name": "Sunglasses_4", "price": "450", "img": "images/glass4.png" },
    { "name": "Sunglasses_5", "price": "550", "img": "images/glass5.png" },
    { "name": "Sunglasses_6", "price": "650", "img": "images/glass6.png" },
    { "name": "Sunglasses_7", "price": "750", "img": "images/glass7.png" },
    { "name": "Sunglasses_8", "price": "850", "img": "images/glass8.png" },
  ]);

  return (
    <div>
      <Header />
      <section class="banner_main">
        <div id="banner1" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#banner1" data-slide-to="0" class="active"></li>
            <li data-target="#banner1" data-slide-to="1"></li>
            <li data-target="#banner1" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="carousel-caption">
                  <div class="text-bg">
                    <h1> <span class="blu">Welcome <br></br></span>To Our Sunglasses</h1>
                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                    <a class="read_more" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption">
                  <div class="text-bg">
                    <h1> <span class="blu">Welcome <br></br></span>To Our Sunglasses</h1>
                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                    <a class="read_more" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption">
                  <div class="text-bg">
                    <h1> <span class="blu">Welcome <br></br></span>To Our Sunglasses</h1>
                    <figure><img src="images/banner_img.png" alt="#" /></figure>
                    <a class="read_more" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </a>
          <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>
      {/* about section */}
      <div class="about">
        <div class="container">
          <div class="row d_flex">
            <div class="col-md-5">
              <div class="about_img">
                <figure><img src="images/about_img.png" alt="#" /></figure>
              </div>
            </div>
            <div class="col-md-7">
              <div class="titlepage">
                <h2>About Our Shop</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              </div>
              <a class="read_more" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* our glass section */}
      <div class="glasses">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="titlepage">
                <h2>Our Glasses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                  e et dolore magna aliqua. Ut enim ad minim veniam, qui
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            {
              glassList.map((glassObj, idx) => {
                return <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div class="glasses_box">
                    <figure><img src={glassObj.img} alt="#" /></figure>
                    <h3><span class="blu">$</span>{glassObj.price}</h3>
                    <p>{glassObj.name}</p>
                  </div>
                </div>
              }
              )
            }
            {/* <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass1.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div> */}

            {/* <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass2.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass3.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass4.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass5.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass6.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass7.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="glasses_box">
                <figure><img src="images/glass8.png" alt="#" /></figure>
                <h3><span class="blu">$</span>50</h3>
                <p>Sunglasses</p>
              </div>
            </div> */}
            <div class="col-md-12">
              <a class="read_more" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* our shop section */}
      <div id="about" class="shop">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5">
              <div class="shop_img">
                <figure><img src="images/shop_img.png" alt="#" /></figure>
              </div>
            </div>
            <div class="col-md-7 padding_right0">
              <div class="max_width">
                <div class="titlepage">
                  <h2>Best SunGlasses  At Our shop</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  <a class="read_more" href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* clients section */}
      <div class="clients">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>What say our clients</h2>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="myCarousel" class="carousel slide clients_Carousel " data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="carousel-caption ">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="clients_box">
                              <figure><img src="images/our.png" alt="#" /></figure>
                              <h3>Sandy Mark</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="clients_box">
                              <figure><img src="images/our.png" alt="#" /></figure>
                              <h3>Sandy Mark</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="clients_box">
                              <figure><img src="images/our.png" alt="#" /></figure>
                              <h3>Sandy Mark</h3>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact  a more-or-less normal distribution of letters,</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <i class='fa fa-angle-left'></i>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <i class='fa fa-angle-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div id="contact" class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <form id="request" class="main_form">
                <div class="row">
                  <div class="col-md-12 ">
                    <h3>Contact Us</h3>
                  </div>
                  <div class="col-md-12 ">
                    <input class="contactus" placeholder="Name" type="type" name="Name"></input>
                  </div>
                  <div class="col-md-12">
                    <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"></input>
                  </div>
                  <div class="col-md-12">
                    <input class="contactus" placeholder="Email" type="type" name="Email"></input>
                  </div>
                  <div class="col-md-12">
                    <input class="contactusmess" placeholder="Message" type="type" Message="Name"></input>
                  </div>
                  <div class="col-md-12">
                    <button class="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="map_section">
            <div id="map">
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home