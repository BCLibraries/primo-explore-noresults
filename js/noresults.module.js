angular
    .module('bc-noresults', [])
    .controller('prmNoSearchResultsAfterController', [function () {
        var vm = this;
        vm.term = vm.parentCtrl.term;
        vm.scope = vm.parentCtrl.searchStateService.searchObject.scope;
    }])
    .component('prmNoSearchResultAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmNoSearchResultsAfterController',
        templateUrl: `primo-explore-noresults/html/noresults.html`
    });
