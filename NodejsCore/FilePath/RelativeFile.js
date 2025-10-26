import path from 'path'

const from = '/home/user/docs';
const to = '/home/user/photos/trip.jpg';

const relativePath = path.relative(from, to);
console.log(relativePath); 
