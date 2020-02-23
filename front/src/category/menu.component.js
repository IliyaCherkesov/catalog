import React from 'react';
import { CategoriesContext } from '~/contextes/categories.context';
import template from './menu.template.rt';
import './menu.component.less';

export class Menu extends React.Component {
    static contextType = CategoriesContext;

    state = {
        categories: []
    };

    async componentDidMount() {
        const { categories, currentCategory } = this.context;
        this.setState({ categories, currentCategory });
    }

    render() {
        return template.call(this);
    }
}