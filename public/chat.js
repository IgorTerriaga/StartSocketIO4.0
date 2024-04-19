const socket = io();

const urlSeacrh = new URLSearchParams(window.location.search);

const username = urlSeacrh.get("username");
const room = urlSeacrh.get("select_room");

console.log(username, room)