(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<app-loading-spinner *ngIf=\"showSpinner1\"></app-loading-spinner>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr />\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"bg-dark\">\r\n  <!-- <p class=\"top text-center brightText\" style=\"padding-top: 1rem\">Top</p> -->\r\n<div class=\"top text-center brightText\" style=\"padding-top: 1rem\" (click)=\"toTheTop()\">Top</div>\r\n  <!-- <button class=\"topBtn bg-dark brightText\" (click)=\"toTheTop()\">Top</button> -->\r\n<!-- <p class=\"text-center bright\">Add A Movie</p> -->\r\n<button class=\"addMovieBtn btn btn-dark brightText\" [routerLink]=\"['addMovie']\">Add A Movie</button>\r\n\r\n<p class=\"text-center brightText\" style=\"padding-bottom: 1rem; margin-bottom: 0\">@Movies4Fun</p>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\">\r\n  <a\r\n    class=\"navbar-brand collapse navbar-collapse text-center\"\r\n    style=\"margin-left: 20%\"\r\n    (click)=\"keepParams()\"\r\n    [routerLink]=\"['/']\"\r\n    [routerLinkActive]=\"'active'\"\r\n    [routerLinkActiveOptions]=\"'{ exact: true }'\"\r\n    >Movies4Fun</a\r\n  >\r\n\r\n  <a\r\n    class=\"navbar-toggler navbar-brand text-center mr-auto\"\r\n    style=\"color: white; border: 0px;\"\r\n    (click)=\"keepParams()\"\r\n    [routerLink]=\"['/']\"\r\n    [routerLinkActive]=\"'active'\"\r\n    [routerLinkActiveOptions]=\"'{ exact: true }'\"\r\n    >Movies4Fun</a\r\n  >\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n    <ul class=\"navbar-nav\" style=\"margin-left: 30%\">\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          (click)=\"keepParams()\"\r\n          [routerLink]=\"['`/movies?genre=${this.movieService.selectedGenreName}&alphabetical=${this.movieService.selectedCharName}`']\"\r\n          [routerLinkActive]=\"'active'\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >Home</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          [routerLink]=\"['addMovie']\"\r\n          [routerLinkActive]=\"'active'\"\r\n          >Add Movie</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          href=\"https://github.com/JaviAir\"\r\n          target=\"_blank\"\r\n          >Github</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          href=\"https://www.hirejavi.com/\"\r\n          target=\"_blank\"\r\n          >Portfolio</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          href=\"https://www.linkedin.com/in/javier-orejarena-451165151/\"\r\n          target=\"_blank\"\r\n          >LinkedIn</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div ngbDropdown class=\"d-inline-block ml-auto text-right\" display=\"dynamic\">\r\n    <button\r\n      class=\"btn btn-outline-primary\"\r\n      id=\"dropdownBasic1\"\r\n      ngbDropdownToggle\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"\">\r\n      <!-- <button ngbDropdownItem *ngFor=\"let item of genre; let i = index\" type=\"button\" [disabled]=\"selectedGenreIndex === i\" (click)=\"onGenreSelected(i)\">{{item}}</button> -->\r\n      <div\r\n\r\n        class=\"\"\r\n        id=\"collapsibleNavbar\"\r\n      >\r\n        <ul class=\"navbar-nav bg-dark text-center\">\r\n          <li class=\"nav-item\">\r\n            <a\r\n              class=\"nav-link\"\r\n              (click)=\"keepParams()\"\r\n              [routerLink]=\"['/']\"\r\n              [routerLinkActive]=\"'active'\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\"\r\n              >Home</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a\r\n            style=\"z-index: 5\"\r\n              class=\"nav-link\"\r\n              [routerLink]=\"['addMovie']\"\r\n              [routerLinkActive]=\"'active'\"\r\n              >Add Movie</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<br />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div style=\"text-align:center\">\r\n    <h1>\r\n      Welcome to {{ title }}!\r\n    </h1>\r\n  </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<!-- [queryParams]=\"{edit: [this.editMode] }\" -->\r\n<div class=\"container\"> <!--ALL ROWS MUST BE INSIDE CONTAINER-->\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col text-center\">\r\n      <div ngbDropdown class=\"d-inline-block\">\r\n        <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Genre: {{selectedGenreName}}</button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n          <button ngbDropdownItem *ngFor=\"let item of genre; let i = index\" type=\"button\" [disabled]=\"selectedGenreIndex === i\" (click)=\"onGenreSelected(i)\" routerLink=\"/movies\" [queryParams]=\"{genre: this.item }\" queryParamsHandling=\"merge\">{{item}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col text-center\">\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Alphabetical: {{selectedCharName}}</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-0\" *ngFor=\"let item of alphabet; let i = index\" type=\"button\">\r\n                    <button  type=\"button\" [disabled]=\"selectedCharIndex === i\" (click)=\"onLetterSelected(i)\" routerLink=\"/movies\" [queryParams]=\"{alphabetical: this.item }\" queryParamsHandling=\"merge\">{{item}}</button>\r\n                  </div>\r\n              </div>\r\n              <!-- <button ngbDropdownItem *ngFor=\"let item of alphabet; let i = index\" type=\"button\" (click)=\"onLetterSelected(i)\">{{item}}</button> -->\r\n              <!-- The code above looks better and could work if virtual scrolling could work or the dropdown wouldnt disappear on touch -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n\r\n\r\n\r\n<hr>\r\n\r\n    <app-movie-list></app-movie-list>\r\n\r\n<br>\r\n\r\n<div class=\"text-center\" *ngIf=\"firstInstance\">\r\n  <app-loading-spinner></app-loading-spinner>\r\nServer is booting up.\r\n<p>If this takes about 10 seconds, you're the first visitor in a while!</p>\r\n<p>If this takes any longer, something might have went wrong.</p>\r\n<p>Refresh the page or try again at a later time.</p>\r\n<p>Sorry for the inconvenince.</p>\r\n</div>\r\n\r\n<!-- <hr> -->\r\n\r\n<!-- // load next page button here -->\r\n<!-- <hr> -->\r\n<div\r\n      infiniteScroll\r\n      [infiniteScrollDistance]=\"2\"\r\n      [infiniteScrollThrottle]=\"1000\"\r\n      (scrolled)=\"onScroll()\">\r\n\r\n</div>\r\n\r\n<app-loading-spinner *ngIf=\"showScrollSpinner\"></app-loading-spinner>\r\n\r\n<!-- <div *ngIf=\"endOfDb\">\r\n  <hr>\r\n  <h3 class=\"text-center\">\r\n    End of Database.\r\n  </h3>\r\n</div> -->\r\n<!-- <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <br />\r\n      <button class=\"btn btn-primary\" (click)=\"nextArray()\">\r\n        Load Next Page\r\n      </button>\r\n    </div>\r\n  </div>\r\n<br> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/movie-detail/movie-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/movie-detail/movie-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<ng-template #areYouSure let-modal>\r\n  <!-- <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Modal title</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div> -->\r\n  <div class=\"modal-body\">\r\n    <br>\r\n    <p class=\"text-center\">Are you sure you want to delete this movie?</p>\r\n  </div>\r\n  <div class=\"modal-header\">\r\n  <div class=container>\r\n  <div class=\"row\">\r\n      <div class=\"col text-center\">\r\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"modal.close('Close click')\" (click)=\"confirmModal(success)\">Yes</button>\r\n      </div>\r\n\r\n  <div class=\"col text-center\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Close click')\" >No</button>\r\n</div>\r\n  <br>\r\n  </div>\r\n  </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #success let-modal>\r\n    <div class=\"modal-body\">\r\n      <br>\r\n      <p class=\"text-center\">Movie successfully deleted!</p>\r\n    </div>\r\n    <div class=\"modal-header\">\r\n    <div class=container>\r\n    <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Ok</button>\r\n      <br>\r\n  </div>\r\n\r\n    </div>\r\n    </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n<div class=\"container\" *ngIf=\"movie\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h3 style=\"text-transform: capitalize;\" *ngIf=\"movie\">{{movie.title}}</h3>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"onEdit()\" routerLink=\"edit\" [queryParams]=\"{edit: [this.editMode] }\" >Edit</button>\r\n    </div>\r\n    <div class=\"col text-left\">\r\n      <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"onDelete(areYouSure)\">Delete</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n        <img src=\"{{movie.image}}\" alt=\"image_here\" class=\"center\" style=\"max-height: 600px; max-width: 100%;\" *ngIf=\"movie\" onError=\"this.src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'\"/>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h4>Full Movie Description</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <p *ngIf=\"movie\">\r\n         {{movie.description}}\r\n    </p>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h4>Genre</h4>\r\n    </div>\r\n    <div class=\"col\">\r\n        <p *ngIf=\"movie\">{{movie.genre}}</p>\r\n  </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h4>Rating:</h4>\r\n    </div>\r\n    <div class=\"col\">\r\n      <!-- <p>*****</p> -->\r\n      <p *ngIf=\"movie\">{{movie.rating}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!movie\">\r\n  Sorry, that movie is not in our database. Would you like to\r\n  <a [routerLink]=\"['/addMovie']\">\r\n    add it?\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/movie-edit/movie-edit.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/movie-edit/movie-edit.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-loading-spinner *ngIf=\"showSpinner && !movieForm\"></app-loading-spinner>\r\n\r\n<ng-template #content let-modal>\r\n  <!-- <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Modal title</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div> -->\r\n  <div class=\"modal-body\">\r\n    <img src=\"http://www.clker.com/cliparts/h/9/v/L/X/q/bright-green-check-mark-hi.png\" alt=\"success_mark\" class=\"img-responsive\"\r\n    style=\"max-height: 250px; max-width: 250px;   display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\"/>\r\n    <br>\r\n    <p class=\"text-center\">Movie saved successfully!</p>\r\n  </div>\r\n  <div class=\"modal-header\">\r\n  <div class=container>\r\n  <div class=\"row\">\r\n    <!-- <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button> -->\r\n  <div class=\"col text-center\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\" (click)=\"onClose()\">Close</button>\r\n    <br>\r\n</div>\r\n\r\n  </div>\r\n  </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"container\" *ngIf=\"movieForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmit(content)\">\r\n        <!-- <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n              <span\r\n              *ngIf=\"!movieForm.valid && movieForm.touched\"\r\n              class=\"help-block\">Please enter valid data!</span>\r\n            <button [disabled]=\"!movieForm.valid\" type=\"submit\" class=\"btn btn-success col\">Save</button>\r\n          </div>\r\n          <div class=\"col text-center\">\r\n            <button class=\"btn btn-outline-danger col\" type=\"button\" (click)=\"onCancel()\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div> -->\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <label for=\"title\">Title</label>\r\n              <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control\" />\r\n              <span\r\n              *ngIf=\"!movieForm.get('title').valid && movieForm.get('title').touched\"\r\n              class=\"help-block\">Please enter a valid title!</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <textarea\r\n                type=\"text\"\r\n                id=\"description\"\r\n                formControlName=\"description\"\r\n                class=\"form-control\"\r\n              ></textarea>\r\n              <span\r\n              *ngIf=\"!movieForm.get('description').valid && movieForm.get('description').touched\"\r\n              class=\"help-block\">Please enter a valid description!</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <label for=\"image\">Image URL</label>\r\n              <input type=\"text\" id=\"image\" class=\"form-control\" formControlName=\"image\" #imagePath />\r\n              <span\r\n              *ngIf=\"!movieForm.get('image').valid && movieForm.get('image').touched\"\r\n              class=\"help-block\">Please enter a valid image path!</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\" *ngIf=\"movieForm.get('image').valid\">\r\n            <img [src]=\"imagePath.value\" class=\"img-responsive\" style=\"max-height: 300px; max-width: 300px;\" onError=\"this.alt='Broken Link!'\"/>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"form-group\">\r\n          <label for=\"genre\">Genre</label>\r\n          <select id=\"genre\" class=\"form-control\" name=\"genre\" formControlName=\"genre\">\r\n              <option value=\"Action\">Action</option>\r\n              <option value=\"Comedy\">Comedy</option>\r\n              <option value=\"Horror\">Horror</option>\r\n              <option value=\"Romance\">Romance</option>\r\n              <option value=\"Sci-Fi\">Sci-Fi</option>\r\n          </select>\r\n          <span\r\n          *ngIf=\"!movieForm.get('genre').valid && movieForm.get('genre').touched\"\r\n          class=\"help-block\">Please enter a valid genre!</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"rating\">Rating</label>\r\n          <select\r\n            id=\"rating\"\r\n            class=\"form-control col-8\"\r\n            formControlName=\"rating\"\r\n            name=\"rating\">\r\n            <option value=\"1\">1 Star</option>\r\n            <option value=\"2\">2 Stars</option>\r\n            <option value=\"3\">3 Stars</option>\r\n            <option value=\"4\">4 Stars</option>\r\n            <option value=\"5\">5 Stars</option>\r\n          </select>\r\n          <span\r\n          *ngIf=\"!movieForm.get('rating').valid && movieForm.get('rating').touched\"\r\n          class=\"help-block\">Please enter a valid rating!</span>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n              <span\r\n              *ngIf=\"!movieForm.valid && movieForm.touched \"\r\n              class=\"help-block\">Please enter valid data!</span>\r\n            <button [disabled]=\"!movieForm.valid\" type=\"submit\" class=\"btn btn-success col\">Save</button>\r\n          </div>\r\n          <div class=\"col text-center\">\r\n            <button class=\"btn btn-outline-danger col\" type=\"button\" (click)=\"onCancel()\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!showSpinner && !movieForm\">\r\n  Sorry, that movie is not in our database. Would you like to\r\n  <a [routerLink]=\"['/addMovie']\">\r\n    add it?\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/movie-list/movie-item/movie-item.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/movie-list/movie-item/movie-item.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      test\r\n    </div>\r\n    <div class=\"col\">\r\n      test2\r\n    </div>\r\n    <div class=\"col\">\r\n      tets3\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<a\r\n  [routerLinkActive]=\"['active']\"\r\n  class=\"list-group-item clearfix hoverTest\"\r\n  (click)=\"savePageYOffset()\"\r\n>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span>\r\n          <img\r\n            onError=\"this.src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'\"\r\n            src=\"{{movie.image}}\"\r\n            alt=\"movie_img\"\r\n            class=\"img-responsive center\"\r\n            style=\"max-height: 250px; max-width: 250px;\"\r\n            *ngIf=\"movie\"\r\n\r\n          />\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h4 class=\"list-group-item-heading m-title truncate\" *ngIf=\"movie\">{{ fixedTitle }}</h4>\r\n        <div class=\"\">\r\n          <p class=\"list-group-item-text\" *ngIf=\"movie\">{{ fixedDescription }}</p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p class=\"-list-group-item-text\" *ngIf=\"movie\">Genre: {{movie.genre}} </p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <span class=\"read-more\" *ngIf=\"movie\">Read More </span>\r\n\r\n          </div>\r\n        </div>\r\n        <span *ngIf=\"movie\">Rating: {{movie.rating}} Stars </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/movie-list/movie-list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/movie-list/movie-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-movie-item\r\n        *ngFor=\"let movieItem of movieArray; let i = index\"\r\n        [index]=\"i\"\r\n        [movie]=\"movieItem\"\r\n      ></app-movie-item>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"noMoviesinDB && movieArray.length === 0\">No movies in database with those filters. Would you like to add one?</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui/loading-spinner/loading-spinner.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui/loading-spinner/loading-spinner.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-fading-circle\">\n  <div class=\"sk-circle1 sk-circle\"></div>\n  <div class=\"sk-circle2 sk-circle\"></div>\n  <div class=\"sk-circle3 sk-circle\"></div>\n  <div class=\"sk-circle4 sk-circle\"></div>\n  <div class=\"sk-circle5 sk-circle\"></div>\n  <div class=\"sk-circle6 sk-circle\"></div>\n  <div class=\"sk-circle7 sk-circle\"></div>\n  <div class=\"sk-circle8 sk-circle\"></div>\n  <div class=\"sk-circle9 sk-circle\"></div>\n  <div class=\"sk-circle10 sk-circle\"></div>\n  <div class=\"sk-circle11 sk-circle\"></div>\n  <div class=\"sk-circle12 sk-circle\"></div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/movie-detail/movie-detail.component */ "./src/app/home/movie-detail/movie-detail.component.ts");
/* harmony import */ var _home_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/movie-edit/movie-edit.component */ "./src/app/home/movie-edit/movie-edit.component.ts");
/* harmony import */ var _resolvers_movie_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/movie-detail.resolver */ "./src/app/resolvers/movie-detail.resolver.ts");
/* harmony import */ var _resolvers_movie_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/movie-list.resolver */ "./src/app/resolvers/movie-list.resolver.ts");








var routes = [
    { path: '', redirectTo: '/movies?genre=All&alphabetical=All', pathMatch: 'full' },
    { path: 'movies', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], resolve: { movieList: _resolvers_movie_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MovieListResolver"] } },
    { path: 'movies/:title', component: _home_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"], resolve: { movieInfo: _resolvers_movie_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["MovieDetailResolver"] } },
    { path: 'movies/:title/edit', component: _home_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_5__["MovieEditComponent"] },
    { path: 'addMovie', component: _home_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_5__["MovieEditComponent"] },
    { path: '**', redirectTo: 'movies' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'disabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_resolvers_movie_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["MovieDetailResolver"], _resolvers_movie_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MovieListResolver"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log('app component initialized');
        this.movieService.pageNumber = 1;
        // this.movieService.populateMovies(false);
        // subscribe to spinnerSubject<boolean>
        this.spinnerSub = this.movieService.spinnerSubject.subscribe(function (bool) {
            // this.showSpinner1 = bool;
            // console.log(this.showSpinner1);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.spinnerSub.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/movie-list/movie-list.component */ "./src/app/home/movie-list/movie-list.component.ts");
/* harmony import */ var _home_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/movie-list/movie-item/movie-item.component */ "./src/app/home/movie-list/movie-item/movie-item.component.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _home_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/movie-detail/movie-detail.component */ "./src/app/home/movie-detail/movie-detail.component.ts");
/* harmony import */ var _home_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/movie-edit/movie-edit.component */ "./src/app/home/movie-edit/movie-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/loading-spinner/loading-spinner.component */ "./src/app/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _home_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_10__["MovieListComponent"],
                _home_movie_list_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_11__["MovieItemComponent"],
                _home_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
                _home_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_14__["MovieEditComponent"],
                _ui_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadingSpinnerComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"]],
            providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_12__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brightText {\r\n  color: whitesmoke;\r\n}\r\n\r\n.addMovieBtn {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 1rem;\r\n  border-radius: 0;\r\n}\r\n\r\n.topBtn {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 1rem;\r\n  padding-bottom: 0rem;\r\n  border: 0;\r\n}\r\n\r\n.top {\r\n  /* color: white; */\r\n  font-weight: 400;\r\n  width: 115px;\r\n  padding-bottom: 0.5rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.top:hover {\r\n  cursor: pointer;\r\n  background-color: #24282c;\r\n  transition: 0.3s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyaWdodFRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uYWRkTW92aWVCdG4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi50b3BCdG4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdpZHRoOiAxMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi50b3A6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyODJjO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.toTheTop = function () {
        scrollTo(0, 0);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu.show {\r\n  padding: 0;\r\n  border: 3px solid;\r\n  border-color: rgb(23, 116, 204);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS5zaG93IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzLCAxMTYsIDIwNCk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, movieService) {
        this.router = router;
        this.movieService = movieService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.keepParams = function () {
        this.router.navigateByUrl("/movies?genre=" + this.movieService.selectedGenreName + "&alphabetical=" + this.movieService.selectedCharName);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.title = 'Movies4Fun';
        this.selectedGenreIndex = this.movieService.selectedGenreIndex;
        this.selectedCharIndex = this.movieService.selectedCharIndex;
        this.selectedGenreName = this.movieService.selectedGenreName; // this.route.snapshot.queryParamMap.get('genre');
        this.selectedCharName = this.movieService.selectedCharName;
        this.firstInstance = this.movieService.firstInstance;
        this.genre = ['All', 'Action', 'Comedy', 'Horror', 'Romance', 'Sci-Fi'];
        // user should SELECT genre form dropdown menu int he FORMS section.
        this.alphabet = [
            'All',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('home init');
        // console.log(this.route.snapshot.data.movieList);
        if (this.movieService.firstInstance) {
            this.movieService.firstInstance = false;
            this.movieService.selectedGenreName = this.route.snapshot.queryParamMap.get('genre');
            this.movieService.selectedCharName = this.route.snapshot.queryParamMap.get('alphabetical');
            if (!this.movieService.selectedGenreName || !this.movieService.selectedCharName) {
                this.movieService.selectedGenreName = 'All';
                this.movieService.selectedCharName = 'All';
            }
            // console.log(this.movieService.selectedGenreName);
            // console.log(this.movieService.selectedCharName);
            this.onRefresh();
        }
        // subscribe to spinnerSubject<boolean>
        this.spinnerSub = this.movieService.scrollSpinnerSubject.subscribe(function (bool) {
            _this.showScrollSpinner = bool;
            if (_this.firstInstance) {
                _this.firstInstance = false;
            }
        });
        if (this.selectedGenreName !== 'All' || this.selectedCharName !== 'All') {
            this.movieService.oddOneOut(this.selectedGenreName, this.selectedCharName);
        }
    }; // end onInit
    // @HostListener('window:scroll', ['$event']) // for window scroll events
    // onScroll(event: { target: { scrollTop: number; }; }) {
    //   console.log('Scrolling: ' + window.pageYOffset);
    //   // this.myYaxis++;
    //   // console.log('My y axis: ' + this.myYaxis);
    //   if (scrollY > document.body.scrollHeight - document.body.offsetHeight - 1) {
    //     console.log('bottom');
    //   }console.log(document.body.scrollTop);
    //   console.log();
    //   console.log(document.body.scrollHeight);
    // }
    HomeComponent.prototype.onRefresh = function () {
        var _this = this;
        // this.firstInstance = false;
        // console.log('This should only show once, so only on Init/pageRefresh should thi sbe seen.');
        this.retrieveStoredValues();
        var urlGenre = this.selectedGenreName;
        var urlLetter = this.selectedCharName;
        this.movieService.spinnerSubject.next(true);
        if (urlGenre !== 'All' && urlLetter !== 'All') {
            // call function that filters both
            this.movieService.filterGenreAndAlphabetical(urlLetter, urlGenre, false);
        }
        else if (urlGenre === 'All' && urlLetter !== 'All') {
            // filter by letter
            this.filterSub = this.movieService.filterAlphabetically(urlLetter, false).subscribe();
        }
        else if (urlGenre !== 'All' && urlLetter === 'All') {
            // filter by genre
            this.movieService.filterGenre(urlGenre, false);
        }
        else {
            // filter none just use default list
            this.movieService.populateMovies(false);
        }
        this.genre.forEach(function (element, i) {
            if (element === urlGenre) {
                _this.movieService.selectedGenreIndex = i;
                _this.selectedGenreIndex = i;
            }
            else if (_this.movieService.selectedGenreIndex === 0 && urlGenre !== 'All' && i === element.length - 1) {
                // console.log('This genre does not exist!');
            }
        }); // this is for the disabled porperty and genre indexes to work correctly
        this.alphabet.forEach(function (element, i) {
            if (element === urlLetter) {
                _this.movieService.selectedCharIndex = i;
                _this.selectedCharIndex = i;
            }
            else if (_this.selectedCharIndex === 0 && urlLetter !== 'All' && i === element.length - 1) {
                // console.log('This genre does not exist!');
            }
        }); // this is for the disabled porperty and alphabet indexes to work correctly
    };
    HomeComponent.prototype.onLetterSelected = function (charIndex) {
        this.movieService.selectedCharName = this.alphabet[charIndex];
        this.movieService.selectedCharIndex = charIndex;
        this.retrieveStoredValues();
        this.movieService.spinnerSubject.next(true);
        this.movieService.emptyArraySubject.next(false);
        this.firstInstance = false;
        if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
            // if no filters active
            this.movieService.populateMovies(false);
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
            // if only genre filter is active
            this.movieService.filterGenre(this.selectedGenreName, false);
        }
        else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
            // if only alphabetical filter is active
            this.filterSub = this.movieService.filterAlphabetically(this.selectedCharName, false).subscribe();
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
            // if both filters are active
            this.movieService.filterGenreAndAlphabetical(this.selectedCharName, this.selectedGenreName, false);
        }
    };
    HomeComponent.prototype.onGenreSelected = function (genreindex) {
        this.movieService.selectedGenreName = this.genre[genreindex]; // save the selected genre
        this.movieService.selectedGenreIndex = genreindex; // save the selected genre name
        this.retrieveStoredValues();
        this.movieService.spinnerSubject.next(true);
        this.movieService.emptyArraySubject.next(false);
        this.firstInstance = false;
        if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
            // if no filters active
            this.movieService.populateMovies(false);
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
            // if only genre filter is active
            this.movieService.filterGenre(this.selectedGenreName, false);
        }
        else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
            // if only alphabetical filter is active
            this.filterSub = this.movieService.filterAlphabetically(this.selectedCharName, false).subscribe();
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
            // if both filters are active
            this.movieService.filterGenreAndAlphabetical(this.selectedCharName, this.selectedGenreName, false);
        }
    };
    HomeComponent.prototype.nextArray = function () {
        this.retrieveStoredValues();
        // console.log(this.selectedGenreIndex + '      ' + this.selectedCharIndex);
        if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
            // if no filters active
            this.movieService.populateMovies(true);
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
            // if only genre filter is active
            this.movieService.filterGenre(this.selectedGenreName, true);
        }
        else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
            // if only alphabetical filter is active
            this.filterSub = this.movieService.filterAlphabetically(this.selectedCharName, true).subscribe();
        }
        else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
            // if both filters are active
            this.movieService.filterGenreAndAlphabetical(this.selectedCharName, this.selectedGenreName, true);
        }
    };
    HomeComponent.prototype.retrieveStoredValues = function () {
        this.selectedGenreIndex = this.movieService.selectedGenreIndex;
        this.selectedCharIndex = this.movieService.selectedCharIndex;
        this.selectedGenreName = this.movieService.selectedGenreName;
        this.selectedCharName = this.movieService.selectedCharName;
    };
    HomeComponent.prototype.onScroll = function () {
        // this.showSpinner = true; // show loading spinner
        this.movieService.scrollSpinnerSubject.next(true);
        this.nextArray(); // retrieve data from server
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.spinnerSub.unsubscribe();
        if (this.filterSub) {
            this.filterSub.unsubscribe();
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/movie-detail/movie-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/movie-detail/movie-detail.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /* width: 50%; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvKiB3aWR0aDogNTAlOyAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/movie-detail/movie-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/movie-detail/movie-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService, _location, modalService) {
        this.route = route;
        this.movieService = movieService;
        this._location = _location;
        this.modalService = modalService;
        this.editMode = true;
    }
    // both location and host listener can find out the window location, so whetehr you pressed back button or not.
    // constructor(location: LocationStrategy) {
    //   location.onPopState(() => {
    //     console.log('Proceeding to: ' + window.location);
    //   });
    // }
    // @HostListener('window:popstate', ['$event'])
    // onPopState(event) {
    //   console.log('Back button pressed');
    // }
    MovieDetailComponent.prototype.ngOnInit = function () {
        scrollTo(0, 0); // needed because for some reason this component scrolls to the same pageYOffset as the previous
        this.movie = this.route.snapshot.data.movieInfo;
    };
    MovieDetailComponent.prototype.ngOnDestroy = function () {
        // this.movieSubjectSubscription.unsubscribe();
    };
    MovieDetailComponent.prototype.onEdit = function () {
        // this.editMode = true;
        // console.log(this.editMode);
    };
    MovieDetailComponent.prototype.onDelete = function (areYouSure) {
        this.modalService.open(areYouSure, { centered: true, size: 'lg' }); // opens areYouSure modal
    };
    MovieDetailComponent.prototype.confirmModal = function (success) {
        this.movieService.deleteMovie(this.movie._id); // calls httpd delete request
        this.modalService.open(success, { centered: true, size: 'lg' }); // opens success modal
        this._location.back(); // navigates user back
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/home/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/home/movie-edit/movie-edit.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/movie-edit/movie-edit.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  border: solid 1px red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb3ZpZS1lZGl0L21vdmllLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW92aWUtZWRpdC9tb3ZpZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCwgc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/movie-edit/movie-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/movie-edit/movie-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(route, router, movieService, _location, modalService) {
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this._location = _location;
        this.modalService = modalService;
        this.title = '';
        this.editMode = false;
        this.showSpinner = true;
        this.myImg = true;
    }
    MovieEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieSubjectSubscription = this.movieService.movieSubject.subscribe(function (movie) {
            _this.movie = movie;
            if (_this.movie) {
                _this.initForm();
            }
            if (movie === undefined) {
                _this.movieService.getMovieInstance(_this.title);
            }
            else {
                _this.showSpinner = false;
            }
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.editMode = queryParams['edit'];
        });
        this.route.params.subscribe(function (params) {
            _this.title = params['title'];
        });
        if (this.title === undefined && this.editMode === undefined) {
            this.initForm();
        }
        else {
            this.movieService.getMovie(this.title);
        }
    };
    MovieEditComponent.prototype.onSubmit = function (content) {
        // console.log(this.movieForm);
        if (this.editMode) {
            this.editMovieSubscription = this.movieService.updateMovie(this.movie._id, this.movieForm.value).subscribe();
            this.modalService.open(content, { centered: true, size: 'lg' });
        }
        else {
            this.addMovieSubscription = this.movieService.addMovietoDatabase(this.movieForm.value).subscribe();
            this.modalService.open(content, { centered: true, size: 'lg' });
        }
    };
    MovieEditComponent.prototype.onClose = function () {
        // this.router.navigate(['/movies']);
        if (!this.editMode) {
            this.movieService.firstInstance = true;
        }
        this.router.navigateByUrl("/movies?genre=" + this.movieService.selectedGenreName + "&alphabetical=" + this.movieService.selectedCharName);
        // this.router.navigate([`/movies?genre=${this.movieService.selectedGenreName}&alphabetical=${this.movieService.selectedCharName}`]);
        // console.log(`/movies?genre=${this.movieService.selectedGenreName}&alphabetical=${this.movieService.selectedCharName}`);
        // this._location.back();
    };
    MovieEditComponent.prototype.onCancel = function () {
        this.router.navigateByUrl("/movies?genre=" + this.movieService.selectedGenreName + "&alphabetical=" + this.movieService.selectedCharName);
    };
    MovieEditComponent.prototype.ngOnDestroy = function () {
        this.movieSubjectSubscription.unsubscribe();
        if (this.editMovieSubscription) {
            this.editMovieSubscription.unsubscribe();
        }
        else if (this.addMovieSubscription) {
            this.addMovieSubscription.unsubscribe();
        }
    };
    // method where
    // if editMode = true
    // fill form with prepopulated values
    // else
    // use empty values
    MovieEditComponent.prototype.initForm = function () {
        var movieTitle = '';
        var movieDescription = '';
        var movieImagePath = '';
        var movieGenre = '';
        var movieRating = '';
        if (this.editMode) {
            movieTitle = this.movie.title;
            movieDescription = this.movie.description;
            movieImagePath = this.movie.image;
            movieGenre = this.movie.genre;
            movieRating = this.movie.rating;
        }
        this.movieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](movieTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](movieDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](movieImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](movieGenre, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](movieRating, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit',
            template: __webpack_require__(/*! raw-loader!./movie-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/movie-edit/movie-edit.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit.component.css */ "./src/app/home/movie-edit/movie-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], MovieEditComponent);
    return MovieEditComponent;
}());



/***/ }),

/***/ "./src/app/home/movie-list/movie-item/movie-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/home/movie-list/movie-item/movie-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.truncate {\r\n  /* width: 489px; */\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n\r\n\r\n\r\n.hoverTest {\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 0px;\r\n  /* text-decoration-line: none; */\r\n}\r\n\r\n\r\n\r\n\r\n.hoverTest > .container {\r\n  color: #0069d9;\r\n  padding: 20px;\r\n  transition: background-color 0.3s;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.hoverTest:hover > .container {\r\n  cursor: pointer;\r\n  color: white;\r\n\r\n  /* text-decoration-line: underline; */\r\n  /* background-color: #0429f7; */\r\n  background-color: #007bff;\r\n  transition: 0.3s;\r\n}\r\n\r\n\r\n\r\n\r\n.hoverTest:hover .m-title,\r\n.hoverTest:hover .read-more {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  /* transition: text-decoration-line 1s; */\r\n}\r\n\r\n\r\n\r\n\r\n.m-title {\r\n  text-transform: capitalize;\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n.center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /* width: 50%; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb3ZpZS1saXN0L21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7Ozs7QUFLQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOzs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixpQ0FBaUM7O0FBRW5DOzs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7O0VBRVoscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOzs7OztBQUVBOztFQUVFLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IseUNBQXlDO0FBQzNDOzs7OztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW92aWUtbGlzdC9tb3ZpZS1pdGVtL21vdmllLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udHJ1bmNhdGUge1xyXG4gIC8qIHdpZHRoOiA0ODlweDsgKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ob3ZlclRlc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLyogdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7ICovXHJcbn1cclxuXHJcbi5ob3ZlclRlc3QgPiAuY29udGFpbmVyIHtcclxuICBjb2xvcjogIzAwNjlkOTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuXHJcbn1cclxuXHJcbi5ob3ZlclRlc3Q6aG92ZXIgPiAuY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAvKiB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwNDI5Zjc7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uaG92ZXJUZXN0OmhvdmVyIC5tLXRpdGxlLFxyXG4uaG92ZXJUZXN0OmhvdmVyIC5yZWFkLW1vcmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgLyogdHJhbnNpdGlvbjogdGV4dC1kZWNvcmF0aW9uLWxpbmUgMXM7ICovXHJcbn1cclxuXHJcbi5tLXRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIC8qIHdpZHRoOiA1MCU7ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/movie-list/movie-item/movie-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/movie-list/movie-item/movie-item.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/movie.model */ "./src/app/models/movie.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MovieItemComponent = /** @class */ (function () {
    function MovieItemComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.defaultImg = "data:image\n  /svg+xml;base64,\n  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDA\n  wMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaW\n  xsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsb\n  D0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4\n  My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
    }
    MovieItemComponent.prototype.ngOnInit = function () {
        if (this.movie.title.length > 50) {
            this.fixedTitle = this.movie.title.substring(0, 38) + '...';
        }
        else {
            this.fixedTitle = this.movie.title;
        }
        if (this.movie.description.length > 150) {
            this.fixedDescription = this.movie.description.substring(0, 150) + '...';
        }
        else {
            this.fixedDescription = this.movie.description;
        }
    };
    MovieItemComponent.prototype.savePageYOffset = function () {
        // Saves the previous pages' (movielist.component) Y offset and stores it into in-memory pageYOffset
        this.movieService.pageYOffset = window.pageYOffset;
        this.convertSpaceToUnderscore(this.movie.title);
        this.route.navigate(['/movies', this.searchBarTitle]);
        this.movieService.currentMovieIndex = this.index; // saves index of currently selected movieItem in-memory
    };
    MovieItemComponent.prototype.convertSpaceToUnderscore = function (title) {
        for (var char in title) {
            if (title[char] === ' ') {
                title = title.replace(' ', '_');
            }
        }
        // console.log(title.toLowerCase());
        this.searchBarTitle = title.toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"])
    ], MovieItemComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MovieItemComponent.prototype, "index", void 0);
    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-item',
            template: __webpack_require__(/*! raw-loader!./movie-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/movie-list/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.css */ "./src/app/home/movie-list/movie-item/movie-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/app/home/movie-list/movie-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/movie-list/movie-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/movie-list/movie-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/movie-list/movie-list.component.ts ***!
  \*********************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieArraySubscription = this.movieService.movieArrayUpdated.subscribe(function (movies) {
            _this.movieArray = movies;
        });
        this.movieService.readmovieArray();
        this.movieService.emptyArraySubject.subscribe(function (data) {
            _this.noMoviesinDB = data;
        });
        this.spinnerSub = this.movieService.spinnerSubject.subscribe(function (data) {
            _this.showSpinner = data;
            // if (data) {
            //   this.movieService.emptyArraySubject.next(false);
            //   console.log('PRINT WORDS LIKE LOADING WHILE SPIN IS TRUE');
            // }
        });
        // this.movieService.spinnerSubject.next(true);
        // this.movieArray = this.route.snapshot.data.movieList;
    };
    MovieListComponent.prototype.ngAfterViewInit = function () {
        // once the list from the db has been projected onto the view (because its asyncronous)
        // console.log(this.movieService.pageYOffset);
        scrollTo(0, this.movieService.pageYOffset); // scroll to previous pageYOffset using stored in-memory pageYOffset
    };
    MovieListComponent.prototype.ngOnDestroy = function () {
        if (this.movieArray) {
            this.movieArraySubscription.unsubscribe();
            // this.spinnerSub.unsubscribe();
        }
        if (this.spinnerSub) {
            this.spinnerSub.unsubscribe();
        }
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/home/movie-list/movie-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/models/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/movie.model.ts ***!
  \***************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(_id, title, description, image, genre, rating) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.genre = genre;
        this.rating = rating;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/resolvers/movie-detail.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/resolvers/movie-detail.resolver.ts ***!
  \****************************************************/
/*! exports provided: MovieDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailResolver", function() { return MovieDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");



var MovieDetailResolver = /** @class */ (function () {
    function MovieDetailResolver(movieService) {
        this.movieService = movieService;
    }
    MovieDetailResolver.prototype.resolve = function (route) {
        this.movieService.spinnerSubject.next(true);
        this.movie = this.movieService.getMovieFromIndex();
        if (this.movie) {
            this.movieService.spinnerSubject.next(false);
            return this.movie;
        }
        return this.movieService.getMovieFromDB(route.paramMap.get('title'));
    };
    MovieDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MovieDetailResolver);
    return MovieDetailResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/movie-list.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/movie-list.resolver.ts ***!
  \**************************************************/
/*! exports provided: MovieListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListResolver", function() { return MovieListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");



var MovieListResolver = /** @class */ (function () {
    function MovieListResolver(movieService) {
        this.movieService = movieService;
    }
    MovieListResolver.prototype.resolve = function (route) {
        // this.movieService.spinnerSubject.next(true);
        // console.log('STARTING SERVE');
        // return 'yes!';
    };
    MovieListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MovieListResolver);
    return MovieListResolver;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        // ADD BACKTICKS
        // CRUD
        // apiUrl = 'http://localhost:4000/';
        // local = 'http://localhost:4000/';
        // firebase was firebaseprofile/app
        this.herokuUrl = 'https://stark-brook-68539.herokuapp.com/';
    }
    HttpService.prototype.getMovies = function (n) {
        return this.http.post(this.herokuUrl + 'pagemovies', {
            n: n
        });
    };
    HttpService.prototype.getMovieInstance = function (urlTitle) {
        return this.http.get(this.herokuUrl + 'movies/' + urlTitle);
    };
    HttpService.prototype.addMovie = function (movie) {
        return this.http.post(this.herokuUrl + 'movies', movie);
    };
    HttpService.prototype.updateMovie = function (oldTitle, movie) {
        return this.http.put(this.herokuUrl + 'movies/' + oldTitle, movie);
    };
    HttpService.prototype.deleteMovie = function (movieId) {
        return this.http.delete(this.herokuUrl + 'movies/' + movieId);
    };
    // FILTERS
    HttpService.prototype.getAlphabetizedOrder = function (char, skipNumber) {
        return this.http.post(this.herokuUrl + 'movies' + '/filterchar', {
            char: char,
            n: skipNumber
        });
    };
    HttpService.prototype.filterGenre = function (genre, skipNumber) {
        return this.http.post(this.herokuUrl + 'movies' + '/filtergenre', {
            genre: genre,
            n: skipNumber
        });
    };
    HttpService.prototype.filterBoth = function (char, genre, skipNumber) {
        return this.http.post(this.herokuUrl + 'movies' + '/filterboth', {
            char: char,
            genre: genre,
            n: skipNumber
        });
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MoviesService = /** @class */ (function () {
    function MoviesService(httpService) {
        this.httpService = httpService;
        this.firstInstance = true;
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.scrollSpinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.emptyArraySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.movieSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // for home component filter and sort
        this.selectedGenreIndex = 0;
        this.selectedCharIndex = 0;
        this.selectedGenreName = 'All';
        this.selectedCharName = 'All';
        // end for home component
        this.generalFirstTime = true;
        this.filterAlphabeticalFirstTime = true;
        this.filterGenreFirstTime = true;
        this.movieArrayUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.movies = [];
        this.counter = 0;
    }
    MoviesService.prototype.populateMovies = function (loadMore) {
        var _this = this;
        if (!loadMore) {
            this.movies.splice(0, this.movies.length);
            this.readmovieArray();
        }
        this.httpService.getMovies(this.movies.length).subscribe(function (data) {
            var _a;
            // setTimeout(() => {
            if (data.length === 0 && _this.movies.length === 0) {
                // console.log('No movies in db.');
                _this.emptyArraySubject.next(true);
            }
            else {
                _this.emptyArraySubject.next(false);
            }
            (_a = _this.movies).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
            _this.readmovieArray();
            _this.spinnerSubject.next(false);
            _this.scrollSpinnerSubject.next(false);
            // }, 1000);
            // this.movies.push(...data);
            // this.movieArrayUpdated.next(this.movies.slice());
            // this.spinnerSubject.next(false);
            // this.interval = setInterval(() => {
            //   this.counter++;
            //   if (this.counter === 3) {
            //     this.movies.push(...data);
            //     this.movieArrayUpdated.next(this.movies.slice());
            //     this.spinnerSubject.next(false);
            //     // if (data.length === 0) {
            //     //   console.log('nothing to load, end of array/db.');
            //     //   this.endOfDbSubject.next(true);
            //     // }
            //     console.log(this.movies);
            //     console.log('Array Length: ' + this.movies.length);
            //     this.counter = 0;
            //     clearInterval(this.interval);
            //   }
            // }, 1000);
        });
    };
    // getMovie(urlTitle: String): Movie {
    //   for (const char in urlTitle) {
    //     if (urlTitle[char] === '_') {
    //       urlTitle = urlTitle.replace('_', ' ');
    //     }
    //   }
    //   this.movies.forEach(movie => {
    //     if (movie.title === urlTitle) {
    //       this.movieParam = movie;
    //     }
    //   });
    //   // if (this.movieParam === null) {
    //   //   this.movieParam = undefined;
    //   // } continue this idea later
    //   return this.movieParam;
    //   // implement index from movieItem to prevent duplication and to uphold authenticity
    // }
    MoviesService.prototype.getMovie = function (urlTitle) {
        var _this = this;
        var counter = 0;
        for (var char in urlTitle) {
            if (urlTitle[char] === '_') {
                urlTitle = urlTitle.replace('_', ' ');
            }
        }
        // console.log('arraysize: ' + this.movies.length);
        this.movies.forEach(function (movie) {
            if (movie.title === urlTitle) {
                // console.log('MATCH should only happen ONCE');
                _this.movieSubject.next(movie);
            }
            if (movie.title !== urlTitle) {
                counter++;
            }
            if (counter === _this.movies.length) {
                _this.movieSubject.next();
            }
        });
        if (this.movies.length === 0) {
            // if user refreshes page
            this.movieSubject.next();
        }
        // implement index from movieItem to prevent duplication and to uphold authenticity
    };
    MoviesService.prototype.getMovieInstance = function (urlTitle) {
        var _this = this;
        for (var char in urlTitle) {
            if (urlTitle[char] === '_') {
                urlTitle = urlTitle.replace('_', ' ');
            }
        }
        this.httpService.getMovieInstance(urlTitle).subscribe(function (movie) {
            // console.log(movie);
            _this.movieSubject.next(movie);
            // this.movieParam = movie;
            // return this.movieParam;
        });
        // console.log(this.movieParam + 'testing if return success');
        // return this.movieParam;
    };
    MoviesService.prototype.getMovieFromDB = function (urlTitle) {
        var _this = this;
        for (var char in urlTitle) {
            if (urlTitle[char] === '_') {
                urlTitle = urlTitle.replace('_', ' ');
            }
        }
        return this.httpService.getMovieInstance(urlTitle)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.spinnerSubject.next(false);
        }));
    };
    MoviesService.prototype.getMovieFromIndex = function () {
        return this.movies[this.currentMovieIndex];
    };
    MoviesService.prototype.readmovieArray = function () {
        this.movieArrayUpdated.next(this.movies.slice());
    };
    MoviesService.prototype.oddOneOut = function (currentGenre, currentLetter) {
        var _this = this;
        if (currentGenre !== 'All' && currentLetter === 'All') { // if just genre is activated
            this.movies.forEach(function (movie) {
                if (movie.genre !== currentGenre) { // check for changes
                    _this.movies.splice(_this.currentMovieIndex, 1); // remove updated movie
                    _this.readmovieArray();
                }
            });
        }
        else if (currentGenre === 'All' && currentLetter !== 'All') { // if just Alphabetical is activated
            this.movies.forEach(function (movie) {
                if (movie.title[0].toLowerCase() !== currentLetter.toLowerCase()) { // check
                    // console.log('letter cut from array');
                    _this.movies.splice(_this.currentMovieIndex, 1); // remove
                    _this.readmovieArray();
                }
            });
        }
        else { // both are actiavted
            this.movies.forEach(function (movie) {
                if (movie.title[0].toLowerCase() !== currentLetter.toLowerCase() || movie.genre !== currentGenre) {
                    _this.movies.splice(_this.currentMovieIndex, 1);
                    _this.readmovieArray();
                }
            });
        }
    };
    MoviesService.prototype.addMovietoDatabase = function (movie) {
        return this.httpService.addMovie(movie);
        // this.httpService.addMovie(movie).subscribe((data: Movie) => {
        //   // this.movies.push(data);
        //   // this.readmovieArray();
        //   // could add movie to array
        //   // if array.length < 2 or 3
        //   // so if page is not scrollable, add it to array and update list
        //  });
    };
    MoviesService.prototype.updateMovie = function (title, updatedMovie) {
        var _this = this;
        return this.httpService
            .updateMovie(title, updatedMovie)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            console.log(data);
            _this.movies[_this.currentMovieIndex] = data;
        }));
    };
    MoviesService.prototype.deleteMovie = function (movieId) {
        var _this = this;
        this.httpService.deleteMovie(movieId).subscribe(function () {
            _this.movies.splice(_this.currentMovieIndex, 1);
            _this.readmovieArray();
        });
    };
    // filter/sort/query
    // you could splice entire array ex/ splice(0, this.movies.length)
    // then run filtered http get request to fill database with new filtered data
    // it should be displayed upon clicking the LETTER in Alphabetical button
    // pass the letter that was pressed or index value of alphabet, (letter might be easier)
    // use that letter value in the filter/get request
    MoviesService.prototype.filterAlphabetically = function (selectedChar, loadMore) {
        var _this = this;
        console.log(selectedChar);
        if (!loadMore) {
            this.movies.splice(0, this.movies.length);
            this.readmovieArray();
        }
        return this.httpService
            .getAlphabetizedOrder(selectedChar, this.movies.length)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            var _a;
            // setTimeout(() => {
            if (data.length === 0 && _this.movies.length === 0) {
                _this.emptyArraySubject.next(true);
            }
            else {
                _this.emptyArraySubject.next(false);
            }
            (_a = _this.movies).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
            _this.readmovieArray();
            _this.spinnerSubject.next(false);
            _this.scrollSpinnerSubject.next(false);
            // }, 1000);
        }));
        // .subscribe((data: Movie[]) => {
        //   setTimeout(() => {
        //   if (data.length === 0 && this.movies.length === 0) {
        //     console.log('No movies in db.');
        //     this.emptyArraySubject.next(true);
        //   } else {
        //     this.emptyArraySubject.next(false);
        //   }
        //   this.movies.push(...data);
        //   this.readmovieArray();
        //   this.spinnerSubject.next(false);
        //   this.scrollSpinnerSubject.next(false);
        //   }, 3000);
        // });
    };
    MoviesService.prototype.filterGenre = function (genre, loadMore) {
        var _this = this;
        if (!loadMore) {
            this.movies.splice(0, this.movies.length);
            this.readmovieArray();
        }
        this.httpService
            .filterGenre(genre, this.movies.length)
            .subscribe(function (data) {
            var _a;
            if (data.length === 0 && _this.movies.length === 0) {
                console.log('No movies in db.');
                _this.emptyArraySubject.next(true);
            }
            else {
                _this.emptyArraySubject.next(false);
            }
            (_a = _this.movies).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
            _this.readmovieArray();
            _this.spinnerSubject.next(false);
            _this.scrollSpinnerSubject.next(false);
        });
    };
    MoviesService.prototype.filterGenreAndAlphabetical = function (selectedCharName, selectedGenreName, loadMore) {
        var _this = this;
        // console.log(selectedGenreName + 'BOTH' + selectedCharName);
        if (!loadMore) {
            this.movies.splice(0, this.movies.length);
            this.readmovieArray();
        }
        this.httpService
            .filterBoth(selectedCharName, selectedGenreName, this.movies.length)
            .subscribe(function (data) {
            var _a;
            if (data.length === 0 && _this.movies.length === 0) {
                console.log('No movies in db.');
                _this.emptyArraySubject.next(true);
            }
            else {
                _this.emptyArraySubject.next(false);
            }
            (_a = _this.movies).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
            _this.readmovieArray();
            _this.spinnerSubject.next(false);
            _this.scrollSpinnerSubject.next(false);
        });
        // calls htpp.post request for both
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.css":
/*!******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-fading-circle {\r\n  margin: 100px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\n\r\n.sk-fading-circle .sk-circle {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.sk-fading-circle .sk-circle:before {\r\n  content: '';\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 15%;\r\n  height: 15%;\r\n  background-color: #333;\r\n  border-radius: 100%;\r\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\r\n          animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\r\n}\r\n\r\n.sk-fading-circle .sk-circle2 {\r\n  -webkit-transform: rotate(30deg);\r\n          transform: rotate(30deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle3 {\r\n  -webkit-transform: rotate(60deg);\r\n          transform: rotate(60deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle4 {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle5 {\r\n  -webkit-transform: rotate(120deg);\r\n          transform: rotate(120deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle6 {\r\n  -webkit-transform: rotate(150deg);\r\n          transform: rotate(150deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle7 {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle8 {\r\n  -webkit-transform: rotate(210deg);\r\n          transform: rotate(210deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle9 {\r\n  -webkit-transform: rotate(240deg);\r\n          transform: rotate(240deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle10 {\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle11 {\r\n  -webkit-transform: rotate(300deg);\r\n          transform: rotate(300deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle12 {\r\n  -webkit-transform: rotate(330deg);\r\n          transform: rotate(330deg);\r\n}\r\n\r\n.sk-fading-circle .sk-circle2:before {\r\n  -webkit-animation-delay: -1.1s;\r\n          animation-delay: -1.1s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle3:before {\r\n  -webkit-animation-delay: -1s;\r\n          animation-delay: -1s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle4:before {\r\n  -webkit-animation-delay: -0.9s;\r\n          animation-delay: -0.9s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle5:before {\r\n  -webkit-animation-delay: -0.8s;\r\n          animation-delay: -0.8s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle6:before {\r\n  -webkit-animation-delay: -0.7s;\r\n          animation-delay: -0.7s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle7:before {\r\n  -webkit-animation-delay: -0.6s;\r\n          animation-delay: -0.6s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle8:before {\r\n  -webkit-animation-delay: -0.5s;\r\n          animation-delay: -0.5s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle9:before {\r\n  -webkit-animation-delay: -0.4s;\r\n          animation-delay: -0.4s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle10:before {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle11:before {\r\n  -webkit-animation-delay: -0.2s;\r\n          animation-delay: -0.2s;\r\n}\r\n\r\n.sk-fading-circle .sk-circle12:before {\r\n  -webkit-animation-delay: -0.1s;\r\n          animation-delay: -0.1s;\r\n}\r\n\r\n@-webkit-keyframes sk-circleFadeDelay {\r\n  0%, 39%, 100% { opacity: 0; }\r\n  40% { opacity: 1; }\r\n}\r\n\r\n@keyframes sk-circleFadeDelay {\r\n  0%, 39%, 100% { opacity: 0; }\r\n  40% { opacity: 1; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvRUFBb0U7VUFDNUQsNERBQTREO0FBQ3RFOztBQUNBO0VBQ0UsZ0NBQWdDO1VBRXhCLHdCQUF3QjtBQUNsQzs7QUFDQTtFQUNFLGdDQUFnQztVQUV4Qix3QkFBd0I7QUFDbEM7O0FBQ0E7RUFDRSxnQ0FBZ0M7VUFFeEIsd0JBQXdCO0FBQ2xDOztBQUNBO0VBQ0UsaUNBQWlDO1VBRXpCLHlCQUF5QjtBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztVQUV6Qix5QkFBeUI7QUFDbkM7O0FBQ0E7RUFDRSxpQ0FBaUM7VUFFekIseUJBQXlCO0FBQ25DOztBQUNBO0VBQ0UsaUNBQWlDO1VBRXpCLHlCQUF5QjtBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztVQUV6Qix5QkFBeUI7QUFDbkM7O0FBQ0E7RUFDRSxpQ0FBaUM7VUFFekIseUJBQXlCO0FBQ25DOztBQUNBO0VBQ0UsaUNBQWlDO1VBRXpCLHlCQUF5QjtBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztVQUV6Qix5QkFBeUI7QUFDbkM7O0FBQ0E7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUNBO0VBQ0UsNEJBQTRCO1VBQ3BCLG9CQUFvQjtBQUM5Qjs7QUFDQTtFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBQ0E7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUNBO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQjtBQUNoQzs7QUFDQTtFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBQ0E7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUNBO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQjtBQUNoQzs7QUFDQTtFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBQ0E7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDOztBQUNBO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQixVQUFVLEVBQUU7RUFDNUIsTUFBTSxVQUFVLEVBQUU7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0IsVUFBVSxFQUFFO0VBQzVCLE1BQU0sVUFBVSxFQUFFO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdWkvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWZhZGluZy1jaXJjbGUge1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNpcmNsZUZhZGVEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUZhZGVEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU2IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNyB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTgge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU5IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTAge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTQ6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTc6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbn1cclxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG59XHJcbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVGYWRlRGVsYXkge1xyXG4gIDAlLCAzOSUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWNpcmNsZUZhZGVEZWxheSB7XHJcbiAgMCUsIDM5JSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
        // console.log('spinner created');
    };
    LoadingSpinnerComponent.prototype.ngOnDestroy = function () {
        // console.log('spinner destroyed');
    };
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/ui/loading-spinner/loading-spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JaviAir\Documents\My_Web_Sites\MovieRepositoryProject\Front_End_Angular\movies-for-fun\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map