# SF Co. Bones

## TODO
- ### Priority: High
    - Update project folder structure (and related files) to match `STRUCTURE` outlined below.
- ### Priority: Medium
    - ...
- ### Priority: Low
    - Add `first-direct-descendant` or similar SASS `@mixin`.
    - Add 'if-first' and `if-last` (or similar) SASS `@mixin`.
    - Add 'unless-first' and 'unless-last' (or similar) SASS `@mixin`.

## STRUCTURE
```
- styles/
|--- styles.scss
|--- utils/
    | --- manifest.scss
    |--- functions/
    |--- mixins/
|--- config/
    | --- manifest.scss
    |--- settings/
    |--- variables/
|--- base/
    | --- manifest.scss
    |--- fonts/
    |--- global/
    |--- helper/
|--- atoms/
    | --- manifest.scss
|--- molecules/
    | --- manifest.scss
|--- organisms/
    | --- manifest.scss
|--- pages/
    | --- manifest.scss
```