import { createServer } from "http";

type User = {
  name: string;
  location?: {
    country: string;
    city: string;
  };
};

const users: Array<User> = [
  {
    name: "name"
  }
];

//create a server object:
createServer(function(req, res) {
  res.write(`location is ${users[0].location?.country ?? 'not specified'}`); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
