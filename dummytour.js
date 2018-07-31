var dummytour = function(theData){

  var that = this;
  var $body = 'body';
  var step = 0;
  var data = theData;
  var totalSteps = theData.length;

  this.clear = function() {
    $('#tour_overlay_0').remove();
    $('#tour_overlay_1').remove();
    $('#tour_overlay_2').remove();
    $('#tour_overlay_3').remove();
    $('#tour_textbox_0').remove();
  }

  this.build = function() {
    var margin = 0;

    if(typeof data[step].margin != 'undefined') {
      margin = data[step].margin;
    }
    else {
      margin = 0;
    }

    var canvas_0 = that.createCanvas({
      'id': 'tour_overlay_0',
      'top': 0 - margin,
      'left': 0,
      'width': $(document).width(),
      'height': $(data[step].selector).offset().top + 1,
      'transition': data[step].transition
    });

    var canvas_1 = that.createCanvas({
      'id': 'tour_overlay_1',
      'top': $(data[step].selector).offset().top - margin,
      'left': 0 - margin,
      'width': $(data[step].selector).offset().left,
      'height': $(data[step].selector).height() + (margin * 2),
      'transition': data[step].transition
    });

    var canvas_2 = that.createCanvas({
      'id': 'tour_overlay_2',
      'top': $(data[step].selector).offset().top - margin,
      'left': $(data[step].selector).offset().left + $(data[step].selector).width() + margin,
      'width': $(document).width() - ($(data[step].selector).offset().left + $(data[step].selector).width()),
      'height': $(data[step].selector).height() + (margin * 2),
      'transition': data[step].transition
    });

    var canvas_3 = that.createCanvas({
      'id': 'tour_overlay_3',
      'top': $(data[step].selector).offset().top + $(data[step].selector).height() + margin,
      'left': 0,
      'width': $(document).width(),
      'height': $(document).height() - ($(data[step].selector).offset().top + $(data[step].selector).height()),
      'transition': data[step].transition
    });

    var button_0 = '';
    if(typeof data[step].button != 'undefined') {
      button_0 = data[step].button;
    } 

    var theScroll = '';
    if(typeof data[step].scroll != 'undefined') {
      theScroll = data[step].scroll;
    } 

    var textBox_0 = that.createTextBox({
      'id': 'tour_textbox_0',
      'selector': data[step].selector,
      'title': data[step].title,
      'text': data[step].text,
      'button': button_0,
      'position': data[step].position,
      'scroll': theScroll,
      'margin': margin,
      'transition': data[step].transition
    });
  }

  this.createCanvas = function(canvasData) {
    var canvas = document.createElement('canvas');

    canvas.id     = canvasData.id;
    canvas.width  = canvasData.width;
    canvas.height = canvasData.height;
    canvas.style.zIndex   = 2000;
    canvas.style.position = "absolute";
    canvas.style.opacity = '0.8';
    canvas.style.background = '#000';
    $($body).append(canvas);

    if(typeof canvasData.transition !== 'undefined') {
      $('#' + canvasData.id).hide();
      $('#' + canvasData.id).fadeIn(canvasData.transition);
    }

    $('#' + canvas.id).css('position', 'absolute');
    $('#' + canvas.id).css('top', canvasData.top);
    $('#' + canvas.id).css('left', canvasData.left);

    return canvas;
  }

  this.createTextBox = function(textData) {
    var textBox = document.createElement('div');
    textBox.id     = textData.id;
    textBox.style.zIndex   = 2000;
    textBox.style.position = "absolute";
    $($body).append(textBox);

    if(typeof textData.transition !== 'undefined') {
      $('#' + textBox.id).hide();
      $('#' + textBox.id).fadeIn(textData.transition);
    }

    $('#' + textBox.id).addClass('textbox');

    var textTitle = document.createElement('h1');
    textTitle.id = textData.id + '_title';
    $(textBox).append(textTitle);

    var textParagraph = document.createElement('p');
    textParagraph.id = textData.id + '_paragraph';
    $(textBox).append(textParagraph);

    $('#' + textTitle.id).text(textData.title);
    $('#' + textParagraph.id).text(textData.text);

    $('#' + textTitle.id).addClass('title');
    $('#' + textParagraph.id).addClass('text');

    if(textData.button != '') {
      var nextButton = document.createElement('a');
      nextButton.id = textData.id + '_button';
      $(textBox).append(nextButton);

      $('#' + nextButton.id).addClass('btn btn-primary btn-color-green');
      $('#' + nextButton.id).text(textData.button);
      $('#' + nextButton.id).click(function(){ that.nextStep(); });
    }
    

    if(textData.position == 'top') {
      $('#' + textBox.id).css('top', $(textData.selector).offset().top - $(textBox).height() - 30 - textData.margin);
      $('#' + textBox.id).css('left', $(textData.selector).offset().left + ($(textData.selector).width() / 2) - ($(textBox).width() / 2) );
      $('#' + textBox.id).addClass('text-center');

      if(textData.scroll == '') {
        $('html, body').animate({
            scrollTop: $(data[step].selector).offset().top - $(textBox).height() - 100
        }, 500);
      }
    }
    else if(textData.position == 'bottom') {
      $('#' + textBox.id).css('top', $(textData.selector).offset().top + $(textData.selector).height() + 30 + textData.margin);
      $('#' + textBox.id).css('left', $(textData.selector).offset().left + ($(textData.selector).width() / 2) - ($(textBox).width() / 2) );
      $('#' + textBox.id).addClass('text-center');

      if(textData.scroll == '') {
        $('html, body').animate({
            scrollTop: $(data[step].selector).offset().top - 30
        }, 500);
      }
    }
    else if(textData.position == 'left') {
      $('#' + textBox.id).css('top', $(textData.selector).offset().top + ($(textData.selector).height() / 2) - ($(textBox).height() / 2) );
      $('#' + textBox.id).css('left', $(textData.selector).offset().left - $(textBox).width() - 30 - textData.margin);
      $('#' + textBox.id).addClass('text-right');

      if(textData.scroll == '') {
        $('html, body').animate({
            scrollTop: $(data[step].selector).offset().top - $(textBox).height() - 100
        }, 500);
      }
    }
    else {
      $('#' + textBox.id).css('top', $(textData.selector).offset().top + ($(textData.selector).height() / 2) - ($(textBox).height() / 2) );
      $('#' + textBox.id).css('left', $(textData.selector).offset().left + $(textData.selector).width() + 30 + textData.margin);
      $('#' + textBox.id).addClass('text-left');

      if(textData.scroll == '') {
        $('html, body').animate({
            scrollTop: $(data[step].selector).offset().top - $(textBox).height() - 100
        }, 500);
      }
    }

     
    return textBox;
  }

  this.run = function() {
    if(step < totalSteps){
      that.build();
    }
  }

  this.nextStep = function() {
    step++;
    that.clear();
    that.run();
  }
};


