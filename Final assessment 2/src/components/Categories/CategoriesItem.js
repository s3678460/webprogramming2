import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchCategory, deleteCategory,updateCategory } from './../../index';
import './../App//App.css'
import './CategoriesEach'




class CategoriesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }
    componentDidMount() {
        this.load()
    }

    /*componentWillReceiveProps(props){
      this.setState({name:props.editedProduct,id:props.editedProduct.id,price:props.editedProduct.price})
    }*/

    load() {
        this.props.dispatch(fetchCategory())
    }

    handleRemove() {
      console.log(this.props.catID)
      if (window.confirm("Are you sure")) {
          this.props.dispatch(deleteCategory(this.props.catID))
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
  console.log(this.props.catID, this.props.name)
  var category = {
      _id: this.props.catID,
      name: this.state.name,
      

  }
  console.log(category)

  this.props.dispatch(updateCategory(category))
}
    render() {
        return (
            <tr>
                <td>{this.props.catID}</td>
                <td>{this.props.name}</td>
                <td className="text-center">
                    <Link className="btn btn-primary active btn-xs" to={"/editcat/"+(this.props.catID)+".html"}><span className="glyphicon glyphicon-edit" /> Edit</Link>
                    <a href="#" className="btn btn-primary btn-xs" onClick={() => this.handleRemove()}><span className="glyphicon glyphicon-remove" /> Del</a>
                </td>
            </tr>


        );
    }
}

const mapStateToProps = state => {
    return {
        allCategory: state.productTypes

    }

}

export default connect(mapStateToProps, null)(CategoriesItem);