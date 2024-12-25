<h1 align="center">
  Starlight Theme Gruvbox
</h1>

![Starlight Gruvbox theme preview](https://raw.githubusercontent.com/TheOtterlord/starlight-theme-gruvbox/refs/heads/main/assets/preview.png)

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
