window.jQuery(function ($) {
    'use strict';

    /* Tweet Ticker */
    $('#ticker').tweet({
        username: 'brodkin',
        page: 1,
        count: 3,
        loading_text: 'Loading recent tweets...',
        template: '{text}'
    }).bind('loaded', function () {
        var ul = $(this).find('.tweet_list');
        var ticker = function () {
            setTimeout(function () {
                ul.find('li:first').animate({marginTop: '-5em'}, 500, function () {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 5000);
        };
        ticker();
    });

    /* Background Slider */
    var sliderImages = [];
    $('#slider_images img').each(function (index, element) {
        var src = $(element).attr('src');
        var slideObj = {'image' : src};
        sliderImages.push(slideObj);
    });

    $.supersized({
        slide_interval:   10000,
        transition:   1,
        transition_speed:   700,
        slide_links:   'blank',
        slides: sliderImages
    });

    /* Contact Form */
    var z7x4m1;
    (function (d, t) {
        var s = d.createElement(t), options = {
            'userName': 'brodkin',
            'formHash': 'z7x4m1',
            'autoResize': true,
            'height': '1086',
            'async': true,
            'header': 'hide'
        };
        s.src = ('https:' === d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
        s.onload = s.onreadystatechange = function () {
            var rs = this.readyState;
            if (rs) {
                if (rs !== 'complete') {
                    if (rs !== 'loaded') {
                        return;
                    }
                }
            }
            try {
                z7x4m1 = new window.WufooForm();
                z7x4m1.initialize(options);
                z7x4m1.display();
            } catch (e) {}
        };
        var scr = d.getElementsByTagName(t)[0], par = scr.parentNode;
        par.insertBefore(s, scr);
    })(document, 'script');

    /* Klout */
    var kloutList = $('<ul>');
    var kloutTopic = $('<li>');
    $.ajax({
        url: 'http://api.klout.com/v2/user.json/957014930614264757/topics?key=s8bjkjsjvbszpvxmqaudtrgx',
        success: function (data) {
            $.each(data, function (i, topic) {
                var kloutTopicEntry = kloutTopic.clone();
                kloutTopicEntry.text(topic.displayName);
                kloutList.append(kloutTopicEntry);
            });
        },
        dataType: 'jsonp'
    });
    $('#klout_topics').html(kloutList);
});
