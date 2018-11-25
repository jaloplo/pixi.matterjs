var Player = {};

(function() {

    // Matterjs shortcuts
    var Bodies = Matter.Bodies;

    Player.create = function(texture, jump) {
        var _player = {
            position: { x: 32, y: 272 },
            size: { width: 32, height: 32 },
        };

        _player.body = Bodies.rectangle(
            _player.position.x, _player.position.y, 
            _player.size.width, _player.size.height, {
                label: 'player',
                inertia: Infinity,
                friction: 1,
                isJumping: false,
                render: {
                    sprite: {
                        resource: 'atlas',
                        texture: texture,
                    }
                },
                settings: {
                    jump_velocity: jump,
                }
            });

        return _player;
    };

    Player.increaseJump = function(player, delta) {
        var body = player.body;
        player.body.settings.jump_velocity *= delta;
        return player;
    }

    Player.moveLeft = function(player) {
        var body = player.body;
        Matter.Body.setVelocity(body, { x: -2, y: body.velocity.y });
        return player;
    };

    Player.moveRight = function(player) {
        var body = player.body;
        Matter.Body.setVelocity(body, { x: 2, y: body.velocity.y });
        return player;
    };

    Player.jump = function(player) {
        if(player.isJumping)
            return player;

        var body = player.body;
        Matter.Body.setVelocity(body, { x: body.velocity.x, y: -body.settings.jump_velocity });
        player.isJumping = true;
        return player;
    };

    Player.stopJumping = function(player) {
        player.isJumping = false;
        return player;
    }

})();

Player.Ogre = Player.create('ogre.1', 4);
Player.Monster = Player.create('monster.1', 4);