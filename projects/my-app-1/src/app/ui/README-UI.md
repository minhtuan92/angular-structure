# UI - [eager] - [lazy]

**Type: ui**

Now it’s time to talk about the UI type which is going to live in the `ui/` folder. The improved spiritual successor of the `SharedModule` , this type is special in that it’s basically the only type that will in practice be consumed by both the eager and lazy parts of our application.

- Implementation in `ui/` folder
- Only template context based (standalones) building blocks like **components**, **directives**, and **pipes**
- Eager / lazy - each individual standalone will be imported and used explicitly in each feature, pattern or layout that needs it, the bundler is then able to determine the optimal bundle into which such a standalone will be bundled
- Only generic reusable UI components, directives and pipes which communicate **only through inputs and outputs**
- Never bound to a specific state through service or state management library (**as it can’t import from the core anyway**)

```bash
|-- app
    |-- ui
        |-- components
        |-- directives
        |-- pipes
```

## Standalones only

The UI as a type and therefore `ui/` as the folder should only ever contain standalones (components, directives and pipes) or in other words, only the building blocks which are related to the template context system of Angular.

The consequence of this approach is that the `ui/` should never contain implementation of any services or other headless logic and at the same time these components should never really import it from the core either.

## Generic reusable UI components

The key feature of the generic UI components is that they **never consume any data directly from injected services or from a state management mechanism like selectors**. Instead, they will delegate this responsibility to the parent component and receive data through inputs and notify parent about the
change through the outputs.

This constraint makes them universally reusable in every feature, pattern or layout of the application without any need to introduce various conditions, workarounds, and therefore coupling.

## How to handle types and interfaces

Let’s start with a description of one of the common challenges that will arise in most of the projects as a result of the following set of constraints:

1. UI standalones receive all the data through inputs and notify parent about changes through outputs
2. These inputs and outputs need corresponding types and interfaces to make them type safe
3. Data with its corresponding interfaces and types will be managed and provided by services or state management solution which are implemented in `core` or in the respective `feature`
4. UI standalones can’t have direct dependency on (or import from) the `core` or any lazy `feature`

### Define interfaces and types in the ui standalone itself

This is the preferred solution to the presented challenge as it keeps the types and interfaces close to the place where they are used and comes with a couple of great advantages:

- UI standalone is self-contained as it describes what data it needs locally
- The types and interfaces describe only the properties which are actually used by the UI standalone instead of the more generic `User` entity
- The types and interfaces can be more descriptive and specific to the use case of the UI standalone, eg `Avatar` instead of the more generic `User`
- As the application evolves, the `Avatar` maintains its own identity and independence from the `User` entity which can change over time

The downside is that now we have to maintain similar types and interfaces in multiple places, and possibly introduce some kind of mapping between the `User` entity and the `Avatar` entity in the future as they diverge.

A very nice variation of this approach is to introduce multiple more granular inputs like `imageUrl` , `name` and `role` which will be described by a primitive type like `string` or `number` . That way the need to use
(and therefore import) the User interface is removed altogether

Such an approach can work very well in simpler cases with a rather small number of properties. At the same time, the issue of diverging `User` interface can be solved by a simple mapping directly in the template of the
consumer component which is using the `<avatar />` component.

## How to handle complex pipes

Another common challenge is related to implementation of pipes in the UI architecture type and happens in situations which can be described as follows:

- The pipe contains complex logic
- Some components and more importantly, some services need to use this logic as well as a part of their implementation
- We never want to register Angular pipe as a provider in the injector hierarchy as that would mix up separation between template context and injector hierarchy

It's always a good practice to separate pipe into a thin "wrapperlike" pipe, which will be used in the template, and a service which will contain the actual logic. That way, the logic will be available
to both components (can be used in the template) and services (can be used in the business logic).

The best way to solve this issue is to remove the need to use the pipe inside the UI component altogether. This can be achieved by using the pipe in the parent component instead (eg layout, feature or pattern) and pass the result down to the UI component…
