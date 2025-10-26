import {URL} from "url";
const myUrl= new URL("htttp://example.com/?page=1");
myUrl.searchParams.set("page","2")
myUrl.searchParams.set("category","js")
console.log(myUrl.href);
