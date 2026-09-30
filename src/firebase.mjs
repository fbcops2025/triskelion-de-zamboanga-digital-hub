import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, deleteDoc, query, orderBy, limit, serverTimestamp, getDocFromServer } from 'firebase/firestore';

export const firebaseConfig = {
  projectId: "gen-lang-client-0769664244",
  appId: "1:201078690401:web:bd7ebdfdebf1d935485020",
  apiKey: "AIzaSyDUTjpIIHuDd9YefU0ZX6KmFTKQGEOTmjc",
  authDomain: "gen-lang-client-0769664244.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-triskeliondezamb-178b7572-ae66-4eae-b066-fd134735ef13",
  storageBucket: "gen-lang-client-0769664244.firebasestorage.app",
  messagingSenderId: "201078690401",
  measurementId: "",
  oAuthClientId: "201078690401-rhjlui98kop71n5i61fl0qmt86gaf0pp.apps.googleusercontent.com",
  recaptchaSiteKey: ""
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const OperationType = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  LIST: 'list',
  GET: 'get',
  WRITE: 'write',
};

export function handleFirestoreError(error, operationType, path) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || false,
      isAnonymous: auth.currentUser?.isAnonymous || false,
      tenantId: auth.currentUser?.tenantId || null,
      providerInfo: auth.currentUser?.providerData?.map(p => ({
        providerId: p.providerId,
        email: p.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection on boot per Firebase skill guidelines
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firestore client is offline. Checking network or configuration.");
    }
  }
}
if (typeof window !== 'undefined') {
  testConnection();
}

export {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  serverTimestamp
};
