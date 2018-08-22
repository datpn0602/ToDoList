import React, { Component } from 'react';
import Items from './items.js';
class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
      const items = this.props.items;
      const elmItem = items.map((item,index) => {
        return (<Items
                  key={index}
                  item={item}
                  stt={index}
                  onClickDelete={this.props.onClickDelete}
                  onClickEdit={this.props.onClickEdit}/>);
      });
    return (
          <div className="row">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">List tasks</h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Task</th>
                          <th>Level</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {elmItem}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

    );
  }
}

export default Table;
