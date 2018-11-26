var Text = {};

(function() {

    Text.create = function(text) {
        var style = new PIXI.TextStyle({
            fontFamily: 'Verdana',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });

        var _text = new PIXI.Text(text, style);

        return _text;
    };
})();