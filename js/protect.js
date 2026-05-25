// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Detect DevTools (basic method)
let devtoolsOpen = false;
const detectDevTools = function() {
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  
  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0A192F;color:#D4AF37;font-size:24px;font-family:Arial;text-align:center;padding:20px;">Access Denied.<br>Please close Developer Tools to continue.</div>';
    }
  } else {
    devtoolsOpen = false;
  }
};

window.addEventListener('resize', detectDevTools);
setInterval(detectDevTools, 1000);
