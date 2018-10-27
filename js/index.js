$(document).ready(function() {
  
    $('#softwares').on('click', function() {
        $('#filetype').text('Softwares');
    });

    $('#games').on('click', function() {
        $('#filetype').text('PC / Mobile Games');
    });
    
    $('#series').on('click', function() {
        $('#filetype').text('TV Series');
    });

    $('#movies').on('click', function() {
        $('#filetype').text('Movies');
    });
      
    $('#videos').on('click', function() {
        $('#filetype').text('Videos');
    });

    $('#books').on('click', function() {
        $('#filetype').text('Books');
    });

    $('#images').on('click', function() {
        $('#filetype').text('Images');
    });

    $('#songs').on('click', function() {
        $('#filetype').text('Songs');
    });

    $('#others').on('click', function() {
        $('#filetype').text('Others');
    });
    
});

