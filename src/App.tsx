import '../src/assets/styles/global.css'
import BackGround from './components/BackGround';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div id='grid'>
      <SideBar />
      <BackGround />
      </div>
    </div>
  );
}

export default App;
