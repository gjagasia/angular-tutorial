import * as template from './app.template.html';

export const appComponent = {
  template,
  controller($http, $log) {
    const food = this;
    const clickMessage = '';

    // Called when component is ready, see below
    food.$onInit = () => {
      $http.get('http://localhost:8000/api/food/?t=pie').then(response => {
        $log.log(response.data);
        food.pies = response.data;
      });
      $http.get('http://localhost:8000/api/food/?t=sandwich').then(response => {
        $log.log(response.data);
        food.sandwich = response.data;
      });
    };
    food.clickMe = (foodName) => {
      $log.log(foodName);
    };
  }
};


