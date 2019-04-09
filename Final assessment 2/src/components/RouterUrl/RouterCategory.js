import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import CategoriesItem from '../Categories/CategoriesItem';
import ProductsEach from '../ProductEach/ProductsEach';
import Home from '../HomePage/Home';


class RouterCategory extends Component {
    render() {
        return (
            <div>
                <switch>
                <Route exact path="/" component={Home} />
                <Route path="/product/" component={ProductsEach}/>
                    <Route path="/category/" component={CategoriesItem}/>

                    <Route component={Home}/>
                </switch>
                
            </div>
        );
    }
}

export default RouterCategory;