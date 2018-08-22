import React, { Component } from 'react';
import Search from './search.js';
import Sort from './sort.js';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.props.onClickAdd();
  }
  render() {
    let orderBy = this.props.orderBy;
    let orderDir = this.props.orderDir;
    let elmButton = <button onClick={this.handleAdd} className="btn btn-info btn-block" type="button">Add task</button>;
    if(this.props.showForm === true) {
      elmButton = <button onClick={this.handleAdd} className="btn btn-success btn-block" type="button">Close Form</button>
    }
    return (
      <div className="row">
          <Search onClickGo={this.props.onClickSearchGo}/>
          <Sort onClickSort={this.props.onClickSort} orderBy={orderBy} orderDir={orderDir}/>
          <div className="col-xs-12 col-md-5">
            {elmButton}
          </div>
        </div>
    );
  }
}

export default Control;
