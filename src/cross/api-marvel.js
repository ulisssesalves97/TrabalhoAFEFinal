import Get from '../cross/ajax.js'

class ApiMarvel {
  constructor(baseUrl = 'https://gateway.marvel.com:443', 
    apiKey = '3bb8bee4e8e7233fee2f0fd677aa636e') {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  ObterPersonagens(onSuccess, onError, pesquisaNome, offset) {
    var urlParams = [`apikey=${this.apiKey}`];
    if(pesquisaNome && pesquisaNome.length > 0){
      urlParams.push(`nameStartsWith=${pesquisaNome}`);
    }
    if(offset && offset > 0){
      urlParams.push(`offset=${offset}`);
    }
    var url = `${this.baseUrl}/v1/public/characters?${urlParams.join('&')}`;
    Get(url, onSuccess, onError);
  }
}

export default ApiMarvel;
