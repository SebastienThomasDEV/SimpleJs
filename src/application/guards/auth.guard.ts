import Guard from "../../core/modules/guard/guard";

export default class AuthGuard extends Guard {

    /**
     * @returns {boolean}
     * @description
     * This method is used to check if a condition is true or false.
     * It overrides the guard method in the Guard class.
     */
    static async guard(): Promise<boolean> {
        return localStorage.getItem('token') !== null;
    }
}