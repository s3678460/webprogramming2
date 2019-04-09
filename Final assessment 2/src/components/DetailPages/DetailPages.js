import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DetailPages extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                {this.props.products.map((product, index) => {
                    if (product._id === this.props.match.params.myid) {
                        return <div key={index} className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <img src={product.imageUrl} alt className="img-responsive" />
                                        <div className="caption">
                                            <h4 className="pull-right">{product.price} VND</h4>
                                            <h4><a style={{fontSize:"15pt",color:"darkblue"}} >{product.name}</a></h4>
                                            <p>{product.description}</p>
                                            <p>{product.brand}</p>
                                            <p>{product.producer}</p>
                                        </div>
                                        <div className="ratings">
                                            <p>
                                                <span className="glyphicon glyphicon-star checked" />
                                                <span className="glyphicon glyphicon-star checked" />
                                                <span className="glyphicon glyphicon-star checked" />
                                                <span className="glyphicon glyphicon-star checked" />
                                                <span className="glyphicon glyphicon-star checked" />
                                                (15 reviews)
                                </p>
                                        </div>
                                        <div className="space-ten" />
                                        <div className="btn-ground text-center">
                                            <button type="button" className="btn btn-primary actived"><i className="fa fa-shopping-cart" /> Add To Cart</button>
                                            <Link class="btn btn-primary" to="/product">Cancel</Link>
                                        </div>
                                        <div className="space-ten" />
                                    </div>
                                </div>
                            </div></div>
                    }
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(DetailPages);




