import {Page} from 'ionic-angular';
import {NgZone} from 'angular2/core';
import {Camera} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    static get parameters(){
        return [NgZone];
    }
    
    constructor(ngzone) {
        this.zone = ngzone;
        this.image = null;
    }
    
    takepic() {
        var options = {
            destinationType: 0,
            sourceType: 1,
            encodingType: 0,
            quality:100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };
        
        Camera.getPicture(options).then((data) => {
            var imgdata = "data:image/jpeg;base64," + data;
            this.zone.run(() => this.image = imgdata);
        }, (error) => {
            alert(error);
        });
    }
}