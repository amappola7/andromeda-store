import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./ui/pages/page-not-found/page-not-found.component";
import { authGuard } from "./guards/auth.guard";

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./ui/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./ui/pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./ui/pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./ui/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];