const { useState, useRef } = React;

function Calculator() {
  const [value, setValue] = useState("");
  const displayRef = useRef(null);

  function append(v) {
    setValue(prev => prev + v);
    displayRef.current.focus();
  }

  function clearDisplay() {
    setValue("");
  }

  function calculate() {
    try {
      // simple eval for demo purposes
      // replace percent with modulo behavior
      const sanitized = value.replace(/%/g, "%");
      // eslint-disable-next-line no-eval
      const result = eval(sanitized);
      setValue(String(result));
    } catch (e) {
      setValue("Error");
    }
  }

  return (
    <div className="calculator">
      <input
        ref={displayRef}
        className="display"
        value={value}
        placeholder="0"
        aria-label="Calculator display"
        readOnly
      />
      <div className="buttons">
        <button onClick={clearDisplay} className="clear">C</button>
        <button onClick={() => append('%')} className="operator">%</button>
        <button onClick={() => append('/')} className="operator">/</button>
        <button onClick={() => append('*')} className="operator">*</button>

        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button onClick={() => append('-')} className="operator">-</button>

        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button onClick={() => append('+')} className="operator">+</button>

        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button onClick={calculate} className="equal">=</button>

        <button onClick={() => append('0')}>0</button>
        <button onClick={() => append('.')}>.</button>
      </div>
      <footer className="footer">Beautifully crafted by Abhay Kumar</footer>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
