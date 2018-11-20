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

            Events.on(keyboard.engine, 'collisionActive', function(event) {
                // if(event.pairs.length < 1) 
                //     return;

                // let player = null;
                // if(event.pairs[0].bodyA.label === 'player') {
                //     player = Matter.Composite.get(engine.world, event.pairs[0].bodyA.id);
                // } else if(event.pairs[0].bodyB.label === 'player') {
                //     player = Matter.Composite.get(engine.world, event.pairs[0].bodyB.id);
                // }
            });

            return keyboardConstraint;
        },

        update: function(keyboardConstraint) {
            let body = keyboardConstraint.body;
            let keys = keyboardConstraint.keyboard.keys;

            if(keys.indexOf('ArrowUp') !== -1) {
                Matter.Body.setVelocity(body, { x: body.velocity.x, y: -5 });
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