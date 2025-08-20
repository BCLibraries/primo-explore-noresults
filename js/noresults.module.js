angular
    .module('bc-noresults', [])
    .component('prmNoSearchResultAfter', {
        bindings: { parentCtrl: '<'},
		templateUrl: `primo-explore-noresults/html/noresults.html`,
        controller: function() {
			const vm = this;

			vm.$onInit = function () {
				vm.term = vm.parentCtrl.term;
				vm.mode = vm.parentCtrl.searchStateService.searchObject.mode;
				vm.scope = vm.parentCtrl.searchStateService.searchObject.scope;
			}
			
			vm.showQuery = function () {
				const isSearchWithFilter = vm.parentCtrl.isSearchWithFilter;
    		    const isAdvancedMode = vm.mode === 'advanced';

      			return !isSearchWithFilter && !isAdvancedMode;
			}
		}
    });
