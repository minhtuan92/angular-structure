# Core - [eager]

**Type: core**

The first type we’re going to discuss is the **core** which will live in the `core/` folder of our application.

- Implementation in `core/` folder
- Eager, available from start, part of the initial bundles size
- Only **injector based (headless) building blocks** like services, interceptors, guards, functions…
- Application configuration and setup in the `provideCore()`
- Content can (and should) be sub-structured based by domains (or features), e.g. `core/services/user/`, `core/guards/auth/`
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

## Angular (and state management) specific providers and setup

The `provideCore()` is the right place to set up all global Angular providers like `provideAnimations()` , `provideRouter()` , `provideHttpClient()` (with interceptors) or providers from state management libraries like NgRx `provideStore()` .

All these “provideX” APIs usually support passing of additional configuration to further parametrize or enhance provided functionality

## Infrastructure specific providers

Besides providers from Angular and the state management library of choice, `provideCore()` is also a place to register providers from 3rd party libraries which often handle “infrastructure” use cases like logging, translations, analytics and other…

## Initialization logic and kick-starting of processes

The `provideCore()` is also the place where we’re going to kickstart all initial and long-running processes that need to take place at the application startup.

This will be performed with the help of the special `ENVIRONMENT_INITIALIZER` provider which allows us to run any logic inside its `useValue()` function. For example, when using NgRx, this could be a place to dispatch an AppInit event which can then kickstart other processing in the NgRx effects like resolving of the authentication token or loading of the user.

We should always make sure that this logic is implemented as last within the `provideCore()` otherwise we might get an error because we might be injecting some providers which weren’t provided yet.

## App-specific core logic needed from start

This represents app-specic business logic in the form of services, guards, state management specific logic and more.

This logic is then something that we need from the start. A great example to illustrate this point is logic to manage authentication state such as authentication token and the user entity. This state needs to be available
from the start because it could be used to:

- **Perform other backend requests** - auth token will be used by interceptors to set it as HTTP header to authenticate performed backend requests
- **Determine if a user has access to a specific feature** - user entity can contain roles or other mechanism that can be used in guards to determine if user can navigate to a specific lazy feature (frontend / UX only, real security is the sole responsibility of backend which must determine which data can be provided as frontend can always be “hacked” using dev tools)
- **Display user info**- user info such as name or avatar as a part of layout before loading of a specific lazy feature

## App-specific core logic shared by more than one lazy feature

Besides logic that needs to run from start, the core is also a place to implement anything that needs to be used by **more than one lazy feature**!

## Other utils

The core is also the place to implement other simple function-based utils. Typical examples could be functions to parse and transform format for things like dates, query params, or anything else…
