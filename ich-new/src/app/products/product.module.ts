import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProductListComponent } from "./product-list.component";

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent }
        ]),
        SharedModule
    ]
})

export class ProductModule { }