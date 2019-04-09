import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory ,addCategory } from './../../index';
import CategoriesItem from './CategoriesItem';



class CategoriesEach extends Component {
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
    componentDidMount() {
        this.load()
    }



    load() {
        this.props.dispatch(fetchCategory())
    }

    clearForm(){
        this.setState({name: ''})
      }
    render() {
        var { allCategory } = this.props
        var listCate = allCategory.map((category, index) => {
            
            return <CategoriesItem
                key={index}
                name={category.name}
                catID={category._id}
            />

        })
        
        return (
            <div className="row col-md-12 custyle">
                
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCate}
                    </tbody>
                </table>

                <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="text" className="form-control"   name='name' value={this.state.name} 
            onChange={this.handleChange.bind(this)} />
          </span>
          
          <span className="input-group-addon">
            <button className="add btn btn-primary active" type="button" onClick={this.addArrayCategory.bind(this)}>Add Category</button>
            <button className="add btn btn-primary" type="button" onClick={this.clearForm.bind(this)}>Clear form</button>
          </span>
        </div>
      </div>
            </div>
        
        );
    }
}

const mapStateToProps = state => {
    return {
        allCategory: state.productTypes

    }

}

export default connect(mapStateToProps, null)(CategoriesEach);