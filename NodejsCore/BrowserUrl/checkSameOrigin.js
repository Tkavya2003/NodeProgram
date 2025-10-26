import {URL} from "url";

const url1 = new URL("https://example.com/page1");
const url2 = new URL("https://example.com:443/page2");

console.log(url1.origin === url2.origin);
