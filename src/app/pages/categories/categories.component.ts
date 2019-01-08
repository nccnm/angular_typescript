import { IController } from "angular";

export class CategoriesController implements IController {
	// 1. private members
	mainMenuItems = [];

	// 2. public members

	// 3. Constructor
	constructor() {}

	// 4. lifecycle hooks
	// 4.1. $onInit
	$onInit = () => {};

	// 4.2. $onChanges
	$onChanges = objChanges => {};

	// 4.3. $onDestroy
	$onDestroy = () => {};

	// 5. public functions

	// 6. private functions
}

export const CategoriesComponent = {
	controller: CategoriesController,
	controllerAs: "vm",
	template: `
		<h2>Categories</h2>
	`
};
