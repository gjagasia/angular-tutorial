import * as template from './app.template.html';
import { DeveloperService } from './developer.service';

class Controller {
  private devName: string;

  constructor(private developerService: DeveloperService) {}

  public developers() {
    return this.developerService.getDevs();
  }

  public addDev() {
    this.developerService.addDev(this.devName);
  }
}

export const appComponent = {
  template,
  controller: Controller
};
