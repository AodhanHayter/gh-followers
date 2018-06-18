'use strict'

function user(){
	this.id = null;
	this.login = null;
	this.followers_url = null; 
}

let app = angular.module('followersApp', []);

app.controller('fController', function($scope, $http) {
	let url = 'https://api.github.com/users';

	$http.get(url).then((response) => {
		$scope.users = response.data;
	})

	$(function(){
		$(document).on('click', '.link-followers', function(){
			$('.light-box').css('display', 'flex');

			let followers_url = $(this).text();
			let user = {
				id: $(this).data('user-id'),
				login: $(this).data('user-login'),
				followers: null
			}

			$http.get(followers_url).then((response) => {
				user.followers = response.data;

				$scope.user = user;
				$("#followersModal").modal({show: true});
				$('.light-box').hide();
			});
		});
	});
});

/*
 SCROLLING EFFECTS
*/

$(function(){
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

	function copyToClipboard(containerid) {
		if (document.selection) { 
		    var range = document.body.createTextRange();
		    range.moveToElementText(document.getElementById(containerid));
		    range.select().createTextRange();

		} else if (window.getSelection) {
		    var range = document.createRange();
		     range.selectNode(document.getElementById(containerid));
		     window.getSelection().addRange(range);
		     document.execCommand("copy");
		}
	}

	$('#copy-button').on('click', function(){
		  copyToClipboard('list');
		  $('#alerta').slideDown();
	});

	$('.close').on('click', function(){
		$('#alerta').slideUp();
	});

	// alert('test');
	/* ANIMATION */
	var midCenter = anime({
		targets: '.item-align-mid-center .slide-text',
		easing: 'easeInOutQuad',
		opacity: 0,
		scale: 2,
		direction: 'reverse',
		autoplay: false,
		duration: 550
	});

	var botLeft = anime({
		targets: '.item-align-bot-left .slide-text',
		easing: 'easeInOutQuad',
		opacity: 0,
		// scale: 1.5,
		// translateX: -200,
		translateY: 100,
		direction: 'reverse',
		autoplay: false,
		duration: 550
	});

	var botRight = anime({
		targets: '.item-align-bot-right .slide-text',
		easing: 'easeInOutQuad',
		opacity: 0,
		// scale: 1.5,
		translateX: 200,
		// translateY: 100,
		direction: 'reverse',
		autoplay: false,
		duration: 550
	});

	function animateSliderTexts(alignment){
		switch(alignment){
			case 'midCenter':
				midCenter.restart();
				midCenter.begin = () => {
					setTimeout(function(status) {
						$('.slide-text').css({display: 'block'});
					}, 0);
				};
			break;
			
			case 'botLeft':
				botLeft.restart();
				botLeft.begin = () => {
					setTimeout(function(status) {
						$('.slide-text').css({display: 'block'});
					}, 0);
				};
			break;

			case 'botRight':
				botRight.restart();
				botRight.begin = () => {
					setTimeout(function(status) {
						$('.slide-text').css({display: 'block'});
					}, 0);
				};
			break;
		};
	}

	midCenter.begin = () => {
		setTimeout(function(status) {
			$('.slide-text').css({display: 'block'});
		}, 0);
	};
	setTimeout(midCenter.play, 1000);


	/* SLIDER EVENTS */

	$('#slider').on('slide.bs.carousel', function(){
		$('.slide-text').css({display: 'none'});
	});

	$('#slider').on('slid.bs.carousel', function(e){
		var sliderText = $(e.relatedTarget).find('[class*="item-align"]');
		var alignment = null;

		alignment = (sliderText.hasClass('item-align-mid-center') ? 'midCenter' : alignment);
		alignment = (sliderText.hasClass('item-align-bot-left') ? 'botLeft' : alignment);
		alignment = (sliderText.hasClass('item-align-bot-right') ? 'botRight' : alignment);

		animateSliderTexts(alignment);
	});


	/* STICKY KIT */
	$('nav').stick_in_parent();

	/* SCROLL PROGRESS */
	var pageHeight = $(document).height();
	$('currentScroll').text($(document).scrollHeigh)
});