import * as angular from 'angular';
import {appComponent} from './app.component';

const appModule = angular.module('tutorial.app', [])
  .component('appComponent', appComponent)
  .name;

export { appModule };
