import React from "react";

class Transactions extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.transactions = [];
    this.state = {};
    this.state.filterText = "";
    this.state.transactions = [
      {
        id: 1,
        puzzleID: "",
        puzzleMatchID: "",
        custID: "",
        custName: "",
        dateSent: "",
        dateRet: "",
        complexity: "",
        status: "",
        nbrMissing: "",
        puzzleName: "",
        inOut: "",
        mfg: "",
        nbrPieces: ""
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(transaction) {
    var index = this.state.transactions.indexOf(transaction);
    this.state.transactions.splice(index, 1);
    this.setState(this.state.transactions);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var transaction = {
      id: id,
      puzzleID: "",
      puzzleMatchID: "",
      custID: "",
      custName: "",
      dateSent: "",
      dateRet: "",
      complexity: "",
      status: "",
      nbrMissing: "",
      puzzleName: "",
      inOut: "",
      mfg: "",
      nbrPieces: "",
    }
    this.state.transactions.push(transaction);
    this.setState(this.state.transactions);

  }

  handleTransactionTable(evt) {
    var item = {
      id: evt.target.id,
      puzzleID: evt.target.puzzleID,
      value: evt.target.value
    };
var transactions = this.state.transactions.slice();
  var newTransactions = transactions.map(function(transaction) {

    for (var key in transaction) {
      if (key == item.puzzleID && transaction.id == item.id) {
        transaction[key] = item.value;

      }
    }
    return transaction;
  });
    this.setState({transactions:newTransactions});
  //  console.log(this.state.transactions);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <TransactionTable onTransactionTableUpdate={this.handleTransactionTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} transactions={this.state.transactions} filterText={this.state.filterText}/>
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

class TransactionTable extends React.Component {

  render() {
    var onTransactionTableUpdate = this.props.onTransactionTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var transaction = this.props.transactions.map(function(transaction) {
      if (transaction.puzzleID.indexOf(filterText) == -1) {
        return;
      }
      return (<TransactionRow onTransactionTableUpdate={onTransactionTableUpdate} transaction={transaction} onDelEvent={rowDel.bind(this)} key={transaction.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Puzzle ID</th>
              <th>Puzzle Match ID</th>
              <th>Cust ID</th>
              <th>Cust NAme</th>
              <th>Date Sent</th>
              <th>Date Returned</th>
              <th>Complexity</th>
              <th>Status</th>
              <th>Nbr Missing</th>
              <th>Puzzle Name</th>
              <th>In/Out</th>
              <th>Mfg</th>
              <th>Nbr Pieces</th>
            </tr>
          </thead>

          <tbody>
            {transaction}

          </tbody>

        </table>
      </div>
    );

  }

}

class TransactionRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.transaction);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          "type": "puzzleID",
          value: this.props.transaction.puzzleID,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "puzzleMatchID",
          value: this.props.transaction.puzzleMatchID,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "custID",
          value: this.props.transaction.custID,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "custName",
          value: this.props.transaction.custName,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "dateSent",
          value: this.props.transaction.dateSent,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "dateRet",
          value: this.props.transaction.dateRet,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "complexity",
          value: this.props.transaction.complexity,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "status",
          value: this.props.transaction.status,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "nbrMissing",
          value: this.props.transaction.nbrMissing,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "puzzleName",
          value: this.props.transaction.puzzleName,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "inOut",
          value: this.props.transaction.inOut,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "mfg",
          value: this.props.transaction.mfg,
          id: this.props.transaction.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "nbrPieces",
          value: this.props.transaction.nbrPieces,
          id: this.props.transaction.id
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
        <input type='text' puzzleID={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onTransactionTableUpdate}/>
      </td>
    );

  }

}

export default Transactions;