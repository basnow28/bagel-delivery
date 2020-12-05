# Run the project -> pre requirements

To run the project, make sure that you have Node.js and yarn installed.

https://nodejs.org/en/download/

https://classic.yarnpkg.com/en/docs/install

To start the project, firtly you need to install the dependencies in your project directory, by running:  

### `yarn install`

After that you can run 

### `yarn start`

The app will run in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Used dependencies

The app is using: 
React Redux (https://react-redux.js.org/introduction/quick-start)
Redux Saga (https://redux-saga.js.org/)
Axios (https://yarnpkg.com/package/axios) 
React Router (https://reactrouter.com/)


## File Structure
     src folder: 
          api/ - Functions that call api endpoints
          containers/ - components used in the routes
          components/ - components used by containers
          routes/ - React Router setup
          store/ - React Redux and Saga setup: 
               actions/ - React Redux actions
               reducers/ - React Redux reducers, add a reducer to index.js to create an object in the store
               sagas/ - React Redux sagas, they contain business logic and call api functions
               selectors/ - functions used to select data from Redux store
          styles/ - global styles
          tests/ - react tests, using jest (See more: https://jestjs.io/docs/en/tutorial-react) 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
