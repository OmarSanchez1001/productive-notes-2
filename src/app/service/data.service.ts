import { Injectable } from '@angular/core';
import { collectionData, docSnapshots, Firestore } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  createUser(user: any){
    const document = doc(collection(this.firestore, 'users'));
    return setDoc(document, user);
  }

  editUser(user: any){
    const document = doc(this.firestore, 'users', user?.id);
    const { id, ...data } = user;
    return setDoc(document, data);
  }

  removeUser(id: string){
    const document = doc(this.firestore, 'users', id);
    return deleteDoc(document);
  }

  createNote(note: any){
    const document = doc(collection(this.firestore, 'notes'));
    return setDoc(document, note);
  }

  getNote(): Observable<any[]>{
    const noteCollection = collection(this.firestore, 'notes');
    return collectionData(noteCollection, {idField: 'id'})
    .pipe(map(notes => notes as any[]));
  }

  editNote(note: any){
    const document = doc(this.firestore, 'notes', note?.id);
    const { id, ...data } = note;
    return setDoc(document, data);
  }

  removeNote(id: string){
    const document = doc(this.firestore, 'notes', id);
    return deleteDoc(document);
  }

}
