import React, { Component } from 'react';
import Title from './component/title.js';
import Control from './component/control.js';
import Form from './component/form.js';
import Table from './component/table.js';
import tasks from './mockdata/task.js';
import {remove, orderBy as fucOrderBy, reject} from 'lodash';
import './App.css';
const uuidv4 = require('uuid/v4');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : tasks,
      itemSelected : null,
      showForm : false,
      strSearch : "",
      orderBy : "name",
      orderDir : "asc",
    };
    console.log(this.state.items);
    this.handleShowForm = this.handleShowForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount() {
    let items = JSON.parse(localStorage.getItem("task"));
    this.setState({
      items : items
    });
  }
  handleSubmit(item) {
    let items = this.state.items;
    if(item.id !== '') {
      items = reject(items, { id: item.id });
      items.push({ id: item.id, name: item.name, level: +item.level  });
    } else {
      items.push({
        id : uuidv4(),
        name : item.name ,
        level: +item.level
      });
    }
    this.setState({
      items : items
    });
    localStorage.setItem("task", JSON.stringify(items));
  }
  handleShowForm() {
    this.setState({
      showForm : !this.state.showForm,
      itemSelected : null
    });
  }
  handleSearch(value) {
    this.setState({
      strSearch : value
    });
  }
  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy : orderBy,
      orderDir: orderDir
    });
  }
  handleDelete(id) {
    let items = this.state.items;
    remove(items, (item) => {
      return item.id === id;
    })
    this.setState({
      items : items
    });
    console.log(this.state.items);
    localStorage.setItem("task", JSON.stringify(items));
  }
  handleEdit(item) {
    this.setState({
      itemSelected : item,
      showForm : true
    })
  }
  closeForm() {
    this.setState({
      showForm : false
    });
  }
  render() {

    //Search
    let itemsArr = this.state.items;
    let items = [];

    const search = this.state.strSearch;
    if(search.length > 0){
        itemsArr.map((item) => {
        if(item.name.toLowerCase().indexOf(search) !== -1) {
          items.push(item);
        }
      })
    } else {
      items = itemsArr;
    }

    //Sort
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;
    items = fucOrderBy(items, [orderBy], [orderDir]);

    //Form
    let showForm = this.state.showForm;
    let elmForm = null;
    if(showForm) {
      elmForm = <Form onClickCancel={this.closeForm} onClickSubmit={this.handleSubmit} itemSelected={this.state.itemSelected} />
    }
    return (
      <div className="container">
          <Title />
          <Control
            onClickAdd={this.handleShowForm}
            showForm={showForm}
            onClickSearchGo={this.handleSearch}
            orderBy={orderBy}
            orderDir={orderDir}
            onClickSort={this.handleSort}/>
          {elmForm}
          <Table items={items} onClickDelete={this.handleDelete} onClickEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
