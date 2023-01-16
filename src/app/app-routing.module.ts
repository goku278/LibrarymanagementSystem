import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { GeneralUserDashboardComponent } from './components/general-user-dashboard/general-user-dashboard.component';
import { LibraryDashboardComponent } from './components/library-dashboard/library-dashboard.component';
import { ViewAllLibrariesComponent } from './components/view-all-libraries/view-all-libraries.component';
import { VisitLibraryDialogComponent } from './components/visit-library-dialog/visit-library-dialog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderGeneralUserComponent } from './components/header-general-user/header-general-user.component';
import { AdminViewAllLibrarianComponent } from './components/admin-view-all-librarian/admin-view-all-librarian.component';
import { CheckprofileComponent } from './components/checkprofile/checkprofile.component';
import { ViewAllBooksComponent } from './components/view-all-books/view-all-books.component';
import { CheckallprofilesComponent } from './components/checkallprofiles/checkallprofiles.component';
import { CategoryWiseBooksComponent } from './components/category-wise-books/category-wise-books.component';
import { CheckRequestComponent } from './components/check-request/check-request.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RequestBookComponent } from './components/request-book/request-book.component';
import { ViewrequestedbooksComponent } from './components/viewrequestedbooks/viewrequestedbooks.component';
const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'visitlibrary',component:VisitLibraryDialogComponent},
  {path:'librarydashboard',component:LibraryDashboardComponent},
  {path:'viewalllibraries',component:ViewAllLibrariesComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'generaluserdashboard',component:GeneralUserDashboardComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SigninComponent},
  {path:'headergeneraluser',component:HeaderGeneralUserComponent},
  {path:'adminviewalllibrarians',component:AdminViewAllLibrarianComponent},
  {path:'checkprofile',component:CheckprofileComponent},
  {path:'viewallbooks', component:ViewAllBooksComponent},
  {path:'checkallprofiles',component:CheckallprofilesComponent},
  {path: 'categorywisebooks', component: CategoryWiseBooksComponent},
  {path: 'checkrequest', component: CheckRequestComponent},
  { path: 'searchresult' , component: SearchResultsComponent },
  {path: 'requestbook' , component: RequestBookComponent},
  {path: 'viewrequestedbooks', component: ViewrequestedbooksComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
