This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## How to run 

- run `npm install`
- run `npm start`
- go to `localhost:3000`

## How to add this to your own create-react-app project?

- run `npm run eject` (NB: This will permanently eject your project- separting your webpack etc. into a config folder)

- go to `config/webpack.config.dev.js` and update

- Change the babel section to this:
	```
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins: [
            ["import", { "libraryName": "antd-mobile", "style": "css" }]
          ],
        },
      },
      ```
- Then at extensions, add '.web.js', so it looks like so: `extensions: ['.web.js', '.js', '.json', '.jsx']`

- NB: I removed the `''` extension from the example as it would not allow empty values.

OR

- copy my `webpack.config.dev.js` file and replace yours