# App - [eager]

**Type: app**

The app type will consist of all files starting with `app.` prefix, for example `app.component.ts` ( `app.component.spec.ts` ), `app.config.ts` and `app.routes.ts` .

- `app.component.ts` - in most cases will contain either the `<router-outlet />` in case of multiple layouts per route or `<my-org-layout />` component
- `app.config.ts` - import and call `provideCore({ routes })` function from `core.ts` file (possibly with other options)
- `app.routes.ts` - top level routes config, will import and use `feature/<feature-name>/` routes configs of the first level lazy features

# Main - [eager]

**Type: main**

The main type will consist only of the main.ts file which is used to bootstrap the application. The file itself will stay as it was generated with the help of Angular Schematics when first creating the workspace.

```typescript
1 import { bootstrapApplication } from '@angular/platform-browser';
2 import { appConfig } from './app/app.config';
3 import { AppComponent } from './app/app.component';
4
5 bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
```
