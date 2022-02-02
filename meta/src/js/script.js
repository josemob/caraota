var waypoint =

        new Waypoint({
            element: document.getElementById('home'),
            handler: function() {
                home()
            }
        })

        new Waypoint({
            element: document.getElementById('pickaxe'),
            handler: function(direction) {
                if (direction == "up") {
                    home()
                }
            }
        })

        new Waypoint({
            element: document.getElementById('pickaxe'),
            handler: function(direction) {
                if (direction == "down") {
                    about()
                }
            }
        })

        new Waypoint({
            element: document.getElementById('planetas'),
            handler: function() {
                about()
            }
        })

        new Waypoint({
            element: document.getElementById('metaminer'),
            handler: function() {
                mining()
            }
        })

        new Waypoint({
            element: document.getElementById('road'),
            handler: function() {
                roadmap()
            }
        })



        new Waypoint({
            element: document.getElementById('home'),
            handler: function() {
                document.getElementById('pickaxe').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('pickaxe'),
            handler: function() {
                document.getElementById('planet').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('planet'),
            handler: function() {
                document.getElementById('mtcu').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('mtcu'),
            handler: function() {
                document.getElementById('planetas').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('planetas'),
            handler: function() {
                document.getElementById('metaminer').classList.add("centerg");
                document.getElementById('mineros').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('mineros'),
            handler: function() {
                document.getElementById('metabase').classList.add("centerg");
                document.getElementById('metab').classList.add("centerg");
            }
        })
        new Waypoint({
            element: document.getElementById('road'),
            handler: function() {
                document.getElementById('roadmap').classList.add("centerg");
            }
        })



        function home() {
            document.getElementById("slec-home").classList.add("active");
            document.getElementById("slec-about").classList.remove("active");
            document.getElementById("slec-mining").classList.remove("active");
            document.getElementById("slec-roadmap").classList.remove("active");
        }

        function about() {
            document.getElementById("slec-about").classList.add("active");
            document.getElementById("slec-home").classList.remove("active");
            document.getElementById("slec-mining").classList.remove("active");
            document.getElementById("slec-roadmap").classList.remove("active");
        }

        function mining() {
            document.getElementById("slec-mining").classList.add("active");
            document.getElementById("slec-home").classList.remove("active");
            document.getElementById("slec-about").classList.remove("active");
            document.getElementById("slec-roadmap").classList.remove("active");
        }

        function roadmap() {
            document.getElementById("slec-roadmap").classList.add("active");
            document.getElementById("slec-home").classList.remove("active");
            document.getElementById("slec-about").classList.remove("active");
            document.getElementById("slec-mining").classList.remove("active");
        }

        /* target the button */
        const toggle = document.getElementById('toggler');
        /* add an event listener for a click */
        toggle.addEventListener('click', (e) => {
            /* check if the switch is already on or off and act accordingly adding and removing the classes needed */
            if (toggle.classList.contains('switcher_on')) {
                toggle.classList.remove('switcher_on');
                toggle.classList.add('switcher_off');
            } else {
                toggle.classList.remove('switcher_off');
                toggle.classList.add('switcher_on');
            }
        });

        let stagei = document.getElementById("stageI");
        let stageii = document.getElementById("stageII");
        let stageiii = document.getElementById("stageIII");
        let stageiv = document.getElementById("stageIV");
        var altura = screen.height;
        var anchura = screen.width;

        function modin(num) {
            if (num == 1 && anchura > 768) {
                modx = stagei.getBoundingClientRect();
                document.getElementById('modi').classList.add("visible");
                document.getElementById("modi").style.marginTop = modx.top - 318 + "px";
                document.getElementById("modi").style.marginLeft = modx.left + 14 + "px";
            }
            if (num == 1 && anchura < 768) {
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
                document.getElementById('modi').classList.add("visible");
            }
            if (num == 2 && anchura > 768) {
                modx = stageii.getBoundingClientRect();
                document.getElementById('modii').classList.add("visible");
                document.getElementById("modii").style.marginTop = modx.top - 392 + "px";
                document.getElementById("modii").style.marginLeft = modx.left + 14 + "px";
            }
            if (num == 2 && anchura < 768) {
                document.getElementById('modii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 3 && anchura > 768) {
                modx = stageiii.getBoundingClientRect();
                document.getElementById('modiii').classList.add("visible");
                document.getElementById("modiii").style.marginTop = modx.top - 220 + "px";
                document.getElementById("modiii").style.marginLeft = modx.left + 14 + "px";
            }
            if (num == 3 && anchura < 768) {
                document.getElementById('modiii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 4 && anchura > 768) {
                modx = stageiv.getBoundingClientRect();
                document.getElementById('modiv').classList.add("visible");
                document.getElementById("modiv").style.marginTop = modx.top - 170 + "px";
                document.getElementById("modiv").style.marginLeft = modx.left - 470 + "px";
            }
            if (num == 4 && anchura < 768) {
                document.getElementById('modiv').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }


            /*if (num == 5 && anchura < 768) {
                document.getElementById('modv').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 6 && anchura < 768) {
                document.getElementById('modvi').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 7 && anchura < 768) {
                document.getElementById('modvii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 8 && anchura < 768) {
                document.getElementById('modviii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 9 && anchura < 768) {
                document.getElementById('modix').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }


            if (num == 10 && anchura < 768) {
                document.getElementById('modx').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 11 && anchura < 768) {
                document.getElementById('modxi').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 12 && anchura < 768) {
                document.getElementById('modxii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 13 && anchura < 768) {
                document.getElementById('modxiii').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }
            if (num == 14 && anchura < 768) {
                document.getElementById('modxiv').classList.add("visible");
                document.getElementById('modalss').classList.add("front");
                document.getElementById('modalss').classList.remove("back");
            }*/


        }

        function modout(num) {
            if (num == 1 && anchura > 768) {
                document.getElementById('modi').classList.remove("visible");
            }
            if (num == 2 && anchura > 768) {
                document.getElementById('modii').classList.remove("visible");
            }
            if (num == 3 && anchura > 768) {
                document.getElementById('modiii').classList.remove("visible");
            }
            if (num == 4 && anchura > 768) {
                document.getElementById('modiv').classList.remove("visible");
            }

            if (num == 5 && anchura > 768) {
                document.getElementById('modi').classList.remove("visible");
                document.getElementById('modii').classList.remove("visible");
                document.getElementById('modiii').classList.remove("visible");
                document.getElementById('modiv').classList.remove("visible");
                document.getElementById('modalss').classList.add("back");
            }


            if (num == 1) {}
            if (num == 2) {}
            if (num == 3) {}
            if (num == 4) {}
            if (num == 5) {}

        }

        function modoutclick(num) {
            if (num == 1) {
                document.getElementById('modi').classList.remove("visible");
            }
            if (num == 2) {
                document.getElementById('modii').classList.remove("visible");
            }
            if (num == 3) {
                document.getElementById('modiii').classList.remove("visible");
            }
            if (num == 4) {
                document.getElementById('modiv').classList.remove("visible");
            }

            if (num == 5) {
                document.getElementById('modi').classList.remove("visible");
                document.getElementById('modii').classList.remove("visible");
                document.getElementById('modiii').classList.remove("visible");
                document.getElementById('modiv').classList.remove("visible");

                document.getElementById('modv').classList.remove("visible");
                document.getElementById('modvi').classList.remove("visible");
                document.getElementById('modvii').classList.remove("visible");
                document.getElementById('modviii').classList.remove("visible");
                document.getElementById('modix').classList.remove("visible");

                document.getElementById('modx').classList.remove("visible");
                document.getElementById('modxi').classList.remove("visible");
                document.getElementById('modxii').classList.remove("visible");
                document.getElementById('modxiii').classList.remove("visible");
                document.getElementById('modxiv').classList.remove("visible");
                document.getElementById('modalss').classList.add("back");
            }
        }
        
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            dots: true,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
        
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });