# Layout - [eager]

Typically, most applications will use one or more layouts as a “frame” around the slot in which we’re going to display specific lazy loaded features based on user navigation or interaction.

- Implementation in `layout/` folder
- Eager, available from start, part of the initial bundles size
- Only template context based (standalones) building blocks like components, directives and pipes
- Can and most likely will consume services and state from `core/`
  - Auth state to filter which menu items should be displayed
  - User state to display user avatar
- Can and will most likely consumer some standalones from ui/ like: `Avatar` , `Popover` , `Dialog` , `Button` or `Menu`
- In case of single main layout which is used for the whole app it will be used directly in the template of the `AppComponent`
- In case of multiple layouts it will be used as part of the route config
- Applications can have more than one layout, e.g. login, signup, authenticated
- Some application may need a custom layout per feature and in that case the `layout/` folder may end up empty, the `AppComponent` will then end up with a template consisting only of single `<router-outlet />` and each feature will implement its own layout within its own feature folder
