export default class Guard {

    /**
     * @param condition
     * @returns {boolean}
     * @constructor
     * @description
     * This method is used to check if a condition is true or false.
     * If the condition is true, the method returns true, otherwise it returns false.
     * This method is used in the guard classes.
     * @example
     * // This method is used in the guard classes.
     * // Compare this snippet from src/application/guards/auth.guard.ts:
     *
     * super.guard(localStorage.getItem('token') === null);
     *
     */



    static throw_unauthorized_page() {
        return  '<div>\n' +
                '    <h1>Erreur 403</h1>\n' +
                '    <p>Vous n\'avez pas les droits nécessaires pour accéder à cette page.</p>\n' +
                '    <div @redirect="base">Retourner à la page d\'accueil</div>\n' +
                '</div>'
    }



}