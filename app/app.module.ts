import * as angular from 'angular';
import {appComponent} from './app.component';
import { awesomeDevComponent } from './awesome-developer.component';

const appModule = angular.module('tutorial.app', [])
  .component('appComponent', appComponent)
  .component('awesomeDev', awesomeDevComponent)
  .name;

export { appModule };
