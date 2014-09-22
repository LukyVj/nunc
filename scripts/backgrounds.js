function randomBackground() {
        // Backgrounds list 
        var list = [
        'images/bg_1.jpg',
        'images/bg_2.jpg',
        'images/bg_3.jpg', 
        'images/bg_4.jpg', 
        'images/bg_5.jpg',
        'images/bg_6.jpg',
        'images/bg_7.jpg',
        'images/bg_8.jpg',
        'images/bg_9.jpg', 
        'images/bg_10.jpg', 
        'images/bg_11.jpg',
        'images/bg_12.jpg',
        'images/bg_13.jpg',
        'images/bg_14.jpg',
        'images/bg_15.jpg', 
        'images/bg_16.jpg', 
        'images/bg_17.jpg',
        'images/bg_18.jpg'
        ];
        
        var x = list.length;
        var random = Math.floor(Math.random() * x);

        var scene = $('.nunc-hello');

        scene.prepend('<style>.nunc-hello:before{background:url(' + list[random] + ')no-repeat center center;background-size:cover;}</style><img src="'+ list[random] +'" class="color-bg" />');


    }
    randomBackground()