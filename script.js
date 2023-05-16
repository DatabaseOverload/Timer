const countDownDate = new Date("Jan 1, 2123 23:59:59").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const demoElement = document.querySelector(".container .timer");
  demoElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

  if (distance < 0) {
    clearInterval(x);
    demoElement.innerHTML = "EXPIRED";
  }
}, 1000);
