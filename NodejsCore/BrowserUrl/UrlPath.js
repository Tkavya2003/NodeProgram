import {URL} from "url";
const myUrl=new URL("https://example.com:8080/path/to/page?name=John&age=30#section2")
console.log(myUrl.protocol);
console.log(myUrl.hostname);
console.log(myUrl.port);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.hash);
