/**
 * Import function triggers from their respective submodules:
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";

// Set global options for Firebase Functions
setGlobalOptions({ maxInstances: 10 });
