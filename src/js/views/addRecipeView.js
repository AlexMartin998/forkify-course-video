import View from './View.js';


class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
	_message = 'Recipe was succesfully uploaded :)';

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }

    scape() {
        // // Show modal
        this.toggleWindow();

        // // CLose modal with scape
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                this._overlay.classList.add('hidden');
                this._window.classList.add('hidden');
            }
        });
    }

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

	_addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.scape.bind(this));
	}
	// // OR: With arrow f(x)  <-  lexical this - Parent Scope
    // _addHandlerShowWindow() {
    // 	this._btnOpen.addEventListener('click', () => {		// lexical this - Parent Scope
    // 		// console.log(this);		// this = Obj
    // 		this.toggleWindow();
    // 	})
    // }

    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }

	addHandlerUplaod(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();

			const dataArr = [...new FormData(this)];
			const data = Object.fromEntries(dataArr);
			handler(data);
		})
	}

    _generateMarkup() {	}
}

export default new AddRecipeView();
