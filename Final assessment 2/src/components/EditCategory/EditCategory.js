import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {updateCategory} from './../../index'
import {Redirect} from 'react-router-dom'



class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            isRedirect:false,
            
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
        this.props.allCategory.map((cat)=>{
            if(cat._id === this.props.match.params.catid){
                this.setState({
                    name: cat.name,
                    
                })
            }
        })
    }

    updateCategory(){
        var newCategory ={
            _id: this.props.match.params.catid,
            name: this.state.name,
            
        }
        this.props.dispatch(updateCategory(newCategory))
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    render() {
        if(this.state.isRedirect){
            return <Redirect to="/category"/>
        }
        return (
            <div>
                <div className="container">
                    <form>
                        <legend>Edit Category Form</legend>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}
                            />
                           
                        </div>
                         
                         <button
                        type="button"
                        className="btn btn-primary"
                         onClick={this.updateCategory.bind(this)} >Update</button> 
                        <Link class="btn btn-danger" to="/category">Cancel</Link>
                    </form>


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
export default connect(mapStateToProps)(EditCategory);