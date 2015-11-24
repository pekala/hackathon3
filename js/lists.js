jQuery(document).ready(function($){
    drake = dragula([
        document.getElementById('draggables')], {
        copy: true,
        moves: function (el, source, handle, sibling) {
            return !$(el).parents('.drop-area').length; // elements are always draggable by default
        },
    })
      .on('drag', function (el, container) {
        el.className = el.className.replace('ex-moved', '');
        $('#drop-area').addClass('show');
      })
      .on('drop', function (el, target) {
        $(el).remove();
        $('.grid__item').removeClass('selected');
        $('#drop-area').removeClass('show show-view');
        $(target).addClass('drop-feedback');
        setTimeout(function () {
            $(target).removeClass('drop-feedback');
        }, 700);
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

    $('.add-button').click(function(e) {
        $('#drop-area').addClass('show');
        e.stopPropagation();
    });
    $('.drop-area__item').click(function(e) {
        var el = $(this);
        el.addClass('drop-feedback');
        setTimeout(function () {
            el.removeClass('drop-feedback');
        }, 500);
        $('#drop-area').removeClass('show show-view');
    });

    $('.show-list').click(function() {
        $('#drop-area').toggleClass('show show-view');
    });

    $('body').click(function (e) {
        console.log(e)
        if(!$(e.target).parents('.drop-area').length && !$(e.target).is('.show-list') && !$(e.target).parents('.show-list').length) {
            $('#drop-area').removeClass('show');
            setTimeout(function () {
                $('#drop-area').removeClass('show-view');
            }, 500);
        }
    })

});
