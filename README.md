# cra-template-jetpack-typescript

This is a custom template for [Create React App](https://github.com/facebook/create-react-app).

You can use this template with `npx create-react-app my-react-app --template jetpack-typescript`

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## Setting up for `Absolute Imports`

Update `tsconfig.json` as below;

```json
{
  ..
  "compilerOptions": {
    ..
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

and, now you can change all the relative imports to absolute imports:

```js
import Home from './screens/Home'; --> import Home from 'screens/Home';

import logo from '../../assets/logo.svg'; --> import logo from 'assets/logo.svg';

import Providers from './providers'; --> import Providers from 'providers';
```

## Configure `Storybook`

Update `package.json` as below;

```json
{
  "scripts": {
    ..
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
  }
}
```
