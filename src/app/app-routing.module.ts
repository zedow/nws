import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent},
  { path: 'posts', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
