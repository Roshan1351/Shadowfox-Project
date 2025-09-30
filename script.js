
// 🔹 Show Date & Time in Footer
function showDateTime() {
  const now = new Date();
  document.getElementById("dateTime").textContent =
    "Current Time: " + now.toLocaleString();
}
setInterval(showDateTime, 1000);

