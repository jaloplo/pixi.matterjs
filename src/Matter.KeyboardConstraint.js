let KeyboardConstraint = (function() {

    var Common = Matter.Common;

    return {
        create : function(keyboard, options) {
            var defaults = {
                keyboard: keyboard,
                actions: {},
            };

            var constraint = Common.extend(defaults, options);

            Events.on(keyboard.engine, 'beforeUpdate', function() {
                KeyboardConstraint.update(constraint);
            });

            return constraint;
        },

        update: function(constraint) {
            let keys = constraint.keyboard.keys;

            keys.forEach(function(key) {
                if(constraint.actions[key]) {
                    constraint.actions[key](constraint.body);
                }
            });
        },
    };
})();