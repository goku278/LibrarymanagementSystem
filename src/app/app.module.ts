import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddLibrarianComponent } from './components/add-librarian/add-librarian.component';
import { AddlibraryComponent } from './components/addlibrary/addlibrary.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderGeneralUserComponent } from './components/header-general-user/header-general-user.component';
import { HomeComponent } from './components/home/home.component';
import { LibrarianDashboardComponent } from './components/librarian-dashboard/librarian-dashboard.component';
import { RequestBookComponent } from './components/request-book/request-book.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignupService } from './services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { SeeLibrariesComponent } from './components/see-libraries/see-libraries.component';
import { VisitLibrarianProfileComponent } from './components/visit-librarian-profile/visit-librarian-profile.component';
import { LibrarianProfileComponent } from './components/librarian-profile/librarian-profile.component';
import { LibrarianProfileService } from './librarian-profile.service';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GeneralUserDashboardComponent } from './components/general-user-dashboard/general-user-dashboard.component';
import { UpdateGeneralUserComponent } from './components/update-general-user/update-general-user.component';
import { VisitLibraryDialogComponent } from './components/visit-library-dialog/visit-library-dialog.component';
import { LibraryDashboardComponent } from './components/library-dashboard/library-dashboard.component';
import { RaiseIssueOrCancelComponent } from './components/raise-issue-or-cancel/raise-issue-or-cancel.component';
import { ViewAllLibrariesComponent } from './components/view-all-libraries/view-all-libraries.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewAllLibrarianComponent } from './components/admin-view-all-librarian/admin-view-all-librarian.component';
import { CheckprofileComponent } from './components/checkprofile/checkprofile.component';
import { ViewAllBooksComponent } from './components/view-all-books/view-all-books.component';
import { ProfileSelectionDialogComponent } from './components/profile-selection-dialog/profile-selection-dialog.component';
import { CheckallprofilesComponent } from './components/checkallprofiles/checkallprofiles.component';
import { UpdateGeneralAllUserComponent } from './components/update-general-all-user/update-general-all-user.component';
import { CategoryWiseBooksComponent } from './components/category-wise-books/category-wise-books.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckRequestComponent } from './components/check-request/check-request.component';
import { CheckrequestdialogComponent } from './components/checkrequestdialog/checkrequestdialog.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ViewrequestedbooksComponent } from './components/viewrequestedbooks/viewrequestedbooks.component';
import { OrderComponent } from './components/order/order.component';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'visitlibrary', component: VisitLibraryDialogComponent },
  { path: 'librarydashboard', component: LibraryDashboardComponent },
  { path: 'librariandashboard', component: LibrarianDashboardComponent },
  { path: 'userdashboard', component: GeneralUserDashboardComponent },
  { path: 'viewalllibraries', component: ViewAllLibrariesComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'generaluserdashboard', component: GeneralUserDashboardComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'headergeneraluser', component: HeaderGeneralUserComponent },
  { path: 'adminviewalllibrarians', component: AdminViewAllLibrarianComponent },
  { path: 'checkprofile', component: CheckprofileComponent },
  { path: 'viewallbooks', component: ViewAllBooksComponent },
  { path: 'checkallprofiles', component: CheckallprofilesComponent },
  { path: 'categorywisebooks', component: CategoryWiseBooksComponent },
  { path: 'checkrequest', component: CheckRequestComponent },
  { path: 'searchresult' , component: SearchResultsComponent },
  {path: 'requestbook' , component: RequestBookComponent},
  {path: 'viewrequestedbooks', component: ViewrequestedbooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddLibrarianComponent,
    AddlibraryComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    DialogBoxComponent,
    HeaderComponent,
    HeaderGeneralUserComponent,
    HomeComponent,
    LibrarianDashboardComponent,
    RequestBookComponent,
    SigninComponent,
    SignUpComponent,
    SeeLibrariesComponent,
    VisitLibrarianProfileComponent,
    LibrarianProfileComponent,
    AdminProfileComponent,
    UpdateAdminComponent,
    GeneralUserDashboardComponent,
    UpdateGeneralUserComponent,
    VisitLibraryDialogComponent,
    LibraryDashboardComponent,
    RaiseIssueOrCancelComponent,
    ViewAllLibrariesComponent,
    AdminViewAllLibrarianComponent,
    CheckprofileComponent,
    ViewAllBooksComponent,
    ProfileSelectionDialogComponent,
    CheckallprofilesComponent,
    UpdateGeneralAllUserComponent,
    CategoryWiseBooksComponent,
    CheckRequestComponent,
    CheckrequestdialogComponent,
    SearchResultsComponent,
    ViewrequestedbooksComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    RouterModule,
    NgxPaginationModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],

  // SignupService, LibrarianProfileService
})
export class AppModule {}
