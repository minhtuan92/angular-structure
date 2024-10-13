# UI

**Type: ui**

Now it’s time to talk about the UI type which is going to live in the `ui/` folder. The improved spiritual successor of the `SharedModule` , this type is special in that it’s basically the only type that will in practice be consumed by both the eager and lazy parts of our application.

- Implementation in `ui/` folder
- Only template context based (standalones) building blocks like **components**, **directives**, and **pipes**
- Eager / lazy - each individual standalone will be imported and used explicitly in each feature, pattern or layout that needs it, the bundler is then able to determine the optimal bundle into which such a standalone will be bundled
- Only generic reusable UI components, directives and pipes which communicate **only through inputs and outputs**
- Never bound to a specific state through service or state management library (**as it can’t import from the core anyway**)

## Standalones only

The UI as a type and therefore `ui/` as the folder should only ever contain standalones (components, directives and pipes) or in other words, only the building blocks which are related to the template context system of Angular.

The consequence of this approach is that the `ui/` should never contain implementation of any services or other headless logic and at the same time these components should never really import it from the core either.

## Generic reusable UI components

The key feature of the generic UI components is that they **never consume any data directly from injected services or from a state management mechanism like selectors**. Instead, they will delegate this responsibility to the parent component and receive data through inputs and notify parent about the
change through the outputs.

This constraint makes them universally reusable in every feature, pattern or layout of the application without any need to introduce various conditions, workarounds, and therefore coupling.
