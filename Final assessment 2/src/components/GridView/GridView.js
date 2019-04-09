import React, { Component } from 'react';



      


class GridView extends Component {
  render() {
    return (
        <div>
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="pull-right">
              <div className="btn-group">
                <button className="btn btn-primary active" id="list">
                  List View
                </button>
                <button className="btn btn-primary " id="grid">
                  Grid View
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
          

    );
}
}

export default GridView;