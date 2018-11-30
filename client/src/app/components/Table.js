import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss'

const spaceUnit = 8;
const headerHeight = 48;

const styles = {
  tableWrapper: {
    marginTop: spaceUnit * 6
  },
  table: {
    margin: 'auto',
    marginTop: spaceUnit * 3,
    textAlign: 'left',
    "& thead": {
      marginBottom: spaceUnit * 3
    },
    "& th": {
      margin: `0 ${spaceUnit} 0 ${spaceUnit}`,
      height: headerHeight
    }
  }
}

class Table extends Component {
  renderTable(fileData) {
    const { classes: c } = this.props;
    const { data } = fileData;
    console.log(data)
    const headers = Object.keys(data[0]);

    return (
      <table cellPadding={16} className={c.table}>
        <thead>
          <tr bgcolor="#F2F2F2">
            {
              headers.map(header => {
                return <th key={header}>{header}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, index) => {
              return (
                <tr key={index} bgcolor="#FAFAFA">
                {
                  headers.map(header => {
                    return <td key={header}>{row[header]}</td>
                  })
                }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  render() {
    const { classes: c, data } = this.props;

    return (
      <div className={c.tableWrapper}>
        {
          !! data && (
            <Fragment>
              <h2>{data.fileName}</h2>
              {this.renderTable(data)}
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Table);
