 import { Injectable } from '@angular/core';
 import {FaceSnap } from '../models/face-snap.model';
 @Injectable({
 providedIn: 'root'
 })
 export class FaceSnapsService {
 faceSnaps: FaceSnap[] = [
    {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
      }
      ,
      {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
      }
      ,
      {
        title:'Archiblad',
        description:'Mon meilleur amis depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps:0,
      }
 ]
 }