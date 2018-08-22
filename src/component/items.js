import React, { Component } from 'react';

class Items extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
    showLevel(level) {
      let levelValue = <span className="label label-default">Small</span>;
      if(level === 2){
        levelValue = <span className="label label-info">Medium</span>;
      } else if(level === 3) {
        levelValue = <span className="label label-danger">Hight</span>
      }
      return levelValue;
    }
    handleEdit(item) {
      this.props.onClickEdit(item);
    }
    handleDelete(id) {
      this.props.onClickDelete(id);
    }
    render (){
      const item = this.props.item;
      const stt = this.props.stt;
      return (
        <tr>
          <td>{stt + 1}</td>
          <td>{item.name}</td>
          <td>{this.showLevel(item.level)}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.handleEdit(item)}>Edit</button>
            <button className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>Delete</button>
          </td>
        </tr>
      );
    }
  }


export default Items;
