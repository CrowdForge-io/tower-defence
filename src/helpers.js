        var map = {};
        map.width = 1024;
        map.height = 768;
        var images = [];
        var font = "\"Courier New\", Courier, monospace";
        var size = 56;
        var ctx = scr.getContext("2d");
        var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
        var width = scr.width;
        var height = scr.height;
        ctx.font = size + "px " + font;
        var draw = function() {};
        function render() {
            ctx.clearRect(0, 0, 800, 500);
            draw();
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);

        function gri(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function Vector(x = 0, y = 0) {
            this.x = x;
            this.y = y;
            this.sub = function(b) {
                this.x -= b.x;
                this.y -= b.y;
            }
            this.add = function(b) {
                this.x += b.x;
                this.y += b.y;
            }
            this.mag = function() {
                return Math.sqrt(Math.abs(this.x) ^ 2 + Math.abs(this.y) ^ 2);
            }
            this.magsq = function() {
                return Math.abs(this.x) ^ 2 + Math.abs(this.y) ^ 2;
            }
            this.div = function(value) {
                this.x /= value;
                this.y /= value;
            }
            this.mul = function(value) {
                this.x *= value;
                this.y *= value;
            }
            this.setMag = function(value) {
                m = this.mag();
                if (m != 0 && m != 1) {
                    this.div(m);
                }
                this.mul(value);
            }
        }

        function getPolyVectors(x, y, sides, radius, rotation) {
            var points = [];
            for (var i = 0; i < sides; i++) {
                var lx = (radius * Math.cos(rotation + (2 * Math.PI) * i / (sides))) + x;
                var ly = (radius * Math.sin(rotation + (2 * Math.PI) * i / (sides))) + y;
                points.push(new Vector(lx, ly));
            }
            return points;
        }