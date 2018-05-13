import io from 'socket.io-client';
import {onNextPage, onPrevPage, setPageNumber, getPageNumber, setScale} from './pdfjs-helper';
import './control.css';

const url = '//localhost:3000/pdf';
const socket = io('http://localhost:3000');

const PAGE_NUMBER_MSG = 'page_number';
const INIT_MSG = 'init';

socket.on('connect', () => {
  console.log('Connected to the server!');
  socket.emit(INIT_MSG, "");
}); 

socket.on(INIT_MSG, message => {
  console.log('Page number is ' + message);
  setPageNumber(+message);
  setScale(3);
});

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener('click', e => {
  onPrevPage();
  socket.emit(PAGE_NUMBER_MSG, getPageNumber());
});
nextBtn.addEventListener('click', e => {
  onNextPage();
  socket.emit(PAGE_NUMBER_MSG, getPageNumber());
});

document.addEventListener('keydown', e => {
  if (e.keyCode === 37) {
    onPrevPage();
    socket.emit(PAGE_NUMBER_MSG, getPageNumber());
  } else if (e.keyCode === 39) {
    onNextPage();
    socket.emit(PAGE_NUMBER_MSG, getPageNumber());
  }
})