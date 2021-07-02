import React from 'react';

function Depth2() {
    return (
        <div className="depth2">
            <ul>
                <li>
                    <input type="checkbox" name="pf_item[]" value="react" id="pf_react" />
                    <label for="pf_react">
                        <span>react</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="pf_item[]" value="reactNative" id="pf_reactNative" />
                    <label for="pf_reactNative">
                        <span>reactNative</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="pf_item[]" value="redux" id="pf_redux" />
                    <label for="pf_redux">
                        <span>redux</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="pf_item[]" value="sass" id="pf_sass" />
                    <label for="pf_sass">
                        <span>sass</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="pf_item[]" value="styledComponent" id="pf_styledComponent" />
                    <label for="pf_styledComponent">
                        <span>styledComponent</span>
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default Depth2;
