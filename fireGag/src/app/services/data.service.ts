import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import firebase from 'firebase/app'
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Gag {
  title: string,
  creator: string,
  id?: string,
  image: string,
  createdAt?: firebase.firestore.FieldValue;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

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
          creator: '123',
          image: url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      })
    )
    
  }


}
