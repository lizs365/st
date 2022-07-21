function log(x) {
  console.log(x);
}

function getParam(x) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  return url.searchParams.get(x);
}

function calc(x) {
  return eval(x);
}

function goUrl(x){
  window.location.href = x;
}

function redirectUrl(x){
  window.location.replace(x);
}
