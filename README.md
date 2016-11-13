# eslint-config-keystone

Shareable ESLint Config for Coding Standards used in [KeystoneJS](http://keystonejs.com)

Note that as of 3.0.0 this package no longer includes the eslint-react plugin or react specific rules, to make it more suitable for projects that don't use React.

If you are using React in your project, please see [eslint-config-keystone-react](https://github.com/keystonejs/eslint-config-keystone-react)

## Installation

Install eslint-config-keystone as a dev dependency:

```
npm install --save-dev eslint eslint-config-keystone
```

Then add an `.eslintrc` file to your project that extends the `keystone` config:

```
{
  "extends": [
     "keystone"
  ]
}
```

You can do this from the OS X terminal by running this line in your project folder:

```
echo -e '{\n  "extends": [\n    "keystone"\n  ]\n}' >> .eslintrc
```

Additional configuration can be added to `.eslintrc` that extends or overrides the keystone defaults.

## License

MIT. Copyright (c) 2016 Jed Watson.
