# Layout - [eager]

**Type: layout**

Typically, most applications will use one or more layouts as a “frame” around the slot in which we’re going to display specific lazy loaded features based on user navigation or interaction.

- Implementation in `layout/` folder
- Eager, available from start, part of the initial bundles size
- **Only template context based (standalones) building blocks like: `components`, `directives` and `pipes`**
- Can and most likely will consume services and state from `core/`
  - Auth state to filter which menu items should be displayed
  - User state to display user avatar
- Can and will most likely consumer some standalones from ui/ like: `Avatar` , `Popover` , `Dialog` , `Button` or `Menu`
- In case of single main layout which is used for the whole app it will be used directly in the template of the `AppComponent`
- In case of multiple layouts it will be used as part of the route config
- Applications can have more than one layout, e.g. login, signup, authenticated
- Some application may need a custom layout per feature and in that case the `layout/` folder may end up empty, the `AppComponent` will then end up with a template consisting only of single `<router-outlet />` and each feature will implement its own layout within its own feature folder

## Single main layout used by the whole app

This case describes an application which can use a single main layout for all its lazy loaded features including the loading (and or signup) pages.

Such layout will then be used directly in the template of the `AppComponent` and such layout will contain at list one `<router-outlet />` as a part of its own template as a target slot to display lazy loaded features.

```typescript
1 @Component({
2     standalone: true,
3     selector: 'my-org-app',
4     template: `<my-org-main-layout />`,
5 })
6 export class AppComponent {}
```

## Multiple layouts (e.g. login and main layouts)

Another common scenario is when an application has a relatively low amount of layouts, e.g. one for authentication purposes and then another once to display every other lazy feature once a user has logged in.

This is best solved as a part of the application routes config in the `app.routes.ts` and the `AppComponent` will contain just a lone `<router-outlet />` in its template.

The gist of the solution is to have two main configs with two main contexts, e.g. '' and '/app' which will use respective layout as its component and then define lazy loaded features as their children.

The layouts themselves will then be implemented in the `layout/` folder

```typescript
1 export const routes: Routes = [
2   {
3      path: '',
4      component: AuthLayoutComponent, //<-- login, signup, ... layout
5      children: [
6          {
7              path: 'login',
8              loadChildren: () => import('./feature/login/login.routes')
9          }
10         // signup feature, password recovery feature...
11     ],
12  },
13
14  {
15      path: 'app',
16      component: MainLayoutComponent, // <-- main layout
17      children: [
18         {
19         path: 'orders',
20         loadChildren: () => import('./feature/orders/orders.routes')
21         }
22         // dashboard, profile, settings feature...
23      ],
24  }
25 ]
```

## Custom layout per feature

Another option is that the features are so vastly different that they need to be able to define custom layouts, one per each feature.

In that case, the AppComponent will again contain just the <router-outlet /> , the `layout/` folder will be empty and each feature will define its own layout as a part of the implementation of that feature, for example
`feature/dashboard/layout/` .

In such case, the app level routes config will be very simple and will only define lazy loaded features

Each feature will then define its own layout as a part of its own routes’ config.

```typescript
1 export const routes: Routes = [
2   {
3       path: '',
4       component: DashboardLayoutComponent, // <-- custom (per feature) layout
5       children: [
6           {
7               path: '',
8               component: DashboardComponent,
9           },
10          // other dashboard related routes...
11          // other dashboard related sub lazy features...
12      ],
13   },
14 ];
```
