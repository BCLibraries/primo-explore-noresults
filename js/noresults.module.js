angular
    .module('bc-noresults', [])
    .controller('prmNoSearchResultsAfterController', [function () {
		this.$onInit = function () {
			{
				var vm = this;
				vm.term = vm.parentCtrl.term;
				vm.mode = vm.parentCtrl.searchStateService.searchObject.mode;
				vm.scope = vm.parentCtrl.searchStateService.searchObject.scope;
				vm.showQuery = showQuery;
				function showQuery() {
					if(vm.parentCtrl.isSearchWithFilter == false && vm.mode != "advanced")
						return true;
					else
						return false;
				}
			}
		};
    }])
    .component('prmNoSearchResultAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmNoSearchResultsAfterController',
        templateUrl: `primo-explore-noresults/html/noresults.html`
    });
