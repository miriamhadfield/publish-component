import React from 'react';
import { render} from 'react-dom';
import {MyComponent, MyComponentCopy} from '../../src';
const App = () => (
    <span>
    <MyComponent />
    <MyComponentCopy />
    </span>
);
render(<App />, document.getElementById("root"));