import Get from '../cross/ajax.js'

class ApiMarvel {
  constructor(baseUrl = 'https://gateway.marvel.com:443', 
    apiKey = '3bb8bee4e8e7233fee2f0fd677aa636e') {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  ObterPersonagens(onSuccess, onError, pesquisaNome) {
    var url =
      `${this.baseUrl}/v1/public/characters?` +
      `apikey=${this.apiKey}` +
      (pesquisaNome && pesquisaNome.length > 0
        ? `&nameStartsWith=${pesquisaNome}`
        : "");  
    Get(url, onSuccess, onError);
  }
}

export default ApiMarvel;
