window.COI = window.COI || {};
window.COI.kslu = (function () {
  const U = {};
  const set = (u, ids) => ids.forEach(i => U[i] = u);
  set('I', ['constitution', 'preamble', 'adopted', 'in-force', '1', '2', '2A', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
  set('II', ['12', '13', '14']);
  set('III', ['15', '16', '17', '18', '19']);
  set('IV', ['20', '21', '21A', '22', '23', '24', '25', '26', '27', '28']);
  set('V', ['29', '30', '31', '31A', '31B', '31C', '31D', '32', '32A', '33', '34', '35', '36', '37', '38', '39', '39A', '40', '41', '42', '43', '43A', '43B', '44', '45', '46', '47', '48', '48A', '49', '50', '51', '51A', '226', '300A']);
  const PARTS = { I: 'I', II: 'I', III: 'II–V', IV: 'V', IVA: 'V', XII: 'V', VI: 'V' };
  const PART_NOTE = { XII: 'Art. 300A only', VI: 'Art. 226 only' };
  const SYLLABUS = {
    I: 'Meaning and kinds of Constitution, constitutionalism, salient features; Preamble; citizenship.',
    II: 'State under Art. 12; law, Art. 13, severability, eclipse, judicial review; equality under Art. 14.',
    III: 'Protective discrimination under Arts. 15–16; untouchability (Art. 17); freedoms under Art. 19.',
    IV: 'Rights of the accused (Art. 20), arrest and preventive detention (Art. 22), life and liberty (Art. 21), exploitation, freedom of religion.',
    V: 'Minority rights; Arts. 32 and 226 and writs; right to property; Directive Principles, Fundamental Duties and their relation to rights.'
  };
  function semUnits(id) {
    const out = [];
    const S1 = { I: '1 2 2A 3 4 5 6 7 8 9 10 11 constitution preamble adopted in-force', II: '12 13 14', III: '15 16 17 18 19', IV: '20 21 21A 22 23 24 25 26 27 28', V: '29 30 31 31A 31B 31C 31D 32 32A 33 34 35 36 37 38 39 39A 40 41 42 43 43A 43B 44 45 46 47 48 48A 49 50 51 51A 226 300A' };
    for (const u in S1) if (S1[u].split(' ').includes(id)) out.push({ sem: 'I', unit: u });
    const SP = { 'seventh-schedule': 'I', 'tenth-schedule': 'III', 'schedules': 'V' };
  if (SP[id]) out.push({ sem: 'II', unit: SP[id] });
  const m = /^(\d+)([A-Z]*)$/.exec(id || '');
    if (m) {
      const n = +m[1], suf = m[2];
      const r = (a, b) => n >= a && n <= b;
      let u = null;
      if (n === 243 && !/^Z[H-T]$/.test(suf) || r(1, 4) || r(239, 242) || r(245, 263) || r(264, 293) || r(301, 307) || r(343, 351) || n === 370 || n === 371) u = 'I';
      else if ([93, 94, 95, 96, 105, 178, 179, 180, 181, 194].includes(n) || r(124, 147) || r(214, 232)) u = 'III';
      else if (r(52, 123) || r(152, 213)) u = 'II';
      else if (r(233, 237) || n === 300 && !suf || r(308, 323) || r(324, 329)) u = 'IV';
      else if (r(352, 360) || n === 368) u = 'V';
      if (u) out.push({ sem: 'II', unit: u });
    }
    return out;
  }
  const SYLLABUS2 = {
    I: 'Federal system; Centre–State legislative, financial and administrative relations; trade and commerce; official language; local self-government (73rd and 74th Amendments); Art. 370; Arts. 371A–371J.',
    II: 'Union and State executive; President and Governor; Parliament and State Legislature; Councils of Ministers, PM and CM.',
    III: 'Speaker; legislative privileges; anti-defection law; Union and State judiciary, appointment and transfer of judges.',
    IV: 'Subordinate judiciary; administrative tribunals; services and Public Service Commissions; Election Commission; State liability in tort and contract.',
    V: 'Emergency and its effect on fundamental rights; constitutional interpretation; amendment and basic structure; Schedules.'
  };
  const badges = id => semUnits(id).map(x => ({ label: 'Sem ' + x.sem + ' · Unit ' + x.unit, sem: x.sem, title: (x.sem === 'I' ? SYLLABUS : SYLLABUS2)[x.unit] }));
  return { semUnits, badges, syllabus2: SYLLABUS2, unitOf: id => U[id] || null, partUnit: k => PARTS[k] || null, partNote: k => PART_NOTE[k] || '', syllabus: SYLLABUS, paper: 'Constitutional Law – I' };
})();
