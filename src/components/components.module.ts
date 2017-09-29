import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task';
import { AlertComponent } from './alert/alert';
import { CustomerListComponent } from './customer-list/customer-list';
@NgModule({
	declarations: [TaskComponent,
    AlertComponent,
    CustomerListComponent],
	imports: [],
	exports: [TaskComponent,
    AlertComponent,
    CustomerListComponent]
})
export class ComponentsModule {}
