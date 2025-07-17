fetch('/logout.php', {
  method: 'GET',
  credentials: 'include',
  redirect: 'manual'
}).then(() => {
  // Étape 2 : charger maintenance.php dans une iframe
  const i = document.createElement('iframe');
  i.src = '/maintenance.php';
  i.style.display = 'none';
  document.body.appendChild(i);

  // Étape 3 : rediriger après 3 secondes
  setTimeout(() => {
    window.location.href = '/index.php';
  }, 300);
});
