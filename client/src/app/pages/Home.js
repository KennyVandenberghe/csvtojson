import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import injectSheet from 'react-jss';

import List from "../components/Table";

const styles = {
  home: {},
  input: {
    display: 'none'
  }
}

class Home extends Component {
  state = {
    csv: undefined
  }
  handleSubmit = () => {
    let formData = new FormData();

    if (!! this.state.csv) {
      formData.append('file', this.state.csv);

      axios.post('/api/upload', formData)
        .then(res => {
          this.setState({data: res.data})
        })
    }
  }
  handleChange = (event) => {
    this.setState({
      csv: event.target.files[0]
    }, () => {
      this.handleSubmit()
    })
  }
  render() {
    const { classes: c } = this.props;

    return (
      <div className={c.home}>
        <h1>CSV to JSON</h1>
        <input
          accept="text/csv"
          id="contained-button-file"
          type="file"
          className={c.input}
          onChange={this.handleChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        {
          !! this.state.data && <List data={this.state.data} />
        }
      </div>
    );
  }
}
export default injectSheet(styles)(Home);
