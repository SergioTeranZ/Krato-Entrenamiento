System.register(['angular2/core', "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var FirebaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            FirebaseService = (function () {
                function FirebaseService(_http) {
                    this._http = _http;
                }
                FirebaseService.prototype.setComercio = function (nombre, sector) {
                    var body = JSON.stringify({ nombre: nombre, sector: sector });
                    return this._http.put('https://angularprueba-55b94.firebaseio.com/Comercio.json', body)
                        .map(function (response) { return response.json(); });
                };
                FirebaseService.prototype.getComercio = function () {
                    return this._http.get('https://angularprueba-55b94.firebaseio.com/Comercio.json')
                        .map(function (response) { return response.json(); });
                };
                FirebaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FirebaseService);
                return FirebaseService;
            }());
            exports_1("FirebaseService", FirebaseService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBRUkseUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyxxQ0FBVyxHQUFYLFVBQVksTUFBYyxFQUFFLE1BQWM7b0JBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMERBQTBELEVBQUUsSUFBSSxDQUFDO3lCQUNsRixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUM7eUJBQ2hGLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFkTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFlYixzQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkNBY0MsQ0FBQSIsImZpbGUiOiJmaXJlYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtsYXN0fSBmcm9tIFwicnhqcy9vcGVyYXRvci9sYXN0XCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBzZXRDb21lcmNpbyhub21icmU6IHN0cmluZywgc2VjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtub21icmU6IG5vbWJyZSwgc2VjdG9yOiBzZWN0b3J9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KCdodHRwczovL2FuZ3VsYXJwcnVlYmEtNTViOTQuZmlyZWJhc2Vpby5jb20vQ29tZXJjaW8uanNvbicsIGJvZHkpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0Q29tZXJjaW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cHM6Ly9hbmd1bGFycHJ1ZWJhLTU1Yjk0LmZpcmViYXNlaW8uY29tL0NvbWVyY2lvLmpzb24nKVxuICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufSJdfQ==
