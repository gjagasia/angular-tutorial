class Controller {
    public devName: string;

    public $onInit() {
        this.devName = this.devName[0].toUpperCase() + this.devName.slice(1);
    }
}

export const awesomeDevComponent = {
    bindings: {
        devName: '<'
    },
    template: '<div>{{ $ctrl.devName }} is an awesome developer!</div>',
    controller: Controller
};
