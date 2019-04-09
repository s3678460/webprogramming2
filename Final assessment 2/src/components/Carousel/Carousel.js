import React, { Component } from 'react';

class Carousel extends Component{
    render(){
        return(
          <div className="container">
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to={0} className="active" />
            <li data-target="#carousel" data-slide-to={1} />
            <li data-target="#carousel" data-slide-to={2} />
          </ol>
          {/* Carousel items */}
          <div className="carousel-inner carousel-zoom">
            <div className="active item"><img className="img-responsive" src="https://ghanatalksbusiness.com/wp-content/uploads/2017/05/Online-Ecommerce-Customer-Small.png" />
              <div className="carousel-caption">
                
                <p>Flash Sale 50%</p>
              </div>
            </div>
            <div className="item"><img className="img-responsive" src="https://www.hostpapa.ca/blog/wp-content/uploads/2013/12/content-marketing-1.jpg" />
              <div className="carousel-caption">
                
                <p>Flash Sale 50%</p>
              </div>
            </div>
            <div className="item"><img className="img-responsive" src="https://www.veravalonline.com/wp-content/uploads/veravalonline-ecommerce.png" />
              <div className="carousel-caption">
                
                <p>Flash Sale 50%</p>
              </div>
            </div>
          </div>
          {/* Carousel nav */}
          <a className="carousel-control left" href="#carousel" data-slide="prev">‹</a>
          <a className="carousel-control right" href="#carousel" data-slide="next">›</a>
        </div>
      </div>
          
          
  
      );
    }
  }
          

   
export default Carousel;