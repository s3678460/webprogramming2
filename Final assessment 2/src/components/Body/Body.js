  import React, { Component } from 'react';

class Body extends Component{
    render(){
        return(
            
            <div className="container text-center">    <br/>
          <h3 style={{backgroundColor:"darkblue",color:"white"}} >Recommended Product </h3><br />
          <div className="row">
            <div className="col-sm-4">
              <img src="https://sporteched.files.wordpress.com/2018/03/img_8137-e1521027865695.jpg?w=1400" className="img-responsive" style={{width: '100%' }} alt="Image" />
              <del>35.000.000VND</del>
              <p>-21%</p>

            </div>
            <div className="col-sm-4"> 
              <img src="https://assets.hardwarezone.com/img/2017/09/DSC_1453.jpg" className="img-responsive" style={{width: '100%',height:"82%"}} alt="Image" />
              <del>35.000.000VND</del>
              <p>-21%</p>    
            </div>
            <div className="col-sm-4">
              <div className="well" >
                <p>Rule 1 Whey Protein Isolate</p>
              </div>
              <div className="well">
                <p>
                  <li>Zero Sugar</li>
                  <li>Zero Fat</li>
                  <li>Zero Gluten</li>
                  <li>Carefully blended and packaged in an NSF GMP facility in the USA</li>

                  
                </p>
              </div>
            </div>
          </div>
          <h3 style={{backgroundColor:"darkblue",color:"white"}} >Recommended Product </h3><br />
        </div>
        
        





        );
    }
}

export default Body;