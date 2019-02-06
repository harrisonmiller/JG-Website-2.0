$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1747855597',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1747855597.78ffd08.b2bd7b8f2f064cf98f149a7dc21c5f17',
        sortBy: 'most-recent',
        template: '<div class="col-md-6 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

});
