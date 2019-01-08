import { IController, IOnChangesObject } from "angular";

export class ProductsController implements IController {
    // 1. private members
    mainMenuItems = [];

    // 2. public members

    // 3. Constructor
    constructor() {}

    // 4. lifecycle hooks
    // 4.1. $onInit
    $onInit = () => {};

    // 4.2. $onChanges
    $onChanges(objChanges: IOnChangesObject) {
		objChanges.
	}

    // 4.3. $onDestroy
    $onDestroy() {}

    // 5. public functions

    // 6. private functions
}

export const ProductsComponent = {
    controller: ProductsController,
    controllerAs: "vm",
    template: `
		<h2>Products</h2>
	`
};
