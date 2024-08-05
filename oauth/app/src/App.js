import './App.css';
import FetchingButton from './components/FetchingButton';
import OAuthButton from './components/OAuthButton';

function App() {
  return (
    <div className='App'>
      <OAuthButton />
      <FetchingButton />
    </div>
  );
}

export default App;
