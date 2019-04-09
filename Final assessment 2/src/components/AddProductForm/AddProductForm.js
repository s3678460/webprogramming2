import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProduct} from './../../index';

class AddProductForm extends Component {
    constructor(){
        super()
        this.state = {
            
            
            name: '',
            price: '',
            imageUrl:'',
        }
    }
    
    
    
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
      }

      addArrayProduct(){
          this.props.dispatch(addProduct(this.state))
      }
     
    render() {
        return (
            <div>
                <div>
  <button type="button" class="btn btn-info btn-lg pull-left" data-toggle="modal" data-target="#myModal">Click to Add Products</button>

 
  <div class="modal fade" id="myModal" role="dialog" >
    <div class="modal-dialog">
    
      
      <div class="modal-content" style={{textAlign:"center"}}>
        <div class="modal">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div class="modal-body" >
          <p>Name    
        <input type="text" name='name' value={this.state.name} 
            onChange={this.handleChange.bind(this)}
        /> <br/>
        Price
        <input type="text" name='price' value={this.state.price} 
            onChange={this.handleChange.bind(this)}
        />
        <br/>
        Image
        <input type="text"  name='imageUrl' value={this.state.imageUrl} 
            onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.addArrayProduct.bind(this)} data-dismiss="modal">Save product</button></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
                
            </div>
        );
    }
}
function mapStateToProps(centralState){
    return {
       products: centralState.products,
       
    }
  }

export default connect(mapStateToProps,null)(AddProductForm);