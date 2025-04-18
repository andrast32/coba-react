// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "ISI_API_KEY_MU",
    authDomain: "ISI_AUTH_DOMAIN_MU",
    projectId: "ISI_PROJECT_ID_MU",
    storageBucket: "ISI_STORAGE_BUCKET_MU",
    messagingSenderId: "ISI_SENDER_ID_MU",
    appId: "ISI_APP_ID_MU",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
