import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// දත්ත Save කරන Function එක
async function testFirestore() {
    try {
        const docRef = await addDoc(collection(db, "test_data"), {
            message: "Hello Firebase!",
            date: new Date()
        });
        console.log("සාර්ථකයි! දත්ත ID එක: ", docRef.id);
        alert("දත්ත Firebase එකට ගියා!");
    } catch (e) {
        console.error("දෝෂයක් ආවා: ", e);
    }
}

// පරීක්ෂා කරන්න මේක කතා කරන්න
testFirestore();