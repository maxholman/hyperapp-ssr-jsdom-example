## HyperApp SSR + jsdom example

### Heads up

This runs on a [patched version of HyperApp](https://github.com/hyperapp/hyperapp/compare/master...maxholman:ownerdocument) that determines the `document` from the container/root that is passed into the app.

There is no PR yet as I would like to ensure this fits in with routing and use of `window` and `location` with jsdom too.

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

The page will load with the counter set to 100, and will intentionally wait 2000ms before making the page interactive (ie until app initializes on the client side) so you can see the difference.

View the source to see the HTML rendered server side.
