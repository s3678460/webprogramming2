import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value

    });
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }
  render() {
    var { keyword } = this.state;
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" className="text-white"  >

            Shopping Online</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/home">Home </Link>
              </li>

              <li>
                
              </li>

              
              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/category">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            

          </div>






        </div>
      </nav>


       {/* Header - set the background image for the header in the line below */}
       <header className="py-5 bg-image-full" style={{backgroundImage: 'url("https://unsplash.it/1900/1080?image=1076")'}}>
          <img className="img-fluid d-block mx-auto" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" style={{width:"30%"}} />
        </header>
        {/* Content section */}
        <section className="py-5">
          <div className="container">
            <h1>My Thoughts On This</h1>
            <p className="lead">Hello everyone! How are you today?</p>
            <p>This is my first ever e-commerce website using React and Redux that I have to build for myself
              after 7 weeks learning Web Programming at Rmit with my beloved teacher Mr.Thanh. I know that 7 weeks are not long enough 
              to be mastered in programming a website and I know that there are still several mistakes in this project. However,
              I can tell you that I have been trying my very best to improve these skills every single day passing by and still got a lot of thing
              to learn.</p>
              <p>Cheers,</p>
              <p>Minh.</p>
          </div>
        </section>
        
        
        
        
        </div>
      


    );
  }
}

export default Header;