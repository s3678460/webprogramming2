import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from './../../index';
import HomeItem from './HomeItem';
import GridView from '../GridView/GridView';

import Search from '../Search/Search';
import CategoriesItem from '../Categories/CategoriesItem';
import CategoryFilterEach from '../CategoryFilter/CategoryFilterEach';
import Carousel from '../Carousel/Carousel';
import Body from '../Body/Body';


class Home extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      keyword: '',
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      sortPrice: '',
      initialPage:1,
      numberItems:6


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

  onSearch = (keyword) => {
    console.log(keyword)
    this.setState({
      keyword: keyword


    })

  }

  onClick = (id) => {
    console.log(id)
    this.setState({
      id: id
    })
  }

  onPaging(initialPage){
    this.setState({
      initialPage
    })

  }

  searchByPrice(sortPrice) {
    this.setState({
      sortPrice
    })

  }




  render() {
    var { allProduct } = this.props
    if (this.state.keyword) {
      allProduct = allProduct.filter((product) => {
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1
      })

    }


    if (this.state.id) {
      allProduct = allProduct.filter((product) => {
        return product.productType == this.state.id
      })

    }

    if(this.state.sortPrice!==''){
      var {sortPrice} = this.state;
      if(sortPrice === 'lh'){
        allProduct = allProduct.sort((a,b)=>{
          var priceA = a.price ? a.price : 0
          var priceB = b.price ? b.price : 0
          if(parseInt(priceA) > parseInt(priceB)) { return 1}
          else if(parseInt(priceA) < parseInt(priceB)) {return -1}
          else return 0;
        })
      }
      if(sortPrice === 'hl'){
        allProduct = allProduct.sort((a,b)=>{
          var priceA = a.price ? a.price : 0
          var priceB = b.price ? b.price : 0
          if(parseInt(priceA) > parseInt(priceB)) { return -1}
          else if(parseInt(priceA) < parseInt(priceB)) {return 1}
          else return 0;
        })
      }
    }

    
    
    var {initialPage,numberItems}=this.state
    var sumPage = Math.ceil(allProduct.length/numberItems)
    var pagingNum =[];
    for(var i =1;i<=sumPage;i++){
      pagingNum.push(i);

    }

    var showPagination=pagingNum.map((num,id)=>{
      return <li key={id}><a onClick={this.onPaging.bind(this,num)}>{num}</a></li>
    })



    var lastItemPosition = initialPage*numberItems
    var firstItemPosition = lastItemPosition - numberItems
    allProduct= allProduct.slice(firstItemPosition,lastItemPosition)
    var HomeProduct = allProduct.map((product, index) => {


      return <HomeItem
        name={product.name}
        price={product.price}
        imageUrl={product.imageUrl}
        description={product.description}
        brand={product.brand}
        producer={product.producer}
        key={index}
        myID={product._id}
      />
    })




    return (


      <div>

        <Carousel/>
        <Body/>
        <GridView/>

        <Search onSearch={this.onSearch} />
        <CategoryFilterEach onClick={this.onClick} />

        

        {/* For Price Filter */}


        
        <div className="dropdown">
          <button className="btn btn-primary active dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Price Filter
        </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#" onClick={this.searchByPrice.bind(this, 'lh')}>Low to High</a>
            <a className="dropdown-item" href="#" onClick={this.searchByPrice.bind(this, 'hl')}>High to Low</a>

          </div>
        </div>

        <div className="container" style={{textAlign:"center"}}>
                         
                         <ul className="pagination">
                           {showPagination}
                          
                         </ul>
                       </div>
        














        {HomeProduct}


        

      </div>












    );
  }
}

const mapStateToProps = state => {
  return {
    allProduct: state.products
  }
}
export default connect(mapStateToProps, null)(Home);