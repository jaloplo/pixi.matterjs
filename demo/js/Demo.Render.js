var DemoRender = {};

(function() {

    DemoRender.create = function(options) {
        var defaults = {
            width: 400,
            height: 300,
        };

        var render = Matter.Common.extend(defaults, options);

        render.engine = Render.create(render);

        return render;
    };


    DemoRender.level = function(render, level) {

        function createSprite(texture, x, y) {
            var sprite = {};

            if(texture !== '') {
                sprite = Render.sprite(render.engine, 'atlas', texture, {
                    anchor: 0.5,
                    x: x + 8,
                    y: y + 8,
                });
            }

            return sprite;
        }

        function createFloor() {
            var floor = Composite.create();

            return floor;
        }

        function createWalls() {
            var walls = Composite.create();

            switch(tileCode) {
                case 4: texture = 'border.step'; break;
                case 33: texture = 'wall.1'; break;
                case 37: texture = 'wall.lava.head'; break;
                case 68: texture = 'wall.lava.bucket'; break;
                case 97: texture = 'wall.poison.flag'; break;
                case 164: texture = 'wall.poison'; break;
                case 224: texture = 'border.point.bottomright'; break;
                case 225: texture = 'border.point.bottomleft'; break;
                case 256: texture = 'border.right'; break;
                case 257: texture = 'border.left'; break;
                case 290: texture = 'border.corner.bottomleft'; break;
                case 291: texture = 'border.corner.bottomright'; break;
            }

            if(tileCode === 4) // border step
                Composite.add(platforms, Bodies.rectangle(x + 8, y + 14, 16, 4, { isStatic: true }));
            if(tileCode === 224) // border point bottom right
                Composite.add(platforms, Bodies.rectangle(x + 15, y + 15, 2, 2, { isStatic: true }));
            if(tileCode === 225) // border point bottom left
                Composite.add(platforms, Bodies.rectangle(x, y + 15, 2, 2, { isStatic: true }));
            if(tileCode === 256) // border right
                Composite.add(platforms, Bodies.rectangle(x + 15, y + 8, 2, 16, { isStatic: true }));
            if(tileCode === 257) // border left
                Composite.add(platforms, Bodies.rectangle(x, y + 8, 2, 16, { isStatic: true }));
            if(tileCode === 290) { // border corner bottom left
                Composite.add(platforms, Bodies.rectangle(x, y + 8, 2, 16, { isStatic: true }));
            }
            if(tileCode === 291) { // border corner bottom right
                Composite.add(platforms, Bodies.rectangle(x + 15, y + 8, 2, 16, { isStatic: true }));
            }
            if(tileCode === 33 || tileCode === 97 || tileCode === 164) {
                Composite.add(platforms, Bodies.rectangle(x + 8, y + 8, 16, 16, { isStatic: true }));
            }

            return walls;
        }


        Render.assets(render.engine, { name: 'atlas', url: 'dungeon.json' });

        Matter.Events.on(render.engine, 'afterLoad', function() {
            
            // Render all background objects as images
            for(var i = 0; i < level.data.length; i++) {
                var x = (i % 25) * 16;
                var y = Math.floor(i / 25) * 16;
                var tileCode = level.data[i]-1;
                switch(tileCode) {
                    case 1: 
                        createSprite('border.bottom', x+8, y+8);
                        break;
                    case 4: 
                        createSprite('border.step', x+8, y+8);
                        break;
                    case 33: 
                        createSprite('wall.1', x+8, y+8);
                        break;
                    case 37: 
                        createSprite('wall.lava.head', x+8, y+8);
                        break;
                    case 68: 
                        createSprite('wall.lava.bucket', x+8, y+8);
                        break;
                    case 97: 
                        createSprite('wall.poison.flag', x+8, y+8);
                        break;
                    case 164: 
                        createSprite('wall.poison', x+8, y+8);
                        break;
                    case 224: 
                        createSprite('border.point.bottomright', x+8, y+8);
                        break;
                    case 225: 
                        createSprite('border.point.bottomleft', x+8, y+8);
                        break;
                    case 256: 
                        createSprite('border.right', x+8, y+8);
                        break;
                    case 257: 
                        createSprite('border.left', x+8, y+8);
                        break;
                    case 290: 
                        createSprite('border.corner.bottomleft', x+8, y+8);
                        break;
                    case 291: 
                        createSprite('border.corner.bottomright', x+8, y+8);
                        break;
                }
            }
        });
    };
})();