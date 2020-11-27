var url = "https://api.minetools.eu/ping/fi2.falixnodes.net/26886";
$.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline, Please contact Tasla for the reason');
   return false;
 } 
var pl = '';
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});