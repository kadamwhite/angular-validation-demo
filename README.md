# AngularJS Validation Demo

This repository demonstrates some of the basic validation capabilities possible with [Angular.js](http://angularjs.org) and the Validation module (part of [Angular UI](http://angular-ui.github.com/).

The validation within this repository is not a comprehensive representation of Angular's abilities, nor should it necessarily be assumed to represent Angular "best practices." For more comprehensive documentation of what can be done around form validation in Angular, refer to the links below.

## API Documentation

### [AngularJS Developer's Guide: Forms](http://docs.angularjs.org/guide/forms)

This link explains the nuances of Angular's form capabilities, including:

**CSS classes**

Angular automatically adds several classes to `<input>` and `<form>` elements, which can be used to visually style different form states (`.ng-valid`, `.ng-invalid`, `.ng-pristine`, `.ng-dirty`)

**Binding to form state**

Forms in angular are an instance of `FormController`, and the `name` attribute of the form reveals that instance to the current `$scope`. Leveraging the form and form fields' `$dirty`, `$error` and `$invalid` properties allows you to contextually reveal error messages or deactivate the submit button through the `ng-show` and `ng-disabled` directies.

**Custom Validation**

Angular provides out-of-the-box support for common html5 input types and includes directives for validating input elements' `required`, `pattern`, `minlength`, `maxlength`, `min`, and `max` attributes.

Custom validators may be created by defining new directives depending on the `ngModel` controller. The "Custom Validation" of the linked documentation shows how to create `integer` and `float` type-validation directives.

### [Angular UI](http://angular-ui.github.com/#directives-validate) Validation Module

The Angular UI `ui-validate` directive permits idiomatic definition of custom validation controls. By creating a function on the current `scope` which returns `false` when a validation condition fails, you may easily bind one or many custom validation rules to any form element.

`ui-validate-watch` permits you to re-run validation for a field when a specified `scope` property changes. For example, 