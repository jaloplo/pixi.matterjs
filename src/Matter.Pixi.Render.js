/**
* The `Matter.Pixi.Render` module is the implementation of a renderer using PixiJS library.
*
* @class Render
*/

var Render = {};

(function() {

    // PixiJS shortcuts
    var Application = PIXI.Application,
        Loader = PIXI.loader;
    
    // Matter.js shortcuts
    var Events = Matter.Events,
        Common = Matter.Common;


    Render.add = function(render, resource) {
        Loader.add(resource).load(function(res) {
            Events.trigger(render, 'afterLoaded', res);
        });
    };

    Render.create = function(options) {
        var defaults = {
            options: {
                app: null,
                canvas: null,
                target: null,
            }
        };

        var render = Common.extend(defaults, options);

        render.app = new Application(render);
        render.canvas = render.app.view;
        (render.target || document.body).appendChild(render.canvas);

        return render;
    };

})();