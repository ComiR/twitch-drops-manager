# Twitch Drops Manager

## dev

1. Allow Tampermonkey access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. install deps with `npm i` or `npm ci`.
3. `npm run dev` to start your development.
   Now you will see 2 files in `./dist/`
    - `dist/index.dev.user.js`: **You should install this userscript in your browser.
      ** It's a simple loader that load `dist/index.debug.js` on matched web page.
    - `dist/index.debug.js`: This is the development build with `eval-source-map`.
      It will be automatically loaded by `dist/index.dev.user.js` via `@require file://.../dist/index.debug.js`
      metadata, **Don't add it to your userscript manager.**
4. edit [src/index.ts](./src/index.ts), you can even import css or less files. You can use scss if you like.
5. go to <https://twitch.com/> and open the console, you'll see it's working.

livereload is enabled by default,
use [this Chrome extension](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

### NOTICE

Everytime you change your metadata config, you'll have to restart webpack server and install the newly
generated `dist/index.dev.user.js` UserScript in your browser again.

## Cross Site Request

You can call `GM.xmlHttpRequest` directly or use a fetch API based
on `GM.xmlHttpRequest` <https://github.com/Trim21/gm-fetch>

## TypeScript

Use typescript as normal, see [src/index.ts](src/index.ts)

## dependencies

There are two ways to using a package on npm.

### UserScript way

like the original UserScript way, you will need to add them to
your [user script metadata's require section](./config/metadata.cjs#L16-L18) , and exclude them
in [config/webpack.config.base.cjs](./config/webpack.config.base.cjs#L18-L20)

### Webpack way

Just install packages with npm and import them in your code, webpack will take care them.

## Build

```bash
npm run build
```

`dist/index.prod.user.js` is the final script. you can manually copy it to greasyfork for deploy.

### Minify

There is a [limitation in greasyfork](https://greasyfork.org/en/help/code-rules), your code must not be obfuscated or
minified.

If you don't need to deploy your script to greasyfork, enable minify as you like.

## automatically Deploy

[GitHub Actions](./.github/workflows/deploy.yaml#L36) will deploy production userscript to gh-pages branch.

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)

[deployed](https://trim21.github.io/webpack-userscript-template/)

You can auto use greasyfork's auto update function.

## Q&A

You may find enabling source map not working well in production code, because Tampermonkey will add extra lines (all
your `@require`) before your script. I don't know if there is a good fix for this, You need to use webpack
config `devtool` with `eval` prefix to make it work as expected, so source map is disabled in this template.

<https://webpack.js.org/configuration/devtool/#development>
