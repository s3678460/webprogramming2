import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import EditProduct from '../EditProduct/EditProduct';
import ProductsEach from '../ProductEach/ProductsEach';
import Home from '../HomePage/Home';
import DetailPages from '../DetailPages/DetailPages'
import CategoriesEach from '../Categories/CategoriesEach';
import CategoriesItem from '../Categories/CategoriesItem';
import EditCategory from '../EditCategory/EditCategory';
import Contact from '../Contact/Contact';

class RouterUrl extends Component {
    render() {
        return (

                <div>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/edit/:myid.html" component={EditProduct} />
                    <Route path="/detail/:myid.html" component={DetailPages}/>
                    <Route path="/product/" component={ProductsEach}/>
                    <Route path="/category/" component={CategoriesEach}/>
                    <Route path="/contact/" component={Contact}/>
                    <Route path="/editcat/:catid.html" component={EditCategory} />

                    

                    <Route component={Home}/>
                    </Switch>
                </div>




        );
    }
}

export default RouterUrl;