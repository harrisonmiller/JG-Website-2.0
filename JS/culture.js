$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1747855597',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '1747855597.78ffd08.b2bd7b8f2f064cf98f149a7dc21c5f17',
        sortBy: 'most-recent',
        template: '<div class="col-lg-6 instaimg">' +
                      '<a href="{{link}}" target="_blank" class = "instaImgLink">' +
                      '<img src="{{image}}" alt="{{caption}}" class="img-fluid instaimgLayerBottom"/>' +
                      '<div class = "instaimgLayerTop instaimgLayerSlideUp">' +
                          '<div class = "instaimgText">{{caption}}</div>' +
                      '</div></a>' +
                  '</div>',
    });


    userFeed.run();

});
