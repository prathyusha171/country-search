// import React from 'react';
// import SearchBar from './components/SearchBar';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Country Search</h1>
//       <SearchBar />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Country Search</h1>
      </header>
      <main>
        <SearchBar />
      </main>
      <footer className="footer">
        <p>© 2024 Country Search App</p>
      </footer>
    </div>
  );
}

export default App;
