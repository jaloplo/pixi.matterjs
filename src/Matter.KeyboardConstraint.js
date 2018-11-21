let KeyboardConstraint = (function() {

    return {
        create : function(keyboard, body) {
            let keyboardConstraint = {
                keyboard: keyboard,
                body: body,
            };

            Events.on(keyboard.engine, 'beforeUpdate', function() {
                KeyboardConstraint.update(keyboardConstraint);
            });

            return keyboardConstraint;
        },

        update: function(keyboardConstraint) {
            let body = keyboardConstraint.body;
            let keys = keyboardConstraint.keyboard.keys;

            if(keys.indexOf('ArrowUp') !== -1) {
                Matter.Body.setVelocity(body, { x: body.velocity.x, y: -body.settings.jump_velocity });
            }
            if(keys.indexOf('ArrowRight') !== -1) {
                Matter.Body.setVelocity(body, { x: 2, y: body.velocity.y });
            }
            if(keys.indexOf('ArrowLeft') !== -1) {
                Matter.Body.setVelocity(body, { x: -2, y: body.velocity.y });
            }
        },
    };
})();