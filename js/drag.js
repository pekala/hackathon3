dragula([
    document.getElementById('draggables'),
    document.getElementById('dropables1'),
    document.getElementById('dropables2'),
    document.getElementById('dropables3')], {
    copy: true
})
  .on('drag', function (el, container) {
    $('#dropables').addClass('ex-start');
    el.className = el.className.replace('ex-moved', '');
  }).on('drop', function (el) {
    $(el).remove();
   $('#dropables').removeClass('ex-start');
  }).on('over', function (el, container) {
    container.className += ' ex-over';
  }).on('out', function (el, container) {
    container.className = container.className.replace('ex-over', '');
  });

