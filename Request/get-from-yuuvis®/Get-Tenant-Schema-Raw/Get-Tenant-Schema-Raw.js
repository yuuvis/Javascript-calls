const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/admin";

function createRawSchemaRequest() {
    return {
        method: "GET",
        uri: baseUrl + "/schema",
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Accept": "application/xml"
        }
    };
}

function executeRequest(request_object) {
    request.get(request_object, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleSearchRequest = createRawSchemaRequest();
executeRequest(simpleSearchRequest)
