var Level = {};

(function() {
    
    Level.create = function(data, items) {
        var _level = {
            data: data,
            items: items,
        };

        return _level;
    };
})();

Level.One = Level.create(
    [258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 225, 2, 2, 2, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 257, 34, 34, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 225, 2, 2, 2, 2, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 257, 34, 34, 34, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 257, 34, 34, 34, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 2, 2, 2, 2, 226, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 34, 34, 34, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 34, 34, 34, 34, 258, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 2, 2, 2, 5, 226, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 2, 292, 34, 34, 98, 38, 258, 0, 257, 258, 0, 0, 0, 0, 0, 0, 0, 0, 458, 458, 0, 0, 225, 2, 292, 34, 34, 34, 34, 34, 69, 258, 0, 257, 291, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 292, 34, 34, 34, 34, 34, 34, 34, 34, 258, 0, 257, 34, 34, 34, 165, 34, 34, 34, 34, 34, 34, 165, 34, 34, 34, 34, 34, 165, 34, 34, 34, 34, 34, 258, 0, 257], 
    [{
        label: 'poison potion',
        position: { x: 320, y: 224 },
        render: {
            id: 468,
        }
    }, {
        label: 'treasure chest',
        position: { x: 176, y: 48 },
        render: {
            id: 431,
        }
    },
]);