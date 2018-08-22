import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 1
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    let item = this.props.itemSelected;
    //let name = this.state.task_name;
    //let level = this.state.task_level;
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let item = nextProps.itemSelected;
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level
      });
    }
  }
  handleCancel() {
    this.props.onClickCancel();
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log("handleChange: ", this.state);
  }
  handleSubmit(event) {
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level
    };
    this.props.onClickSubmit(item);
    event.preventDefault();
    console.log("handleSubmit: ", this.state);
  }
  render() {

    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group">
              <label className="sr-only">label</label>
              <input name="task_name" type="text" className="form-control" value={this.state.task_name} onChange={this.handleChange} placeholder="Task name" />
              <select name="task_level" className="form-control" required="required" value={this.state.task_level} onChange={this.handleChange}>
                <option value={1}>Small</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
