# Pattern - [lazy] - [eager (rare)]

In a nutshell, the pattern is a type which consists of a pre-packaged combination of standalones and injectables which implement a specific reusable use case which is consumed in a lazy feature (or rarely in layout) with a help of "drop in" component instead of a route!

Patterns are usually consumed through their main "drop in" component which is used in the templates of lazy features…

- Implementation in `shared/pattern/<pattern-name>/` folder
- Great for implementing of **cross-cutting business features** like document manager, approval process, change history (audit log), notes or comments which could be dropped in many lazy features
- One way dependency between patterns and features, **only features can consume patterns but not the other way around**
- Consumed through main **"drop in" component used in the templates of lazy features** (or rarely, layouts)
- Sharing logic between patterns follows familiar “extract one level up rule” (into core or ui)

## Why do we call it pattern or a "drop in" feature

The idea for the name came from the development process of a generic organization specific UI library (think in direction of MyOrgMaterial) where we wanted to differentiate between the level of **individual generic reusable UI components (e.g. button or popover)** and the level of **pre-packaged combination of such components, e.g. context menu** (a multiple buttons in a popover) which we called patterns…

Another great name which includes information about the way most of the patterns will be used is the **"drop in" feature**. In general, each pattern will have one root component which can be dropped in anywhere in the template of a
component which belongs to a lazy loaded feature.

From this perspective, pattern can be also described as **a "non-routed" feature**.
