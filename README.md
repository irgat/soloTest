SoloTest
---

PixiJS TypeScript Code Example

### Prerequisites:

- [nvm](https://nodejs.org/en/download/package-manager)
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
$ nvm install 20
```
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)
```
$ npm install --global yarn
```

### How to build:

```
$ git clone https://github.com/irgat/soloTest.git soloTest
$ cd soloTest
$ yarn
$ yarn build
```

### Dev mode:

```
$ yarn start
```

---

## Asset Management

### Prerequisites:

- [texturepacker](https://www.codeandweb.com/texturepacker)

### How to update spritesheets:

- Update the desired assets in `assets/images` folder
- Open the relevant `tps` files in `assets/spritesheets` folder with **Texture Packer**
- Publish the spritesheets