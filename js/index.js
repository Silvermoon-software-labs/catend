
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

// LOCATION ACCESS

var geocoder;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  codeLatLng(lat, lng)
}

function errorFunction(){
  alert("Geocoder failed");
}

function initialize() {
  geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
    console.log(results)
      if (results[1]) {
       //formatted address
       loc1 = results[0].formatted_address;
      //find country name
           for (var i=0; i<results[0].address_components.length; i++) {
          for (var b=0;b<results[0].address_components[i].types.length;b++) {

          //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                  //this is the object you are looking for
                  city= results[0].address_components[i];
                  break;
              }
          }
      }
      //city data
    //   loc2 = city.short_name + " " + city.long_name;
      document.getElementById("demo").innerHTML = loc1;
    //   document.getElementById("demo").innerHTML = loc2;

      } else {
        no_res = "No results found";
        document.getElementById("demo").innerHTML = no_res;
      }
    } else {
      fail = "Geocoder failed due to: " + status;
      document.getElementById("demo").innerHTML = fail;
    }
  });
}