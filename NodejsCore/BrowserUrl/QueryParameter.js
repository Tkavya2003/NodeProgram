import {URL} from "url";
const myUrl=new URL("https://site.com/search?term=nodejs&sort=asc");
console.log(myUrl.searchParams.get("term"));
console.log(myUrl.searchParams.get("sort"));
