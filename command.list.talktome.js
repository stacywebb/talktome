/*****************************************/
/*                                       */
/*      StacyWebb.com                    */
/*                                       */
/*      command.list.talktome.js         */
/*                                       */
/*      @author: Stacy E. Webb           */
/*                                       */
/*      @site: http://stacywebb.com      */
/*                                       */
/*      @copyright: 2014                 */
/*                                       */
/*****************************************/

(function () {
	"use strict";
	var root = this;

	if (talktome) {

		var gotoPage = function(term) {
			root.location.href = '/'+term.replace(/[^\w]/ig, '');
		};

		var main = function() {
			root.location.href = '/';
		};

		var languages = function() {
			root.location.href = '/#Coding';
		};

		var projects = function() {
			root.location.href = '/#Projects';
		};

		var experience = function() {
			root.location.href = '/#Experience';
		};

		var education = function() {
			root.location.href = '/#Education';
		};

		var connect = function() {
			root.location.href = '/#Connect';
		};

		var connectGitHub = function() {
			window.location.href = 'https://github.com/stacywebb';
		};

		var connectLinkdin = function() {
			window.location.href = 'https://linkdin.com/stacywebb';
		};

		var connectEmail = function() {
			window.location.href = 'mailto:stacywebb@gmail.com';
		};

		var locate = function() {
			root.location.href = '/#Locate';
		};

		var findMe = function () {
			getLocation()
		};

		var city = function() {
			root.location.href = '/testing.html';
		};

		var goBack = function() {
			history.back();
		};

		talktome.init({
			'back':               goBack,
			'go back':            goBack,
			'go home':            main,
			'home':               main,
			'main':               main,
			'find':               findMe,
			'locate':             findMe,
			'positon':            findMe,
			'languages':          languages,
			'coding':             languages,
			'code':               languages,
			'projects':           projects,
			'samples':            projects,
			'experience':         experience,
			'work history':       experience,
			'work':               experience,
			'connect':            connect,
			'contact':            connect,
			'email':              connectEmail,
			'github':             connectGitHub,
			'linkedin':           connectLinkdin,
			'map':                locate,
			'3d city':            city,
			'city':               city,
			'css 3d city':        city,
			'demo':               city,
		});
		talktome.start();
	}
}).call(this);
