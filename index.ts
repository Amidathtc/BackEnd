import http, { ServerResponse } from "http";

const foods = [
    "Bread",
    "Beans",
    "Cake",
    "Chocolate",
    "Coffee",
    "Cupcakes",
    "Dairy",
    "Eggs",
]
let list:any = []

Array.from({length: 10}, ()=>{
    let val = Math.floor(Math.random()*2000)
    let foodval = Math.floor(Math.random()*foods.length)
    return list.push({item: foods[foodval], price: val})
})
console.log(list)


const server = http.createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    // const { method, url } = req;
    res.writeHead(200, { "Content-Type": "application/json"})
    // if (method === "GET" && url === "/") {
        
    // //   res.write("We are good");
    // //   res.end();
      
    // }

    let body = ""
    let collection: any = [];

    req.on("data", (chunk) => {
        body += chunk;
        console.log(body, chunk)

    })
    // console.log(req)
    req.on("data", ()=>{
        let result: any = JSON.parse(body);
        collection.push(result)
        console.log(collection)
        res.write(JSON.stringify(collection))
        res.end();
    })

    
    


  }
);

const port = 4000;

server.listen(port, () => {
  console.log("Server listening on", port);
});
