let request = require('request')

let cats_url = "https://www.torontohumanesociety.com/api/api.php?action=getAnimalsForSpeciesId&id=2&stageId=2"

request(cats_url, function (error, response, body) {
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode)
  let xml = JSON.parse(body)
  let data = xml.AdoptableSearchResult.XmlNode
  console.log(data.filter(filter))
  // data.forEach((elem) => {
  // 	console.log(elem)
  // })
})

function filter(data) {
	if(data){
		let d = data.adoptableSearch
		return d.Age < 14
	}

}