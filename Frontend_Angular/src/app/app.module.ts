import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AdminComponent } from './theme/layout/admin/admin.component'; 
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { ToggleFullScreenDirective } from './theme/shared/components/full-screen/toggle-full-screen';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutVolsComponent } from './boitesDialogue/ajout-vols/ajout-vols.component';
import { AjoutemployeeComponent } from './boitesDialogue/ajoutemployee/ajoutemployee.component';
import { AjoutpiloteComponent } from './boitesDialogue/ajoutpilote/ajoutpilote.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AdminComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    AjoutVolsComponent,
    NavRightComponent,
    NavContentComponent,
    NavLogoComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavSearchComponent,
    ToggleFullScreenDirective,
    HomeComponent,
    AjoutemployeeComponent,
    AjoutpiloteComponent,
    ModalComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent],
})
export class AppModule {}
