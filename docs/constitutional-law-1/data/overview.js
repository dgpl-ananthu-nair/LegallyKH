(function () {
const A = (title, summary, x = {}) => ({ title, summary, clauses: x.k || [], amendments: x.m || [], cases: x.c || [], questions: x.q || [], notes: x.notes || null });
const C = (name, cite, i, r, a, c) => ({ name, cite, i, r, a, c });
const Q = (type, q, outline) => ({ type, q, outline });
window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};
window.COI.parts['OV'] = {
  key: 'OV', part: 'Overview', title: 'The Constitution at a glance', range: 'Facts & Unit I topics', overview: true,
  intro: 'Short summaries of the figures in the poster header, plus the Unit I topics (meaning of Constitution, salient features, Preamble) that sit outside any single article.',
  groups: [
    { slug: 'facts', name: 'Key dates and numbers', range: '', ids: ['adopted', 'in-force', 'parts', 'articles', 'schedules'] },
    { slug: 'unit-i', name: 'Unit I topics', range: '', ids: ['constitution', 'preamble'] },
    { slug: 'schedules', name: 'Key Schedules', range: '', ids: ['seventh-schedule', 'tenth-schedule'] }
  ],
  articles: {
    'adopted': A('Adopted · 26 November 1949', 'The Constituent Assembly adopted the Constitution on 26 November 1949, after two years, eleven months and eighteen days of work. The Assembly first met on 9 December 1946, with Dr. Rajendra Prasad as its permanent President from 11 December 1946. The Drafting Committee, chaired by Dr. B.R. Ambedkar, was appointed on 29 August 1947.', {
      k: ['Objectives Resolution moved by Nehru on 13 December 1946; adopted 22 January 1947; it became the basis of the Preamble', 'Eleven sessions over 165 days; the Draft was published in February 1948', 'Members signed the Constitution on 24 January 1950', 'Under Article 394, provisions on citizenship, elections, the provisional Parliament and some temporary matters took effect on 26 November 1949 itself', 'Observed as Constitution Day (Samvidhan Divas) since 2015'],
      q: [Q('Short note', 'Making of the Indian Constitution.', ['Cabinet Mission Plan, 1946', 'Composition of the Constituent Assembly', 'Objectives Resolution', 'Drafting Committee and Ambedkar', 'Adoption and commencement'])]
    }),
    'in-force': A('In force · 26 January 1950', 'The Constitution came into force on 26 January 1950, chosen because the Indian National Congress had declared 26 January 1930 as Purna Swaraj Day following its Lahore session resolution of December 1929. India became a sovereign democratic republic, and the date is celebrated as Republic Day.', {
      k: ['Article 394: commencement', 'Article 395 repealed the Indian Independence Act, 1947 and the Government of India Act, 1935 (except the Privy Council Jurisdiction Act, 1949 abolition provisions)', 'Dr. Rajendra Prasad became the first President', 'The Supreme Court was inaugurated on 28 January 1950, replacing the Federal Court', 'The Constituent Assembly continued as the provisional Parliament until the first elections in 1951–52']
    }),
    'parts': A('25 Parts', 'The Constitution as adopted had 22 Parts. Four Parts have since been added (IVA, IXA, IXB and XIVA) and one omitted (VII), giving 25 Parts today. Parts are numbered, not renumbered, so inserted Parts take letter suffixes.', {
      k: ['Part IVA Fundamental Duties: 42nd Amendment, 1976', 'Part XIVA Tribunals: 42nd Amendment, 1976', 'Part IXA Municipalities: 74th Amendment, 1992 (Part IX Panchayats was substituted by the 73rd Amendment, 1992)', 'Part IXB Co-operative Societies: 97th Amendment, 2011 (partly struck down in Union of India v. Rajendra N. Shah, 2021)', 'Part VII (Part B States) omitted by the 7th Amendment, 1956'],
      m: ['7th Amendment, 1956', '42nd Amendment, 1976', '73rd and 74th Amendments, 1992', '97th Amendment, 2011']
    }),
    'articles': A('395 Articles (original)', 'The Constitution was adopted with 395 articles in 22 Parts and 8 Schedules, making it the longest written constitution of any sovereign country. Articles are never renumbered: new provisions are inserted with letter suffixes (for example 21A, 243A–243ZT, 323A) and repealed ones are marked omitted, so the last article is still 395.', {
      k: ['Commonly counted today as about 448 articles', 'Borrowed heavily from the Government of India Act, 1935, as well as the UK, US, Irish, Canadian, Australian, Weimar and Soviet constitutions (see the Sources panel on the poster)', 'Amended over 100 times; the most recent is the 106th Amendment, 2023 (women\'s reservation)'],
      q: [Q('Short note', 'Why is the Indian Constitution the lengthiest in the world?', ['Geographical and social diversity', 'Single constitution for Union and States', 'Influence of the 1935 Act', 'Detailed provisions on administration, services, emergencies', 'Dr. Ambedkar\'s explanation'])]
    }),
    'schedules': A('12 Schedules', 'The Constitution began with 8 Schedules. Four have been added: the Ninth (1951), Tenth (1985), Eleventh (1992) and Twelfth (1992). Schedules hold detailed lists and tables that support the articles.', {
      k: ['Ninth Schedule: protected land reform laws, 1st Amendment, 1951 (see Art. 31B)', 'Tenth Schedule: anti-defection, 52nd Amendment, 1985', 'Eleventh Schedule: 29 subjects for Panchayats, 73rd Amendment, 1992', 'Twelfth Schedule: 18 subjects for Municipalities, 74th Amendment, 1992', 'Seventh Schedule: Union, State and Concurrent Lists'],
      c: [
        C('I.R. Coelho v. State of Tamil Nadu', '(2007) 2 SCC 1', 'Are laws placed in the Ninth Schedule after 24 April 1973 immune from review?', 'They are open to review on the basis of the basic structure, including the essence of Articles 14, 19 and 21.', 'Several State laws had been added to the Ninth Schedule.', 'Ninth Schedule protection is not absolute.'),
        C('Kihoto Hollohan v. Zachillhu', '1992 Supp (2) SCC 651', 'Is the Tenth Schedule valid?', 'Valid, except paragraph 7 barring judicial review; the Speaker acts as a tribunal.', 'Challenge to the anti-defection law.', 'Upheld except para 7.')
      ]
    }),
    'seventh-schedule': A('Seventh Schedule · Union, State and Concurrent Lists', 'The Seventh Schedule, read with Article 246, divides legislative subjects into three Lists. List I (Union List) covers matters of national importance such as defence, foreign affairs, banking, currency, railways and income tax. List II (State List) covers matters of local importance such as public order, police, public health, agriculture and land. List III (Concurrent List) covers matters on which both may legislate, such as criminal law, marriage and divorce, contracts, education, forests and labour welfare. Residuary matters go to Parliament under Article 248 and Entry 97 of List I.', {
      k: ['Original numbering: List I 97 entries, List II 66, List III 47; entries have since been added and deleted (e.g. 42nd Amendment moved education and forests to List III; 101st Amendment changed taxation entries for GST)', 'Union List entries prevail over State and Concurrent entries in case of overlap (non-obstante clause in Art. 246)', 'Entries are interpreted widely and liberally; each entry includes ancillary matters', 'Interpretive doctrines: pith and substance, colourable legislation, harmonious construction, repugnancy (Art. 254)', 'Taxation entries are separate from general entries (M.P.V. Sundararamier, 1958)'],
      m: ['7th Amendment, 1956', '42nd Amendment, 1976', '101st Amendment, 2016'],
      c: [
        C('State of West Bengal v. Kesoram Industries Ltd.', '(2004) 10 SCC 201', 'Can States levy cess on coal-bearing land when Parliament has occupied the field of mines and minerals development?', 'Taxing entries are distinct from regulatory entries; a State tax on land is valid unless it trenches upon a Union field in substance (5-judge bench, 4:1).', 'Cess on coal-bearing land and tea plantations.', 'State levies upheld.'),
        C('Mineral Area Development Authority v. Steel Authority of India', '2024 INSC 554', 'Is royalty a tax, and can States tax mineral-bearing land?', 'Royalty is not a tax; States have power under Entries 49 and 50 of List II to tax mineral rights and mineral-bearing land, and the MMDR Act does not limit that power (9-judge bench, 8:1).', 'Overruled India Cement Ltd. v. State of Tamil Nadu, (1990) 1 SCC 12, on royalty.', 'State taxing power upheld.')
      ],
      q: [Q('Short note', 'Seventh Schedule and the three Lists.', ['Art. 246', 'Contents of each List with examples', 'Residuary power', 'Interpretive doctrines', 'Shifts by the 42nd and 101st Amendments'])]
    }),
    'tenth-schedule': A('Tenth Schedule · Anti-defection law', 'The Tenth Schedule, added by the 52nd Amendment, 1985, disqualifies a member of Parliament or a State Legislature who voluntarily gives up membership of his political party, or votes or abstains contrary to the party whip without prior permission (unless condoned within 15 days). An independent member is disqualified if he joins a party, and a nominated member if he joins a party after six months. The Speaker or Chairman decides disqualification questions.', {
      k: ['Paragraph 2: grounds of disqualification', 'Paragraph 3: split exception (one-third) deleted by the 91st Amendment, 2003', 'Paragraph 4: merger exception, where at least two-thirds of the legislature party agree to merge', 'Paragraph 6: Speaker/Chairman decides; paragraph 7 (bar on courts) struck down', 'A disqualified member cannot be a Minister or hold a remunerative political post until re-elected (Arts. 75(1B), 164(1B), 361B)'],
      m: ['52nd Amendment, 1985', '91st Amendment, 2003'],
      c: [
        C('Kihoto Hollohan v. Zachillhu', '1992 Supp (2) SCC 651', 'Is the Tenth Schedule valid, and is the Speaker\'s decision final?', 'The Schedule does not violate free speech or the basic structure; the Speaker acts as a tribunal, so the decision is subject to judicial review on grounds of mala fides, perversity and violation of natural justice. Paragraph 7 is invalid for want of ratification.', '5-judge bench (3:2 on para 7 and ratification).', 'Upheld except paragraph 7.'),
        C('Ravi S. Naik v. Union of India', '1994 Supp (2) SCC 641', 'Can conduct outside the House amount to "voluntarily giving up membership"?', 'Yes; the phrase is not synonymous with formal resignation and may be inferred from conduct.', 'Goa MLAs.', 'Wide reading of para 2(1)(a).'),
        C('Keisham Meghachandra Singh v. Speaker, Manipur Legislative Assembly', '(2021) 16 SCC 503', 'Must the Speaker decide disqualification petitions within a time limit?', 'Disqualification petitions should be decided within three months in the absence of exceptional circumstances; Parliament should consider an independent tribunal.', 'Manipur Minister\'s case pending for years.', 'Time limit laid down.'),
        C('Subhash Desai v. Principal Secretary, Governor of Maharashtra', '2023 INSC 500', 'Who is the "political party" for issuing whips, and can the Speaker decide which faction is the real party?', 'The whip and leader must be appointed by the political party, not the legislature party; the Speaker must decide disqualification within a reasonable time; Nabam Rebia\'s rule on a Speaker facing removal referred to a larger bench.', 'Shiv Sena split, 2022.', 'Speaker directed to decide; Governor\'s floor test call held unjustified.')
      ],
      q: [
        Q('Essay', 'Examine whether the anti-defection law suppresses healthy debate and dissent within parties.', ['Background: Aaya Ram Gaya Ram, 1967', '52nd and 91st Amendments', 'Grounds and exceptions', 'Kihoto Hollohan; Ravi S. Naik', 'Speaker\'s role: Keisham Meghachandra, Subhash Desai', 'Criticism: whip on all votes; Dinesh Goswami Committee, Law Commission 170th Report', 'Reform proposals']),
        Q('Short note', 'Role of the Speaker under the Tenth Schedule.', ['Paragraph 6', 'Tribunal status: Kihoto Hollohan', 'Time limits: Keisham Meghachandra', 'Bias concerns and independent tribunal proposal'])
      ]
    }),
    'constitution': A('Meaning, kinds and salient features of the Constitution', 'A Constitution is the basic law that creates the organs of government, distributes power among them, and limits that power to protect individual rights. Constitutionalism is the idea that government must be limited by law. The Indian Constitution is written and lengthy, partly rigid and partly flexible, federal with a strong unitary bias, parliamentary in form, and committed to fundamental rights, judicial review and secularism.', {
      k: ['Kinds: written vs unwritten; rigid vs flexible; federal vs unitary; presidential vs parliamentary', 'Salient features: lengthiest written constitution; drawn from many sources; blend of rigidity and flexibility (Art. 368); federal system with unitary bias; parliamentary government; fundamental rights; Directive Principles; fundamental duties; independent judiciary and judicial review; secular State; universal adult franchise; single citizenship; emergency provisions', 'K.C. Wheare: "quasi-federal"; Granville Austin: "co-operative federalism"', 'Federal features: dual polity, written Constitution, division of powers (Seventh Schedule), supremacy of the Constitution, rigidity, independent judiciary, bicameralism', 'Unitary features: strong Centre, single Constitution and citizenship, Art. 3, emergency powers, appointed Governors, all-India services, integrated judiciary'],
      c: [
        C('Kesavananda Bharati v. State of Kerala', '(1973) 4 SCC 225', 'Is there any limit on Parliament\'s power to amend the Constitution?', 'Parliament cannot alter the basic structure, which includes supremacy of the Constitution, republican and democratic government, secularism, separation of powers and federalism.', 'Challenge to the 24th, 25th and 29th Amendments.', 'Basic structure doctrine established (7:6).'),
        C('S.R. Bommai v. Union of India', '(1994) 3 SCC 1', 'Is federalism part of the basic structure?', 'Federalism and secularism are basic features; the States are not mere appendages of the Centre.', 'Dismissals of State governments under Art. 356.', 'Judicial review of Art. 356 proclamations affirmed.')
      ],
      q: [
        Q('Essay', 'Explain the salient features of the Indian Constitution.', ['Introduction: nature of the Constitution', 'Each salient feature with its article', 'Basic structure (Kesavananda)', 'Conclusion: a living document']),
        Q('Essay', 'Critically examine the federal features of the Indian Constitution.', ['Meaning of federation', 'Federal features', 'Unitary features', 'Wheare, Austin, Ambedkar', 'State of W.B. v. Union (1963); S.R. Bommai (1994)', 'Conclusion: quasi-federal / co-operative federalism']),
        Q('Short note', 'Constitutionalism.', ['Meaning: limited government', 'Elements: rule of law, separation of powers, judicial review, rights', 'Indian position: basic structure'])
      ],
      notes: { unit: 'I', note: 'Meaning and kinds of Constitution, constitutionalism, salient features, federal and unitary features.' }
    }),
    'preamble': A('The Preamble', 'The Preamble declares the source of authority (the people of India), the nature of the State (sovereign, socialist, secular, democratic republic), its objectives (justice, liberty, equality, fraternity) and the date of adoption. "Socialist", "secular" and "integrity" were added by the 42nd Amendment, 1976.', {
      k: ['Based on the Objectives Resolution', 'Not a source of power or a limitation, but a key to interpretation', 'Part of the Constitution and amendable, subject to the basic structure (Kesavananda)', 'Ernest Barker called it the "key-note" of the Constitution; K.M. Munshi called it its "political horoscope"'],
      m: ['42nd Amendment, 1976: "socialist", "secular", "integrity"'],
      c: [
        C('In re Berubari Union', 'AIR 1960 SC 845', 'Is the Preamble a part of the Constitution?', 'The Preamble is a key to the minds of the makers but not part of the Constitution.', 'Cession of territory to Pakistan.', 'Overruled on this point in Kesavananda.'),
        C('Kesavananda Bharati v. State of Kerala', '(1973) 4 SCC 225', 'Is the Preamble part of the Constitution, and can it be amended?', 'The Preamble is part of the Constitution and can be amended under Art. 368, but its basic features cannot be destroyed.', 'Considered in the basic structure case.', 'Berubari overruled on this point.'),
        C('Dr. Balram Singh v. Union of India', '2024 INSC 893', 'Can "socialist" and "secular", added in 1976, be struck out because the Preamble carries the date 26 November 1949?', 'The amending power extends to the Preamble; the date of adoption does not restrict it; both words reflect the Constitution\'s scheme and the long passage of time.', 'Petitions filed in 2020.', 'Petitions dismissed on 25 November 2024.')
      ],
      q: [
        Q('Essay', '"Preamble is a key to open the minds of the framers." Discuss the objectives and values enshrined in it.', ['Text', 'Each key word explained', 'Objectives Resolution', 'Berubari and Kesavananda', 'Amendability; Balram Singh (2024)', 'Use in interpretation']),
        Q('Short note', 'Can the Preamble be amended?', ['Berubari', 'Kesavananda', '42nd Amendment', 'Balram Singh (2024)'])
      ],
      notes: { unit: 'I', note: 'Preamble: meaning, scope, objectives and values, Berubari and Kesavananda.' }
    })
  }
};
})();
