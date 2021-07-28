class SearchView {
    _parentElement = document.querySelector('.search');
    _query = this._parentElement.querySelector('.search__field');

    getQuery() {
        const queryValue = this._query.value;
        this._clearInput();
        return queryValue;
    }

    _clearInput() {
        this._query.value = '';
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', (e) => {
            e.preventDefault();
            handler();
            this._query.blur();
        });
    }
}

export default new SearchView();
