setTimeout(function() {
  $('pre').not($('div.commandline pre')).wrap('<div style="width: 100%; text-align: center;"/>');
  $('pre').not($('div.commandline pre')).css('display', 'inline-block').css('margin', '20px auto').css('text-align', 'left');
}, 1000)
