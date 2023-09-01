import Route from "./classes/Route.js";


export const routes = [
    new Route(
        'home',
        '../src/core/components/home/home.html',
        '../src/core/components/home/styles.css',
        'homeController',
    ),
    new Route(
        'dashboard',
        '../src/core/components/dashboard/dashboard.html',
        '../src/core/components/dashboard/styles.css',
        'dashboardController',
    )
]