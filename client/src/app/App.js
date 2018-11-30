import React, { Component } from 'react';
import Home from './pages/Home';
import injectSheet from 'react-jss';

const styles = {
  '@global': {
    body: {
      margin: '0',
      padding: '0',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale'
    }
  },
  app: {
    textAlign: 'center'
  }
}

class App extends Component {
  render() {
    const { classes: c } = this.props;

    return (
      <div className={c.app}>
        <Home />
      </div>
    );
  }
}

export default injectSheet(styles)(App);