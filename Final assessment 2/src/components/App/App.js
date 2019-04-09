import React, { Component } from 'react';

import './../App/App.css';
import './../Header/Header.css';
import './../Carousel/Carousel.css';
import './../ProductEach/ProductsEach.css';
import './/../AddProductForm/AddProductForm.css';
import Header from './../Header/Header'
import Carousel from './../Carousel/Carousel';
import Body from './../Body/Body';
import Footer from './../Footer/Footer';
import ProductsEach from './../ProductEach/ProductsEach';
import HeaderTop from './../Header/HeaderTop';

import GridView from './../GridView/GridView';
import { connect } from 'react-redux'
import AddProductForm from '../AddProductForm/AddProductForm';
import Item from '../ProductEach/Item';
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from '../RouterUrl/RouterUrl';
import CategoriesItem from '../Categories/CategoriesItem';
import RouterCategory from '../RouterUrl/RouterCategory';
import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
import SideBar from '../SideBar/SideBar';
import Search from '../Search/Search';
import FilterPrice from '../FilterPrice/FilterPrice';




class App extends Component {
  onSearch=(name)=>{
    console.log(name)

  }



  render() {



    return (
      <Router>
        <div>
        
        <SideBar/>
        <div className="container">
        
          <Header />
          
          
          
          
          
          
          
          
          
          
          
          <div >
          
            <RouterUrl/>
          </div>
          
          <Footer />
        </div>
        
        </div>
      </Router>
      








    );
  }
}




export default App;
