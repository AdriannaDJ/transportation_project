var user_selection = d3.select('#selDataset')

function updateCrime() {
	console.log(`./api/v1.0/crime_count_${user_selection.property('value')}`)
	d3.json(`./api/v1.0/crime_count_${user_selection.property('value')}`).then(function (response) {
		console.log(response)
		var trace = {
			'type': 'bar',
			'y': response.map((crime) => crime['desc']),
			'x': response.map((crime) => crime['count']),
			'orientation': 'h'
		}
		Plotly.newPlot('bar', [trace]);
	})
}

user_selection.on('change', updateCrime);

d3.json('./api/v1.0/crime_count_1').then(function (response) {
	var trace = {
		'type': 'bar',
		'y': response.map((crime) => crime['desc']),
		'x': response.map((crime) => crime['count']),
		'orientation': 'h'
	}
	Plotly.newPlot('bar', [trace])
})