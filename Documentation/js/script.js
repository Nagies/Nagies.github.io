function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

jQuery(function($) {
  // Prepare navigation

  $('section').each(function(index, el) {
    var text = $(this).find('h1').text();
    var id = convertToSlug(text);

    $(this).attr('id', id);
    if( index > 0 ) {
      $(this).find('section > h1').append(' <a href="#top">top</a>');
    }
    if( text ) {
      $('.menubar > nav > ul').append('<li><a href="#' + id + '">' + text + '</a></li>');
    }

    if( $(this).find('article > h2').length ) {
      $('.menubar > nav > ul > li:last-of-type').append('<ul></ul>');

      $(this).find('article > h2').each(function(index, el) {
        text = $(this).text();
        id = convertToSlug(text);

        $(this).attr('id', id);
        $('.menubar > nav > ul > li:last-of-type ul').append('<li><a href="#' + id + '">' + text + '</a></li>')
      });
    }
  });

  var stylesheet = $('link[href*="prism"]');

  $('.change-style button').on('click', function() {
    $('body').toggleClass('dark-theme');

    if( $('body').hasClass('dark-theme') ) {
      $('.change-style button').html('Light theme');
      stylesheet.attr('href', 'css/prism-dark.css');
    } else {
      $('.change-style button').html('Dark theme');
      stylesheet.attr('href', 'css/prism.css');
    }
  });

  $('.mobile-menu').on('click', function() {
    $('body').toggleClass('menubar-active');
  });

  $('.menubar a').on('click', function() {
    $('body').removeClass('menubar-active');
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      var href = $.attr(this, 'href');
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
        return false;
      }
    }
  });

  $('code').each(function(index, el) {
    $(this).html(htmlEntities($(this).html()));
  });
});