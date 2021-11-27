import axios from 'axios';

export default function makeGetRequest(path) {
	axios.get(path).then(
		(response) => {
			var result = response.data;
			console.log("This is from api",result);
			return result;
		},
	).catch((err) => {
		console.log("Error : ",err);
	});
}
makeGetRequest('http://192.168.0.8:3000/hello');