import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AjoutVolsComponent } from '../../../../boitesDialogue/ajout-vols/ajout-vols.component'; // Importez le composant du modal d'ajout de vols

import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AjoutemployeeComponent } from 'src/app/boitesDialogue/ajoutemployee/ajoutemployee.component';
import { AjoutpiloteComponent } from 'src/app/boitesDialogue/ajoutpilote/ajoutpilote.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state(
        'collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state(
        'expanded',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')]),
    ]),
    trigger('cardRemove', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      transition('open <=> closed', animate('400ms')),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardClass: string;
  @Input() blockClass: string;
  @Input() headerClass: string;
  @Input() options: boolean;
  @Input() hidHeader: boolean;
  @Input() customHeader: boolean;

  public animation: string;
  public fullIcon: string;
  public isAnimating: boolean;
  public collapsedCard: string;
  public collapsedIcon: string;
  public loadCard: boolean;
  public cardRemove: string;
  bsModalRef: BsModalRef;
  constructor(config: NgbDropdownConfig,private modalService: BsModalService) {
    config.placement = 'bottom-right';
    this.customHeader = false;
    this.options = true;
    this.hidHeader = false;
    this.cardTitle = 'Card Title';
    this.fullIcon = 'icon-maximize';
    this.isAnimating = false;

    this.collapsedCard = 'expanded';
    this.collapsedIcon = 'icon-minus';

    this.loadCard = false;

    this.cardRemove = 'open';
  }

  ngOnInit() {
    if (!this.options || this.hidHeader || this.customHeader) {
      this.collapsedCard = 'false';
    }
  }

  public fullCardToggle(
    element: HTMLElement,
    animation: string,
    status: boolean
  ) {
    animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
    this.fullIcon =
      this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
    this.cardClass =
      this.cardClass === 'full-card' ? this.cardClass : 'full-card';
    if (status) {
      this.animation = animation;
    }
    this.isAnimating = true;

    setTimeout(() => {
      this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
      if (this.cardClass === 'full-card') {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').removeAttribute('style');
      }
    }, 500);
  }

  collapsedCardToggle(event) {
    this.collapsedCard =
      this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    this.collapsedIcon =
      this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
  }

  cardRefresh() {
    this.loadCard = true;
    this.cardClass = 'card-load';
    setTimeout(() => {
      this.loadCard = false;
      this.cardClass = 'expanded';
    }, 3000);
  }

  cardRemoveAction() {
    this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
  }

  ouvrirModalAjoutVols() {
    console.log('cardetitle',this.cardTitle)
    if(this.cardTitle == 'Liste des vols'){
      this.bsModalRef = this.modalService.show(AjoutVolsComponent);
    }else if(this.cardTitle == 'Liste de Staff'){
      this.bsModalRef = this.modalService.show(AjoutemployeeComponent);
    }else if(this.cardTitle =='Liste des pilotes'){
      this.bsModalRef = this.modalService.show(AjoutpiloteComponent);
    }
    

  }

}
