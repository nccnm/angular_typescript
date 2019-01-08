import { MenuModel } from "../models/menu.model";

export class MenuService {
	// 1. private members
	private mainMenuItems: MenuModel[] = [];

	// 2. public members

	// 3. inject other services
	static $inject: string[] = [];

	// 4. contructor
	constructor() {
		this.mainMenuItems.push(
			new MenuModel("home", "./", "Home", "Back to Home")
		);
		this.mainMenuItems.push(
			new MenuModel(
				"products",
				"#!/products",
				"Products",
				"List all products"
			)
		);
		this.mainMenuItems.push(
			new MenuModel(
				"categories",
				"#!/categories",
				"Categories",
				"List all categories"
			)
		);
		this.mainMenuItems.push(
			new MenuModel("about", "#!/about", "About", "About us")
		);
	}

	// 5. public methods
	getMainMenuItems() {
		return this.mainMenuItems;
	}

	// 6. private methods
}
