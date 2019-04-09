import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from './../../index';



class CategoriesFilterEach extends Component {
    constructor(){
        super()
        this.state = {
            
            name: '',
            
        }
    }
    componentDidMount() {
        this.load()
    }



    load() {
        this.props.dispatch(fetchCategory())
    }
    onClick(id){
        console.log(id)
        this.props.onClick(id)
        
    }


    render() {
        var { allCategory } = this.props
        var listCatet = allCategory.map((category, index) => {
            
            return <a className="dropdown-item" onClick={this.onClick.bind(this,category._id)}>{category.name}</a>

            

        })
        return (
            <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          
         {listCatet}
          
          
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

export default connect(mapStateToProps, null)(CategoriesFilterEach);