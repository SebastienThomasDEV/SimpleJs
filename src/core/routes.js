export const routes = [
    {
        name: '#home', // used to identify the controller
        component_path: '../src/core/components/home.html', // the components source
        controller: 'homeController', // the controller name
    },
    {
        name: '#dashboard',
        component_path: '../src/core/components/dashboard.html',
        controller: 'dashboardController',
    }
];