import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCategory} from './../../index';



class AddCategoryForm extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            
        }
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
      }

      addArrayCategory(){
        this.props.dispatch(addCategory(this.state))
    }
    render() {
        
        return (
            <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="text" className="form-control"   name='name' value={this.state.name} 
            onChange={this.handleChange.bind(this)} />
          </span>
          
          <span className="input-group-addon">
            <button className="add btn btn-primary" type="button" onClick={this.addArrayCategory.bind(this)}>Add Category</button>
          </span>
        </div>
      </div>
        );
    }
}

function mapStateToProps(centralState){
    return {
       allCategory: centralState.productTypes,
       
    }
  }

export default connect(mapStateToProps,null)(AddCategoryForm);