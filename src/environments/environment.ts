// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://gateway.marvel.com:443/v1/public/',
  publicKey: 'bad62c71c50a14502e8a5254962aabf0',
  ts: 1000,
  // se genera del ts, publicKey y la privateKey
  hash: '8b6c8c94b0484233282d3feb8546cc86'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
