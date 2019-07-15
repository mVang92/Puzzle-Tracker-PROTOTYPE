import React from "react";

class Customers extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.customers = [];
    this.state = {};
    this.state.filterText = "";
    this.state.customers = [
      {
        id: 1,
        custID: "",
        custName: "",
        status: "",
        county: "",
        parentCustID: "",
        custAddr1: "",
        custAddr2: "",
        city: "",
        state: "",
        zip: "",
        primaryContact: "",
        title: "",
        phone: "",
        email: "",
        insiderName: "",
        insiderPhone: ""
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(customer) {
    var index = this.state.customers.indexOf(customer);
    this.state.customers.splice(index, 1);
    this.setState(this.state.customers);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var customer = {
      id: id,
      custID: "",
      customer_name: "",
      status: "",
      county: "",
      parentCustID: "",
      custAddr1: "",
      custAddr2: "",
      city: "",
      state: "",
      zip: "",
      primaryContact: "",
      title: "",
      phone: "",
      email: "",
      insiderName: "",
      insiderPhone: ""
    }
    this.state.customers.push(customer);
    this.setState(this.state.customers);

  }

  handleCustomerTable(evt) {
    var item = {
      id: evt.target.id,
      custID: evt.target.custID,
      value: evt.target.value
    };
var customers = this.state.customers.slice();
  var newCustomers = customers.map(function(customer) {

    for (var key in customer) {
      if (key == item.custID && customer.id == item.id) {
        customer[key] = item.value;

      }
    }
    return customer;
  });
    this.setState({customers:newCustomers});
  //  console.log(this.state.customers);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <CustomerTable onCustomerTableUpdate={this.handleCustomerTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} customers={this.state.customers} filterText={this.state.filterText}/>
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

class CustomerTable extends React.Component {

  render() {
    var onCustomerTableUpdate = this.props.onCustomerTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var customer = this.props.customers.map(function(customer) {
      if (customer.custID.indexOf(filterText) == -1) {
        return;
      }
      return (<CustomerRow onCustomerTableUpdate={onCustomerTableUpdate} customer={customer} onDelEvent={rowDel.bind(this)} key={customer.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Comments</th>
              <th>Status</th>
              <th>County</th>
              <th>Parent Cust ID</th>
              <th>Cust Addr 1</th>
              <th>Cust Addr 2</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Primary Contact</th>
              <th>Title</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Insider Name</th>
              <th>Insider Phone</th>
            </tr>
          </thead>

          <tbody>
            {customer}

          </tbody>

        </table>
      </div>
    );

  }

}

class CustomerRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.customer);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onCustomerTableUpdate={this.props.onCustomerTableUpdate} cellData={{
          "type": "custID",
          value: this.props.customer.custID,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "custName",
          value: this.props.customer.custName,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "status",
          value: this.props.customer.status,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "county",
          value: this.props.customer.county,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "parentCustID",
          value: this.props.customer.parentCustID,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "custAddr1",
          value: this.props.customer.custAddr1,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "custAddr2",
          value: this.props.customer.custAddr2,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "city",
          value: this.props.customer.city,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "state",
          value: this.props.customer.state,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "zip",
          value: this.props.customer.zip,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "primaryContact",
          value: this.props.customer.primaryContact,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "title",
          value: this.props.customer.title,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "phone",
          value: this.props.customer.phone,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "email",
          value: this.props.customer.email,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "insiderName",
          value: this.props.customer.insiderName,
          id: this.props.customer.id
        }}/>
        <EditableCell onTransactionTableUpdate={this.props.onTransactionTableUpdate} cellData={{
          type: "insiderPhone",
          value: this.props.customer.insiderPhone,
          id: this.props.customer.id
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
        <input type='text' custID={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onCustomerTableUpdate}/>
      </td>
    );

  }

}

export default Customers;