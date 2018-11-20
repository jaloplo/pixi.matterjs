let Keyboard = (function() {

    return {
        create : function(engine, element) {
            var keyboard = {
                engine: engine,
                keys: [],
            };

            if (!element) {
                Matter.Common.log('Keyboard.create: element was undefined, defaulting to document.body', 'warn');
            }
            
            keyboard.element = element || document.body;

            keyboard.sourceEvents = {
                keyup: null,
                keydown: null,
                keypressed: null,
            };
            
            keyboard.keyup = function(event) {
                Keyboard.removeKey(keyboard, event.code);
            };
            
            keyboard.keydown = function(event) {
                Keyboard.addKey(keyboard, event.code);
            };
            
            keyboard.keypress = function(event) {
            };

            Keyboard.setElement(keyboard, keyboard.element);

            return keyboard;
        },

        addKey: function(keyboard, key) {
            if(keyboard.keys.indexOf(key) === -1) {
                keyboard.keys.push(key);
            }
        },

        removeKey: function(keyboard, key) {
            let index = keyboard.keys.indexOf(key);
            keyboard.keys.splice(index, 1);
        },
        
        setElement: function(keyboard, element) {
            keyboard.element = element;

            element.addEventListener('keydown', keyboard.keydown);
            element.addEventListener('keyup', keyboard.keyup);
            element.addEventListener('keypress', keyboard.keypress);
        },
        
        clearSourceEvents: function(keyboard) {
            keyboard.sourceEvents.keydown = null;
            keyboard.sourceEvents.keyup = null;
            keyboard.sourceEvents.keypress = null;
        },
    };
})();