import axios from 'axios';

class _CategoriesService {
    categories;
    _categories = null;

    constructor() {
    }

    async _getCategories() {
        return axios.get(`http://localhost:7777/categories`);
    }

    async getCategories() {
        if (!this.categories) {
            const catData = await this._getCategories();
            this.categories = catData.data;
        }
        return this.categories;
    }
}

export const CategoriesService = new _CategoriesService();