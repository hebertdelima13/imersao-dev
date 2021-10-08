$(document).ready(function() {

    //COUNT

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#303033',
        trailColor: '#A8A8D0',
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'bounce',
        duration: 2000,
        from: { color: '#A8A8D0'},
        to: { color: '#36357E'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 240);


            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#303033',
        trailColor: '#A8A8D0',
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'bounce',
        duration: 2000,
        from: { color: '#A8A8D0'},
        to: { color: '#36357E'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 50 * Math.random());

            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        
        color: '#303033',
        trailColor: '#A8A8D0',
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'bounce',
        duration: 2000,
        from: { color: '#A8A8D0'},
        to: { color: '#36357E'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 40);

            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#303033',
        trailColor: '#A8A8D0',
        strokeWidth: 5,
        trailWidth: 1,
        easing: 'bounce',
        duration: 2000,
        from: { color: '#A8A8D0'},
        to: { color: '#36357E'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 40 * Math.random());
            circle.setText(value);
        }

    });
    
    let dataAreaOffset = $('#header').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 75) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }

    });   


    //SCROLL SEÇÕES

    let nav = $('.nav-item');
    let button = $('.button');

    let topoSection = $('#header');
    let infoSection = $('#informations');
    let recomSection = $('#recommendations');

    let scrollTo = '';

    $(nav).click(function(){
        
        let btnId = $(this).attr('id');

        if(btnId == 'home') {
            scrollTo = topoSection
        } else if(btnId == 'info-section') {
            scrollTo = infoSection
        } else if(btnId == 'recom-section') {
            scrollTo = recomSection
        }
        
        $([document.documentElement, document.body]).animate ( {
            scrollTop: $(scrollTo).offset().top - 150
        }, 100);

    })

    $(button).click(function(){
        
        let btnId = $(this).attr('id');

        if(btnId == 'info-section') {
            scrollTo = infoSection
        }
        
        $([document.documentElement, document.body]).animate ( {
            scrollTop: $(scrollTo).offset().top - 150
        }, 100);

    })

    
    
});



