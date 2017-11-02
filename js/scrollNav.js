document.addEventListener('DOMContentLoaded', function() {

        let scrollNav = function() {
            const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            if (top > 510) {
                nav.classList.add('nav-scroll');
            } else {
                nav.classList.remove('nav-scroll');
            }
        };

		let nav = document.querySelector('.main-nav');
		scrollNav();
		window.addEventListener('scroll', function() {
			scrollNav();
		})

		let box = document.querySelector('.container');

	});
