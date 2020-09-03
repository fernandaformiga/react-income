import React, { Component } from 'react';
import './App.css';
import CalculateSalaryFrom, { calculateSalaryFrom } from './salary';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = { input: '0' };
  }

  textChangedHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const results = calculateSalaryFrom(this.state.input);

    const totalBar =
      results.netSalary + results.discountINSS + results.discountIRPF;
    const netSalaryBar = (results.netSalary / totalBar) * 100;
    const discINSSBar = (results.discountINSS / totalBar) * 100;
    const discIRPFBar = (results.discountIRPF / totalBar) * 100;

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangedHandler}
          value={this.state.input}
        />
        <p>{this.state.input}</p>
        <p>Base INSS: {results.baseINSS}</p>
        <p>Discount INSS: {results.discountINSS}</p>
        <p>Base IRPF: {results.baseINSS}</p>
        <p>Discount IRPF: {results.discountIRPF}</p>
        <p>Net Salary: {results.netSalary}</p>

        <ProgressBar>
          <ProgressBar
            striped
            variant="success"
            now={discINSSBar}
            label={`${discINSSBar.toFixed(2)}%`}
            key={1}
          />
          <ProgressBar
            variant="warning"
            now={discIRPFBar}
            label={`${discIRPFBar.toFixed(2)}%`}
            key={2}
          />
          <ProgressBar
            striped
            variant="danger"
            now={netSalaryBar}
            label={`${netSalaryBar.toFixed(2)}%`}
            key={3}
          />
        </ProgressBar>
      </div>
    );
  }
}

export default App;
