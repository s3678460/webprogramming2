import React, { Component } from 'react';
import AddProductForm from '../AddProductForm/AddProductForm';
import {connect} from 'react-redux'; 
import{getProducts} from './../../../src/index'
import EditComponent from '../EditComponent/EditComponent';
import Item from './Item'
import {updateStudent,fetchProduct,addProduct} from './../../index';
import GridView from '../GridView/GridView';


class ProductsEach extends Component {
  constructor(){
    super()
    this.state = {
        
        
        name: '',
        price: 0,
        imageUrl:'',
        description:'',
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
  

componentDidMount(){
  this.load()
}

/*componentWillReceiveProps(props){
  this.setState({name:props.editedProduct,id:props.editedProduct.id,price:props.editedProduct.price})
}*/

load(){
  this.props.dispatch(fetchProduct())
}

clearForm(){
  this.setState({name: '', price: '', price: 0,imageUrl:'',description:''})
}





render(){
  var listProduct = this.props.allProduct.map((product, index)=>{
    
    return <Item
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
          key={index}
          myID={product._id}
    />
    
  })
    return(
      <div>
        
        
          
          <div>
  <button type="button" className="btn btn-primary btn-lg glyphicon glyphicon-plus" data-toggle="modal" data-target="#myModal">Products</button>

 
  <div className="modal fade" id="myModal" role="dialog" >
    <div className="modal-dialog">
    
      
      <div className="modal-content" style={{textAlign:"center"}}>
        <div className="modal">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div className="modal-body" >
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
        /> <br/>
        Description
        <input type="text"  name='description' value={this.state.description} 
            onChange={this.handleChange.bind(this)}
        /> <br/>
        
        <button onClick={this.addArrayProduct.bind(this)} data-dismiss="modal" className="btn btn-primary active btn-lg glyphicon glyphicon-ok">Save</button>
        </p>
        <button onClick={this.clearForm.bind(this)} className="btn btn-primary btn-lg glyphicon glyphicon-remove">Clear</button>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" ></button>
        </div>
      </div>
      
    </div>
  </div>

  
</div> 
<br/>
<br/>


{listProduct}




          
        


</div>

        
        
        
          
        
        
        
    )
}
}

const mapStateToProps = state =>{
  return{
    allProduct: state.products
  }
}
export default connect(mapStateToProps,null)(ProductsEach);