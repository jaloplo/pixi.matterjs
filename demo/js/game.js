var Game = {};

(function() {

    Game.create = function(target, options) {
        var defaults = {};

        // Game creation
        var _game = Matter.Common.extend(defaults, options);

        // Physics engine creation
        _game.physics = Matter.Engine.create();

        // Render engine creation
        _game.render = Render.create({
            target: target,
        });

        Matter.Events.trigger(_game, 'afterCreate', null);

        return _game;
    };

    Game.start = function(game) {
        return game;
    }
})();

// var Game = {};

// (function() {

//     // Shortcuts
//     var Bodies = Matter.Bodies,
//         Composite = Matter.Composite;

//     Game.create = function(target) {

//         var _game = {
//             level: Level.One,
//             _status: 'CREATING',
//         };

//         // Physics engine creation
//         _game.physics = Matter.Engine.create();

//         // Render manager creation
//         _game.render = Render.create({
//             target: target,
//             width: 400,
//             height: 304,
//         });

//         // Load assets and resources
//         Render
//             .assets({ name: 'atlas', url: 'dungeon.json' })
//             .then(function(res) {

//                 // Render all background objects as images
//                 var background = new PIXI.Container();

//                 for(var i = 0; i < _game.level.data.length; i++) {
//                     var x = (i % 25) * 16;
//                     var y = Math.floor(i / 25) * 16;
//                     var tileCode = _game.level.data[i]-1;
//                     var spriteName = '';
//                     switch(tileCode) {
//                         case 1: spriteName = 'border.bottom'; break;
//                         case 4: spriteName = 'border.step'; break;
//                         case 33: spriteName = 'wall.1'; break;
//                         case 37: spriteName = 'wall.lava.head'; break;
//                         case 68: spriteName = 'wall.lava.bucket'; break;
//                         case 97: spriteName = 'wall.poison.flag'; break;
//                         case 164: spriteName = 'wall.poison'; break;
//                         case 224: spriteName = 'border.point.bottomright'; break;
//                         case 225: spriteName = 'border.point.bottomleft'; break;
//                         case 256: spriteName = 'border.right'; break;
//                         case 257: spriteName = 'border.left'; break;
//                         case 290: spriteName = 'border.corner.bottomleft'; break;
//                         case 291: spriteName = 'border.corner.bottomright'; break;
//                     }

//                     if(spriteName !== '') {
//                         var sprite = new PIXI.Sprite(PIXI.loader.resources['atlas'].textures[spriteName]);
//                         sprite.x = x + 8;
//                         sprite.y = y + 8;
//                         sprite.anchor.set(0.5);
//                         background.addChild(sprite);
//                     }
//                 }
//                 Render.addChildren(_game.render, background);

//                 // platforms
//                 var platforms = Composite.create();
//                 var platformsFloor = Composite.create();
//                 for(var i = 0; i < _game.level.data.length; i++) {
//                     var x = (i % 25) * 16;
//                     var y = Math.floor(i / 25) * 16;
//                     var tileCode = _game.level.data[i]-1;

//                     if(tileCode === 1) // border bottom
//                         Composite.add(platformsFloor, Bodies.rectangle(x + 8, y + 15, 16, 2, { isStatic: true }));
//                     if(tileCode === 4) // border step
//                         Composite.add(platforms, Bodies.rectangle(x + 8, y + 14, 16, 4, { isStatic: true }));
//                     if(tileCode === 224) // border point bottom right
//                         Composite.add(platforms, Bodies.rectangle(x + 15, y + 15, 2, 2, { isStatic: true }));
//                     if(tileCode === 225) // border point bottom left
//                         Composite.add(platforms, Bodies.rectangle(x, y + 15, 2, 2, { isStatic: true }));
//                     if(tileCode === 256) // border right
//                         Composite.add(platforms, Bodies.rectangle(x + 15, y + 8, 2, 16, { isStatic: true }));
//                     if(tileCode === 257) // border left
//                         Composite.add(platforms, Bodies.rectangle(x, y + 8, 2, 16, { isStatic: true }));
//                     if(tileCode === 290) { // border corner bottom left
//                         Composite.add(platforms, Bodies.rectangle(x, y + 8, 2, 16, { isStatic: true }));
//                         Composite.add(platformsFloor, Bodies.rectangle(x + 8, y + 15, 16, 2, { isStatic: true }));
//                     }
//                     if(tileCode === 291) { // border corner bottom right
//                         Composite.add(platforms, Bodies.rectangle(x + 15, y + 8, 2, 16, { isStatic: true }));
//                         Composite.add(platformsFloor, Bodies.rectangle(x + 8, y + 15, 16, 2, { isStatic: true }));
//                     }

//                     if(tileCode === 33 || tileCode === 97 || tileCode === 164) {
//                         Composite.add(platforms, Bodies.rectangle(x + 8, y + 8, 16, 16, { isStatic: true }));
//                     }
//                 }
                
//                 Composite.add(_game.physics.world, platforms);
//                 Composite.add(_game.physics.world, platformsFloor);

//                 // items
//                 var items = Composite.create();
//                 for(var i = 0; i < _game.level.items.length; i++) {
//                     var item = _game.level.items[i];
                    
//                     var textureName = '';
//                     if(item.render.id === 431) textureName = 'treasure.chest';
//                     if(item.render.id === 466) textureName = 'red.potion';
//                     if(item.render.id === 468) textureName = 'poison.potion';

//                     Composite.add(items, Bodies.rectangle(item.position.x, item.position.y, 16, 16, {
//                         label: item.label,
//                         render: {
//                             sprite: {
//                                 resource: 'atlas',
//                                 texture: textureName,
//                             }
//                         }
//                     }));
//                 }
//                 Composite.add(_game.physics.world, items);

//                 // player
//                 var player = Player.Ogre;
//                 Composite.addBody(_game.physics.world, player.body)

//                 let keyboard = Keyboard.create(_game.physics, document.body);
//                 let keyboardConstraint = KeyboardConstraint.create(keyboard, {
//                     actions: {
//                         'ArrowUp': function(body) {
//                             Player.jump(player);
//                         },
//                         'ArrowLeft': function(body) {
//                             Player.moveLeft(player);
//                         },
//                         'ArrowRight': function(body) {
//                             Player.moveRight(player);
//                         },
//                     }
//                 });

//                 // Texts
//                 var win = Text.create('YOU WIN!!!');
//                 win.visible = false;
//                 win.x = 70;
//                 win.y = 304/2;

//                 var loose = Text.create('YOU LOOSE!!!');
//                 loose.visible = false;
//                 loose.x = 70;
//                 loose.y = 304/2;

//                 Render.addChildren(_game.render, win);
//                 Render.addChildren(_game.render, loose);

//                 // collision detection
//                 Matter.Events.on(_game.physics, 'afterUpdate', function() {
//                     if(game.status === 'WIN' || game.status === 'LOOSE') {
//                         Render.stop(_game.render);
//                         return;
//                     }

//                     var collisions = Matter.Query.collides(player.body, items.bodies);
//                     if(collisions.length > 0) {
//                         var item = collisions[0].bodyA.label === 'player' 
//                             ? collisions[0].bodyB 
//                             : collisions[0].bodyA;
                        
//                         // increase jump capacity
//                         if(item.label === 'poison potion') {
//                             Player.increaseJump(player, 2);
//                             Render.remove(_game.render, item);
//                             Composite.remove(_game.physics.world, item, true);
//                         }

//                         // win the game
//                         if(item.label === 'treasure chest') {
//                             win.visible = true;
//                             _game.status = 'WIN';
//                             Render.remove(_game.render, item);
//                             Composite.remove(_game.physics.world, item, true);
//                         }
//                     }

//                     var floorCollisions = Matter.Query.collides(player.body, platformsFloor.bodies);
//                     if(floorCollisions.length > 0) {
//                         Player.stopJumping(player);
//                     }

//                     if(player.body.position.y > 350) {
//                         loose.visible = true;
//                         _game.status = 'LOOSE';
//                     }
//                 });

//                 Render.run(_game.render, _game.physics);
//             });

//         return _game;
//     };

//     Game.start = function(game) {
//         Matter.Engine.run(game.physics);
//         game.status = 'STARTED';
//         return game;
//     };

//     Game.stop = function(game) {
//         Matter.Engine.stop(game.physics);
//         game.status = 'STOPPED';
//         return game;
//     };
// })();