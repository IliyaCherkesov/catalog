import React from 'react';
import { UIView } from '@uirouter/react';
import { CategoriesContext } from '~/contextes/categories.context';
import template from './category.template';

export class Category extends React.Component {
    static contextType = CategoriesContext;
    
    state = {};
    constructor(props, context) {
        super(props, context);
        const { category } = props
        this.state = { category };
        context.currentCategory = category;
    }

    componentDidMount() {
        /*
        axios
            .get(`http://localhost:7777/categories/${this.state.categoryId}`)
            .then(items => {
                this.setState({
                    items: items.data
                });
            });
        */
    }

    selected(item) {
        console.log('Item is', item);
        return true;
    }

    render() {
        return template.call(this);
    }
}

export const routes = [
    {
        name: 'app.categories',
        url: 'categories/',
        abstract: true,
        component: () => <UIView />
    },
    {
        token: 'category',
        name: 'app.categories.category',
        url: ':categoryId',
        component: Category,
        resolve: [{
            token: 'category',
            deps: ['categories', '$transition$'],
            resolveFn: (categories, transition) => {
                const category = categories.find(category => category.id === Number(transition.params().categoryId));
                return category;
            }
        }]
    }
];

