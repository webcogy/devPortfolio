import Kind1Container from './containers/Kind1Container';
import Kind2Container from './containers/Kind2Container';
import ListContainer from './containers/ListContainer';
import './scss/style.scss'

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>김대현 포트폴리오</h1>
            </div>
            <div className="wrapper">
                <h2>DEVELOPER</h2>

                <div className="page">
                    <h3>PORTFOLIO</h3>
                    <Kind1Container />
                    <Kind2Container />
                    <ListContainer />
                </div>
            </div>
            <div className="Footer">
                <div className="f_copyright">
                    @2021 
                    <strong>daehyun</strong>
                </div>
            </div>
        </div>
    )
}

export default App;
