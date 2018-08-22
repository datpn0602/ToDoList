import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch : ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearch() {
    this.props.onClickGo(this.state.strSearch);
  }
  handleClear() {
    this.props.onClickGo('');
    this.setState({
      strSearch : ''
    })
  }
  handleChange(event) {
    this.setState({
      strSearch : event.target.value
    })
  }
  render() {
    return (
          <div className="col-xs-6 col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.strSearch} onChange={this.handleChange} placeholder="Search for..." />
              <span className="input-group-btn">
                <button onClick={this.handleSearch} className="btn btn-info">Go</button>
                <button onClick={this.handleClear} className="btn btn-default">Clear</button>
              </span>
            </div>
          </div>
    );
  }
}

export default Search;
