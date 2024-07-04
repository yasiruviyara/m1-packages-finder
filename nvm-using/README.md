# How to Use nvm (Node Version Manager)

## Install nvm

<a href="https://github.com/nvm-sh/logos">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-white.svg" />
    <img src="https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg" height="50" alt="nvm project logo" />
  </picture>
</a>

### Node Version Manager 
![Build Status](https://app.travis-ci.com/nvm-sh/nvm.svg?branch=master) 
![nvm version](https://img.shields.io/badge/version-v0.39.7-yellow.svg) 
[![CII Best Practices](https://bestpractices.dev/projects/684/badge)](https://bestpractices.dev/projects/684)

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











