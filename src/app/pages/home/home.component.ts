import { IController } from "angular";
import { BasePageController } from "../base/base-page.controller";

export class HomeController extends BasePageController implements IController {
	// 1. private members
	mainMenuItems = [];

	// 2. public members

	// 3. Constructor
	constructor() {
		super();

		console.log("Home");
	}

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

export const HomeComponent = {
	controller: HomeController,
	controllerAs: "vm",
	templateUrl: "./src/app/pages/home/home.template.html"
};
