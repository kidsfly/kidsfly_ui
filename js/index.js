let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanel = document.querySelectorAll(".tabContainer .tabPanels");

function showPanel(panelIndex,colorCode) {
  tabButtons.forEach(function(event) {
    event.style.backgroundColor="";
    event.style.color="";
  });

  tabButtons[panelIndex].style.backgroundColor="colorCode";
  tabButtons[panelIndex].style.color="white";

  tabPanel.forEach(function(event) {
    event.style.display="none";
  });

  tabPanel[panelIndex].style.display="block";
  tabPanel[panelIndex].style.backgroundColor="colorCode";
}

showPanel(0,'#f5f5f5');
