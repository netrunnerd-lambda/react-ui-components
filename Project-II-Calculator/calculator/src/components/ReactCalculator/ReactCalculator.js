import React from 'react';
import './ReactCalculator.css';

// components ...
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';
import ActionButton from './ButtonComponents/ActionButton';
import NumberButton from './ButtonComponents/NumberButton';

class ReactCalculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      numbers: [ 7, 8, 9, 4, 5, 6, 1, 2, 3 ],
      symbols: [ '÷', '×', '−', '+', '=' ],
      total: 0
    };
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay total={ this.state.total } />
        <div className="calc-pad">
          <section className="main-pad">
            <ActionButton text="clear" />
            <div className="pad-numbers">
              { this.state.numbers.map(n => <NumberButton buttonStyle="number" key={ n } text={ n } />)}
            </div>
            <ActionButton text="0" />
          </section>
          <section className="side-pad">
            { this.state.symbols.map(s => <ActionButton buttonStyle="symbol" key={ s } text={ s } />) }
          </section>
        </div>
      </div>
    );
  }
}

export default ReactCalculator;