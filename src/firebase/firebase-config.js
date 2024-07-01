// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENTS_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();

		const { user } = await signInWithPopup(auth, provider);

		const userDocRef = doc(db, "users", user.email);
		const userDoc = await getDoc(userDocRef);
		let displayName = userDoc.data()?.displayName;
		if (!userDoc.exists()) {
			displayName = `Player-${user.uid.slice(0, 5)}`;
			await setDoc(userDocRef, {
				email: user.email,
				uid: user.uid,
				displayName,
			});
		}

		return { uid: user.uid, email: user.email, displayName };
	} catch (error) {
		if (error.code != "auth/cancelled-popup-request") {
			console.error(error);
		}
		return null;
	}
}

const getAllDocs = async (collectionName) => {
	try {
		const querySnapshot = await getDocs(collection(db, collectionName));
		const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		return docs;
	} catch (error) {
		console.error("Error getting documents: ", error);
		throw error;
	}
};

export { getAllDocs, loginWithGoogle };
