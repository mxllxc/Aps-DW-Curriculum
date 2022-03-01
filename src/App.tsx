import BackGround from './components/BackGround';
import SideBar from './components/SideBar';
import GlobalStyles from './assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';
import userState from './utils/userStates';

function App() {

  const [theme, setTheme] = userState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme} >
    <div className="App">
      <GlobalStyles />
      <div id='grid'>
      <SideBar toggleTheme={toggleTheme} />
      <BackGround />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
