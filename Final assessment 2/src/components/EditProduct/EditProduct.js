import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {updateStudent} from './../../index'
import {Redirect} from 'react-router-dom'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            imageUrl: "",
            isRedirect: false
        }
    }
    onChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    componentWillMount(){
        this.props.products.map((product)=>{
            if(product._id === this.props.match.params.myid){
                this.setState({
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl
                })
            }
        })
        // console.log(editProduct)
        // this.setState({
        //     name: editProduct.name,
        //     price: editProduct.price,
        //     imageUrl: editProduct.imageUrl
        // })
    }
    updateProduct(){
        var newProduct ={
            _id: this.props.match.params.myid,
            name: this.state.name,
            price: this.state.price,
            imageUrl: this.state.imageUrl
        }
        this.props.dispatch(updateStudent(newProduct))
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    render() {
        if(this.state.isRedirect){
            return <Redirect to="/product"/>
        }
        console.log(this.state)
        return (
            <div>
                <div className="container">
                    <form>
                        <legend>Edit Form</legend>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}
                            />
                            <label>Price</label>
                            <input
                            type="text"
                            className="form-control"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange.bind(this)}
                            />
                            <label>Image</label>
                            <input
                            type="text"
                            className="form-control"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.onChange.bind(this)}
                            />
                        </div>
                         
                         <button
                        type="button"
                        className="btn btn-primary"
                         onClick={this.updateProduct.bind(this)} >Update</button> 
                        <Link class="btn btn-danger" to="/product">Cancel</Link>
                    </form>


                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(EditProduct);