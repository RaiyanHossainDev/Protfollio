// This is for client-side access
import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCUPOhkmCG75bNm3YXHgYKDr3F-BVjtT0Q",
  authDomain: "raiyan-hossain-adbc8.firebaseapp.com",
  projectId: "raiyan-hossain-adbc8",
  storageBucket: "raiyan-hossain-adbc8.firebasestorage.app",
  messagingSenderId: "465215070806",
  appId: "1:465215070806:web:29d507499d1b22a76091f7"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const db = getDatabase(app)

export { db }