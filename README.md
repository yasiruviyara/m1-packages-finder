#  *M1 Packages Finder* v0.1


### PropTypes finding 
```js
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element.
  optionalElement: PropTypes.element,

  // A React element type (ie. MyComponent).
  optionalElementType: PropTypes.elementType,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),   

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A required value of any data type
  requiredAny: PropTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```

## <a href='/nvm-using/README.md'>1. How to Use nvm (Node Version Manager)</a>

### Install nvm

<a href="https://github.com/nvm-sh/logos">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-white.svg" />
    <img src="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg" height="50" alt="nvm project logo" />
  </picture>
</a>

### Node Version Manager 
![Build Status](https://app.travis-ci.com/nvm-sh/nvm.svg?branch=master) 
![nvm version](https://img.shields.io/badge/version-v0.39.7-yellow.svg) 


## Download and run the nvm installation

1. Run the following command in your git **bash** terminal
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Locate nvm.sh
```bash
find ~/.nvm -name "nvm.sh"
```

3. Add nvm Initialization to Shell Profile
```bash
nano ~/.bashrc
```

```bash
source /path/to/nvm.sh
```

4. Save and Apply Changes:
```bash
source ~/.bashrc
```

```bash
source ~/.bash_profile
```

```bash
source ~/.zshrc
```

5. Verify Activation:
```bash
nvm --version
```

## Install Node.js old version using nvm

install specific versions of Node.js as needed
```bash
nvm install (version number)
```

## switch to using a specific version
After installation, you can switch to using a specific version of Node.js with
```bash
nvm use (version number)
```
