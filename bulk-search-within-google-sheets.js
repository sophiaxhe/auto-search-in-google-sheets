function getCompanyUrl(companyName) {
  var options = {
   'method' : 'get',
   'contentType': 'application/json',
   'headers': {
      'Ocp-Apim-Subscription-Key': 'Insert API key'
    }
  };
    
  var url = 'https://api.cognitive.microsoft.com/bing/v5.0/search?q=' + companyName;
  
  var response = UrlFetchApp.fetch(url, options);
  
  response = JSON.parse(response.getContentText());
  
  return response.webPages.value[0].displayUrl;
}
