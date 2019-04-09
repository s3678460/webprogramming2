import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      
        keyword:'',
        
        name: '',
        
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

    onSearch=()=>{
      console.log(this.state.keyword)
      this.props.onSearch(this.state.keyword)
    }
      
    render() {

      var {keyword} = this.state;

       
        
        return (
            <div>
                <div className="container">
        <div className="row">
          
          <div id="custom-search-input">
            <div className="input-group col-md-12">
              <input type="text" 
              className="  search-query form-control" 
              placeholder="Search" 
              name="keyword"
              value={keyword}
              onChange={this.onChange.bind(this)}/>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button"
                onClick={this.onSearch}>
                  <span className=" glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div> <br/>

      <div>

                 
      <br/>
        
       
                
            </div>

            


                
            </div>
        );
    }
}

export default Search;