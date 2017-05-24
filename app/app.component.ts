import * as template from './app.template.html';

class Controller {
  constructor(private developerService) {}

  public developers() {
    return this.developerService.getDevs();
  }
}

export const appComponent = {
  template,
  controller: Controller
};
