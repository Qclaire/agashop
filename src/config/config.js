import app from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";
import "firebase/analytics";

var Config = {
    apiKey: "AIzaSyC0cAwqf9GaC7FojfnH8XdSISP1e2IeR7w",
    authDomain: "shop4me-cf863.firebaseapp.com",
    databaseURL: "https://shop4me-cf863.firebaseio.com",
    projectId: "shop4me-cf863",
    storageBucket: "shop4me-cf863.appspot.com",
    messagingSenderId: "398866407748",
    appId: "1:398866407748:web:94650d4b530ef4ec5ef711",
    measurementId: "G-YNT5H7YYCY"
  };
  
  
class Firebase {
  constructor() {
    app.initializeApp(Config);
    this.auth = app.auth();
    this.firestore = app.firestore();
    this.storage = app.storage().ref();
    app.analytics();
    this.firestore.enablePersistence({synchronizeTabs:true});
    this.dateIt = this.dateIt.bind(this);
    }

// ****** HELPER FUNCTION TO ADD TIME STAMPS TO DATA *****
  dateIt = (data)=>{
    const d  = new Date();
    const date = `${d.getDate()}-${d.getMonth()+1}-${d.getYear()}`;
    const ts =  d.getTime();
    const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const dataFinal = {timestamp:ts, date: date, time: time, dateObject:d, ...data}
    return {...data, ...dataFinal}
  }

    // **** MONITOR AUTH STATUS ****  

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Core DB METHODS ***

  doAddData = (collectionName, data) =>
    this.firestore.collection(collectionName).add(this.dateIt(data));

  doAddDataNested = (collectionName, subCollectionName, data)=>
    this.firestore.collection(collectionName).doc(data.docid).collection(subCollectionName).add(this.dateIt(data));
  
  doGetDocument = (collectionName) =>
    this.firestore.collection(collectionName);

  doGetCollection = collectionName=>
    this.firestore.collection(collectionName).get();

  getSnapshot = (collectionName) =>
    this.firestore.collection(collectionName);

  getSnapshotNested = (collectionName, subCollectionName, docid) =>
    this.firestore.collection(collectionName).doc(docid).collection(subCollectionName);

  doSetDocument = (collectionName,docid, data ) =>
    this.firestore.collection(collectionName).doc(docid).set(data ,{ merge: true });

  doSetDocumentNested = (collectionName, subCollectionName, docid, nestedDocId, data ) =>
    this.firestore.collection(collectionName).doc(docid).collection(subCollectionName).doc(nestedDocId).set(data ,{ merge: true });

  doDelete = (collectionName, docid)=>
    this.firestore.collection(collectionName).doc(docid).delete();

  doNestedDelete = (collectionName, subCollectionName, docid, nestedDocId) =>
    this.firestore.collection(collectionName).doc(docid).collection(subCollectionName).doc(nestedDocId).delete();
  
// *** FILE STORAGE METHODS ***
  doUploadFile = (path, file) =>{
     return this.storage.child(path).put(file);
   }

  }


export default Firebase;

