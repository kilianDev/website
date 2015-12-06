$(document).ready(function() {

  // catch scroll
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

  // Collapse navbar on click, when in mobile view
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
  });

  // Skills charts
  Chart.defaults.global.showTooltips = false;
  Chart.defaults.global.animation = false;
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.scaleOverride = true;
  Chart.defaults.global.scaleSteps = 5;
  Chart.defaults.global.scaleStepWidth = 1;
  Chart.defaults.global.scaleStartValue = 0;
  Chart.defaults.global.scaleLineColor = "rgba(6, 43, 105, .4)";

  Chart.defaults.Radar.pointDot = true;
  Chart.defaults.Radar.pointDotRadius = 2;
  Chart.defaults.Radar.pointLabelFontColor = "#EFEFEF";
  Chart.defaults.Radar.pointLabelFontSize = 14;
  Chart.defaults.Radar.pointLabelFontFamily = "'Open Sans', sans-serif";
  Chart.defaults.Radar.pointLabelFontStyle = "200";
  Chart.defaults.Radar.scaleFontSize = 16;
  Chart.defaults.Radar.scaleBeginAtZero = true;

  var technicalSkills = [];
  // Technique
  technicalSkills.push({label:"PHP", value:3.5 });
  technicalSkills.push({label:"MySQL", value:4 });
  technicalSkills.push({label:"HTML/CSS", value:3 });
  technicalSkills.push({label:"JavaScript", value:3 });
  technicalSkills.push({label:"PhoneGap", value:1.5 });
  //Système
  technicalSkills.push({label:"Système Linux", value:4.5 });
  technicalSkills.push({label:"Scripting Bash/Perl", value:4 });
  technicalSkills.push({label:"Réseaux", value:4 });
  technicalSkills.push({label:"Middleware", value:3.5 });
  // Gestion de projets
  technicalSkills.push({label:"Scrum", value:4.5 });

  var professionalSkills = [];
  professionalSkills.push({label:"Gestion du stress", value:4.5 });
  professionalSkills.push({label:"Organisation", value:4 });
  professionalSkills.push({label:"Rigueur", value:4.5 });
  professionalSkills.push({label:"Autonomie", value:3 });
  professionalSkills.push({label:"Travail en équipe", value:4 });
  professionalSkills.push({label:"Prise de responsabilité", value:4 });
  professionalSkills.push({label:"Leadership", value:4 });
  professionalSkills.push({label:"Aisance en public", value:3 });
  professionalSkills.push({label:"Patience", value:2.5 });
  professionalSkills.push({label:"Coffee addict", value:5 });

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
