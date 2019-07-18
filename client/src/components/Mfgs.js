import React from "react";

class Mfgs extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.puzzles = [];
    this.state = {};
    this.state.filterText = "";
    this.state.puzzles = [
      {
        id: 1,
        mfgName: "",
        mfgID: "",
        mfgAddr1: "",
        mfgAddr2: "",
        mfgCity: "",
        mfgState: "",
        mfgZip: "",
        mfgContact: "",
        mfgPhone: "",
        mfgEmail: "",
        notes: "",
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(mfg) {
    var index = this.state.puzzles.indexOf(mfg);
    this.state.puzzles.splice(index, 1);
    this.setState(this.state.puzzles);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var mfg = {
      id: id,
      mfgName: "",
      mfgID: "",
      mfgAddr1: "",
      mfgAddr2: "",
      mfgCity: "",
      mfgState: "",
      mfgZip: "",
      mfgContact: "",
      mfgPhone: "",
      mfgEmail: "",
      notes: "",
      ooo: "",
      ppp: "",
      qqq: ""
    }
    this.state.puzzles.push(mfg);
    this.setState(this.state.puzzles);

  }

  handleMfgTable(evt) {
    var item = {
      id: evt.target.id,
      mfgName: evt.target.mfgName,
      value: evt.target.value
    };
var puzzles = this.state.puzzles.slice();
  var newMfgs = puzzles.map(function(mfg) {

    for (var key in mfg) {
      if (key == item.mfgName && mfg.id == item.id) {
        mfg[key] = item.value;

      }
    }
    return mfg;
  });
    this.setState({puzzles:newMfgs});
  //  console.log(this.state.puzzles);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <MfgTable onMfgTableUpdate={this.handleMfgTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} puzzles={this.state.puzzles} filterText={this.state.filterText}/>
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

class MfgTable extends React.Component {

  render() {
    var onMfgTableUpdate = this.props.onMfgTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var mfg = this.props.puzzles.map(function(mfg) {
      if (mfg.mfgName.indexOf(filterText) == -1) {
        return;
      }
      return (<MfgRow onMfgTableUpdate={onMfgTableUpdate} mfg={mfg} onDelEvent={rowDel.bind(this)} key={mfg.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Mfg Name</th>
              <th>Mfg ID</th>
              <th>Mfg Addr1</th>
              <th>Mfg Addr2</th>
              <th>Mfg City</th>
              <th>Mfg State</th>
              <th>Mfg Zip</th>
              <th>Mfg Contact</th>
              <th>Mfg Phone</th>
              <th>Mfg Email</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {mfg}

          </tbody>

        </table>
      </div>
    );

  }

}

class MfgRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.mfg);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          "type": "mfgName",
          value: this.props.mfg.mfgName,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgID",
          value: this.props.mfg.mfgID,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgAddr1",
          value: this.props.mfg.mfgAddr1,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgCity",
          value: this.props.mfg.mfgCity,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgState",
          value: this.props.mfg.mfgState,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgZip",
          value: this.props.mfg.mfgZip,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgContact",
          value: this.props.mfg.mfgContact,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgPhone",
          value: this.props.mfg.mfgPhone,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "mfgEmail",
          value: this.props.mfg.mfgEmail,
          id: this.props.mfg.id
        }}/>
        <EditableCell onMfgTableUpdate={this.props.onMfgTableUpdate} cellData={{
          type: "notes",
          value: this.props.mfg.notes,
          id: this.props.mfg.id
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
        <input type='text' mfgName={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onMfgTableUpdate}/>
      </td>
    );

  }

}

export default Mfgs;