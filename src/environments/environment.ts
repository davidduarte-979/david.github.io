// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL_FIREBASE: 'https://porfolio-8433c-default-rtdb.firebaseio.com/projects',
  API_AUTH_FIREBASE_SIGNUP: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  API_AUTH_FIREBASE_SIGNIN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  API_KEY_FIREBASE: 'AIzaSyB1i143xgUQYNvO9BOLHh9N-tLLbYicGDI',
  API_DEV: 'http://localhost:3000/api/projects/',
  API_AUTH_DEV: 'http://localhost:3000',
  API_BASE_URL: 'https://api.rebel-transport-gr75.com',
  API_VERSION: 'api/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
