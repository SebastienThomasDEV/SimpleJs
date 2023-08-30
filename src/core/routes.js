export const routes = [
    {
        name: '#home', // used to identify the controller
        template_path: '../src/core/templates/home.html', // the templates source
        controller: 'homeController', // the controller name
    },
    {
        name: '#dashboard',
        template_path: '../src/core/templates/dashboard.html',
        controller: 'dashboardController',
    }
];