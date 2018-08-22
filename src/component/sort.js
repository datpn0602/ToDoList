import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(orderBy, orderDir) {
    this.props.onClickSort(orderBy, orderDir);
  }
  render() {
    let orderBy = this.props.orderBy;
    let orderDir = this.props.orderDir;
    return (
          <div className="col-xs-6 col-md-3">
            <button className="btn btn default dropdown-toggle" data-toggle="dropdown">
              Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li><a role="button" onClick={() => this.handleSort("name", "asc")}>NAME ASC</a></li>
              <li><a role="button" onClick={() => this.handleSort("name", "desc")}>NAME DESC</a></li>
              <li role="separator" className="divider"></li>
              <li><a role="button" onClick={() => this.handleSort("level", "asc")}>LEVEL ASC</a></li>
              <li><a role="button" onClick={() => this.handleSort("level", "desc")}>LEVEL DESC</a></li>
            </ul>
            <span className="label label-success lable-medium">{orderBy} - {orderDir}</span>
          </div>
    );
  }
}

export default Sort;
