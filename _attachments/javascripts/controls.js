var bind_controls = function(screen) {
  
  var previous_mouse_x = null, previous_mouse_y = null;
  var mouse_down = false;
  var key_down = null;
  
  $('html').keydown(function(_event) {
    if(event.altKey) {
      key_down = 'scale';
    }
    if(event.ctrlKey) {
      key_down = 'rotate';
    }
  });
  
  $('html').keyup(function(event) {
    key_down = null;
  });
  
  $('html').mousedown(function(event) {
    mouse_down = true;
  });
  
  $('html').mouseup(function(event) {
    mouse_down = false;
  });

  $('html').mousemove(function(event) {
    if(screen.is_animating()) {
        return;
      }
    if(previous_mouse_x != null) {
      var delta_x = event.clientX - previous_mouse_x;
      var delta_y = event.clientY - previous_mouse_y;
      if(!key_down && mouse_down) {
        screen.translate(delta_x, delta_y);
      } else if(key_down == 'scale') {
        screen.scale(delta_x, delta_y);
      } else if(key_down == 'rotate') {
        screen.rotate(delta_x, delta_y);
      };
    };
    previous_mouse_x = event.clientX;
    previous_mouse_y = event.clientY;
  });
  
};