/* NEXT School: starts the ScrollCraft engine (scrollcraft.js) and drives the one bespoke scroll piece,
   the "Regular school vs Big Picture school" split stage on Why Big Picture.
   Loaded only on pages that use ScrollCraft (see _src/static.py). Without it the page is plain and complete. */
(function () {
  var R = document.documentElement;
  if (!window.ScrollCraft) { R.classList.remove('sc-on'); return; }
  var splits = [].slice.call(document.querySelectorAll('[data-nx-split]'));
  // The strike runs under reduced motion too: it only moves while the reader scrolls (no autoplay, no parallax).
  // Without JavaScript the comparison is a plain table.
  ScrollCraft.mount(document.body);
  splits.forEach(setup);
  [].slice.call(document.querySelectorAll('[data-nx-rail]')).forEach(rail);

  /* Photo rail: while the section is pinned, scrolling down walks the row of campus photos to the left.
     The photo nearest the middle settles from a slight zoom; a yellow bar shows how far along you are. */
  function rail(act) {
    act.classList.add('nx-rail-live');
    var stage = act.querySelector('[data-sc-stage]');
    var track = act.querySelector('.nx-rail-track');
    var figs = [].slice.call(act.querySelectorAll('.nx-rail-ph'));
    var travel = 0, last = -1, running = false;
    function measure() {
      var sn = document.querySelector('.nx-subnav');
      stage.style.setProperty('--nx-top', (76 + (sn ? sn.offsetHeight : 0)) + 'px');
      // scrollWidth leaves out the end padding, so add one gutter to stop the last photo short of the edge
      travel = Math.max(0, track.scrollWidth - stage.clientWidth + (parseFloat(getComputedStyle(track).paddingLeft) || 0));
      act.style.setProperty('--travel', travel.toFixed(0));
      last = -1;
    }
    function frame() {
      var p = parseFloat(act.style.getPropertyValue('--sc-p'));
      if (isNaN(p)) p = 0;
      if (p !== last) {
        last = p;
        var rp = smooth((p - 0.06) / 0.88);
        act.style.setProperty('--rp', rp.toFixed(4));
        var mid = innerWidth / 2;
        for (var i = 0; i < figs.length; i++) {
          var r = figs[i].getBoundingClientRect();
          var d = Math.abs(r.left + r.width / 2 - mid) / innerWidth;
          figs[i].style.setProperty('--near', clamp(1 - d * 1.6, 0, 1).toFixed(3));
        }
      }
      if (running) requestAnimationFrame(frame);
    }
    measure();
    addEventListener('resize', measure);
    figs.forEach(function (f) { var im = f.querySelector('img'); if (im && !im.complete) im.addEventListener('load', measure); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    new IntersectionObserver(function (en) {
      var on = en[0].isIntersecting;
      if (on && !running) { running = true; requestAnimationFrame(frame); }
      running = on;
    }, { rootMargin: '50% 0px' }).observe(act);
    frame();
  }

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }

  function setup(act) {
    act.classList.add('nx-split-live');
    var stage = act.querySelector('[data-sc-stage]');
    var win = act.querySelector('.nx-split-window');
    var rowsEl = act.querySelector('.nx-split-rows');
    var cellsA = [].slice.call(act.querySelectorAll('.nx-split-row:not(.nx-split-hdr) .nx-split-a'));
    var cellsB = [].slice.call(act.querySelectorAll('.nx-split-row:not(.nx-split-hdr) .nx-split-b'));
    var strikes = cellsA.map(function (c) { return c.firstElementChild; });
    var N = cellsA.length, mids = [], winH = 0, ARG = 0.84, last = -1, running = false;

    function measure() {
      var sn = document.querySelector('.nx-subnav');
      var top = 76 + (sn ? sn.offsetHeight : 0) + 22;
      stage.style.setProperty('--nx-top', top + 'px');
      winH = win.clientHeight;
      mids = cellsA.map(function (c) { return c.offsetTop + c.offsetHeight / 2; });
      last = -1;
    }

    function frame() {
      var p = parseFloat(act.style.getPropertyValue('--sc-p'));
      if (isNaN(p)) p = 0;
      if (p !== last) {
        last = p;
        var q = clamp(p / ARG, 0, 1) * N;            // 0..N through the argument
        var k = Math.min(Math.floor(q), N - 1), t = q - k;
        var c = k < N - 1 ? k + smooth((t - 0.62) / 0.38) : N - 1;   // row in focus (hold, then glide to the next)
        var lo = Math.floor(c), hi = Math.min(lo + 1, N - 1), f = c - lo;
        var mid = mids[lo] + (mids[hi] - mids[lo]) * f;
        rowsEl.style.setProperty('--ty', (winH * 0.42 - mid).toFixed(1) + 'px');
        for (var i = 0; i < N; i++) {
          var s = i < k ? 1 : i > k ? 0 : clamp((t - 0.1) / 0.45, 0, 1);
          strikes[i].style.setProperty('--s', (s * 100).toFixed(1) + '%');
          var d = Math.min(1, Math.abs(i - c));
          cellsA[i].style.opacity = (1 - d * 0.7 - (i < k ? 0.08 : 0)).toFixed(3);
          cellsB[i].style.opacity = (1 - d * 0.62).toFixed(3);
        }
        stage.style.setProperty('--prog', clamp(p / ARG, 0, 1).toFixed(4));
        // the collapse: the divider sweeps left and the Big Picture side takes the screen
        var e = smooth((p - 0.86) / 0.11);
        stage.style.setProperty('--split', (50 * (1 - e)).toFixed(2) + '%');
        win.style.opacity = clamp(1 - e * 1.7, 0, 1).toFixed(3);
        act.querySelector('.nx-split-labels').style.opacity = clamp(1 - e * 2, 0, 1).toFixed(3);
        act.querySelector('.nx-split-meter').style.opacity = clamp(1 - e * 2, 0, 1).toFixed(3);
        var end = clamp((e - 0.45) / 0.45, 0, 1);
        stage.style.setProperty('--end', end.toFixed(3));
        stage.style.setProperty('--endvis', end > 0.02 ? 'visible' : 'hidden');
      }
      if (running) requestAnimationFrame(frame);
    }

    measure();
    addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    // only run while the stage is near the screen
    new IntersectionObserver(function (en) {
      var on = en[0].isIntersecting;
      if (on && !running) { running = true; requestAnimationFrame(frame); }
      running = on;
    }, { rootMargin: '50% 0px' }).observe(act);
    frame();
  }
})();
