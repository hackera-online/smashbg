(function () {
  var d = document;

  /* стари адреси с #маршрут -> нови чисти адреси */
  if (d.body.getAttribute('data-page') === 'home' && location.hash) {
    var map = {
      projects: 'proekti/', services: 'uslugi/', areas: 'rayoni/', about: 'za-nas/',
      asbestos: 'azbestovi-pokrivi/', emergency: 'avariyno-sabaryane/', contact: 'kontakti/',
      privacy: 'politika-za-poveritelnost/', terms: 'obshti-usloviya/', cookies: 'biskvitki/'
    };
    var t = map[location.hash.slice(1)];
    if (t) { location.replace(t); return; }
  }

  /* мобилно меню */
  var burger = d.getElementById('burger'), nav = d.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var o = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', o);
    });
  }

  /* филтър на проектите */
  var f = d.getElementById('filters'), grid = d.getElementById('all-proj');
  if (f && grid) {
    f.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      [].forEach.call(f.querySelectorAll('.chip'), function (x) { x.setAttribute('aria-pressed', x === b); });
      var k = b.getAttribute('data-f');
      [].forEach.call(grid.querySelectorAll('.proj'), function (p) {
        p.style.display = (k === 'all' || p.getAttribute('data-c') === k) ? '' : 'none';
      });
    });
  }

  /* форма за оферта (демо, не изпраща данни) */
  var form = d.getElementById('quote'), ok = d.getElementById('ok');
  if (form && ok) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      ok.classList.add('show');
      ok.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }
})();
