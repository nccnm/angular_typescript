// import from libraries
import { IController } from "angular";

// import models
import { MenuModel } from "../models/menu.model";

// import services
import { StateService } from "angular-ui-router";
import { MenuService } from "../services/menu.service";

export class MainNavbarController implements IController {
	// 1. private members
	private mainMenuItems = [];

	// 2. public members

	// 3. Constructor
	constructor(public $state: StateService, public menuService: MenuService) {}

	// 4. lifecycle hooks
	// 4.1. $onInit
	$onInit = () => {
		this.mainMenuItems = this.menuService.getMainMenuItems();
	};

	// 4.2. $onChanges
	$onChanges = objChanges => {};

	// 4.3. $onDestroy
	$onDestroy = () => {};

	// 5. public functions
	getActiveClass(item: MenuModel) {
		return item.id === this.$state.current.name ? "active" : "";
	}

	// 6. private functions
}

export const MainNavbarComponent = {
	controller: ["$state", "menuService", MainNavbarController],
	controllerAs: "vm",
	templateUrl: "./src/app/components/main-navbar.template.html"
};
