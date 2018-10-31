
function setFiletype(fileType, buttonData, icon){
    var defaultString = 'Start typing...';
    if (fileType==-1) {
        fileType="";
    }
    switch(icon) {
        case 'windows':
            $("#query").prop('placeholder',defaultString+' ( eg. : Wondershare Filmora )');
            break;
        case 'tv':
            $("#query").prop('placeholder',defaultString+' ( eg. : The Flash S01 )');
            break;
        case 'film':
            $("#query").prop('placeholder',defaultString+' ( eg. : The Avengers )');
            break;
        case 'youtube':
            $("#query").prop('placeholder',defaultString+' ( eg. : Funny Cat )');
            break;
        case 'music':
            $("#query").prop('placeholder',defaultString+' ( eg. : Shape of you )');
            break;
        case 'book':
            $("#query").prop('placeholder',defaultString+' ( eg. : Revolution 2020 )');
            break;
        case 'gamepad':
            $("#query").prop('placeholder',defaultString+' ( eg. : Max Payne )');
            break;
        case 'camera-retro':
            $("#query").prop('placeholder',defaultString+' ( eg. : Cat )');
            break;
        case 'asterisk':
            $("#query").prop('placeholder',defaultString);
            break;
    }
    $("#fileType").prop('value',fileType);
    $("#ddbutton").html('<i class="fa fa-'+icon+' fa-spin" aria-hidden="true"></i> '+buttonData+' <span class="caret"></span>');
    $("#query").focus();
}

function searchGoogle () {
    var query = document.getElementById('query').value;
    var fileType = document.getElementById('fileType').value;
    if (fileType=="") {
        var finalQuery = query+" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    } else {
        var finalQuery = query+" +("+fileType+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    }
    var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
    // console.log(url);
    window.open(url, '_blank');
}

function openDropdown(){
    $('#ddbutton').click();
}
