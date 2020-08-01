import $ from "jquery";

function Ajax(url, method, onSuccess, onError) {
  $.ajax({
    url: url,
    method: method,
    success: (resultado) => {
      onSuccess && onSuccess(resultado);
    },
    error: (xhr, status, err) => {
      var errorTrace = {
        error: {
          xhr,
          status,
          err
        },
        method,
        url
      };
      console.error(...errorTrace);
      onError &&
        onError(...errorTrace);
    },
  });
}

function Get(url, onSuccess, onError){
  Ajax(url, 'GET', onSuccess, onError); 
}

export default Get;