/* using javascript objects  */
var editor={

  /*parent node*/
  wrapper          :  "<div class='editor-wrapper'/>",

  /*1st child*/
  tool_bar          : "<div class='editor-toolbar'/>",

  /* 2nd child and parent for main editor textarea and editable div */
  editor_body      : "<div class='editor-body-wrapper'/>",

  /*child nodes..*/
  text_area        : "<textarea class='editor-textarea' placeholder='write code or plane text'></textarea>",
  editable_div     : "<iframe class='wysiwyg-area'/>",

  /* 3rd child info */
  info_pannel      : "<div class='editor-info'><small> &copy; 2019 pagespool.com <br> v 0.0.00</small> </div>"
}

var dropdowns = [];
  dropdowns[0] = "<div class='st-dropdown' id='drpDwnHeadings'><div class='arrow-up'></div><ul class='dropdown-headings'></ul></div>";
  dropdowns[1] = "<div class='st-dropdown' id='drpDwnFonts'><div class='arrow-up'></div><ul class='dropdown-fonts'></ul></div>";
  dropdowns[2] = "<div class='st-dropdown' id='drpDwnFontSize'><div class='arrow-up'></div><ul class='dropdown-font-size'></ul></div>";
  dropdowns[3] = "<div class='st-dropdown' id='drpDwnInsertLink'><div class='arrow-up'></div><form><p>url :</p><input type='url' value='http://'><p>link text:</p><input type='text' value=''><br><select class='st-internal-links input-inline'><option>internal links</option></select><br><a data-command='createlink'><button type='button'>insert link </button></a></form></div>";

var editor_tools    = [];
  editor_tools[0]   = "<button class='btn st-ed-dropdown-opener' title='headings' data-target='#drpDwnHeadings'>h1-h6</button>&nbsp;";
  editor_tools[1]   = "<button class='btn f-btn fonts st-ed-dropdown-opener' title='fonts' data-target='#drpDwnFonts'>fonts</button>&nbsp;";
  editor_tools[2]   = "<button class='btn st-ed-dropdown-opener' title='font size' data-target='#drpDwnFontSize'>font-size</button>&nbsp;";
  editor_tools[3]   = "<span class='separater'/>";
  editor_tools[4]   = "<a data-command='blockquote' class='btn btn-light' title='Quote'><i class='fas fa-quote-left'></i></>&nbsp";
  editor_tools[5]   = "<a data-command='removeFormat' class='btn btn-light' title='remove formate'><i class='fa fa-minus-circle'> </i></a>&nbsp";
  editor_tools[6]   = "<span class='separater'/>";
  editor_tools[7]   = "<a data-command='bold' class='btn btn-light font-weight-bold' title='text to bold'><i class='fas fa-bold'></i></a>&nbsp";
  editor_tools[8]   = "<a data-command='italic' class='btn'><i class='text-italic' title='text to italic'><i class='fa fa-italic'></i></a>&nbsp";
  editor_tools[9]   =  "<a data-command='underline' class='btn' title='underline'><i class='fa fa-underline'> </i></a>&nbsp;";
  editor_tools[10]   =  "<a data-command='strikeThrough' class='btn' title='stike throw'><i class='fa fa-strikethrough'> </i></a>&nbsp;";
  editor_tools[11]   = "<span class='separater'/>";
  editor_tools[12]   = "<a data-command='subscript' class='btn'><i class='text-italic' title='text To bottom'><i class='fa fa-subscript'></i></a>&nbsp";
  editor_tools[13]    = "<a data-command='superscript' class='btn'><i class='text-italic' id='superScriptBtn' title='text To top'><i class='fa fa-superscript'></i></a>&nbsp";
  editor_tools[14]   = "<span class='separater'/>";
  editor_tools[15]   =  "<a data-command='outdent' class='btn' title='outdent'><i class='fas fa-outdent'></i></a>&nbsp;";
  editor_tools[16]   =  "<a data-command='indent' class='btn' title='indent'><i class='fas fa-indent'></i></a>&nbsp;";
  editor_tools[17]   = "<span class='separater'/>";
  editor_tools[18]   =  "<a data-command='justifyLeft' class='btn' title='justify left'><i class='fas fa-align-left'></i></a>&nbsp;";
  editor_tools[19]   =  "<a data-command='justifyRight' class='btn' title='justify right'><i class='fas fa-align-right'></i></a>&nbsp;";
  editor_tools[20]   =  "<a data-command='justifyCenter' class='btn' title='justify center'><i class='fas fa-align-center'></i></a>&nbsp;";
  editor_tools[21]   =  "<a data-command='justifyFull' class='btn' title='justify full'><i class='fas fa-align-justify'></i></a>&nbsp;";
  editor_tools[22]   = "<span class='separater'/>";
  editor_tools[21]   =  "<button class='btn st-ed-dropdown-opener' data-target='#drpDwnInsertLink' title='insert link'><i class='fas fa-link text-center'><br></i></a>&nbsp;";
  editor_tools[22]   =  "<a data-command='unlink' class='btn' title='remove link'><i class='fas fa-unlink'></i></a>&nbsp;";
  editor_tools[23]   = "<span class='separater'/>";
  editor_tools[24]   =  "<a data-command='redo' class='btn' title='redo'><i class='fas fa-redo'></i></a>&nbsp;";
  editor_tools[25]   =  "<a data-command='undo' class='btn' title='undo'><i class='fas fa-undo'></i></a>&nbsp;";
  editor_tools[26]   = "<span class='separater'/>";
  editor_tools[27]   =  "<a data-command='copy' class='btn' title='copy to clipboard'><i class='fas fa-copy text-center'><br></i></a>&nbsp;";
  editor_tools[28]   =  "<a data-command='cut' class='btn' title='delete and copy to clipboard'><i class='fas fa-cut'></i></a>&nbsp;";
  editor_tools[29]   =  "<a data-command='paste' class='btn' title='paste content from clipboard'><i class='fas fa-paste'></i></a>&nbsp;";
  editor_tools[30]   = "<span class='separater'/>";
  editor_tools[31]   =  "<a data-command='delete' class='btn' title='delete selected'><i class='fa fa-trash'></i></a>&nbsp;";
  editor_tools[32]   = "<span class='separater'/>";
  editor_tools[33]   =  "<a data-command='insertOrderedList' class='btn' title='insert ordered list'><i class='fa fa-list-ol'></i></a>&nbsp;";
  editor_tools[34]   =  "<a data-command='insertUnOrderedList' class='btn' title='insert List'><i class='fa fa-list'></i></a>&nbsp;";
  editor_tools[35]   =  "<a data-command='insertTable' class='btn' title='insert table'><i class='fa fa-table'></i></a>&nbsp;";
  editor_tools[36]   = "<span class='separater'/>";
  editor_tools[37]   =  "<i class='fa fa-palette text-center' title='font color'><br><input class='fore-color' type='color' value='#000000'></i>&nbsp;";
  editor_tools[38]   =  "<i title='background' class='text-center fa fa-palette fa-inverse'><br><input class='back-color' type='color' value='#ffffff'></i>&nbsp;";
  editor_tools[39]   = "<a class='btn btn-light img-button' title='insert image'><i class='fa fa-image text-primary'></i></a>&nbsp;";
  editor_tools[40]   = "<span class='separater'/>";
  editor_tools[41]   = "<a class='btn btn-warning code' title='html code'><i class='fas fa-code'></i></a> &nbsp;";
  editor_tools[42]   =  "<a class='btn btn-success saveBtn' title='save'><i class='fas fa-save text-center'><br>save</i></a>&nbsp;";
  editor_tools[40]   = "<span class='separater'/>";
  editor_tools[43]   =  "<a class='btn btn-light full-screen' title='Expand'><i class='fas fa-expand-arrows-alt'></i></a>&nbsp;";

var placeholder_text = ' the WYSIWYG editor ';
var img_wrapper={
  img_inner       : "<div class='img-counter'><a class='float-right btn btn-warning counter-close'><i class='fas fa-times'></i></a><iframe src='images.html'></iframe></div>",
  img_editor      : "<div class='img-editor'></div>",
  left_image      : "<div class='left-image card'></div>",
  form_part       : "<div class='right-details'><div class='card-body form'><form></form></div></div>",
  inputs          : '<input type="text" class="img-title"><input type="text" class="img-url"><input type="text" class="img-height"><input type="text" class="img-width"><input type="text" class="img-alt"><input type="text" class="img-caption"><select class="img-align"><option name="img-align" value="left" selected>left</option><option name="img-align" value="right">right</option><option name="img-align" value="none">none</option></select>',
  buttons         : '<div class="card-footer text-right bg-light p-3"><a class="btn btn-warning cancel" type="reset">cancel</a> &nbsp;<a class="btn btn-success insert-image">insert image</a></div>'
}

// composer.js  + handler.js part
$(function(){ //jquery
  //composer
  $('.editor').append(editor.wrapper);
  var height=$('.editor').attr('height');
  var width=$('.editor').attr('width');
  var bg = $('.editor').attr('bg');
  $('.editor').css('min-height',height);
  $('.editor').css('min-width',width);
  $('.editor .editor-wrapper').append(editor.tool_bar);
  for (var i = 0; i < editor_tools.length; i++) {
  	 $('.editor-toolbar').append(editor_tools[i]);
  }
  for (var i = 0; i < dropdowns.length; i++) {
  	 $('.editor-toolbar').append(dropdowns[i]);
  }
  $('.editor .editor-wrapper').append(editor.editor_body);
  ///fonts and headings
  for(var i=0;i<=6;i++){
	  if(i==0){
		$('.dropdown-headings').append('<li><a data-value="p" data-command="para">paragraph</a></li>');
		continue;
	  }
	 $('.dropdown-headings').append('<li><a data-value="h'+i+'" data-command="heading"><h'+i+'>h'+i+'</h'+i+'></a></li>');
  }
  for(var i=1;i<=7;i++){
	 $('.dropdown-font-size').append('<li><a data-value="'+i+'" data-command="fontSize" style="font-size:'+i*5+'px;">font-size :'+i+'</a></li>');
  }
  // $('.headings').on('change',function(e){
  // 	if (e.target.value != 'p') {
  // 		$('.font-size').attr('disabled','disabled');
  // 	}
  // 	else{
  // 		$('.font-size').attr('disabled',false);
  // 	}
  // })
  var fonts = [];
  fonts[0] = 'serif';
  fonts[1] = 'cursive';
  fonts[2] = 'Arial';
  fonts[3] = 'halvatica';
  fonts[4] = 'script';
  fonts[12] = 'tahima';
  fonts[9] = 'Times New Roman';
  fonts[7] = 'fantasy';
  fonts[8] = 'mangal';
  fonts[6] = 'Dancing script';
  fonts[10] = 'Arial black';
  fonts[11] = 'sans serif';
  fonts[5] = 'monoscript';
  fonts[13] = 'monospace';

   for(var i=0;i<fonts.length;i++){
	 $('.dropdown-fonts').append('<li><a style="font-family: '+fonts[i]+';" data-value="'+fonts[i]+'" data-command="fontname">'+fonts[i]+'</a></li>');
  }

  $('.editor .editor-body-wrapper').append(editor.text_area);
  $('.editor .editor-body-wrapper').append(editor.editable_div);
  $('.editor .editor-wrapper').append(editor.info_pannel);

  //image editor counter
  $('.editor .editor-wrapper').append(img_wrapper.img_inner);
  $('.editor .editor-wrapper .img-counter').append(img_wrapper.images_part).append(img_wrapper.img_editor);
  $('.editor .editor-wrapper .img-editor').append(img_wrapper.left_image);
  $('.editor .editor-wrapper .img-editor').append(img_wrapper.form_part);
  $('.editor .editor-wrapper .img-editor .form form').append(img_wrapper.inputs);
  $('.editor .editor-wrapper .img-editor').append(img_wrapper.buttons);
  $('.img-counter').css('top',$('.editor-toolbar').height());
  $('.img-counter').css({'height':$('.editor-body-wrapper').height(),'width':$('.editor-body-wrapper').width()});

  /* image editor form inputs  */
  $('.img-title').before('<p>image name');
  $('.img-url').before('</p><p>image url');
  $('.img-alt').before('</p><p>image alt text</p>');
  $('.img-height').before('</p><p>image height</p>');
  $('.img-width').before('</p><p>image width</p>');
  $('.img-caption').before('</p><p>image caption</p>');
  $('.img-align').before('</p><p>image alignment</p>');

    /*toolbar operations--*/
  $('.code').click(function(){
      $(this).parent().siblings('.editor-body-wrapper').children('.editor-textarea').slideToggle();
      $(this).parent().siblings('.editor-body-wrapper').children('.wysiwyg-area').slideToggle();
      $(this).siblings().toggleClass('disabled');
  });
  $('.full-screen').click(function(){
  $(this).parents('.editor').toggleClass('editor-fs');
    var final_width=$('.editor-fs').width();
    var init_width=$('.editor').width();
    if (final_width !=null) {
      $('.full-screen i').removeClass('fa-expand-arrows-alt bg-danger');
      $('.full-screen i').addClass('fa-arrows-alt-h bg-danger');
        $('.full-screen').attr('title','back to normal');
      $('.img-counter').css('width',final_width);
    }
    else{
      $('.full-screen i').removeClass('fa-arrows-alt-h bg-danger');
      $('.full-screen i').addClass('fa-expand-arrows-alt');
      $('.full-screen').attr('title','expand editor');
      $('.img-counter').css('width',init_width);
    }
  });

  /*  inser image button operations--*/
  $('.img-button').click(function(){
    var counter = $(this).parents('.editor-toolbar').siblings('.img-counter');
    counter.slideToggle();
      $('.img-counter iframe').contents().find('body img').on('click',function(){
        var img_url=$(this).attr('src');
        $('.img-counter iframe').hide();
        $('.img-editor').show();
          $('.img-editor').css('width',$('.img-counter').width());
        $('.left-image').html($(this).clone()).append('<button class="btn btn-info change">change image</button>');
        $('.left-image img').attr({'width':80+'%','height':300+'px'});

        //show data in editor form
        var img_name = img_url.split('\/');
        $('.img-title').val(img_name[img_name.length-1]);
        $('.img-url').val(img_url);
        $('.img-alt').val('');
        $('.img-height').val($('.left-image img').height());
        $('.img-width').val($('.left-image img').width());
        $('.img-caption').val('image caption');
        $('.img-height').change(function(){
            $('.left-image img').css('height',$(this).val());
        });
        $('.img-width').change(function(){
            $('.left-image img').css('width',$(this).val());
        });

        //when insert button clicked---
          $('.cancel').click(function(){
            $(this).parents('.img-editor').hide();
            $(this).parents('.img-counter').hide();
            $('.img-counter iframe').show();
            $('.left-details form').reset();
          });
          $('.change').click(function(){
            $(this).parents('.img-editor').hide();
            $('.img-counter iframe').show();
          });
    });
    $('.counter-close').on('click',function(){
      $(this).parents('.img-counter').hide();
    })
  });//end Composer.js part

    //events and handler start
    var  iframe;
    $('.wysiwyg-area').each(function(i){
    var editorArea = $('.wysiwyg-area')[i].contentWindow.document;
    editorArea.open();
    // optionally write content here
    editorArea.close();
    editorArea.designMode = "on";
    editorArea.execCommand('insertHTML',false,placeholder_text);

    $($('.wysiwyg-area')[i].contentWindow.document).on('keydown',function(e) {
    if (e.keyCode === 13) {
    editorArea.execCommand('insertHTML', false, '<br><br>');
    return false;
    }
    });
    $('.editor-toolbar a').on('click',function(e) {
    var command = $(this).data('command');
     iframe = $(this).parents('.editor-toolbar').siblings('.editor-body-wrapper').children('.wysiwyg-area');
    if (command == 'blockquote' || command == 'code') {
         iframe[i].contentWindow.document.execCommand('formatBlock', false, command);
    }

    if (command == 'heading') {
      iframe[i].contentWindow.document.execCommand('formatBlock', false, $(this).data('value'));
    }

    if (command == 'para') {
     iframe[i].contentWindow.document.execCommand('insertParagraph',false, 'P');
    }

    if (command == 'fontname') {
      iframe[i].contentWindow.document.execCommand('fontName', false, $(this).data('value'));
    }

    if (command == 'fontSize') {
      iframe[i].contentWindow.document.execCommand('fontSize',false, $(this).data('value'));
    }

    if (command == 'createlink') {

        url = prompt('Enter the link here: ', 'http:\/\/');
       iframe[i].contentWindow.document.execCommand($(this).data('command'), false, url);
    }
     if (command == 'insertOrderedList') {
         iframe[i].contentWindow.document.execCommand($(this).data('command'), false, "newOL" + Math.round(Math.random() * 1000));
    }
    if (command == 'insertUnOrderedList') {
       // url = prompt('', 'http:\/\/');
        iframe[i].contentWindow.document.execCommand('insertUnOrderedList', false, "newUL");
   }
    if (command == 'insertTable') {
        // url = prompt('', 'http:\/\/');
         iframe[i].contentWindow.document.execCommand('insertHTML', false, "<table border='1'><tr><th>heading1</th><th>heading2</th><th>heading3</th></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>");
    }
    else
       iframe[i].contentWindow.document.execCommand($(this).data('command'), false, null);
    });

    $('.back-color').on('change',function(e){
      iframe = $(this).parents('.editor-toolbar').siblings('.editor-body-wrapper').children('.wysiwyg-area');
        iframe[i].contentWindow.document.execCommand('backcolor', false, e.target.value);
      });
    $('.fore-color').on('change',function(e){
      iframe = $(this).parents('.editor-toolbar').siblings('.editor-body-wrapper').children('.wysiwyg-area');
         iframe[i].contentWindow.document.execCommand('forecolor', false, e.target.value);
      })

    $('.insert-image').on('click',function(){
      iframe = $(this).parents('.img-counter').siblings('.editor-body-wrapper').children('.wysiwyg-area');
    //defining variables
    var img_url = $('.img-url').val();
    var height=$('.img-height').val();
    var width=$('.img-width').val();
    var alt=$('.img-alt').val();
    var img_align = $('.img-align option:selected').val();
    var caption = $('.img-caption').val();
    var img='<figure style="border:none; width:'+width+'px; float:'+img_align+';text-align:center;"><img src="'+img_url+'" height="'+height+'" width="98%" alt="'+alt+'" align=""><figcaption>'+caption+'</figcaption></figure>';
    iframe[i].contentWindow.document.execCommand('insertHTML',false,img);
    $(this).parents('.img-editor').hide();
    $(this).parents('.img-counter').hide();
    $('.img-counter iframe').show();
    $('.left-details form')[0].reset();
    });

    $($('.wysiwyg-area')[i].contentWindow.document).on('blur',function(){
      $('.editor-textarea').val($(this).contents().find('body').html());
    })
    $('.editor-textarea').on('blur',function(){
      $(this).siblings('.wysiwyg-area').contents().find('body').empty().append($(this).val());
    });

  });
    /*  end handl er -*/

    //drop down opener ----
    $(document).on('click',".st-ed-dropdown-opener",function(){
        var drpDwn = $(this).data('target');
          $(drpDwn).slideToggle();
          if ($(this).position().left <= 150) {
              $(drpDwn).css({'top':$(this).position().top + $(this).height(),'left':+$(this).position().left});
              $('.arrow-up').css('left', 0);
          }
          else{
          $(drpDwn).css({'top':$(this).position().top + $(this).height(),'left':+$(this).position().left - $(drpDwn).width() + 20});
          $('.arrow-up').css('left', $(drpDwn).width()-20);
        }
          $(document).on('click',drpDwn,function(e){
            tar = $(e.target);
            if (tar.is('form ,input, select ,option')) {
              $(this).show();
            }
            else{
              	$(this).hide();
            }
        });
    });

});//end jquery

/*-------------\ end pp-notes.js \-----------------------------*/
