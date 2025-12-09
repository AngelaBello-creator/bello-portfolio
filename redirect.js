(function () {
  const redirectPath = sessionStorage.getItem("redirectPath");
  sessionStorage.removeItem("redirectPath");

  if (redirectPath) {
    window.history.replaceState(null, "", redirectPath);
  }
})();
