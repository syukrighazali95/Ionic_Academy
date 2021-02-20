import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

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

  constructor(private afs: AngularFirestore) { }

  addGag(gag: Gag) {
    return this.afs.collection('gags').add({
      title: gag.title,
      creator: '123',
      image: gag.image,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }


}
