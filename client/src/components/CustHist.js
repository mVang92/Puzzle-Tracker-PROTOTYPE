import React from "react";

class CustHist extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.custHist = [];
    this.state = {};
    this.state.filterText = "";
    this.state.custHist = [
      {
        id: 1,
        puzzleMatchID: "",
        custID: "",
        dateRet: "",
        calcDate: ""
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(custHist) {
    var index = this.state.custHist.indexOf(custHist);
    this.state.custHist.splice(index, 1);
    this.setState(this.state.custHist);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var custHist = {
      id: id,
      puzzleMatchID: "",
      custID: "",
      dateRet: "",
      calcDate: ""
    }
    this.state.custHist.push(custHist);
    this.setState(this.state.custHist);

  }

  handleCustHistTable(evt) {
    var item = {
      id: evt.target.id,
      puzzleMatchID: evt.target.puzzleMatchID,
      value: evt.target.value
    };
var custHist = this.state.custHist.slice();
  var newCustHist = custHist.map(function(custHist) {

    for (var key in custHist) {
      if (key == item.puzzleMatchID && custHist.id == item.id) {
        custHist[key] = item.value;

      }
    }
    return custHist;
  });
    this.setState({custHist:newCustHist});
  //  console.log(this.state.custHist);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <CustHistTable onCustHistTableUpdate={this.handleCustHistTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} custHist={this.state.custHist} filterText={this.state.filterText}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

class CustHistTable extends React.Component {

  render() {
    var onCustHistTableUpdate = this.props.onCustHistTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var custHist = this.props.custHist.map(function(custHist) {
      if (custHist.puzzleMatchID.indexOf(filterText) == -1) {
        return;
      }
      return (<CustHistRow onCustHistTableUpdate={onCustHistTableUpdate} custHist={custHist} onDelEvent={rowDel.bind(this)} key={custHist.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Puzzle Match ID</th>
              <th>Cust ID</th>
              <th>Cust Name</th>
              <th>Date Returned</th>
              <th>Calculate Date</th>
            </tr>
          </thead>

          <tbody>
            {custHist}

          </tbody>

        </table>
      </div>
    );

  }

}

class CustHistRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.custHist);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onCustHistTableUpdate={this.props.onCustHistTableUpdate} cellData={{
          "type": "puzzleMatchID",
          value: this.props.custHist.puzzleMatchID,
          id: this.props.custHist.id
        }}/>
        <EditableCell onCustHistTableUpdate={this.props.onCustHistTableUpdate} cellData={{
          type: "custID",
          value: this.props.custHist.custID,
          id: this.props.custHist.id
        }}/>
        <EditableCell onCustHistTableUpdate={this.props.onCustHistTableUpdate} cellData={{
          type: "custName",
          value: this.props.custHist.custName,
          id: this.props.custHist.id
        }}/>
        <EditableCell onCustHistTableUpdate={this.props.onCustHistTableUpdate} cellData={{
          type: "dateRet",
          value: this.props.custHist.dateRet,
          id: this.props.custHist.id
        }}/>
        <EditableCell onCustHistTableUpdate={this.props.onCustHistTableUpdate} cellData={{
          type: "calcDate",
          value: this.props.custHist.calcDate,
          id: this.props.custHist.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' puzzleMatchID={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onCustHistTableUpdate}/>
      </td>
    );

  }

}

export default CustHist;
