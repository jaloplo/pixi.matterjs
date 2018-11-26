var Render = {};

(function() {

    // PixiJS shortcuts
    var Application = PIXI.Application,
        Loader = PIXI.loader;
    
    // Matter.js shortcuts
    var Events = Matter.Events,
        Common = Matter.Common,
        Composite = Matter.Composite;


    let _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render.assets = function(resource) {
        return new Promise(function(resolve, reject) {
            Loader.add(resource).load(function(res) {
                resolve(res);
            });
        });
    }

    
    Render.addChildren = function(render, sprite) {
        render.app.stage.addChild(sprite);
    };


    Render.create = function(options) {
        var defaults = {
            app: null,
            canvas: null,
            target: null,
            sprites: {},
        };

        var render = Common.extend(defaults, options);

        render.app = new Application(render);
        render.canvas = render.app.view;
        (render.target || document.body).appendChild(render.canvas);

        return render;
    };


    Render.sprite = function(render, body) {
        var resource = body.render.sprite.resource;
        var texture = body.render.sprite.texture;

        var pixi = {};

        if(resource) {
            if(texture) {
                pixi = new PIXI.Sprite(Loader.resources[resource].textures[texture]);
            } else {
                pixi = new PIXI.Sprite(Loader.resources[resource].texture);
            }
            
            pixi.anchor.set(0.5);
            pixi.x = body.position.x;
            pixi.y = body.position.y;
            pixi.rotation = body.angle;
            body.width = pixi.width;
            body.height = pixi.height;

            render.sprites[body.id] = pixi;

            render.app.stage.addChild(pixi);
        }

        return pixi;
    };


    Render.remove = function(render, body) {
        render.app.stage.removeChild(render.sprites[body.id]);
        delete render.sprites[body.id];
    }


    Render.run = function(render, engine) {
        var bodies = Composite.allBodies(engine.world);
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            if(body.render && body.render.sprite) {
                Render.sprite(render, body);
            }
        }

        Events.on(engine, 'beforeUpdate', function() {
            var bodies = Composite.allBodies(engine.world);
            for(var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                var pixi = null || render.sprites[body.id];
                if(pixi) {
                    pixi.x = body.position.x;
                    pixi.y = body.position.y;
                    pixi.rotation = body.angle;
                }
            }
        });
        
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            render.app.renderer.render(render.app.stage);
        })();

        return render;
    }

    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
        render.app.stop();
    };

})();