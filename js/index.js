$(document).ready(function() {
    $('#softwares').on('click', function() {
        $('#filetype').text('Softwares');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Wondershare Filmora )');
    });
    $('#games').on('click', function() {
        $('#filetype').text('PC / Mobile Games');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Max Payne )');
    });
    $('#series').on('click', function() {
        $('#filetype').text('TV Series');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : The Flash S01 )');
    });
    $('#movies').on('click', function() {
        $('#filetype').text('Movies');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : The Avengers )');
    });
    $('#videos').on('click', function() {
        $('#filetype').text('Videos');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Funny Cat )');
    });
    $('#books').on('click', function() {
        $('#filetype').text('Books');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Revolution 2020 )');
    });
    $('#images').on('click', function() {
        $('#filetype').text('Images');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Cat )');
    });
    $('#songs').on('click', function() {
        $('#filetype').text('Songs');
        $('#inputBox').attr('placeholder', 'Start typing... ( eg. : Shape of you )');
    });
    $('#others').on('click', function() {
        $('#filetype').text('Others');
        $('#inputBox').attr('placeholder', 'Start typing...');
    });
});
