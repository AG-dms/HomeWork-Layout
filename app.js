'use strict';

let filter_block = document.querySelector('.filter_block');
let label = document.querySelector('.label');

label.addEventListener('click', function() {
    filter_block.classList.toggle('hidden');
}
);