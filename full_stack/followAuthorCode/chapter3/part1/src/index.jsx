import React from 'react';
import {render} from 'react-dom';

import Profile from './components/page65/index.jsx';
import List from './components/page70/index.jsx';
import Page86 from './components/page86/index.jsx';
import Page89PropTypes from './components/page89_PropTypes/index.jsx';
import Page90_Liked from './components/page90_Liked/index.jsx';
import Page91_Lifecycle from './components/page91_Lificycle/index.jsx';
import Page93_Combination from './components/page93_Combination/index.jsx';
import Page97_ref from './components/page97_ref/index.jsx';

render(
    <div>
        <Profile />
        <List />
        <Page86 name="张一丰" age="30"/>
        <Page89PropTypes name="张二丰" age="29"/>
        <Page90_Liked name="张三丰" age="28"/>
        <Page91_Lifecycle name="张四丰" age="27"/>
        <Page93_Combination name="张五丰" age="26" />
        <Page97_ref name="张六丰" age="25" />
    </div>,
    document.getElementById('root')
);
