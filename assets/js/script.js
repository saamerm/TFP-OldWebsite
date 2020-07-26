
$(".projects__grid").masonry({
  columnWidth: 10,
  itemSelector: ".projects__grid-project",
  gutter: 0,
});
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 10 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

$("document").ready(function() {
  pageViewed();  
  $("#send_message").click(function()
  {
      document.getElementById('form_reponse').innerHTML = "Thank you! We will get back to you within 24 hours";
      submitMessage();
      selectAction("SendMessage");
  });
  $("#launch_instagram").click(()=>selectAction("Blog"));
  $("#launch_instagram").click(()=>selectAction("Instagram"));
  $("#launch_instagram").click(()=>selectAction("Twitter"));
  $("#launch_instagram").click(()=>selectAction("LinkedIn"));
  $("#launch_instagram").click(()=>selectAction("Facebook"));
});

function selectAction(actionType){
  var url = "https://script.google.com/macros/s/AKfycby-9dsJYQIq0RILPCYKj9dMKkdSYHaJ4oHEKiF3duXfAAkXEiCZ/exec";
  var myJSObject='{"Event": "' + "SelectAction: " + actionType + '"}';    
  postCall(url, myJSObject);
}

function pageViewed() {
  var url = "https://script.google.com/macros/s/AKfycby-9dsJYQIq0RILPCYKj9dMKkdSYHaJ4oHEKiF3duXfAAkXEiCZ/exec";
  var myJSObject='{"Event": "' + "PageView" + '"}';    
  postCall(url, myJSObject);
}

function postCall(url, myJSObject) {
  $.ajax({
  type: "POST",
  url: url,
  data: myJSObject,
  success: function (response) {
    console.log(response);
  },
  error: function (error) {
    console.log(error.responseText);
  },
});
}

function submitMessage()
{
  var url = "https://script.google.com/macros/s/AKfycbyNis6FoIjQr0VqbgOInwAFBkUq7OAlxLEdd-A26p1JX1GFq7E/exec";
  var Name = document.getElementById('contact_name').value;
  var Email = document.getElementById('contact_email').value;      
  var Message = document.getElementById('contact_message').value;      
  var myJSObject='{"Name": "' + Name + '", "Email" : "' + Email + '", "Message" : "' + Message + '"}';    
  postCall(url, myJSObject);
}