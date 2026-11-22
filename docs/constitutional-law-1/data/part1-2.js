(function () {
const A = (title, summary, x = {}) => ({ title, summary, clauses: x.k || [], amendments: x.m || [], cases: x.c || [], questions: x.q || [], notes: x.notes || null, omitted: x.o });
const C = (name, cite, i, r, a, c) => ({ name, cite, i, r, a, c });
const Q = (type, q, outline) => ({ type, q, outline });
window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};

window.COI.parts['I'] = {
  key: 'I', part: 'I', title: 'The Union and its Territory', range: 'Art. 1–4',
  intro: 'Part I declares India a Union of States and gives Parliament power to admit new States and to reorganise existing ones by ordinary law. Because the Union is "indestructible" while the States are not, the Supreme Court has described Indian federalism as quasi-federal.',
  groups: [{ slug: 'all', name: 'Articles', range: '1–4', ids: ['1', '2', '2A', '3', '4'] }],
  articles: {
    '1': A('Name and territory of the Union.', 'India, that is Bharat, shall be a Union of States. The States and their territories are as specified in the First Schedule. The territory of India comprises the territories of the States, the Union territories specified in the First Schedule, and such other territories as may be acquired.', {
      k: ['"Union of States", not "Federation": the Union is not the result of an agreement among States and no State can secede (Dr. Ambedkar)', 'Territory of India is wider than the Union of India: it includes acquired territories', 'States and UTs listed in the First Schedule (28 States and 8 UTs after the 2019 J&K reorganisation and 2020 merger of Dadra & Nagar Haveli with Daman & Diu)'],
      c: [
        C('State of West Bengal v. Union of India', 'AIR 1963 SC 1241', 'Can Parliament acquire land vested in a State under the Coal Bearing Areas Act? Are States sovereign?', 'The Constitution is not truly federal; States are not sovereign and Parliament may acquire State property for Union purposes.', 'Indian federalism does not arise from a compact; the Union holds residuary and overriding powers.', 'Acquisition upheld; States are not sovereign units.'),
        C('S.R. Bommai v. Union of India', '(1994) 3 SCC 1', 'Is federalism a basic feature, and what is the nature of the Indian Union?', 'Federalism is part of the basic structure; States are not mere appendages of the Centre within their sphere.', 'Article 356 dismissals of State governments examined.', 'Federalism and secularism held basic features.')
      ],
      q: [Q('Essay', '"The Indian Constitution is quasi-federal." Discuss with reference to Articles 1 to 4.', ['"Union of States": Ambedkar\'s explanation', 'Federal features: dual polity, division of powers, written constitution, independent judiciary', 'Unitary features: Art. 3, single citizenship, emergency, Art. 249, all-India services', 'K.C. Wheare: "quasi-federal"', 'State of W.B. v. Union (1963); S.R. Bommai (1994)'])],
      notes: { unit: 'I', note: 'Federal and unitary features of the Constitution.' }
    }),
    '2': A('Admission or establishment of new States.', 'Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.', {
      k: ['Applies to territories not already part of India', 'Sikkim admitted by the 36th Amendment, 1975'],
      m: ['35th Amendment, 1974: Sikkim as associate State (Art. 2A)', '36th Amendment, 1975: Sikkim made a full State; Art. 2A omitted']
    }),
    '2A': A('Sikkim to be associated with the Union. [Omitted]', 'Inserted to give Sikkim the status of an associate State with representation in Parliament. Omitted when Sikkim became the 22nd State.', { o: 'Inserted by the 35th Amendment, 1974; omitted by the 36th Amendment, 1975.', m: ['35th Amendment, 1974', '36th Amendment, 1975'] }),
    '3': A('Formation of new States and alteration of areas, boundaries or names of existing States.', 'Parliament may by law form a new State by separating territory from any State or uniting States, increase or diminish the area of any State, or alter its boundaries or name. The Bill must be introduced on the President\'s recommendation, and he must first refer it to the affected State Legislature for its views within a specified period. Parliament is not bound by those views.', {
      k: ['Ordinary law, simple majority; not an amendment under Art. 368 (Art. 4(2))', 'States\' views are only consultative', 'Explanation: "State" includes Union territory; power to form a new State includes uniting parts of States or UTs', 'Used for States Reorganisation Act, 1956; Telangana (2014); J&K Reorganisation Act, 2019'],
      m: ['5th Amendment, 1955: period for State views'],
      c: [
        C('In re Berubari Union and Exchange of Enclaves', 'AIR 1960 SC 845', 'Can Parliament cede Indian territory (Berubari) to Pakistan by law under Article 3?', 'Article 3 does not cover cession of territory to a foreign State; that requires a constitutional amendment under Article 368. The Preamble is not part of the Constitution (later overruled on this point).', 'The Nehru–Noon Agreement, 1958 involved transfer to Pakistan.', '9th Amendment, 1960 enacted to implement it.'),
        C('Babulal Parate v. State of Bombay', 'AIR 1960 SC 51', 'Must Parliament refer a modified Bill back to the State Legislature?', 'Once the Bill is referred, Parliament may amend it without a fresh reference; the State\'s views do not bind Parliament.', 'Bombay Reorganisation Bill amended after reference.', 'Bombay Reorganisation Act upheld.'),
        C('Union of India v. Sukumar Sengupta', '1990 Supp SCC 545', 'Did the transfer of Tin Bigha lease to Bangladesh amount to cession?', 'A lease in perpetuity retaining sovereignty is not cession; no amendment needed.', 'India retained sovereignty over Tin Bigha.', 'Lease upheld.'),
        C('In re Article 370 of the Constitution', '2023 INSC 1066', 'Was the J&K Reorganisation Act, 2019, converting a State into Union territories, valid?', 'The Court upheld the creation of the UT of Ladakh under Article 3(a) read with the Explanation, and accepted the Solicitor General\'s statement that J&K statehood would be restored; it left open whether a State can be reduced entirely to a UT.', 'Decided by a 5-judge bench on 11 December 2023.', 'Abrogation of Article 370 upheld; elections directed by 30 September 2024.')
      ],
      q: [
        Q('Essay', 'Explain the power of Parliament to reorganise States. Can Parliament cede Indian territory to a foreign country?', ['Art. 3 procedure', 'Art. 4: not an amendment', 'Babulal Parate', 'Berubari: cession needs Art. 368; 9th and 100th Amendments (India–Bangladesh LBA, 2015)', 'Sukumar Sengupta; Ram Kishore Sen (1966): boundary settlement is not cession', 'Article 370 case (2023)']),
        Q('Short note', 'Berubari Union case.', ['Facts', 'Holding on Art. 3 vs 368', 'Holding on Preamble, later corrected in Kesavananda'])
      ],
      notes: { unit: 'I', note: 'Berubari discussed in the Preamble section.' }
    }),
    '4': A('Laws made under articles 2 and 3 to provide for the amendment of the First and Fourth Schedules and supplemental, incidental and consequential matters.', 'A law under Article 2 or 3 shall amend the First and Fourth Schedules as necessary and may contain supplemental, incidental and consequential provisions, including on representation in Parliament and State Legislatures. Such a law is not deemed an amendment of the Constitution for Article 368.', {
      k: ['Simple majority suffices', 'Changes the First Schedule (territory) and Fourth Schedule (Rajya Sabha seats)'],
      c: [C('Mangal Singh v. Union of India', 'AIR 1967 SC 944', 'Could the Punjab Reorganisation Act reduce the Haryana Assembly below the minimum strength in Article 170?', 'Article 4 power to make supplemental provisions includes reducing membership; such law is not an amendment.', 'Haryana Assembly had 54 members against the minimum of 60.', 'Act upheld.')]
    })
  }
};

window.COI.parts['II'] = {
  key: 'II', part: 'II', title: 'Citizenship', range: 'Art. 5–11',
  intro: 'Part II only identifies who were citizens on 26 January 1950 and those affected by Partition migration. All later acquisition and loss of citizenship is governed by the Citizenship Act, 1955, made under Article 11. India has single citizenship.',
  groups: [{ slug: 'all', name: 'Articles', range: '5–11', ids: ['5', '6', '7', '8', '9', '10', '11'] }],
  articles: {
    '5': A('Citizenship at the commencement of the Constitution.', 'At the commencement of the Constitution, every person domiciled in India who was born in India, or either of whose parents was born in India, or who had been ordinarily resident in India for at least five years immediately before, became a citizen.', {
      k: ['Domicile plus one of: birth in India, parent born in India, five years\' residence', 'Only one domicile under Indian law'],
      c: [C('D.P. Joshi v. State of Madhya Bharat', 'AIR 1955 SC 334', 'Was a capitation fee charged only on non-domiciles of Madhya Bharat valid?', 'Domicile and residence are distinct from place of birth; classification by residence for admission fees is permitted.', 'Fee charged on residence, not birth.', 'Upheld.'), C('Pradeep Jain v. Union of India', '(1984) 3 SCC 654', 'Is "domicile of a State" a valid concept?', 'There is only one domicile in India: domicile of India. Residence-based reservations in medical admissions must be limited.', 'States used domicile quotas.', 'Guidelines limiting residence quotas.')],
      q: [Q('Essay', 'Explain the constitutional and statutory provisions on acquisition and termination of Indian citizenship.', ['Arts. 5–8 at commencement', 'Art. 9, 10, 11', 'Citizenship Act, 1955: birth, descent, registration, naturalisation, incorporation of territory', 'Termination: renunciation, termination (voluntary acquisition), deprivation', 'Overseas Citizenship of India (s.7A)', 'CAA, 2019 (s.6B) and 2024 Rules', 'Single citizenship'])],
      notes: { unit: 'I', note: 'Citizenship by domicile and the four constitutional categories.' }
    }),
    '6': A('Rights of citizenship of certain persons who have migrated to India from Pakistan.', 'A person who migrated to India from Pakistan is a citizen if he, a parent or grandparent was born in undivided India, and he migrated before 19 July 1948 and has resided since, or migrated later and was registered as a citizen.', { k: ['Cut-off date: 19 July 1948'], notes: { unit: 'I', note: 'Migrants from Pakistan.' } }),
    '7': A('Rights of citizenship of certain migrants to Pakistan.', 'A person who migrated to Pakistan after 1 March 1947 is not a citizen, unless he returned under a permit for resettlement or permanent return.', { k: ['Overrides Arts. 5 and 6'], notes: { unit: 'I', note: 'Migrants to Pakistan.' } }),
    '8': A('Rights of citizenship of certain persons of Indian origin residing outside India.', 'A person of Indian origin (born, or a parent or grandparent born, in undivided India) ordinarily residing abroad is a citizen if registered by an Indian diplomatic or consular representative.', { notes: { unit: 'I', note: 'Persons of Indian origin abroad.' } }),
    '9': A('Persons voluntarily acquiring citizenship of a foreign State not to be citizens.', 'No person is a citizen under Article 5, 6 or 8 if he has voluntarily acquired citizenship of a foreign State.', {
      k: ['Covers acquisition before 26 January 1950; later cases fall under s.9 Citizenship Act', 'The Central Government decides whether citizenship was acquired (Rule 30, Citizenship Rules)'],
      c: [C('State of Andhra Pradesh v. Abdul Khader', 'AIR 1961 SC 1467', 'Who decides whether an Indian has voluntarily acquired foreign citizenship?', 'Under s.9(2) Citizenship Act, only the Central Government can decide; courts cannot.', 'Accused claimed to be Indian though he held a Pakistani passport.', 'Question referred to the Central Government.')],
      notes: { unit: 'I', note: 'Voluntary acquisition of foreign citizenship.' }
    }),
    '10': A('Continuance of the rights of citizenship.', 'Every person who is or is deemed to be a citizen under Part II continues to be one, subject to any law made by Parliament.', {}),
    '11': A('Parliament to regulate the right of citizenship by law.', 'Nothing in Part II derogates from Parliament\'s power to make any provision about acquisition and termination of citizenship and all other matters relating to citizenship.', {
      k: ['Basis of the Citizenship Act, 1955', 'Amendments: 1986, 1992, 2003 (OCI; illegal migrant), 2015, 2019 (CAA)'],
      c: [
        C('Sarbananda Sonowal v. Union of India', '(2005) 5 SCC 665', 'Was the IMDT Act, 1983, applying only to Assam, valid?', 'Large-scale illegal migration amounts to "external aggression" under Article 355; the Act made detection nearly impossible.', 'Burden of proof was placed on the complainant.', 'IMDT Act struck down.'),
        C('In re Section 6A of the Citizenship Act, 1955', '2024 INSC 789', 'Is s.6A (Assam Accord: citizenship for migrants entering before 25 March 1971) valid?', 'Parliament has power under Article 11 to confer citizenship on a class; the Assam-specific classification has a rational basis (5-judge bench, 4:1).', 'Section inserted in 1985 after the Assam Accord.', 'Section 6A upheld.')
      ],
      q: [Q('Short note', 'Citizenship (Amendment) Act, 2019.', ['s.2(1)(b) proviso and s.6B', 'Hindus, Sikhs, Buddhists, Jains, Parsis, Christians from Afghanistan, Bangladesh, Pakistan entering before 31 December 2014', 'Rules notified in March 2024', 'Challenges pending in the Supreme Court'])],
      notes: { unit: 'I', note: 'Citizenship Act, 1955 enacted under Article 11.' }
    })
  }
};
})();
