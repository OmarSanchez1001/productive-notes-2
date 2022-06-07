import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';

import * as _ from 'lodash';
import { NotasEditComponent } from '../notas-edit/notas-edit.component';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {
  @Input() enableEdit: boolean;
  @Input() enableRemove: boolean;

  constructor(
    private readonly dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  notes: any[];

  ngOnInit() {
const data = this.dataService.getNotes2(); data.subscribe( n => { this.notes = n; this.notes = _.orderBy(this.notes, ['title'], ['asc']); })
  }

  async edit(id: any){
    const modal = await this.modalController.create({
      component: NotasEditComponent,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      backdropDismiss: true,
      showBackdrop: true,
      componentProps: { id }
    });

    return await modal.present();

  }

  remove(id: any){
    this.dataService.removeNote(id)
      .then(res => console.log("Nota removida"));
  }

}
