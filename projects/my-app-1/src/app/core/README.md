# Core (eager)

The first type we’re going to discuss is the **core** which will live in the `core/` folder of our application.

- Implementation in `core/` folder
- Eager, available from start, part of the initial bundles size
- Only **injector based (headless) building blocks** like services, interceptors, guards, functions…
- Application conguration and setup in the provideCore()
- Content can (and should) be sub-structured based by domains (or features), e.g. `core/service/user/`, `core/guard/auth/`
- Core **logic is globally accessible** and can be accessed by any **_`layout`_**, **_`feature`_** and **_`pattern`_**
- Core is the place to extract logic, if it needs to be used more than one`layout`,`feature` and`pattern`

The core is the right place for all logic that needs to be available from the start like authentication state, guards or anything else that is necessary to be able to display information in the layout before loading of a specific lazy feature.

The second most common content of the core will be domain (or feature) specic injector based (headless) logic that is shared by more than one lazy loaded feature.
