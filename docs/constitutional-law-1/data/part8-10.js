(function () {
const A = (title, summary, x = {}) => ({ title, summary, clauses: x.k || [], amendments: x.m || [], cases: x.c || [], questions: x.q || [], notes: x.notes || null, omitted: x.o });
const C = (name, cite, i, r, a, c) => ({ name, cite, i, r, a, c });
const Q = (type, q, outline) => ({ type, q, outline });
window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};
const P = window.COI.parts;

P['VIII'] = {
  key: 'VIII', part: 'VIII', title: 'The Union Territories', range: 'Art. 239–242',
  intro: 'Union territories are administered by the President through an Administrator. Parliament may create legislatures and councils of ministers for some of them, and Delhi has a special scheme under Article 239AA. There are eight Union territories today.',
  groups: [{ slug: 'all', name: 'Articles', range: '239–242', ids: ['239', '239A', '239AA', '239AB', '239B', '240', '241', '242'] }],
  articles: {
    '239': A('Administration of Union territories.', 'Every Union territory is administered by the President, acting through an Administrator appointed by him with such designation as he specifies. The President may appoint the Governor of an adjoining State as Administrator, who then acts independently of his Council of Ministers.', {
      k: ['Administrators are called Lieutenant Governor (Delhi, Puducherry, J&K, Ladakh, Andaman & Nicobar) or Administrator (others)', 'Parliament legislates for UTs on all subjects including State List matters (Art. 246(4))'],
      c: [C('Satya Dev Bushahri v. Padam Dev', 'AIR 1954 SC 587', 'Are Part C States (now UTs) under the control of the Centre?', 'They are centrally administered; the President is their constitutional head.', 'Himachal Pradesh as a Part C State.', 'Central administration affirmed.')]
    }),
    '239A': A('Creation of local Legislatures or Council of Ministers or both for certain Union territories.', 'Parliament may by law create for Puducherry a body, elected or partly nominated, to function as a legislature, or a Council of Ministers, or both. Such a law is not an amendment under Article 368.', { k: ['Government of Union Territories Act, 1963', 'Applies today to Puducherry; J&K has a legislature under the J&K Reorganisation Act, 2019'], m: ['14th Amendment, 1962'] }),
    '239AA': A('Special provisions with respect to Delhi.', 'The Union territory of Delhi is called the National Capital Territory, with a Lieutenant Governor, an elected Legislative Assembly and a Council of Ministers headed by a Chief Minister. The Assembly may legislate on State and Concurrent List matters except public order, police and land. The LG acts on ministerial advice, but on a difference of opinion may refer the matter to the President, whose decision binds.', {
      k: ['Inserted by the 69th Amendment, 1991 (Balakrishnan Committee)', 'Excluded subjects: Entries 1, 2 and 18 of List II', 'Proviso to 239AA(4): reference to the President on difference of opinion', 'Government of NCT of Delhi (Amendment) Act, 2023 created the National Capital Civil Service Authority'],
      m: ['69th Amendment, 1991'],
      c: [
        C('State (NCT of Delhi) v. Union of India', '(2018) 8 SCC 501', 'Is the LG bound by the aid and advice of the Delhi Council of Ministers?', 'The LG is bound by aid and advice on matters within the Assembly\'s competence; the reference proviso is for exceptional matters, not every matter. Delhi is not a State.', '5-judge bench.', 'Collaborative federalism; LG is not an independent decision-maker.'),
        C('Government of NCT of Delhi v. Union of India (Services case)', '2023 INSC 461', 'Does the Delhi Government control "services" (State List Entry 41)?', 'Yes, except for public order, police and land; an elected government must control its civil servants for accountability (5-judge bench).', 'Decided 11 May 2023.', 'Services placed with Delhi Government; Parliament later enacted the 2023 Amendment Act, which is under challenge.')
      ],
      q: [Q('Short note', 'Constitutional position of Delhi.', ['Art. 239AA', 'NCT of Delhi (2018)', 'Services case (2023) and the 2023 Act'])]
    }),
    '239AB': A('Provision in case of failure of constitutional machinery.', 'If the President is satisfied, on a report from the LG or otherwise, that the administration of Delhi cannot be carried on in accordance with Article 239AA, he may suspend its operation by order.', { m: ['69th Amendment, 1991'] }),
    '239B': A('Power of administrator to promulgate Ordinances during recess of Legislature.', 'When the legislature of Puducherry is not in session, the Administrator may, with the President\'s instructions, promulgate Ordinances having the force of law. They cease six weeks after the legislature reassembles.', { m: ['27th Amendment, 1971'] }),
    '240': A('Power of President to make regulations for certain Union territories.', 'The President may make regulations for the peace, progress and good government of Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli and Daman and Diu, and (when it has no legislature) Puducherry. Regulations may repeal or amend Acts of Parliament applying to them.', {}),
    '241': A('High Courts for Union territories.', 'Parliament may by law constitute a High Court for a Union territory or declare a court in it to be a High Court.', { k: ['Delhi High Court (1966)', 'Common High Court of J&K and Ladakh'] }),
    '242': A('Coorg. [Omitted]', 'Related to the administration of Coorg as a Part C State.', { o: 'Omitted by the 7th Amendment, 1956.' })
  }
};

const panch = [
  ['243', 'Definitions.', 'Defines district, Gram Sabha, intermediate level, Panchayat, Panchayat area, population and village for Part IX.'],
  ['243A', 'Gram Sabha.', 'A Gram Sabha may exercise such powers and perform such functions at the village level as the State Legislature provides by law.'],
  ['243B', 'Constitution of Panchayats.', 'Every State shall constitute Panchayats at the village, intermediate and district levels. Panchayats at the intermediate level need not be constituted in States with a population below 20 lakh.'],
  ['243C', 'Composition of Panchayats.', 'The State Legislature provides for composition. All seats are filled by direct election from territorial constituencies; the ratio of population to seats should be uniform across the State. The chairperson of a village Panchayat is elected as the State provides; at higher levels, chairpersons are elected from among elected members.'],
  ['243E', 'Duration of Panchayats, etc.', 'Every Panchayat continues for five years from its first meeting unless dissolved sooner. Elections must be completed before expiry, or within six months of dissolution.'],
  ['243F', 'Disqualifications for membership.', 'A person is disqualified if disqualified under any law for elections to the State Legislature (with age 21 sufficing), or under a law made by the State Legislature. Disputes are decided by an authority the Legislature specifies.'],
  ['243G', 'Powers, authority and responsibilities of Panchayats.', 'The State Legislature may endow Panchayats with powers and authority to function as institutions of self-government, including preparing plans for economic development and social justice and implementing schemes, including on the 29 matters in the Eleventh Schedule.'],
  ['243H', 'Powers to impose taxes by, and Funds of, the Panchayats.', 'The State Legislature may authorise Panchayats to levy and collect taxes, duties, tolls and fees, assign State taxes to them, provide grants-in-aid, and create funds.'],
  ['243I', 'Constitution of Finance Commission to review financial position.', 'The Governor shall constitute a State Finance Commission every five years to review the finances of Panchayats and recommend distribution of State taxes and grants.'],
  ['243J', 'Audit of accounts of Panchayats.', 'The State Legislature may provide for the maintenance and audit of Panchayat accounts.'],
  ['243L', 'Application to Union territories.', 'Part IX applies to Union territories with the Administrator in place of the Governor, subject to presidential modifications.'],
  ['243M', 'Part not to apply to certain areas.', 'Part IX does not apply to Scheduled Areas and tribal areas, Nagaland, Meghalaya, Mizoram and hill areas of Manipur, though Parliament may extend it to Scheduled Areas with modifications (done by PESA, 1996).'],
  ['243N', 'Continuance of existing laws and Panchayats.', 'Existing Panchayat laws inconsistent with Part IX continued for up to one year; existing Panchayats continue until their term expires unless dissolved by Assembly resolution.']
];
const muni = [
  ['243P', 'Definitions.', 'Defines Committee, district, Metropolitan area, Municipal area, Municipality, Panchayat and population for Part IXA.'],
  ['243Q', 'Constitution of Municipalities.', 'Every State shall constitute a Nagar Panchayat for a transitional area, a Municipal Council for a smaller urban area, and a Municipal Corporation for a larger urban area. An industrial township may be exempted.'],
  ['243R', 'Composition of Municipalities.', 'All seats are filled by direct election from wards. The Legislature may provide for representation of persons with special knowledge (without voting rights), MPs, MLAs and committee chairpersons.'],
  ['243S', 'Constitution and composition of Wards Committees, etc.', 'Wards Committees shall be constituted in Municipalities with a population of three lakh or more.'],
  ['243U', 'Duration of Municipalities, etc.', 'Five years from the first meeting; elections to be completed before expiry or within six months of dissolution, after a reasonable opportunity of hearing.'],
  ['243V', 'Disqualifications for membership.', 'As for Panchayats: disqualification under laws for State Legislature elections (age 21 sufficing) or a State law.'],
  ['243W', 'Powers, authority and responsibilities of Municipalities, etc.', 'The State Legislature may endow Municipalities with powers to function as institutions of self-government, including the 18 matters in the Twelfth Schedule.'],
  ['243X', 'Power to impose taxes by, and Funds of, the Municipalities.', 'The State may authorise Municipalities to levy taxes, duties, tolls and fees, assign State taxes, and provide grants-in-aid.'],
  ['243Y', 'Finance Commission.', 'The State Finance Commission under Article 243I also reviews the finances of Municipalities.'],
  ['243Z', 'Audit of accounts of Municipalities.', 'The State Legislature may provide for maintenance and audit of municipal accounts.'],
  ['243ZB', 'Application to Union territories.', 'Part IXA applies to Union territories with modifications made by the President.'],
  ['243ZC', 'Part not to apply to certain areas.', 'Part IXA does not apply to Scheduled Areas and tribal areas, or the Darjeeling Gorkha Hill Council area; Parliament may extend it.'],
  ['243ZD', 'Committee for district planning.', 'Every State shall constitute a District Planning Committee to consolidate plans of Panchayats and Municipalities and prepare a draft development plan for the district. At least four-fifths of members are elected from among elected members of district Panchayats and Municipalities.'],
  ['243ZE', 'Committee for Metropolitan planning.', 'Every Metropolitan area shall have a Metropolitan Planning Committee to prepare a draft development plan; at least two-thirds of members are elected from among elected members of Municipalities and chairpersons of Panchayats.'],
  ['243ZF', 'Continuance of existing laws and Municipalities.', 'Existing municipal laws inconsistent with Part IXA continued for up to one year; existing Municipalities continue until their term expires.']
];
const coop = [
  ['243ZH', 'Definitions.', 'Defines authorised person, board, co-operative society, multi-State co-operative society, office bearer, registrar and State Act for Part IXB.'],
  ['243ZI', 'Incorporation of co-operative societies.', 'The State Legislature may provide for incorporation, regulation and winding up of co-operative societies based on voluntary formation, democratic member control, member economic participation and autonomous functioning.'],
  ['243ZJ', 'Number and term of members of board and its office bearers.', 'A board shall have at most 21 directors, with one seat each reserved for SCs/STs and two for women; term of five years.'],
  ['243ZK', 'Election of members of board.', 'Elections must be held before the board\'s term expires, conducted by an authority provided by the State Legislature.'],
  ['243ZL', 'Supersession and suspension of board and interim management.', 'A board may not be superseded or suspended for more than six months, and only on specified grounds such as persistent default or negligence.'],
  ['243ZM', 'Audit of accounts of co-operative societies.', 'Accounts must be audited within six months of the close of each financial year by an auditor from an approved panel.'],
  ['243ZN', 'Convening of general body meetings.', 'The annual general body meeting must be held within six months of the close of the financial year.'],
  ['243ZO', 'Right of a member to get information.', 'Members have access to the society\'s books, information and accounts.'],
  ['243ZP', 'Returns.', 'Every society shall file returns with the authority designated by the State within six months of each financial year.'],
  ['243ZQ', 'Offences and penalties.', 'The State Legislature may make provisions for offences relating to co-operative societies and their penalties.'],
  ['243ZR', 'Application to multi-State co-operative societies.', 'Part IXB applies to multi-State co-operative societies with references to the State Legislature read as Parliament.'],
  ['243ZS', 'Application to Union territories.', 'Part IXB applies to Union territories with modifications by the President.'],
  ['243ZT', 'Continuance of existing laws.', 'Existing co-operative laws inconsistent with Part IXB continued for up to one year.']
];
const mk = (rows, x = {}) => Object.fromEntries(rows.map(([id, t, s]) => [id, A(t, s, x[id] || {})]));

P['IX'] = {
  key: 'IX', part: 'IX', title: 'The Panchayats', range: 'Art. 243–243O',
  intro: 'The 73rd Amendment, 1992 gave constitutional status to rural local government, implementing Article 40. It sets up a three-tier system with regular elections, reservation for SCs, STs and women, State Finance Commissions and a State Election Commission. The Eleventh Schedule lists 29 subjects that may be devolved.',
  groups: [{ slug: 'all', name: 'Articles', range: '243–243O', ids: ['243', '243A', '243B', '243C', '243D', '243E', '243F', '243G', '243H', '243I', '243J', '243K', '243L', '243M', '243N', '243O'] }],
  articles: Object.assign(mk(panch), {
    '243D': A('Reservation of seats.', 'Seats shall be reserved for SCs and STs in every Panchayat in proportion to their population, and not less than one-third of all seats (including SC/ST seats) for women. Offices of chairpersons shall be reserved likewise. The State may reserve seats for backward classes.', {
      k: ['Rotation of reserved seats among constituencies', 'Many States have raised women\'s reservation to 50% by law'],
      c: [C('K. Krishna Murthy v. Union of India', '(2010) 7 SCC 202', 'Is reservation for backward classes in local bodies, beyond 50%, valid?', 'Articles 243D(6) and 243T(6) are valid; local-body reservation differs from education and employment and needs empirical findings on political backwardness; the total should not exceed 50%.', '5-judge bench.', 'Upheld with limits.'), C('Vikas Kishanrao Gawali v. State of Maharashtra', '(2021) 6 SCC 73', 'Can OBC reservation in local bodies be provided without data?', 'Triple test: a dedicated commission, proportion specified on its findings, and total reservation within 50%.', 'Maharashtra ZP elections.', 'OBC quotas struck down until the triple test is met.')]
    }),
    '243K': A('Elections to the Panchayats.', 'Superintendence, direction and control of electoral rolls and elections to Panchayats vest in a State Election Commission, consisting of a State Election Commissioner appointed by the Governor, who can be removed only like a High Court judge.', {
      c: [C('Kishansing Tomar v. Municipal Corporation of Ahmedabad', '(2006) 8 SCC 352', 'Can elections to local bodies be postponed?', 'Elections must be held before expiry of the term; the State Election Commission has powers akin to the Election Commission of India and the State must cooperate.', 'Delayed municipal elections.', 'Directions issued.')]
    }),
    '243O': A('Bar to interference by courts in electoral matters.', 'The validity of laws on delimitation and allotment of seats cannot be questioned in court, and no Panchayat election shall be called in question except by an election petition.', {
      c: [C('State of U.P. v. Pradhan Sangh Kshettra Samiti', '1995 Supp (2) SCC 305', 'Can courts interfere with delimitation of Panchayat constituencies?', 'Article 243O bars judicial interference with delimitation orders once the election process has started.', 'U.P. Panchayat delimitation.', 'High Court interference set aside.')]
    })
  })
};
P['IX'].articles['243'].questions = [Q('Essay', 'Explain the constitutional provisions on local self-government with special emphasis on the 73rd and 74th Amendments.', ['Art. 40 and history: Balwant Rai Mehta, Ashok Mehta, L.M. Singhvi', 'Part IX: Gram Sabha, three tiers, reservation, duration, SFC, SEC', 'Part IXA: types of Municipalities, Wards Committees, DPC, MPC', 'Eleventh and Twelfth Schedules', 'K. Krishna Murthy; Kishansing Tomar; Vikas Gawali', 'PESA, 1996', 'Critical assessment: funds, functions, functionaries'])];

P['IXA'] = {
  key: 'IXA', part: 'IXA', title: 'The Municipalities', range: 'Art. 243P–243ZG',
  intro: 'The 74th Amendment, 1992 gave constitutional status to urban local bodies: Nagar Panchayats, Municipal Councils and Municipal Corporations. It mirrors Part IX on elections, reservation and finance, and adds District and Metropolitan Planning Committees. The Twelfth Schedule lists 18 subjects.',
  groups: [{ slug: 'all', name: 'Articles', range: '243P–243ZG', ids: ['243P', '243Q', '243R', '243S', '243T', '243U', '243V', '243W', '243X', '243Y', '243Z', '243ZA', '243ZB', '243ZC', '243ZD', '243ZE', '243ZF', '243ZG'] }],
  articles: Object.assign(mk(muni), {
    '243T': A('Reservation of seats.', 'Seats in every Municipality are reserved for SCs and STs in proportion to population, and at least one-third for women, by rotation. Chairpersons\' offices may be reserved as the State provides, and seats may be reserved for backward classes.', { c: [C('K. Krishna Murthy v. Union of India', '(2010) 7 SCC 202', 'See Article 243D.', 'Local-body reservation needs a separate assessment of political backwardness; ceiling of 50%.', '5-judge bench.', 'Upheld with limits.')] }),
    '243ZA': A('Elections to the Municipalities.', 'Elections to Municipalities are conducted by the State Election Commission under Article 243K.', { c: [C('Suresh Mahajan v. State of Madhya Pradesh', '(2022) 12 SCC 770', 'Can local-body elections be postponed pending the OBC triple test?', 'Elections cannot be delayed beyond the five-year term; the SEC must notify elections, with OBC reservation only where the triple test is complete.', 'Elections stalled in M.P. and Maharashtra.', 'Elections directed.')] }),
    '243ZG': A('Bar to interference by courts in electoral matters.', 'Delimitation and seat allotment laws cannot be questioned in court; municipal elections can be challenged only by election petition.', {})
  })
};

P['IXB'] = {
  key: 'IXB', part: 'IXB', title: 'The Co-operative Societies', range: 'Art. 243ZH–243ZT',
  intro: 'The 97th Amendment, 2011 added Part IXB on co-operative societies, along with "co-operative societies" in Article 19(1)(c) and Article 43B. In 2021 the Supreme Court held Part IXB invalid for State co-operatives for want of ratification by the States; it survives for multi-State co-operative societies.',
  groups: [{ slug: 'all', name: 'Articles', range: '243ZH–243ZT', ids: coop.map(r => r[0]) }],
  articles: mk(coop, { '243ZH': { c: [C('Union of India v. Rajendra N. Shah', '(2021) 10 SCC 1', 'Was Part IXB validly enacted without ratification by half the State Legislatures?', 'Co-operative societies are in Entry 32 of the State List; Part IXB significantly affected State legislative power and needed ratification under the proviso to Article 368(2). Severability applied.', 'Gujarat High Court had struck it down.', 'Part IXB struck down for State co-operatives; valid for multi-State co-operatives (2:1 on severability).')], m: ['97th Amendment, 2011'] } })
};

P['X'] = {
  key: 'X', part: 'X', title: 'The Scheduled and Tribal Areas', range: 'Art. 244–244A',
  intro: 'Part X provides special administration for Scheduled Areas under the Fifth Schedule and tribal areas of Assam, Meghalaya, Tripura and Mizoram under the Sixth Schedule, through Autonomous District Councils.',
  groups: [{ slug: 'all', name: 'Articles', range: '244–244A', ids: ['244', '244A'] }],
  articles: {
    '244': A('Administration of Scheduled Areas and Tribal Areas.', 'The Fifth Schedule applies to the administration and control of Scheduled Areas and Scheduled Tribes in States other than Assam, Meghalaya, Tripura and Mizoram. The Sixth Schedule applies to tribal areas in those four States.', {
      k: ['Fifth Schedule: Tribes Advisory Council; Governor may modify application of laws', 'Sixth Schedule: Autonomous District and Regional Councils with legislative, judicial and executive powers', 'PESA, 1996 extended Panchayats to Fifth Schedule areas'],
      c: [C('Samatha v. State of Andhra Pradesh', '(1997) 8 SCC 191', 'Can the State lease tribal land in Scheduled Areas to private mining companies?', 'Transfer of tribal land in Scheduled Areas to non-tribals, including private companies, is prohibited by the Fifth Schedule and A.P. regulations.', 'Leases for mining in tribal areas.', 'Leases void.'), C('Orissa Mining Corporation v. Ministry of Environment and Forest (Niyamgiri)', '(2013) 6 SCC 476', 'Must Gram Sabhas be consulted before forest land is diverted for mining?', 'Under the Forest Rights Act and PESA, Gram Sabhas must decide on religious and community rights before diversion.', 'Vedanta bauxite mining in Niyamgiri hills.', 'Gram Sabhas consulted; they rejected the project.')]
    }),
    '244A': A('Formation of an autonomous State comprising certain tribal areas in Assam and creation of local Legislature or Council of Ministers or both therefor.', 'Parliament may by law form an autonomous State within Assam comprising tribal areas, with a legislature, a council of ministers or both. Such a law is not an amendment under Article 368.', { m: ['22nd Amendment, 1969'], k: ['Used for Meghalaya as an autonomous State in 1970 before full statehood in 1972'] })
  }
};
})();
