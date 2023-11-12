function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}