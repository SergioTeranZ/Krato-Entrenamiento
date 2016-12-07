'use strict';

/**
 * @ngdoc function
 * @name kratoAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kratoAdminApp
 */

 @Component({
    selector: 'my-app',
    template: `
        <div class="flex">
            <div id="set-Comercio" class="container">
                <h2>Set a Comercio</h2>
                <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                    <div>
                        <label for="nombre">Nombre</label>
                        <input type="text" ngControl="nombre">
                    </div>
                    <div>
                        <label for="sector">Sector</label>
                        <input type="text" ngControl="sector">
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="get-Comercio" class="container">
                <h2>Get Comercio</h2>
            <button (click)="onGetComercio()">Get Comercio</button>
            </div>
        </div>
        <div class="container" id="response">Response: {{response}}</div>
    `,
    providers: [FirebaseService]
})
 /*
angular.module('kratoAdminApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

export class AppComponent {
    response:string;

    constructor(private _firebaseService:FirebaseService) {
    }

    onSubmit(form:ControlGroup) {
        this._firebaseService.setComercio(form.value.nombre, form.value.sector)
            .subscribe(
                Comercio => this.response = JSON.stringify(Comercio),
                error => console.log(error)
            );
    }

    onGetComercio() {
        this._firebaseService.getComercio()
            .subscribe(
                Comercio => this.response = JSON.stringify(Comercio),
                error => console.log(error)
            );
    }
}