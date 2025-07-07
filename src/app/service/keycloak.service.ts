// import { Injectable } from '@angular/core';
// import Keycloak from 'keycloak-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class KeycloakService {
//   private keycloak: Keycloak;
  

//   constructor() {
//     this.keycloak = new Keycloak({
//       url: 'http://localhost:8081',
//       realm: 'ems-realm',
//       clientId: 'ems-client'
//     });
//   }

//   async init(): Promise<void> {
//     await this.keycloak.init({
//       onLoad: 'login-required',
//     });
    
//   }
//   getKeycloakInstance(): Keycloak {
//     return this.keycloak;
//   }

//   async getToken(): Promise<string> {
//     const token = this.keycloak.token;
//     if (!token) {
//       throw new Error('Token is undefined');
//     }
//     return token;
//   }

//   async logout(): Promise<void> {
//     await this.keycloak.logout({ redirectUri: 'http://localhost:4200' });
//   }
// }