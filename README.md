## HyperApp SSR + jsdom example

### Warning

This runs on my [patched version of HyperApp](https://github.com/hyperapp/hyperapp/compare/master...maxholman:ownerdocument) that determines the
`document` from the container/root that is passed into the app.

There is no PR yet as I would like to see how this concept fits with routing and using `window` and `location` with jsdom too.

### Install

```
$ yarn install
```

or

```
$ npm install
```

### Running

```
$ yarn start
```

or

```
$ npm start
```

### Results

Visit http://localhost:3000

The page will load with the counter set to 100, and will wait
2000ms until making the page interactive (app initializes on the
client size)

View the source to see the HTML rendered server side
