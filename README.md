# cra-template-jetpack-typescript

This is a custom template for [Create React App](https://github.com/facebook/create-react-app).

You can use this template with `npx create-react-app my-react-app --template jetpack-typescript`

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## Setting up `Absolute Imports`

See [Docs](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)

## Configure `Storybook`

All the dependencies have installed in the bootstrap process. Just update the `package.json` as below;

```json
{
  "scripts": {
    ..
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
  }
}
```
