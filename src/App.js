import ProfilePhoto from './component/ProfilePhoto';
import FullName from './component/FullName';
import Address from './component/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <ProfilePhoto />
        <FullName />
        <Address/>
      </div>
      </header>
    </div>
  );
}

export default App;
