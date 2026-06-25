// ===================================================
// BEST ICT ACADEMY - Firebase Config (v8 Compat)
// ===================================================
const firebaseConfig = {
    apiKey: "AIzaSyAyWVSeeRQcO-rJN6DNjZyiKzzyTOGFHE8",
    authDomain: "best-ict-lms.firebaseapp.com",
    databaseURL: "https://best-ict-lms-default-rtdb.firebaseio.com",
    projectId: "best-ict-lms",
    storageBucket: "best-ict-lms.appspot.com",
    messagingSenderId: "390304573394",
    appId: "1:390304573394:web:24807b4070b8cda6a6a0b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
