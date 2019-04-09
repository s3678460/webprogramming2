import React, { Component } from 'react';



class FilterPrice extends Component {
    render() {
        return (
            <div>
                 <div className="tab-content">
        <div id="filters">
          <p>
            <button className="sortByPrice" href="javascript:void(0)">Sort By Price</button>
          </p>
        </div>
      </div>
                
            </div>
        );
    }
}

export default FilterPrice;