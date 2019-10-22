'use strict';

$(function() {
  function shuffle(array) {
    var i = 0,
      j = 0,
      temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  if (window.location.search.split('names=')[1]) {
    $('textarea').val(atob(window.location.search.split('names=')[1]));
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var names = $(e.currentTarget)
      .find('textarea')
      .val()
      .split('\n');
    shuffle(names);
    var pairs = [];
    for (var idx in names) {
      if (idx % 2 === 0) {
        pairs.push([names[idx]]);
      } else {
        pairs[pairs.length - 1].push(names[idx]);
      }
    }
    $('#pairs').html('');
    for (var idx in pairs) {
      $('#pairs')
        .append(pairs[idx].join(' & '))
        .append('<br><br>');
    }
  });
});
