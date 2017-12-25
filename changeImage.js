var n = 0;

function changeImage() {
  if ( n == 0 ) {
    document.images["flag"].src = "image/evacuation_routes.png";
    n = 1;
  }
  else if ( n == 1 ) {
    document.images["flag"].src = "image/forecast.png";
    n = 2;
  }
  else {
    document.images["flag"].src = "image/evacuation_routes.png";
    n = 0;
  }
}