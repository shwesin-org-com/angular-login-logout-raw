My study nodes in angular 9
============================
    -  Angular knowledge Should know:
    ===================================
    ===================================
    
          -properties binding, event binding and two-way binding
          =======================================================
            <small *ngIf = 'invalidLogin'>{{errorMessage}}</small>
            <div>
                Username: <input type="text" name="username" [(ngModel)]="username">
                Password: <input type="password" name="password" [(ngModel)]="password">
                Username:{{username}}
                <button (click)=handleLogin()>Login</button>
            </div>
            
          -routing (edit in app-routing.module.ts)
          ========================================
            const routes: Routes = [
                { path: 'login', component: LoginComponent },
                { path: 'welcome', component: WelcomeComponent}
              ];
              
           - route from login to welcome pages
           =====================================
           
              1) constructor(private router: Router) { }
              2) this.router.navigate(['welcome']);
              
            - activate route in welcome
            ================================
            
               1)constructor(private route: ActivatedRoute) { }
               2)ngOnInit() {
                   this.name = this.route.snapshot.params.name;
                  }
                  
             -ngFor
             =========
             
                1)todos = [
                  {id: 1, description: 'Learn to Dance' },
                  {id: 2, description: 'Learn to Angular'},
                  {id: 3, description: 'Learn to Spring Boot'},
                  {id: 4, description: 'Learn to React'}
                   ];
                 2) <tr *ngFor='let todo of todos'>
                      <td>{{todo.id}}</td>
                      <td>{{todo.description}}</td>
                    </tr>
                    
            -link todos in welcome
            ========================
            
              1)<a routerLink='/todos'>Here</a>
              
            -create class in  todo 
            ========================
            
              1)write in (.ts) file above @Component
                export class Todo {
                  constructor(
                      public id: number,
                      public description: string,
                      public done: boolean,
                      public targetDate: Date
                     ) {}
                  }
               2)<tr *ngFor='let todo of todos'>
                      <td>{{todo.id}}</td>
                      <td>{{todo.description}}</td>
                    </tr>
                    
             - Pipe
             ======
             
              <tr *ngFor='let todo of todos'>
                <td>{{todo.id}}</td>
                <td>{{todo.description}}</td>
                <td>{{todo.targetDate | date}}</td>
               <td>{{todo.done}}</td>
              </tr>
            
            - Add bootstrap 4 in angular
            =============================
                In style.css,added as:
                 -link search in chrome as 
                  unpkg font awesome 5
                  unpkg bootstrap
                
                @import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)

            
              
              
    -  Create Components
    ======================
    =====================
          - welcome
          - login
          - error
          - listTodos
          -menu
          -footer






# SshAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
