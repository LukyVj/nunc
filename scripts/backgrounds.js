function randomBackground() {
        // Backgrounds list 
        var list = [
        'dist/images/bg_1.jpg',
        'dist/images/bg_2.jpg',
        'dist/images/bg_3.jpg', 
        'dist/images/bg_4.jpg', 
        'dist/images/bg_5.jpg',
        'dist/images/bg_6.jpg',
        'dist/images/bg_7.jpg',
        'dist/images/bg_8.jpg',
        'dist/images/bg_9.jpg', 
        'dist/images/bg_10.jpg', 
        'dist/images/bg_11.jpg',
        'dist/images/bg_12.jpg',
        'dist/images/bg_13.jpg',
        'dist/images/bg_14.jpg',
        'dist/images/bg_15.jpg', 
        'dist/images/bg_16.jpg', 
        'dist/images/bg_17.jpg',
        'dist/images/bg_18.jpg'
        ];
        
        var x = list.length;
        var random = Math.floor(Math.random() * x);

        var scene = $('.nunc-hello');

        scene.prepend('<style>.nunc-hello:before{background:url(' + list[random] + ')no-repeat center center;background-size:cover;}</style><img src="'+ list[random] +'" class="color-bg" style=" height: 0;" />');


    }
    randomBackground()