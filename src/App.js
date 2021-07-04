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
                <div className="kind1">
                    <button className="btn_kind1 on">ALL</button>
                    <button className="btn_kind1">WEB</button>
                    <button className="btn_kind1">APP</button>
                    <button className="btn_kind1">HYBRID</button>
                </div>
                <div className="kind2">
                    <ul>
                        <li>
                            <input type="checkbox" name="pf_item[]" value="react" id="pf_react" />
                            <label htmlFor="pf_react">
                                <span>react</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" name="pf_item[]" value="reactNative" id="pf_reactNative" />
                            <label htmlFor="pf_reactNative">
                                <span>reactNative</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" name="pf_item[]" value="redux" id="pf_redux" />
                            <label htmlFor="pf_redux">
                                <span>redux</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" name="pf_item[]" value="sass" id="pf_sass" />
                            <label htmlFor="pf_sass">
                                <span>sass</span>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" name="pf_item[]" value="styledComponent" id="pf_styledComponent" />
                            <label htmlFor="pf_styledComponent">
                                <span>styledComponent</span>
                            </label>
                        </li>
                    </ul>
                </div>
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
