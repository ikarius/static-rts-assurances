respondToMessage = function(e) {
  var iframeName = "assurances-iframe";

  console.log(e.data);

  if (e.data["top"] != undefined) {
    window.location.href = "#" + iframeName;
  }
  else if (e.data["height"] != undefined) {
    document.getElementById(iframeName).style.height = e.data["height"] + 'px';
  }
  else if (e.data["offset"] != undefined) {
    // Nothing for now
    window.scrollTo(0, document.getElementById(iframeName).offsetTop + e.data["offset"]);
  }

};

window.addEventListener('message',respondToMessage,false);
