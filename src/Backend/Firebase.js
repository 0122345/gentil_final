  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
   
  const firebaseConfig = {
    apiKey: "AIzaSyC8KWdKD-m3fi0ZbxBNFyAptl0dLfTmLmA",
    authDomain: "gentil-final.firebaseapp.com",
    projectId: "gentil-final",
    storageBucket: "gentil-final.firebasestorage.app",
    messagingSenderId: "819839847040",
    appId: "1:819839847040:web:1508f6ff95c69cfa55b465",
    measurementId: "G-B49ZBYBM8V"
  };

 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  export {database};