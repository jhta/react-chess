# Adding stylus

First we have to install the webpack loaders:

`npm i -D style-loader css-loader stylus-loader`

Next, we add the loader to webpack dev config:

```babel
{
  test: /\.styl$/,
  include: [paths.appSrc, paths.appNodeModules],
  loader: 'style!css!stylus'
}
```

Now, we can use stylus, for add in any component:

`import 'Component.styl'`
