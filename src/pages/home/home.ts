import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Lat: any;
  Lng: any;
 
  constructor(public navCtrl: NavController, public geo: Geolocation) {

  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then( pos => {
      this.Lat = pos.coords.latitude;
      this.Lng = pos.coords.longitude;
     
        
    }).catch( err => console.log(err));
  }
}


