import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import firebase from 'firebase/app'
import { from, Observable } from 'rxjs';
import { switchMap,take } from 'rxjs/operators';

export interface Gag {
  title: string,
  creator: string,
  id?: string,
  image: string,
  createdAt?: firebase.firestore.FieldValue;
}

export interface User {
  uid: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: User = null;
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, private afAuth:AngularFireAuth) {
    this.afAuth.onAuthStateChanged(user => {
      console.log("user changed: ", user);
      this.currentUser = user;
    })
   }

  addGag(gag: Gag) {
    let newName = `${new Date().getTime()}-DUMMY.png`;
    let storageRef: AngularFireStorageReference = this.storage.ref(`/gags/${newName}`);

    const storageObs = from(storageRef.putString(gag.image, 'base64', {contentType: 'image/png'}));

    return storageObs.pipe(
      switchMap(obj => {
        console.log("FIN: ", obj);
        return obj.ref.getDownloadURL();
      }),
      switchMap(url => {
        console.log('my url: ', url);
        return this.afs.collection('gags').add({
          title: gag.title,
          creator: this.currentUser.uid,
          image: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      })
    )

    
    
  }

  async signUp({email, password}) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const uid = credential.user.uid;
    return this.afs.doc(`users/${uid}`).set({
      uid,
      email: credential.user.email
    });
  }

  signIn({email, password}) {
      return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  getGags() {
    return this.afs.collection('gags', ref => ref.orderBy('createdAt', 'desc'))
    .valueChanges({ idField: 'id'}).pipe(take(1)) as Observable<Gag>
  }

}
