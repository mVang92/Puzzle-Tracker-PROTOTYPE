import React from "react";

class Puzzles extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.puzzles = [];
    this.state = {};
    this.state.filterText = "";
    this.state.puzzles = [
      {
        id: 1,
        puzzle_name: "",
        matchID: "",
        series: "",
        puzzleID: "",
        nbrPieces: "",
        size: "",
        complexity: "",
        status: "",
        nbrMissing: "",
        mystery: "",
        puzzleMfg: "",
        theme: "",
        donorCustID: "",
        dateEnt: "",
        dateRet: "",
        mfgID: "",
        inOut: "",
        custHist: "",
        lastDate: "",
        overYear: ""
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(puzzle) {
    var index = this.state.puzzles.indexOf(puzzle);
    this.state.puzzles.splice(index, 1);
    this.setState(this.state.puzzles);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var puzzle = {
      id: id,
      puzzleID: "",
      matchID: "",
      puzzle_name: "",
      series: "",
      nbrPieces: "",
      size: "",
      complexity: "",
      status: "",
      nbrMissing: "",
      mystery: "",
      puzzleMfg: "",
      theme: "",
      donorCustID: "",
      dateEnt: "",
      dateRet: "",
      mfgID: "",
      inOut: "",
      custHist: "",
      lastDate: "",
      overYear: ""
    }
    this.state.puzzles.push(puzzle);
    this.setState(this.state.puzzles);

  }

  handlePuzzleTable(evt) {
    var item = {
      id: evt.target.id,
      puzzleID: evt.target.puzzleID,
      value: evt.target.value
    };
var puzzles = this.state.puzzles.slice();
  var newPuzzles = puzzles.map(function(puzzle) {

    for (var key in puzzle) {
      if (key == item.puzzleID && puzzle.id == item.id) {
        puzzle[key] = item.value;

      }
    }
    return puzzle;
  });
    this.setState({puzzles:newPuzzles});
  //  console.log(this.state.puzzles);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <PuzzleTable onPuzzleTableUpdate={this.handlePuzzleTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} puzzles={this.state.puzzles} filterText={this.state.filterText}/>
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

class PuzzleTable extends React.Component {

  render() {
    var onPuzzleTableUpdate = this.props.onPuzzleTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var puzzle = this.props.puzzles.map(function(puzzle) {
      if (puzzle.puzzleID.indexOf(filterText) == -1) {
        return;
      }
      return (<PuzzleRow onPuzzleTableUpdate={onPuzzleTableUpdate} puzzle={puzzle} onDelEvent={rowDel.bind(this)} key={puzzle.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Puzzle ID</th>
              <th>Match ID</th>
              <th>Puzzle Name</th>
              <th>Series/Artist</th>
              <th>Nbr Pieces</th>
              <th>Size</th>
              <th>Complexity</th>
              <th>Status</th>
              <th>Nbr Missing</th>
              <th>Mystery</th>
              <th>Puzzle Mfg</th>
              <th>Theme</th>
              <th>Donor Cust ID</th>
              <th>Date Ent</th>
              <th>Date Ret</th>
              <th>Mfg ID</th>
              <th>In Out</th>
              <th>Cust Hist</th>
              <th>Last Date</th>
              <th>Over 1 Year</th>
            </tr>
          </thead>

          <tbody>
            {puzzle}

          </tbody>

        </table>
      </div>
    );

  }

}

class PuzzleRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.puzzle);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          "type": "puzzleID",
          value: this.props.puzzle.puzzleID,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "matchID",
          value: this.props.puzzle.matchID,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "series",
          value: this.props.puzzle.series,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "puzzle_name",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "nbrPieces",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "size",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "complexity",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "status",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "nbrMissing",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "mystery",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "puzzleMfg",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "theme",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "donorCustID",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "dateEnt",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "dateRet",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "mfgID",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "inOut",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "custHist",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "lastDate",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
        }}/>
        <EditableCell onPuzzleTableUpdate={this.props.onPuzzleTableUpdate} cellData={{
          type: "overYear",
          value: this.props.puzzle.puzzle_name,
          id: this.props.puzzle.id
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
        <input type='text' puzzleID={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onPuzzleTableUpdate}/>
      </td>
    );

  }

}

export default Puzzles;


