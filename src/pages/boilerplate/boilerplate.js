// import logo from './logo.svg';
import logo from '../../logo.svg';
import './boilerplate.css';

function Boilerplate() {
  return (
    <div className="Boilerplate">
      <header className="Boilerplate-header">
        <img src={logo} className="Boilerplate-logo" alt="logo" />
        <p>
          Edit <code>src/Boilerplate.js</code> and save to reload.
        </p>
        <a
          className="Boilerplate-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Boilerplate;
