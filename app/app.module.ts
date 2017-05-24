import * as angular from 'angular';
import {appComponent} from './app.component';
import { awesomeDevComponent } from './awesome-developer.component';
import { DeveloperService } from './developer.service';

const appModule = angular.module('tutorial.app', [])
  .component('appComponent', appComponent)
  .component('awesomeDev', awesomeDevComponent)
  .service('developerService', DeveloperService)
  .name;

export { appModule };
