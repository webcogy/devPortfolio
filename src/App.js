import Contents from './components/Cotnents';
import Depth1 from './components/Depth1';
import Depth2 from './components/Depth2';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Depth1 />
        <Depth2 />
        <Contents />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
