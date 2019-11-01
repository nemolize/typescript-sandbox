import { createServer } from "http";

type User = {
  name: string;
  location?: {
    country: string;
  };
};

const users: Array<User> = [
  {
    name: "Nemoto",
    location: {
      country: 'Japan'
    }
  },
  {
    name: "Alex",
    location: {
      country: 'United Kingdom'
    }
  },
  {
    name: "X",
  }
];

function renderMessage(){
  return users.map(
    user=>`name: ${user.name}, country: ${user.location?.country ?? 'Unknown'}`
  ).join('\n');
}

//create a server object:
createServer(function(req, res) {
  res.write(renderMessage()); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
