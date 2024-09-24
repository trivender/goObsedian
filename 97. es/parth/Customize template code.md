---
image: 
keywords: template code
tags:
  - css
---


```css
/*****************************************************************/
/*                           Template Name                       */
/*****************************************************************/

/*****************************************************************/
/*                        Start General CSS                      */
/*****************************************************************/

body {
    color: #6e6c68;
    background-color: rgb(218, 212, 205);
    background-image: url('../files/IFS_Logo_weiss.png');
}

/*****************************************************************/
/*                        End General CSS                        */
/*****************************************************************/

/*****************************************************************/
/*                       Start First Page                        */
/*****************************************************************/

/* Add CSS specific to the first page if needed */

/*****************************************************************/
/*                        End First Page                         */
/*****************************************************************/

/*****************************************************************/
/*                      Start Logo Bar                           */
/*****************************************************************/

/* Add CSS specific to the logo bar if needed */

/*****************************************************************/
/*                       End Logo Bar                            */
/*****************************************************************/

/*****************************************************************/
/*                   Start Progress Bar                          */
/*****************************************************************/

/* Add CSS specific to the progress bar if needed */

/*****************************************************************/
/*                    End Progress Bar                           */
/*****************************************************************/

/*****************************************************************/
/* Start Group Container / Group Title / Group Description       */
/*****************************************************************/

/* Add CSS specific to group containers, titles, and descriptions if needed */

/*****************************************************************/
/* End Group Container / Group Title / Group Description         */
/*****************************************************************/

/*****************************************************************/
/*                  Start Question Container                     */
/*****************************************************************/

.question-container {
    border: 2px solid #d9d4cc;
    border-radius: 20px;
}

.question-title-container {
    color: #6e6c68;
    background-color: #d9d4cc;
    border-radius: 17px 17px 0px 0px;
}

.radio-item input[type="radio"]:checked+label::before {
    border-color: #c72125;
}

.table-hover>tbody>tr:hover,
tr.answers-list:hover,
.array-flexible-column tr.answers-list:hover {
    background-color: #f0ede9;
}

.multiple-short-txt ul.text-list li.text-item {
    align-items: center;
}

/*****************************************************************/
/*                 End Question Container                        */
/*****************************************************************/

/*****************************************************************/
/*             Start Specified Question Container                */
/*****************************************************************/

.choice-5-pt-radio .radio-item label::before,
.list-radio .radio-item label::before,
.list-with-comment .radio-item label::before {
    top: 4px;
}

.choice-5-pt-radio .radio-item label::after,
.list-radio .radio-item label::after,
.list-with-comment .radio-item label::after {
    top: 5px;
}

.multiple-opt .checkbox-item label::before,
.multiple-opt .checkbox-item label::after {
    top: 4px;
}

.multiple-opt-comments .form-horizontal .checkbox-item label::after {
    top: 6px;
}

/*****************************************************************/
/*            End Specified Question Container                   */
/*****************************************************************/

/*****************************************************************/
/*                      Start Specified css                      */
/*****************************************************************/

.form-check-input:focus {
    box-shadow: none;
}

.form-check-input:checked {
    background-color: #041e41;
    border-color: #041e41;
    box-shadow: none;
}

/* Multiple images selection */
li.imageselect-listitem .imageselect-container .imageselect-label {
    border: 18px solid #afa9a0;
}

li.imageselect-listitem .imageselect-container input.imageselect-checkbox:checked+label {
    border: 18px solid #041e42;
}

/*      Add line button     */
button.btn.btn-outline-secondary.selector--inputondemand-addlinebutton {
    color: #ffffff;
    background-color: #5d4777;
    border-color: #5d4777;
}

button.btn.btn-outline-secondary.selector--inputondemand-addlinebutton:hover, 
button.btn.btn-outline-secondary.selector--inputondemand-addlinebutton:active {
    color: #ffffff;
    background-color: #041e41;
    border-color: #041e41;
}

/*     Multiplechoice bootstrap buttons selection   */
Multiplechoice bootstrap buttons unchecked focus .btn-check .btn-primary:focus, 
.btn-check:focus+.btn-primary {
    color: #ffffff;
    background-color: #041e41;
    border-color: #041e41;
}

/*****************************************************************/
/*                     End Specified css                         */
/*****************************************************************/

/*****************************************************************/
/*                     Start All Buttons                         */
/*****************************************************************/

/* Remove the default border-radius on all buttons */
.btn,
.progress,
.dropdown-menu,
.checkbox-item label::before,
.checkbox-item label::after,
.form-control,
.form-select,
.modal-content,
.question-container,
.bootstrap-select>.dropdown-toggle,
.bootstrap-select>.dropdown-toggle.bs-placeholder {
    border-radius: 0px;
}

/* Improve button focus and hover effects */
.btn,
.progress,
.dropdown-menu,
.checkbox-item label::before,
.checkbox-item label::after,
.form-control,
.form-select,
.modal-content,
.question-container {
    outline: none;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: none;
}

input[type=checkbox]:focus,
input[type=file]:focus,
input[type=radio]:focus {
    outline: none;
}

/* box-shadow */
.btn-check:active+.btn-outline-secondary:focus, 
.btn-check:checked+.btn-outline-secondary:focus, 
.btn-outline-secondary.active:focus, 
.btn-outline-secondary.dropdown-toggle.show:focus, 
.btn-outline-secondary:active:focus {
    box-shadow: none;
}

.btn-check:focus+.btn-outline-secondary, 
.btn-outline-secondary:focus {
    box-shadow: none;
}

.btn-check:active+.btn-primary:focus, 
.btn-check:checked+.btn-primary:focus, 
.btn-primary.active:focus, 
.btn-primary:active:focus, 
.show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none;
}

.btn-check:focus+.btn-primary, 
.btn-primary:focus {
    box-shadow: none;
}

/* Improve radio and checkbox button focus effects */
.radio-item input[type="radio"]:focus+label::before,
.checkbox-item input[type="checkbox"]:focus+label::before,
.radio-item input[type="radio"]:focus+label::after,
.checkbox-item input[type="checkbox"]:focus+label::after {
    outline: none;
}

/* Customize Next/Submit buttons */
.ls-move-submit-btn,
.ls-move-next-btn {
    color: #fff;
    background-color: #000;
    border-color: #000;
}

.ls-move-submit-btn:active,
.ls-move-submit-btn.active,
.ls-move-submit-btn:focus,
.ls-move-submit-btn.focus,
.ls-move-submit-btn:active:focus,
.ls-move-submit-btn.active:focus,
.ls-move-submit-btn:active.focus,
.ls-move-submit-btn.active.focus,
.ls-move-next-btn:active,
.ls-move-next-btn.active,
.ls-move-next-btn:focus,
.ls-move-next-btn.focus,
.ls-move-next-btn:active:focus,
.ls-move-next-btn.active:focus,
.ls-move-next-btn:active.focus,
.ls-move-next-btn.active.focus,
.ls-move-submit-btn:hover,
.ls-move-submit-btn:active:hover,
.ls-move-submit-btn.active:hover,
.ls-move-next-btn:hover,
.ls-move-next-btn:active:hover,
.ls-move-next-btn.active:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
}

/* Customize gender/yes-no buttons */
.gender-button .btn-primary,
.yes-no .btn-primary,
.bootstrap-buttons-div .button-item {
    color: #000;
    background-color: #fff;
    border-color: #fff;
}

.btn-check:active+.btn-primary,
.btn-check:checked+.btn-primary,
.btn-primary.active,
.btn-primary:active,
.show>.btn-primary.dropdown-toggle {
    color: #333333 !important;
    background-color: #ffcc00 !important;
    border-color: #ffcc00 !important;
}

.gender-button .btn-primary:hover,
.yes-no .btn-primary:hover,
.bootstrap-buttons-div .button-item:hover {
    color: #fff;
    background-color: #000;
    border-color: #000;
}

.gender-button .btn-primary:active,
.gender-button .btn-primary.active:hover,
.gender-button .btn-primary:focus,
.gender-button .btn-primary.active,
.gender-button .btn-primary.active:focus,
.yes-no .btn-primary:focus,
.yes-no .btn-primary.active,
.yes-no .btn-primary.active:hover,
.yes-no .btn-primary.active:focus,
.bootstrap-buttons-div .button-item:focus,
.bootstrap-buttons-div .button-item.active,
.bootstrap-buttons-div .button-item:focus {
    color: #fff;
    background-color: #000;
    border-color: #000;
}

/* Customize Date Picker button */
.date-timepicker-group .btn-primary,
.date-timepicker-group .btn-primary:hover,
.date-timepicker-group .btn-primary:active,
.date-timepicker-group .btn-primary:focus,
.date-timepicker-group .btn-primary:active:hover,
.date-timepicker-group .btn-primary:active:focus,
.date-timepicker-group .btn-primary:active.focus,
.date-timepicker-group .btn-primary.hover,
.date-timepicker-group .btn-primary.active,
.date-timepicker-group .btn-primary.focus,
.date-timepicker-group .btn-primary.active:hover,
.date-timepicker-group .btn-primary.active:focus,
.date-timepicker-group .btn-primary.active.focus {
    color: #fff;
    background-color: #000;
    border-color: #000;
}

/* Customize Previous buttons */
.ls-move-previous-btn {
    color: #000;
    background-color: #fff;
    border-color: #000;
}

.ls-move-previous-btn:hover,
.ls-move-previous-btn:active:hover,
.ls-move-previous-btn.active:hover,
.ls-move-previous-btn:active,
.ls-move-previous-btn.active,
.ls-move-previous-btn:focus,
.ls-move-previous-btn.focus,
.ls-move-previous-btn:active:focus,
.ls-move-previous-btn.active:focus,
.ls-move-previous-btn:active.focus,
.ls-move-previous-btn.active.focus {
    background-color: #000;
    color: #fff;
    border-color: #000;
}

/* Customize Upload buttons */
.upload.btn-primary {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.upload.btn-primary:hover,
.upload.btn-primary:active:hover,
.upload.btn-primary.active:hover {
    color: #000;
    background-color: #fff;
    border-color: #000;
}

.upload.btn-primary:active,
.upload.btn-primary.active,
.upload.btn-primary:focus,
.upload.btn-primary.focus,
.upload.btn-primary:active:focus,
.upload.btn-primary.active:focus,
.upload.btn-primary:active.focus,
.upload.btn-primary.active.focus {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.upload-div .btn {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.upload-div .btn:active,
.upload-div .btn.active,
.upload-div .btn:focus,
.upload-div .btn.focus,
.upload-div .btn:focus,
.upload-div .btn:focus,
.upload-div .btn.focus,
.upload-div .btn.focus {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.upload-div .btn:hover,
.upload-div .btn:active:hover,
.upload-div .btn.active:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
}

.uploader .alert-info {
    color: rgb(102 102 102);
    background-color: #000;
    border: 0px;
}

.file-upload-modal-footer .btn {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.file-upload-modal-footer .btn:active,
.file-upload-modal-footer .btn.active,
.file-upload-modal-footer .btn:focus,
.file-upload-modal-footer .btn.focus,
.file-upload-modal-footer .btn:active:focus,
.file-upload-modal-footer .btn.active:focus,
.file-upload-modal-footer .btn:active.focus,
.file-upload-modal-footer .btn.active.focus {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.file-upload-modal-footer .btn:hover,
.file-upload-modal-footer .btn:active:hover,
.file-upload-modal-footer .btn.active:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
}

/* Improve hover effect on uploaded files buttons */
.upload-files .uploadedfiles td a.btn-primary {
    color: var(--black-color);
    background-color: var(--white-color);
    border-color: var(--black-color);
}

.upload-files .uploadedfiles td a.btn-primary:hover,
.upload-files .uploadedfiles td a.btn-primary:active,
.upload-files .uploadedfiles td a.btn-primary:focus {
    color: var(--white-color);
    background-color: var(--main-color);
    border-color: var(--main-color);
}

/* Customize the delete button for uploaded files */
.upload-files ul.files-list fieldset div:nth-child(3) a.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}

.upload-files ul.files-list fieldset div:nth-child(3) a.btn-danger:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
}

.save-survey-input .btn,
.modal-dialog .btn {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.save-survey-input .btn:hover,
.save-survey-input .btn:active:hover,
.save-survey-input .btn.active:hover,
.modal-dialog .btn:hover,
.modal-dialog .btn:active:hover,
.modal-dialog .btn.active:hover {
    color: #000;
    background-color: #fff;
    border-color: #000;
}

.btn-info {
    color: #fff;
    background-color: #000;
    border-color: #fff;
}

.btn-info:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
}

/* Customize bootstrap buttons */
.bootstrap-buttons-div .btn-primary {
    color: #000000;
    background-color: #dfdfdf;
    border-color: #dfdfdf;
}

.bootstrap-buttons-div .btn-primary:hover {
    color: #000000;
    background-color: #bbbbbb;
    border-color: #bbbbbb;
}

.bootstrap-select>.dropdown-toggle.bs-placeholder,
.bootstrap-select>.dropdown-toggle.bs-placeholder:active,
.bootstrap-select>.dropdown-toggle.bs-placeholder:focus,
.bootstrap-select>.dropdown-toggle.bs-placeholder:hover {
    color: #000000;
    border-color: #cccccc;
    border-radius: 4px;
}

.bootstrap-select>.dropdown-toggle {
    width: 250px;
    border: 1px solid #cccccc;
}

.dropdown.bootstrap-select .dropdown-menu.show {
    width: 250px;
}

.btn-check:active+.btn-outline-secondary,
.btn-check:checked+.btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
    color: #6c757d;
}

.bootstrap-select .btn-check:active+.btn-outline-secondary,
.bootstrap-select .btn-check:checked+.btn-outline-secondary,
.bootstrap-select .btn-outline-secondary.active,
.bootstrap-select .btn-outline-secondary.dropdown-toggle.show,
.bootstrap-select .btn-outline-secondary:active {
    background-color: transparent;
}

.bootstrap-select .dropdown-toggle:focus,
.bootstrap-select>select.mobile-device:focus+.dropdown-toggle {
    outline: none !important;
}

/*****************************************************************/
/*                        End All Buttons                        */
/*****************************************************************/

/*****************************************************************/
/*                       Start Sortables                         */
/*****************************************************************/
/*unsorted*/
.sortable-choice .ls-choice.sortable-item {
	color: #6e6c68;
    background-color: #d9d4cc;
    border-color: #d9d4cc;
	display: flex;
	flex-direction: column;
	align-items: center;
}

/*sorted*/
.sortable-rank .ls-choice.sortable-item {
    color: #6e6c68;
    background-color: #d9d4cc;
    border-color: #d9d4cc;
	display: flex;
	flex-direction: column;
	align-items: center;
}

/*****************************************************************/
/*                      End Sortables                            */
/*****************************************************************/

/*****************************************************************/
/*                       Start Slider                            */
/*****************************************************************/
.slider-list .slider.slider-untouched .slider-handle {
    background-color: #ffcc00;
}

.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,
.bs-tooltip-top .tooltip-arrow:before {
    border-top-color: #ffcc00;
}

.slider-touched .tooltip-inner,
.slider-touched .slider-handle {
    background-color: #000;
}

.slider-touched .tooltip.top .tooltip-arrow {
    border-top-color: #000;
}

.slider-handle {
    background-color: #000;
    background-image: linear-gradient(to bottom, #000 0%, #000 100%);
}

.slider-selection {
    background-image: linear-gradient(to bottom, #000 0%, #000 100%);
}

/*****************************************************************/
/*                       End Slider                              */
/*****************************************************************/

/*****************************************************************/
/*                       Start Footer                            */
/*****************************************************************/

/* Removed the classess background color in the question index */
li.navbar-item-middle ul li.index-item-seen a.bg-warning,
li.navbar-item-middle ul li.index-item-seen a.bg-danger {
    background-color: transparent !important;
}

li.navbar-item-middle ul li.index-item-current a.dropdown-item.disabled.bg-warning,
li.navbar-item-middle ul li.index-item-current a.dropdown-item.disabled.bg-danger {
    color: #FFFFFF;
    background-color: #00594C !important;
}

/*****************************************************************/
/*                       End Footer                              */
/*****************************************************************/

/*****************************************************************/
/*                       Start Responsive                        */
/*****************************************************************/

/*****************************************************************/
/*                       End Responsive                          */
/*****************************************************************/
```