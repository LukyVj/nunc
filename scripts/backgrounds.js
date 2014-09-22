function randomBackground() {
        // Backgrounds list 
        var list = [
        'http://38.media.tumblr.com/facc96f9c1a78b983bf1624f5f0e70d1/tumblr_n7qhtcBPvQ1sfie3io1_1280.jpg',
        'http://33.media.tumblr.com/0b6b2c1f4336174924b15d33f2d5f64d/tumblr_n7qht6oJw51sfie3io1_1280.jpg',
        'http://38.media.tumblr.com/699ccdf8af89a91d6d15159d6602f5ff/tumblr_n7qhrjk4721sfie3io1_1280.jpg', 
        'http://38.media.tumblr.com/f2916759544c106d91c28a9e0fd2cb94/tumblr_n7qhrzxUiv1sfie3io1_1280.jpg', 
        'http://33.media.tumblr.com/8658ad8bd7ca90de7500356cd267ebbe/tumblr_n7qhruunK91sfie3io1_1280.jpg',
        'http://38.media.tumblr.com/4ab869ac430ce704c4b5af14064ea97d/tumblr_n7qhpjR2UE1sfie3io1_1280.jpg'
        ];
        
        var x = list.length;
        var random = Math.floor(Math.random() * x);

        var scene = $('.nunc-hello');

        scene.prepend('<style>.nunc-hello:before{background:url(' + list[random] + ')no-repeat center center;background-size:cover;}</style>');
    }
    randomBackground()