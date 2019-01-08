import * as angular from "angular";
import uiRouterModule, {
    StateProvider,
    UrlRouterProvider
} from "angular-ui-router";

// 1. import components
// 1.1. components
import { MainNavbarComponent } from "./components/main-navbar.component";

// 1.2. pages
import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { ProductsComponent } from "./pages/products/products.component";

// 2. import services
import { MenuService } from "./services/menu.service";

const config = (
    $stateProvider: StateProvider,
    $urlRouterProvider: UrlRouterProvider
) => {
    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state("home", {
            url: "/home",
            component: "home"
        })
        .state("products", {
            url: "/products",
            component: "products"
        })
        .state("categories", {
            url: "/categories",
            component: "categories"
        });
};

angular
    .module("app", [uiRouterModule])
    .config(["$stateProvider", "$urlRouterProvider", config])
    //components
    .component("mainNavbar", MainNavbarComponent)
    // pages
    .component("home", HomeComponent)
    .component("categories", CategoriesComponent)
    .component("products", ProductsComponent)
    // services
    .service("menuService", MenuService);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, ["app"], {
        strictDi: true
    });
});
