<p align="center">
	<a href="https://github.com/TheOtterlord/starlight-theme-gruvbox/stargazers"><img src="https://img.shields.io/github/stars/TheOtterlord/starlight-theme-gruvbox?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/starlight-theme-gruvbox/issues"><img src="https://img.shields.io/github/issues/TheOtterlord/starlight-theme-gruvbox?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/starlight-theme-gruvbox/contributors"><img src="https://img.shields.io/github/contributors/TheOtterlord/starlight-theme-gruvbox?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

![Starlight Gruvbox theme preview](https://raw.githubusercontent.com/TheOtterlord/starlight-theme-gruvbox/refs/heads/main/assets/starlight-theme-gruvbox.webp)

## Usage

1. Install the theme package to your project with your preferred package manager:
```sh
npm install starlight-theme-gruvbox
pnpm add starlight-theme-gruvbox
yarn add starlight-theme-gruvbox
```

2. Add the theme to your Starlight config.

```ts
import gruvbox from "starlight-theme-gruvbox";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        gruvbox()
      ]
    })
  ]
})
```

## License

This project is licensed under the MIT license. Shiki themes in styles/shiki are from [VSCode theme gruvbox](https://github.com/jdinhify/vscode-theme-gruvbox/tree/main/themes) by [@jdinhify](https://github.com/jdinhify) and are released under the MIT license.
