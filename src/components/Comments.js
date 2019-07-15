import React from "react";

class Comments extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.comments = [];
    this.state = {};
    this.state.filterText = "";
    this.state.comments = [
      {
        id: 1,
        puzzleID: "",
        matchID: "",
        puzzleName: "",
        comments: ""
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(comment) {
    var index = this.state.comments.indexOf(comment);
    this.state.comments.splice(index, 1);
    this.setState(this.state.comments);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var comment = {
      id: id,
      puzzleID: "",
      matchID: "",
      puzzleName: "",
      comments: ""
    }
    this.state.comments.push(comment);
    this.setState(this.state.comments);

  }

  handleCommentTable(evt) {
    var item = {
      id: evt.target.id,
      puzzleID: evt.target.puzzleID,
      value: evt.target.value
    };
var comments = this.state.comments.slice();
  var newComments = comments.map(function(comment) {

    for (var key in comment) {
      if (key == item.puzzleID && comment.id == item.id) {
        comment[key] = item.value;

      }
    }
    return comment;
  });
    this.setState({comments:newComments});
  //  console.log(this.state.comments);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <CommentTable onCommentTableUpdate={this.handleCommentTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} comments={this.state.comments} filterText={this.state.filterText}/>
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

class CommentTable extends React.Component {

  render() {
    var onCommentTableUpdate = this.props.onCommentTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var comment = this.props.comments.map(function(comment) {
      if (comment.puzzleID.indexOf(filterText) == -1) {
        return;
      }
      return (<CommentRow onCommentTableUpdate={onCommentTableUpdate} comment={comment} onDelEvent={rowDel.bind(this)} key={comment.id}/>)
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
              <th>Comments</th>
            </tr>
          </thead>

          <tbody>
            {comment}

          </tbody>

        </table>
      </div>
    );

  }

}

class CommentRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.comment);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onCommentTableUpdate={this.props.onCommentTableUpdate} cellData={{
          "type": "puzzleID",
          value: this.props.comment.puzzleID,
          id: this.props.comment.id
        }}/>
        <EditableCell onCommentTableUpdate={this.props.onCommentTableUpdate} cellData={{
          type: "matchID",
          value: this.props.comment.matchID,
          id: this.props.comment.id
        }}/>
        <EditableCell onCommentTableUpdate={this.props.onCommentTableUpdate} cellData={{
          type: "puzzleName",
          value: this.props.comment.puzzleName,
          id: this.props.comment.id
        }}/>
        <EditableCell onCommentTableUpdate={this.props.onCommentTableUpdate} cellData={{
          type: "comments",
          value: this.props.comment.comments,
          id: this.props.comment.id
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
        <input type='text' puzzleID={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onCommentTableUpdate}/>
      </td>
    );

  }

}

export default Comments;
