import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateStudent,fetchProduct,deleteProduct} from './../../index';
import {Link} from 'react-router-dom'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            imageUrl: '',
            description:'',
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




    handleRemove() {
        console.log(this.props.myID)
        if (window.confirm("Are you sure")) {
            this.props.dispatch(deleteProduct(this.props.myID))
        }
    }
    handleChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }





    Update() {
        console.log(this.props.pid, this.props.name, this.props.imageUrl, this.props.price)
        var product = {
            _id: this.props.myID,
            name: this.state.name,
            price: this.state.price,
            imageUrl: this.state.imageUrl,

        }
        console.log(product)

        this.props.dispatch(updateStudent(product))
    }




    handleEdit(id) {
        this.getProducts(id)

    }


    getProducts(id) {
        fetch('http://rmit.chickenkiller.com:8080/products/' + id)


            .then(res => res.json())
            .then(data => this.props.dispatch({ type: 'EDIT_PRODUCT', payload: id }))

    }
    render() {
        return (
            <div id="products">
            
                <div className="item col-sm-12. list-group-item" style={{textAlign:"center"}}>
                 
                    <div >

                        <div className="img-event">
                            <img className="group list-group-image img-fluid" src={this.props.imageUrl} style={{ width: 300, height: 300 }} />
                        </div>
                        <div className="caption card-body" >
                            <li className="group card-title inner list-group-item-heading" >
                                <a href="#" style={{fontSize:"15pt",color:"darkblue",textAlign:"center"}}> {this.props.name} </a>
                            </li>

                            
                            <div className="row">
                                <div className="col-xs-12 ">
                                    <p className="lead" style={{color:"black",textAlign:"center"}}>
                                        {this.props.price} VND
                                    </p>
                                    <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                
                                
                                <div className="col-xs-12">
                                   


                                    <div>
                                        <div>
                                        
                                        

                                        
                                          <div className="btn-group show-on-hover">
                                          <button type="button" 
                                          className="btn btn-primary dropdown-toggle"
                                          data-toggle="dropdown">Action</button>
                                          <ul className="dropdown-menu" role="menu">
                                          <li>
                                          <a className="btn btn-primary" onClick={() => this.handleRemove()}>Remove</a>
                                          </li>
                                          <li>
                                          <Link className="btn btn-primary" to={"/detail/"+(this.props.myID)+".html"}>Details</Link>
                                          </li>
                                          <li>
                                          <Link className="btn btn-primary" to={"/edit/"+(this.props.myID)+".html"}>Edit</Link> 
                                          </li>

                                          </ul>
                                          </div>

                                        </div>

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
const mapStateToProps = state => {
    return {
        allProduct: state.products

    }

}

export default connect(mapStateToProps, null)(Item);