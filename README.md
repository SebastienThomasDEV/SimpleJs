# SimpleJs
 
Je vous présente un petit framework maison TS/JS (pattern MVC).

Il dispose de plusieurs fonctionnalités:

- ## Un moteur de template (voir `module Parser`)
  > génerer une boucle
  ```js
  @for=(items => item)
    <div>#item</div>
  @endfor
  ```
  > bind des variables d'un controller
  ```js
  <div>{{title}}</div> 
  ```
  > condition d'affichage 
  ```js
  <@if (true)
       <div>if</div>
  @else
       <div>else</div>
  @endif
  ```
  
- ## Cycle de vie d'un composant (voir `class Controller`)
   ```js
   export class DashboardController extends Controller {
      dir_name = "dashboard";
      constructor(dir_name) {
          super(dir_name);
          this.init();
      }
      async init() {
          this.params = {
              // ici mettre vous variable qui seront passé à votre html
          };
          await this.render(this.params);
      }
 
      pre_process(params, html) {
          // fonction qui sera appellé avant le chargement de la page
          // insérer vos modules pour intéragir avec votre html ici ou  rendre une page basique html
          return super.pre_process(params, html);
      }
   }
  ```
- ## Un système de guard (voir `module Guard`)
  ```js
  export default class AuthGuard extends Guard {
     static async guard(): Promise<boolean> {
        return // retourner ici votre condition (boolean);
     }
  }
  ```
- ## Un système de routing (voir `module Router`)
  ```js
  <div @redirect="base">base</div> // redirige vers la page base si le composant existe
  ```
  
