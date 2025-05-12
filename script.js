function savePreference() {
  const color = document.getElementById('colorPicker').value;
  localStorage.setItem('favoriteColor', color);
  alert('Preference saved!');
}

function loadPreference() {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    triggerAnimation();
  } else {
    alert("No saved color preference found.");
  }
}

function triggerAnimation() {
  const box = document.getElementById("animatedBox");
  box.style.transition = "transform 0.5s ease";
  box.style.transform = "rotate(360deg)";
  setTimeout(() => {
    box.style.transform = "rotate(0deg)";
  }, 600);
}
