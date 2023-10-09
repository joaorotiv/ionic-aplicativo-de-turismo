import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {

  constructor( public toastController : ToastController) {}


  openSiteObj1() {
    window.open("https://www.tripadvisor.com.br/Attraction_Review-g941641-d2408025-Reviews-Praia_dos_Padres-Guarapari_State_of_Espirito_Santo.html");
  }


  openSiteObj2() {
    window.open("https://www.tripadvisor.com.br/Attraction_Review-g941641-d2408032-Reviews-Tres_Praias-Guarapari_State_of_Espirito_Santo.html");
  }

  async like(){
    const toast = await this.toastController.create({
      message: 'Obrigado por favoritar!',
      duration: 2000
    });
  }
}
