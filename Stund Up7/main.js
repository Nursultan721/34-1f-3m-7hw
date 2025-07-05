const getTime = () => {
   const day = document.querySelector('.day');
   const hour = document.querySelector('.hour');
   const minutes = document.querySelector('.minutes');
   const seconds = document.querySelector('.seconds');
   const now = new Date();
   day.textContent = now.getDay().toString().padStart(2, '0');
   hour.textContent = now.getHours().toString().padStart(2, '0');
   minutes.textContent = now.getMinutes().toString().padStart(2, '0');
   seconds.textContent = now.getSeconds().toString().padStart(2, '0');
};

setInterval(() => {
   getTime();
}, 1000);