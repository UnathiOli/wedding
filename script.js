
// Wedding countdown
const weddingDate = new Date('2026-09-26T11:00:00+02:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (distance <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    return;
  }

  daysEl.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutesEl.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  secondsEl.textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp RSVP form
document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const attendance = document.getElementById('attendance').value;

  const message =
`Wedding RSVP - Humbu & Ana

Full Name / Nome e Cognome: ${name}

Attendance / Presenza: ${attendance}`;

  window.open('https://wa.me/27797506051?text=' + encodeURIComponent(message), '_blank');
});
