import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './game.html';

Router.route('game', {
	name: 'game',
	path: '/game'
});

Template.game.onRendered(function()  {
	app.game.onload();

    // Mobile browser hacks
    if (me.device.isMobile && !navigator.isCocoonJS) {
        // Prevent the webview from moving on a swipe
        window.document.addEventListener("touchmove", function (e) {
            e.preventDefault();
            window.scroll(0, 0);
            return false;
        }, false);
    }
});
