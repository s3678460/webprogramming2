import React from 'react'
import ReactDOM from 'react-dom'
import App from './../src/components/App/App'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'



//write the first reducer:
function products(state = [], action){
    if(action.type=='FETCH_PRODUCT'){
        
        return action.payload
        
    }
    else if(action.type=='ADD_PRODUCT'){
        return [...state, action.payload]          //[].concat(state, action.payload)
    }
    else if(action.type==='DELETE_PRODUCT'){
        return state.filter((s)=>s._id!==action.payload)
    }
    else{
        return state} 
}

function editedProduct(state={id: '',name: '',price: '',imageUrl: ''},action){
    if(action.type=="EDIT_PRODUCT"){
        return action.payload
    }
    else{
        return state
    }
}

function productTypes(state=[],action){
    if(action.type==="FETCH_CATEGORY"){
        return action.payload
        console.log(action.payload)
    }
    else if(action.type==='DELETE_CATEGORY'){
        return state.filter((s)=>s._id!==action.payload)
    }
    else if(action.type=='ADD_CATEGORY'){
        return [...state, action.payload]          //[].concat(state, action.payload)
    }
    else{
        return state
    }
}





export function updateStudent(product){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'put', 
            body: JSON.stringify(product)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch(fetchProduct())
        })
    }
}
export function fetchProduct(){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'FETCH_PRODUCT',
                payload: data
            })
        })
    }
}

export function fetchCategory(){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            
            dispatch({
                type: 'FETCH_CATEGORY',
                payload: data
            })
        })
    }
}

export function addProduct(products){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(products)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'ADD_PRODUCT',
                payload: data
            })
        })
    }
}

export function deleteProduct(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products/'+id, {
            method: 'delete'
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: id
            })
        })
    }
}

export function deleteCategory(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes/'+id, {
            method: 'delete'
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'DELETE_CATEGORY',
                payload: id
            })
        })
    }
}


export function addCategory(category){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(category)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'ADD_CATEGORY',
                payload: data
            })
        })
    }
}

export function updateCategory(category){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'put', 
            body: JSON.stringify(category)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch(fetchCategory())
        })
    }
}




    
    
 
            


    




//write another reducer that will display a list courses


    


var centralState = combineReducers({
   products,
   editedProduct,
   productTypes,
})

var store = createStore(centralState, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>    
    <App />
</Provider>    
    , document.getElementById('root')

)