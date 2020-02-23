import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import { routes } from './app.component';
import './index.less';

ReactDOM.render((
    <UIRouter plugins={[pushStateLocationPlugin]} states={routes}>
        <UIView />
    </UIRouter>
), document.querySelector('#root'));
