import React, {useState} from 'react';
import LeftMenu from '../LeftMenu';
import Header from '../Header';
import Listing from '../Listing';
import './styles.css';

function App() {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <LeftMenu leftMenuOpen={leftMenuOpen} setLeftMenuOpen={setLeftMenuOpen} />
      <Header setLeftMenuOpen={setLeftMenuOpen} />
      <Listing />
    </div>
  );
}

export default App;