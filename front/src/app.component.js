import React from 'react';
import { routes as categoriesRoutes } from './category/category.component';
import { CategoriesService } from '~/api/categories.service';
import  template from './app.template.rt';

export class App extends React.Component {
  
  state = {};

  constructor(props, context) {
    super(props, context);
    this.routes = routes;
    const { categories, currentCategory } = props;
    this.state = {
      categories,
      currentCategory
    }
  }

  render() {
    return template.call(this);
  }
}

export const routes = [
  {
    url: '/',
    name: 'app',
    component: App,
    resolve: [{
        token: 'categories',
        deps: [],
        resolveFn: async () => {
            const categories = await CategoriesService.getCategories();
            return categories;
        }
    }, {
      token: 'currentCategory',
      deps: ['$transition$', 'categories'],
      resolveFn: (transition, categories) => categories.find(category => category.id === Number(transition.params().categoryId))
    }]
  },
  ...categoriesRoutes
];
