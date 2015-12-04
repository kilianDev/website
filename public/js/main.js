$(document).ready(function() {

  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).parent().removeClass('active');
      })
      $(this).parent().addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });

  /* SKILL CHARTS */
  Chart.defaults.global.showTooltips = false;
  Chart.defaults.global.animation = false;
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.scaleOverride = true;
  Chart.defaults.global.scaleSteps = 5;
  Chart.defaults.global.scaleStepWidth = 1;
  Chart.defaults.global.scaleStartValue = 0;
  Chart.defaults.global.scaleLineColor = "rgba(6, 43, 105, .4)";

  Chart.defaults.Radar.pointDot = false;
  Chart.defaults.Radar.pointLabelFontColor = "#EFEFEF";
  Chart.defaults.Radar.pointLabelFontSize = 14;
  Chart.defaults.Radar.pointLabelFontFamily = "'Open Sans', sans-serif";
  Chart.defaults.Radar.pointLabelFontStyle = "200";
  Chart.defaults.Radar.scaleFontSize = 16;
  Chart.defaults.Radar.scaleBeginAtZero = true;

  var technicalSkills = [];
  technicalSkills[1] = {label:"Scrum", value:4 };
  technicalSkills[2] = {label:"PHP", value:3.5 }
  technicalSkills[3] = {label:"MySQL", value:4 }
  technicalSkills[4] = {label:"Système Linux", value:4 }
  technicalSkills[5] = {label:"Réseaux", value:3.5 }
  technicalSkills[6] = {label:"HTML/CSS", value:3 }
  technicalSkills[7] = {label:"Javascript", value:3 }
  technicalSkills[8] = {label:"Middleware", value:4 }
  technicalSkills[9] = {label:"Scripting Bash/Perl", value:3.5 }

  var technicalSkillsLabel = [];
  var technicalSkillsValue = [];
  technicalSkills.forEach(function(entry) {
    technicalSkillsLabel.push(entry.label);
    technicalSkillsValue.push(entry.value);
  });

  var technicalCanvas = document.getElementById("technicalChart").getContext("2d");
  var technicalData = {
    labels: technicalSkillsLabel,
    datasets: [
        {
            fillColor: "rgba(129, 103, 244, 0.3)",
            strokeColor: "rgba(129, 103, 244, 1)",
            data: technicalSkillsValue,
          }
      ]
  };
  var myTechnicalChart = new Chart(technicalCanvas).Radar(technicalData);

  var professionalSkills = [];
  professionalSkills[1] = {label:"Gestion du stress", value:4.5 };
  professionalSkills[2] = {label:"Organisation", value:4.5 }
  professionalSkills[3] = {label:"Travail en équipe", value:4 }
  professionalSkills[4] = {label:"Prise de responsabilité", value:4 }
  professionalSkills[5] = {label:"Autonomie", value:2.5 }
  professionalSkills[6] = {label:"Leadership", value:4 }
  professionalSkills[7] = {label:"Aisance en public", value:3 }
  professionalSkills[8] = {label:"Patience", value:2.5 }
  professionalSkills[9] = {label:"Faiseur de café", value:4 }

  var professionalSkillsLabel = [];
  var professionalSkillsValue = [];
  professionalSkills.forEach(function(entry) {
    professionalSkillsLabel.push(entry.label);
    professionalSkillsValue.push(entry.value);
  });

  var professionalCanvas = document.getElementById("professionalChart").getContext("2d");
  var professionalData = {
    labels: professionalSkillsLabel,
    datasets: [
        {
            fillColor: "rgba(48, 163, 147, 0.3)",
            strokeColor: "rgba(48, 163, 147, 1)",
            data: professionalSkillsValue,
          }
      ]
  };
  var myprofessionalChart = new Chart(professionalCanvas).Radar(professionalData);

});

$.fn.scrollBottom = function() {
  return $(document).height() - this.scrollTop() - this.height();
};

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      var refElementBottomPos = refElement.position().top + refElement.outerHeight();

      if (
          (
            refElement.position().top <= (scrollPos+50)
            &&
            refElement.position().top + refElement.height() > (scrollPos)
          )
          ||
          (refElementBottomPos == scrollPos + $(window).height())
        ) {
          $('.navbar ul li').removeClass("active");
          currLink.parent().addClass("active");
      }
  });
}

/*
 * Add the ripple effect on navbar links
 */
var parent, ink, d, x, y;

$("ul li a").click(function(e){
  parent = $(this).parent();
  //create .ink element if it doesn't exist
  if(parent.find(".ink").length == 0)
    parent.prepend("<span class='ink'></span>");

  ink = parent.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");

  //set size of .ink
  if(!ink.height() && !ink.width())
  {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(parent.outerWidth(), parent.outerHeight());
    ink.css({height: d, width: d});
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - parent.offset().left - ink.width()/2;
  y = e.pageY - parent.offset().top - ink.height()/2;

  //set the position and add class .animate
  ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
