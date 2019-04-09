import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProduct} from './../../index';
import {Link} from 'react-router-dom'
import GridView from '../GridView/GridView';
import '../../index';


class HomeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            imageUrl: '',
            description:'',
            brand:'',
            producer:'',
        }
    }
    componentDidMount() {
        this.load()
    }

    /*componentWillReceiveProps(props){
      this.setState({name:props.editedProduct,id:props.editedProduct.id,price:props.editedProduct.price})
    }*/

    load() {
        this.props.dispatch(fetchProduct())
    }

    
    render() {

        return (
            
                
                <div id="products">
                <div className="results-row">
                
                <div className="item col-xs-12 col-sm-4" style={{textAlign:"center"}}>
                    <div >

                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src={this.props.imageUrl} style={{ width: 300, height: 300 }} />
                        </div>
                        <div className="caption card-body" >
                            <li className="group card-title inner list-group-item-heading" >
                                  <Link  href="#" style={{fontSize:"12pt",color:"darkblue"}} to={"/detail/"+(this.props.myID)+".html"} > {this.props.name}</Link>
                            </li>

                            
                            <div className="row">
                                <div className="col-xs-12 ">
                                    <p>
                                        <b className="lead" style={{color:"black",fontSize:"15pt"}}>{this.props.price} VND</b>
                                        
                                        
                                    </p>
                                    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
                                    

                                    
                                    

                                   
                                    
                                    
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
                
           
            
            
        );
    }
}

const mapStateToProps = state =>{
    return{
      allProduct: state.products
    }
  }
  export default connect(mapStateToProps,null)(HomeItem);