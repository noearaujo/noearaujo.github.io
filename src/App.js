import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <main className="container-fluid mt-5">
          <div className = "row">
            <div className = "mb-4 mt-5 justify-content-center">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>

          <div className = "justify-content-center">
            <button className= "menu-item" onClick = {() => alert("Em breve")}>
              GAMES
            </button>
            <button className= "p-2 menu-item" onClick = {() => alert("Em breve")}>
              APPS
            </button>
            <button className= "p-2 menu-item" onClick = {() => alert("Em breve")}>
              COMPANY
            </button>
            <button className= "p-2 menu-item" onClick = {() => alert("Em breve")}>
              CONTACT
            </button>
          </div>
        </main>

        <footer class="fixed-bottom text-center text-lg-center">
		      <div>&copy; {new Date().getFullYear()} R13B. All rights reserved.</div>
	      </footer>
      </header>
    </div>
  );
}

export default App;
