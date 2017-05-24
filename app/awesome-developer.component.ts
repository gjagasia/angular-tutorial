class Controller {
    public devName: string;
}

export const awesomeDevComponent = {
    bindings: {
        devName: '@'
    },
    template: '<div>{{ $ctrl.devName }} is an awesome developer!</div>',
    controller: Controller
};
