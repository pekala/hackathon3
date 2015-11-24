jQuery(document).ready(function($){
    drake = dragula([
        document.getElementById('draggables')], {
        copy: true,
        // moves: function (el, source, handle, sibling) {
        //     return !$(el).parents('.filter').length; // elements are always draggable by default
        // },
    })
      .on('drag', function (el, container) {
        el.className = el.className.replace('ex-moved', '');
        $('#drop-area').addClass('show');
      })
      .on('drop', function (el) {
        $(el).remove();
        $('.grid__item').removeClass('selected');
        $('#drop-area').removeClass('show');
      })
      .on('over', function (el, container) {
        $(container).addClass('item-over');
      })
      .on('out', function (el, container) {
        $(container).removeClass('item-over');
      });

    $('.drop-area__item').each(function (i, item) {
        drake.containers.push(item);
    });
});
