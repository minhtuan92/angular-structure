# Pattern - [lazy] - [eager (rare)]

**Type: pattern**

In a nutshell, the pattern is a type which consists of a pre-packaged combination of standalones and injectables which implement a specific reusable use case which is consumed in a lazy feature (or rarely in layout) with a help of "drop in" component instead of a route!

Patterns are usually consumed through their main "drop in" component which is used in the templates of lazy features…

- Implementation in `pattern/<pattern-name>/` folder
- Great for implementing of **cross-cutting business features** like document manager, approval process, change history (audit log), notes or comments which could be dropped in many lazy features
- One way dependency between patterns and features, **only features can consume patterns but not the other way around**
- Consumed through main **"drop in" component used in the templates of lazy features** (or rarely, layouts)
- Sharing logic between patterns follows familiar “extract one level up rule” (into core or ui)

## Why do we call it pattern or a "drop in" feature

The idea for the name came from the development process of a generic organization specific UI library (think in direction of MyOrgMaterial) where we wanted to differentiate between the level of **individual generic reusable UI components (e.g. button or popover)** and the level of **pre-packaged combination of such components, e.g. context menu** (a multiple buttons in a popover) which we called patterns…

Another great name which includes information about the way most of the patterns will be used is the **"drop in" feature**. In general, each pattern will have one root component which can be dropped in anywhere in the template of a
component which belongs to a lazy loaded feature.

From this perspective, pattern can be also described as **a "non-routed" feature**.

## Pattern vs ui, core and feature

Now that we have some idea what patterns are, let’s drive the point home by highlighting the most important differences between the `pattern` and the concepts which we discussed until now, namely the `ui` , `core` and `feature`.

- `pattern` vs `ui` - Pattern is usually bound to a specific data source in form of service or a selector from state management library, which is forbidden for the reusable UI components which can only consume data through inputs and outputs. Besides that, pattern is usually a combination of multiple standalones (pattern specific and also other reusable ui standalones) and injectables

- `pattern` vs `core` - Pattern usually has its own UI which is created as a combination of pattern specific and other reusable `ui` standalones, while core is only about headless logic and therefore doesn’t have any UI

- pattern vs feature - Pattern is usually similar to a feature in that it’s a combination of multiple standalones and injectables, but **the main difference is that pattern is consumed through its "drop in" component** (e.g. <my-org-document-manager [context]="context" ...> ) **instead of a route config** which is the case for the lazy features

## When to create a pattern

- **Quite different behavior and UI** - In this case, it would make sense to keep the implementation fully isolated to preserve ability to evolve it independently in the future. The cost of that will be a slight duplication, in our case, the order feature will implement its own (and much simpler) version of the document service and related components.

- **Similar behavior but different UI** - In this case, it would make sense to extract the common behavior into the core/ for example core/document/ folder and implement the UI separately in each feature. The cost of that will be a slight duplication, in our case, the order feature will implement its own (and much simpler) version of the related
  components.

- **Different behavior and similar UI** - In this case, it would make sense to extract the common UI into the ui/ for example ui/document/ folder and implement the behavior separately in each feature in form of a document service or event a state management solution for the more complex one. The cost of that will be a slight duplication, in our case, the order feature will implement its own (and much simpler) version of the document service.

- **Similar behavior and similar UI** - In this case, it would make sense to extract the common behavior and UI into the pattern/ for example pattern/document-manager/ folder and implement the integration in each feature in form of a "drop in" component. This will eectively eliminate any duplication but will couple the pattern implementation to different requirements of the features which use it which will lead to need to parameterize the pattern and therefore make it more complex.

> There are many more examples of patterns which can be implemented, but the key takeaway is that patterns are great for implementing of cross-cutting business features which could be dropped in multiple lazy features or lazy sub features with no or minimal configuration.
