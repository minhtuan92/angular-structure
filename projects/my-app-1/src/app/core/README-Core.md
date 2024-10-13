# Core - [eager]

**Type: core**

The first type we’re going to discuss is the **core** which will live in the `core/` folder of our application.

- Implementation in `core/` folder
- Eager, available from start, part of the initial bundles size
- Only **injector based (headless) building blocks** like services, interceptors, guards, functions…
- Application configuration and setup in the `provideCore()`
- Content can (and should) be sub-structured based by domains (or features), e.g. `core/service/user/`, `core/guard/auth/`
- Core **logic is globally accessible** and can be accessed by any **_`layout`_**, **_`feature`_** and **_`pattern`_**
- Core is the place to extract logic, if it needs to be used more than one `layout`,`feature` and`pattern`

The core is the right place for all logic that needs to be available from the start like authentication state, guards or anything else that is necessary to be able to display information in the layout before loading of a specific lazy feature.

The second most common content of the core will be domain (or feature) specic injector based (headless) logic that _is shared by more than one lazy loaded feature_.

```bash
|-- app
    |-- core
        |-- guards
        |-- http             // contain api call and response model
        |-- interceptors
        |-- model            // contain type or interface for whole app
        |-- services
        |-- utils
        |-- core.ts
```

## Standalone core

With the advent of standalone APIs, the core also transformed from previously common `CoreModule` to `provideCore()` . This is the best location for us to provide, define and setup, everything that should be available from the start.

As such, `provideCore()` should be the sole location of this setup and the initially generated `app.config.ts` should only contain the call to the
provideCore() itself. That way, there is no ambiguity or possibility to miss something as everything is available in this one single place!

```typescript
1 export interface CoreOptions {
2   routes: Routes;
3   // other options and parametersÄ
4 }
5
6 export function provideCore({ routes }: CoreOptions) {
7   return [
8     provideAnimations(),
9     provideRouter(
10      routes,
11      withComponentInputBinding(),
12      // other router features...
13    ),
14    // other Angular based, 3rd party or local providers and state...
15
16    // perform initialization, has to be last
17    {
18      provide: ENVIRONMENT_INITIALIZER,
19      multi: true,
20      useValue() {
21        // add init logic here...
22      },
23    },
24   ];
25 }
```
