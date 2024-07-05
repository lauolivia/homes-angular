
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },

    {
        path: 'details/:id',   //Tixaaaa this takes the house id and add it directly to the link
        component: DetailsComponent,
        title: 'Details Page',
    }
];

export default routeConfig;