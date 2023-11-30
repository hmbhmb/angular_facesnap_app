import { Component, Input } from '@angular/core';
import {FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-g1',
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.scss']
})
export class FaceSnapG1Component {
  
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!'
    }else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }
}