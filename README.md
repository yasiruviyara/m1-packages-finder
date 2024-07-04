#  *M1 Packages Finder* v0.1

![How_to_Use_nvm_img_1-transformed](https://github.com/yasiruviyara/m1-packages-finder/assets/80908044/6196abaa-2d2c-4b77-882c-a96a71749270)


## <a href='/nvm-using/README.md'>1. How to Use nvm (Node Version Manager)</a>

Youtube Video: <a href='https://youtu.be/jXxEH461gSM?si=ATvmZJHkJ98-TEMi'> How to Use nvm (Node Version Manager) | M1 Packages Finder</a>

<p>
  Node Version Manager (nvm) is an essential tool for developers working with Node.js. It allows you to manage multiple versions of Node.js on a single machine, making it easier to switch between projects with different requirements. In this post, we'll guide you through the steps to install and use nvm on your vs code
</p>

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
