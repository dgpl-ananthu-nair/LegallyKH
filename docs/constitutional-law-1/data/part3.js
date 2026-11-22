// Part III — Fundamental Rights. Case citations are standard reported citations; recent ones verified online.
window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};
window.COI.parts['III'] = {
  key: 'III', part: 'III', title: 'Fundamental Rights', range: 'Art. 12–35',
  intro: 'Part III guarantees rights enforceable against the State. Most are available to all persons; Articles 15, 16, 19, 29 and 30 are limited to citizens. Laws that violate them are void under Article 13, and Article 32 makes their enforcement itself a fundamental right.',
  groups: [
    { slug: 'general', name: 'General', range: '12–13', ids: ['12', '13'] },
    { slug: 'right-to-equality', name: 'Right to Equality', range: '14–18', ids: ['14', '15', '16', '17', '18'] },
    { slug: 'right-to-freedom', name: 'Right to Freedom', range: '19–22', ids: ['19', '20', '21', '21A', '22'] },
    { slug: 'right-against-exploitation', name: 'Right against Exploitation', range: '23–24', ids: ['23', '24'] },
    { slug: 'right-to-freedom-of-religion', name: 'Right to Freedom of Religion', range: '25–28', ids: ['25', '26', '27', '28'] },
    { slug: 'cultural-and-educational-rights', name: 'Cultural and Educational Rights', range: '29–30', ids: ['29', '30', '31'] },
    { slug: 'saving-of-certain-laws', name: 'Saving of Certain Laws', range: '31A–31D', ids: ['31A', '31B', '31C', '31D'] },
    { slug: 'right-to-constitutional-remedies', name: 'Right to Constitutional Remedies', range: '32–35', ids: ['32', '32A', '33', '34', '35'] }
  ],
  articles: {
    '12': {
      title: 'Definition.',
      summary: 'For Part III, "the State" includes the Government and Parliament of India, the Government and Legislature of each State, and all local or other authorities within India or under the control of the Government of India. Only bodies that fall within this definition can be sued directly for violating fundamental rights.',
      clauses: ['Government and Parliament of India', 'Government and Legislature of each State', 'Local authorities (municipalities, panchayats, district boards)', '"Other authorities": read widely by the courts to include statutory corporations and bodies that are instrumentalities or agencies of the State'],
      amendments: [],
      cases: [
        { name: 'Rajasthan State Electricity Board v. Mohan Lal', cite: 'AIR 1967 SC 1857', i: 'Is a statutory electricity board an "other authority" under Article 12?', r: '"Other authorities" is not confined to bodies exercising governmental or sovereign functions; ejusdem generis does not apply.', a: 'The Board was created by statute and had power to give binding directions, breach of which was a criminal offence.', c: 'The Board is "State". Statutory bodies with power to issue binding directions fall within Article 12.' },
        { name: 'Ajay Hasia v. Khalid Mujib Sehravardi', cite: '(1981) 1 SCC 722', i: 'Is a society registered under the Societies Registration Act, which runs an engineering college, "State"?', r: 'Instrumentality or agency test. Indicators: State holds share capital, financial assistance meets most expenditure, monopoly status, deep and pervasive State control, public importance of functions, transfer of a government department.', a: 'The society was wholly funded and controlled by the State and Central Governments.', c: 'The society is "State". How a body was created is irrelevant; why it was created and who controls it are decisive.' },
        { name: 'Pradeep Kumar Biswas v. Indian Institute of Chemical Biology', cite: '(2002) 5 SCC 111', i: 'Is CSIR "State"?', r: 'The test is whether the body is financially, functionally and administratively dominated by or under the control of the Government, and the control must be deep and pervasive (7-judge bench).', a: 'CSIR was funded and controlled by the Government of India, with the Prime Minister as President.', c: 'CSIR is "State". Sabhajit Tewary (1975) overruled.' },
        { name: 'Zee Telefilms Ltd. v. Union of India', cite: '(2005) 4 SCC 649', i: 'Is the BCCI "State" under Article 12?', r: 'Applying Pradeep Kumar Biswas, a body is State only if it is financially, functionally and administratively dominated by the Government.', a: 'BCCI was not created by statute, received no State funding, and was not controlled by the Government; performing public functions alone was not enough.', c: 'BCCI is not "State" (3:2). A remedy may still lie under Article 226 because it performs public functions.' }
      ],
      questions: [
        { type: 'Essay', q: 'Define "State" under Article 12. Discuss the judicial trends in widening the concept of "other authorities".', outline: ['Text of Article 12 and its purpose in Part III', 'Early narrow view: University of Madras v. Shantha Bai (ejusdem generis)', 'Rajasthan SEB v. Mohan Lal: statutory bodies', 'Sukhdev Singh v. Bhagatram, R.D. Shetty: agency and instrumentality', 'Ajay Hasia: six indicators', 'Pradeep Kumar Biswas: deep and pervasive control', 'Zee Telefilms: limits; Article 226 still available', 'Conclusion: functional test, need for widening in the age of privatisation'] },
        { type: 'Short note', q: 'Instrumentality or agency test.', outline: ['R.D. Shetty v. International Airport Authority (1979)', 'Ajay Hasia tests listed', 'Refined in Pradeep Kumar Biswas'] },
        { type: 'Problem', q: 'A private company receives 90% of its funding from the State and its board is appointed by the Government. An employee is dismissed without hearing. Can she file a writ under Article 32?', outline: ['Issue: is the company "State"?', 'Rule: Ajay Hasia / Pradeep Kumar Biswas', 'Application: funding and appointment indicate deep and pervasive control', 'Conclusion: likely State; Article 14 and natural justice apply; writ maintainable'] }
      ],
      notes: { unit: 'II', note: 'Covers State under Art. 12 and new judicial trends on State action, with Sukhdev, R.D. Shetty, Ajay Hasia, Som Prakash and Zee Telefilms.' }
    },
    '13': {
      title: 'Laws inconsistent with or in derogation of the fundamental rights.',
      summary: 'Pre-Constitution laws are void to the extent they are inconsistent with Part III (clause 1). The State shall not make any law that takes away or abridges these rights; any law that does is void to the extent of the contravention (clause 2). "Law" includes ordinances, orders, bye-laws, rules, regulations, notifications, custom and usage having the force of law (clause 3). Clause 4, added in 1971, excludes constitutional amendments made under Article 368.',
      clauses: ['13(1): existing laws void to the extent of inconsistency', '13(2): bar on new laws abridging fundamental rights', '13(3): wide definition of "law" and "laws in force"', '13(4): Article 13 does not apply to amendments under Article 368 (24th Amendment, 1971)'],
      amendments: ['24th Amendment, 1971: inserted clause (4) after Golak Nath'],
      cases: [
        { name: 'Keshavan Madhava Menon v. State of Bombay', cite: 'AIR 1951 SC 128', i: 'Can a prosecution begun before 26 January 1950 under a pre-Constitution law that became inconsistent with Article 19 continue?', r: 'Article 13(1) is prospective. It does not make inconsistent laws void ab initio; past transactions remain unaffected.', a: 'The offence and prosecution predated the Constitution.', c: 'Prosecution could continue.' },
        { name: 'Bhikaji Narain Dhakras v. State of M.P.', cite: 'AIR 1955 SC 781', i: 'Does a pre-Constitution law eclipsed by Article 19 revive when the fundamental right is amended?', r: 'Doctrine of eclipse: a pre-Constitution law inconsistent with fundamental rights is not dead but dormant; removal of the inconsistency by amendment revives it.', a: 'The 4th Amendment, 1955 removed the shadow cast by Article 19(1)(g).', c: 'The law revived and was enforceable.' },
        { name: 'Deep Chand v. State of U.P.', cite: 'AIR 1959 SC 648', i: 'Does the doctrine of eclipse apply to post-Constitution laws?', r: 'A post-Constitution law violating Article 13(2) is void ab initio (stillborn) and cannot be revived by a later amendment.', a: 'The impugned law was enacted after 1950.', c: 'Eclipse applies only to pre-Constitution laws (qualified for non-citizens in State of Gujarat v. Ambica Mills, 1974).' },
        { name: 'R.M.D. Chamarbaugwalla v. Union of India', cite: 'AIR 1957 SC 628', i: 'Can the valid parts of a statute be separated from the invalid parts?', r: 'Doctrine of severability: if the valid portion is independent and the legislature would have enacted it alone, only the invalid portion is struck down.', a: 'The Prize Competitions Act applied to gambling and to competitions of skill; the two were severable.', c: 'The Act was valid as applied to gambling competitions.' },
        { name: 'Kesavananda Bharati v. State of Kerala', cite: '(1973) 4 SCC 225', i: 'Can Parliament amend fundamental rights under Article 368?', r: 'Parliament can amend any part of the Constitution, including Part III, but cannot alter its basic structure. Golak Nath (AIR 1967 SC 1643) overruled.', a: 'The 24th, 25th and 29th Amendments were examined; Article 13(4) upheld.', c: 'Amendments are not "law" under Article 13, but are subject to the basic structure limit.' }
      ],
      questions: [
        { type: 'Essay', q: 'Explain Article 13 with reference to the doctrines of severability and eclipse.', outline: ['Purpose: judicial review of laws', 'Clauses 1 to 4', 'Severability: A.K. Gopalan (s.14 PD Act), R.M.D.C.', 'Eclipse: Bhikaji, Deep Chand, Ambica Mills', 'Waiver: Basheshar Nath (1959)', 'Conclusion'] },
        { type: 'Essay', q: 'Is a constitutional amendment "law" under Article 13? Trace the judicial journey from Shankari Prasad to Kesavananda Bharati.', outline: ['Shankari Prasad (1951) and Sajjan Singh (1965): amendment not law', 'Golak Nath (1967): amendment is law; prospective overruling', '24th Amendment: Art. 13(4) and 368(3)', 'Kesavananda (1973): basic structure', 'Indira Gandhi v. Raj Narain, Minerva Mills, I.R. Coelho'] },
        { type: 'Short note', q: 'Doctrine of eclipse.', outline: ['Meaning', 'Bhikaji Narain', 'Deep Chand: not for post-Constitution laws', 'Ambica Mills: non-citizens'] }
      ],
      notes: { unit: 'II', note: 'Pre- and post-Constitution laws, severability, eclipse and the amendment cases from Shankari Prasad to I.R. Coelho.' }
    },
    '14': {
      title: 'Equality before law.',
      summary: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India. Available to citizens and non-citizens, natural and legal persons.',
      clauses: ['Equality before law: negative concept from English law; no one is above the law (Dicey)', 'Equal protection of laws: positive concept from the 14th Amendment of the US Constitution; like should be treated alike', 'Reasonable classification permitted, class legislation forbidden', 'New doctrine: arbitrariness is antithetical to equality'],
      amendments: [],
      cases: [
        { name: 'State of West Bengal v. Anwar Ali Sarkar', cite: 'AIR 1952 SC 75', i: 'Was s.5(1) of the W.B. Special Courts Act, allowing the Government to refer any "case" to a special court with a truncated procedure, valid?', r: 'Classification must rest on an intelligible differentia with a rational nexus to the object of the Act.', a: 'The section gave unguided power to pick individual cases; no classification or standard was laid down.', c: 'Section 5(1) struck down as violative of Article 14.' },
        { name: 'E.P. Royappa v. State of Tamil Nadu', cite: '(1974) 4 SCC 3', i: 'Did the transfer of the petitioner from Chief Secretary to a lesser post violate Articles 14 and 16?', r: 'Equality is a dynamic concept; it cannot be confined within traditional limits. Arbitrariness is the antithesis of equality.', a: 'On facts, mala fides were not proved.', c: 'Petition dismissed, but the new doctrine of arbitrariness was laid down (Bhagwati J.).' },
        { name: 'Maneka Gandhi v. Union of India', cite: '(1978) 1 SCC 248', i: 'Was impounding a passport without a hearing valid?', r: 'Articles 14, 19 and 21 are not mutually exclusive. Procedure under Article 21 must be fair, just and reasonable, not arbitrary.', a: 'No reasons or hearing were given; the Government undertook to give a hearing.', c: 'Order effectively set aside; the golden triangle was established.' },
        { name: 'Navtej Singh Johar v. Union of India', cite: '(2018) 10 SCC 1', i: 'Is s.377 IPC, insofar as it criminalises consensual sex between adults, constitutional?', r: 'Classification based on sexual orientation, with no rational nexus to a legitimate aim, is manifestly arbitrary and violates Articles 14, 15, 19 and 21.', a: 'The provision targeted LGBTQ persons for consensual private conduct.', c: 'Section 377 read down; Suresh Kumar Koushal (2014) overruled.' }
      ],
      questions: [
        { type: 'Essay', q: '"Article 14 forbids class legislation but permits reasonable classification." Explain with decided cases.', outline: ['Two limbs of Article 14', 'Twin test: intelligible differentia and rational nexus (Anwar Ali Sarkar; Budhan Choudhry, 1955)', 'Classification may be on geography, time, nature of business', 'Single-person legislation: Charanjit Lal Chowdhury, Ram Krishna Dalmia (1958)', 'Special courts: Kathi Raning Rawat; In re Special Courts Bill (1979)'] },
        { type: 'Essay', q: 'Discuss the new concept of equality under Article 14.', outline: ['Traditional classification test', 'E.P. Royappa: arbitrariness', 'Maneka Gandhi; R.D. Shetty; Ajay Hasia', 'Applied: Air India v. Nargesh Meerza, D.S. Nakara', 'Manifest arbitrariness: Shayara Bano (2017), Joseph Shine (2019)'] },
        { type: 'Problem', q: 'A State law gives a pension hike only to employees who retired after 1 April 2020. Employees who retired earlier challenge it. Decide.', outline: ['Issue: is a cut-off date for pension revision arbitrary?', 'Rule: D.S. Nakara v. Union of India (1983)', 'Application: pensioners form one homogeneous class; the date has no nexus to the object', 'Conclusion: likely violates Article 14'] }
      ],
      notes: { unit: 'II', note: 'Right to Equality, reasonable classification, new concept of equality and Article 14 and special courts, with Nargesh Meerza, D.S. Nakara, Pradeep Jain, Charanjit Lal and Kathi Raning.' }
    },
    '15': {
      title: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth.',
      summary: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them, including in access to shops, public restaurants, hotels, places of entertainment, wells, tanks, ghats, roads and places of public resort. The State may make special provisions for women and children, for socially and educationally backward classes, SCs and STs, and for economically weaker sections.',
      clauses: ['15(1): no discrimination on prohibited grounds only', '15(2): access to public places; binds private persons too', '15(3): special provisions for women and children', '15(4): advancement of SEBCs, SCs and STs (1st Amendment, 1951)', '15(5): reservation in educational institutions including private unaided ones, minority institutions excepted (93rd Amendment, 2005)', '15(6): up to 10% for economically weaker sections (103rd Amendment, 2019)'],
      amendments: ['1st Amendment, 1951: clause (4), after Champakam Dorairajan', '93rd Amendment, 2005: clause (5)', '103rd Amendment, 2019: clause (6)'],
      cases: [
        { name: 'State of Madras v. Champakam Dorairajan', cite: 'AIR 1951 SC 226', i: 'Was the Communal G.O. allotting medical and engineering seats by religion and caste valid?', r: 'Directive Principles cannot override fundamental rights; Article 29(2) bars denial of admission on grounds only of religion, race or caste.', a: 'Seats were allocated purely on communal grounds.', c: 'G.O. struck down; led to the 1st Amendment inserting Article 15(4).' },
        { name: 'M.R. Balaji v. State of Mysore', cite: 'AIR 1963 SC 649', i: 'Was a 68% reservation in medical and engineering colleges valid?', r: 'Backwardness must be social and educational; caste may be relevant but cannot be the sole test; reservation should generally be below 50%.', a: 'The order relied on caste alone and reserved 68% of seats.', c: 'Order struck down.' },
        { name: 'Ashoka Kumar Thakur v. Union of India', cite: '(2008) 6 SCC 1', i: 'Is the 93rd Amendment and 27% OBC reservation in central educational institutions valid?', r: 'Article 15(5) does not violate the basic structure as regards State-aided institutions; the creamy layer must be excluded.', a: 'The Court left open the application to private unaided institutions.', c: 'Upheld with creamy layer exclusion. Later, Pramati Educational Trust (2014) upheld 15(5) for private unaided institutions.' },
        { name: 'Janhit Abhiyan v. Union of India', cite: '(2023) 5 SCC 1', i: 'Does the 103rd Amendment (EWS reservation) violate the basic structure?', r: 'Reservation based solely on economic criteria is permissible; excluding SEBCs, SCs and STs from EWS does not breach the basic structure; the 50% ceiling is not inflexible.', a: 'Decided by a 5-judge bench on 7 November 2022.', c: 'Upheld by 3:2.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss protective discrimination under Article 15 with reference to recent judicial trends.', outline: ['Formal vs substantive equality', 'Champakam and the 1st Amendment', 'Balaji: 50% and caste not sole test', 'Indra Sawhney principles applied to 15(4)', '15(5): Ashoka Kumar Thakur, Pramati', '15(6): Janhit Abhiyan'] },
        { type: 'Short note', q: 'Article 15(3): special provisions for women and children.', outline: ['Yusuf Abdul Aziz v. State of Bombay (1954): s.497 IPC upheld then', 'Joseph Shine (2019): adultery struck down; 15(3) cannot be used to perpetuate stereotypes'] },
        { type: 'Short note', q: 'Socially and educationally backward classes.', outline: ['No definition; Art. 340, 342A', 'Balaji; Chitralekha (1964); Indra Sawhney', '102nd and 105th Amendments'] }
      ],
      notes: { unit: 'III', note: 'Protective discrimination and social justice under Articles 15 and 16, with N.M. Thomas and SEBC identification.' }
    },
    '16': {
      title: 'Equality of opportunity in matters of public employment.',
      summary: 'There shall be equality of opportunity for all citizens in matters of employment or appointment to any office under the State. No citizen shall be discriminated against on grounds only of religion, race, caste, sex, descent, place of birth or residence. The State may provide reservation for backward classes not adequately represented, for SCs and STs in promotion, and for economically weaker sections.',
      clauses: ['16(1)–(2): equality of opportunity; prohibited grounds include descent and residence', '16(3): Parliament may prescribe residence requirements', '16(4): reservation for inadequately represented backward classes', '16(4A): reservation in promotion with consequential seniority for SC/ST (77th and 85th Amendments)', '16(4B): carry forward of unfilled vacancies (81st Amendment)', '16(5): religious denominational offices', '16(6): up to 10% EWS reservation (103rd Amendment)'],
      amendments: ['77th Amendment, 1995: clause (4A)', '81st Amendment, 2000: clause (4B)', '85th Amendment, 2001: consequential seniority', '103rd Amendment, 2019: clause (6)'],
      cases: [
        { name: 'State of Kerala v. N.M. Thomas', cite: '(1976) 2 SCC 310', i: 'Was the exemption of SC/ST employees from a departmental test for promotion valid?', r: 'Article 16(4) is not an exception to 16(1) but an emphatic restatement of it; reasonable classification is permitted under 16(1) itself.', a: 'The exemption advanced equality of opportunity for SCs and STs.', c: 'Exemption upheld.' },
        { name: 'Indra Sawhney v. Union of India', cite: '1992 Supp (3) SCC 217', i: 'Was the Mandal Commission reservation of 27% for OBCs, and an additional 10% for the economically backward, valid?', r: 'Caste can be a criterion for identifying backward classes; creamy layer must be excluded; reservation ordinarily not above 50%; no reservation in promotions; purely economic criterion invalid (9-judge bench).', a: 'The 27% OBC quota was upheld subject to creamy layer; the 10% economic quota was struck down.', c: 'Partly upheld. Parliament later inserted 16(4A) to overcome the bar on promotions.' },
        { name: 'M. Nagaraj v. Union of India', cite: '(2006) 8 SCC 212', i: 'Are the 77th, 81st, 82nd and 85th Amendments valid?', r: 'They are enabling provisions; before providing reservation in promotion, the State must show backwardness, inadequacy of representation and overall administrative efficiency.', a: 'The amendments did not obliterate equality.', c: 'Upheld subject to the three conditions. Jarnail Singh v. Lachhmi Narain Gupta (2018) 10 SCC 396 dropped the need to show SC/ST backwardness and applied creamy layer.' },
        { name: 'State of Punjab v. Davinder Singh', cite: '(2024) 9 SCC 1; 2024 INSC 562', i: 'Can States sub-classify Scheduled Castes for reservation?', r: 'SCs are not a homogeneous class; sub-classification on quantifiable and demonstrable data is permissible (7-judge bench, 6:1).', a: 'Punjab gave first preference to Balmikis and Mazhabi Sikhs within the SC quota.', c: 'Sub-classification upheld; E.V. Chinnaiah (2005) overruled.' }
      ],
      questions: [
        { type: 'Essay', q: 'Critically examine the law on reservation in public employment after Indra Sawhney.', outline: ['16(1) and 16(4): N.M. Thomas', 'Indra Sawhney holdings', 'Amendments: 77th, 81st, 85th', 'Nagaraj, Jarnail Singh', 'Davinder Singh: sub-classification', 'Janhit Abhiyan: EWS and 50%'] },
        { type: 'Short note', q: 'Creamy layer.', outline: ['Meaning', 'Indra Sawhney', 'Ashoka Kumar Thakur', 'Jarnail Singh applies it to SC/ST in promotions'] },
        { type: 'Short note', q: 'Carry forward rule.', outline: ['T. Devadasan v. Union of India (1964): struck down', 'Indra Sawhney', '81st Amendment: 16(4B), separate class of vacancies'] }
      ],
      notes: { unit: 'III', note: 'Articles 16(1)–16(4), the Mandal case (Indra Sawhney), A.B.S.K. Sangh and new judicial trends.' }
    },
    '17': {
      title: 'Abolition of Untouchability.',
      summary: '"Untouchability" is abolished and its practice in any form is forbidden. Enforcing any disability arising out of untouchability is an offence punishable by law. The right is absolute and binds private individuals.',
      clauses: ['Absolute prohibition, no exceptions', 'Enforced through the Protection of Civil Rights Act, 1955 (originally Untouchability (Offences) Act) and the SC/ST (Prevention of Atrocities) Act, 1989', 'Parliament alone may legislate (Art. 35)'],
      amendments: [],
      cases: [
        { name: 'People\'s Union for Democratic Rights v. Union of India', cite: '(1982) 3 SCC 235', i: 'Were the rights of workers on Asiad projects violated by private contractors?', r: 'Articles 17, 23 and 24 are enforceable against private persons as well; the State must ensure their observance.', a: 'Contractors violated labour laws; the State had a duty to enforce them.', c: 'Directions issued; fundamental rights in 17, 23 and 24 operate horizontally.' },
        { name: 'State of Karnataka v. Appa Balu Ingale', cite: '1995 Supp (4) SCC 469', i: 'Were the accused rightly acquitted for preventing Dalits from drawing water from a public well?', r: 'Article 17 is a constitutional mandate to eradicate untouchability; courts must interpret the Protection of Civil Rights Act purposively.', a: 'The evidence established the offence; the acquittal by the High Court was erroneous.', c: 'Conviction restored.' },
        { name: 'Indian Young Lawyers Association v. State of Kerala (Sabarimala)', cite: '(2019) 11 SCC 1', i: 'Was the exclusion of women aged 10–50 from Sabarimala valid?', r: 'Majority held the exclusion violated Articles 14, 15 and 25(1); Chandrachud J. also held it a form of untouchability under Article 17.', a: 'Exclusion was based on menstruation.', c: 'Rule 3(b) struck down (4:1); the matter is pending before a larger bench on reference.' }
      ],
      questions: [
        { type: 'Short note', q: 'Article 17: abolition of untouchability.', outline: ['Meaning: social practice, not literal', 'Absolute right; horizontal application', 'PCR Act 1955; Atrocities Act 1989', 'PUDR; Appa Balu Ingale'] }
      ],
      notes: { unit: 'III', note: 'Constitutional provisions on untouchability under Article 17.' }
    },
    '18': {
      title: 'Abolition of titles.',
      summary: 'The State shall not confer any title except a military or academic distinction. Citizens shall not accept titles from any foreign State. Non-citizens holding office of profit or trust under the State need the President\'s consent to accept foreign titles, and no person holding such office may accept presents, emoluments or office from a foreign State without consent.',
      clauses: ['18(1): no titles except military or academic', '18(2): citizens not to accept foreign titles', '18(3)–(4): restrictions on persons holding office under the State'],
      amendments: [],
      cases: [
        { name: 'Balaji Raghavan v. Union of India', cite: '(1996) 1 SCC 361', i: 'Are the Bharat Ratna and Padma awards "titles" barred by Article 18?', r: 'National awards are recognition of merit, not titles; they must not be used as prefixes or suffixes to names.', a: 'The awards confer no rank or privilege.', c: 'Awards are valid; misuse as a title may lead to forfeiture.' }
      ],
      questions: [
        { type: 'Short note', q: 'Article 18 and national awards.', outline: ['Purpose: equality of status', 'Exceptions', 'Balaji Raghavan'] }
      ],
      notes: { unit: 'III', note: 'Abolition of titles.' }
    },
    '19': {
      title: 'Protection of certain rights regarding freedom of speech, etc.',
      summary: 'All citizens have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations, unions or co-operative societies; to move freely throughout India; to reside and settle anywhere in India; and to practise any profession or carry on any occupation, trade or business. Each is subject to reasonable restrictions on grounds specified in clauses (2) to (6).',
      clauses: ['19(1)(a) speech and expression; restrictions in 19(2): sovereignty and integrity, security of State, friendly relations, public order, decency or morality, contempt of court, defamation, incitement to an offence', '19(1)(b) assembly; 19(3)', '19(1)(c) association, unions, co-operatives; 19(4)', '19(1)(d) movement and (e) residence; 19(5)', '19(1)(f) property: deleted by 44th Amendment, 1978', '19(1)(g) profession, trade or business; 19(6), including State monopolies'],
      amendments: ['1st Amendment, 1951: added public order, friendly relations and incitement; State trading in 19(6)', '16th Amendment, 1963: sovereignty and integrity of India', '44th Amendment, 1978: 19(1)(f) deleted', '97th Amendment, 2011: co-operative societies in 19(1)(c)'],
      cases: [
        { name: 'Romesh Thappar v. State of Madras', cite: 'AIR 1950 SC 124', i: 'Was a ban on the entry of the journal Cross Roads into Madras valid?', r: 'Freedom of speech includes freedom of propagation of ideas and circulation; restrictions are valid only on grounds in Article 19(2).', a: '"Public safety" was not then a ground under 19(2).', c: 'Ban struck down; led to the 1st Amendment.' },
        { name: 'Bennett Coleman & Co. v. Union of India', cite: '(1972) 2 SCC 788', i: 'Was the Newsprint Control Policy restricting pages valid?', r: 'Freedom of the press includes freedom of circulation and volume; the test is direct and inevitable effect on the right.', a: 'Limits on pages directly curtailed circulation and content.', c: 'Policy struck down.' },
        { name: 'Shreya Singhal v. Union of India', cite: '(2015) 5 SCC 1', i: 'Is s.66A IT Act, penalising "grossly offensive" or "menacing" online messages, valid?', r: 'Distinguishes discussion, advocacy and incitement; only incitement can be curbed. Vague, overbroad laws with a chilling effect are unconstitutional.', a: 'The terms in s.66A were undefined and not related to any 19(2) ground.', c: 'Section 66A struck down.' },
        { name: 'Anuradha Bhasin v. Union of India', cite: '(2020) 3 SCC 637', i: 'Were the internet shutdown and s.144 orders in Jammu and Kashmir valid?', r: 'Freedom of speech and of trade over the internet is protected under 19(1)(a) and (g); restrictions must be proportionate, temporary and published.', a: 'Orders had not been published; indefinite suspension is impermissible.', c: 'Review committee directed to examine orders; principles of proportionality laid down.' },
        { name: 'Kedar Nath Singh v. State of Bihar', cite: 'AIR 1962 SC 955', i: 'Is s.124A IPC (sedition) valid?', r: 'Upheld only if limited to acts with intention or tendency to create disorder or incite violence.', a: 'Read down to save it.', c: 'Valid as read down. Its operation was kept in abeyance in S.G. Vombatkere (2022); BNS 2023 replaced IPC.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss the scope of freedom of speech and expression and the reasonable restrictions on it.', outline: ['Meaning: Romesh Thappar', 'Dimensions: press (Bennett Coleman, Indian Express 1985), right to information (Raj Narain 1975), telecasting (Cricket Association of Bengal 1995), silence (Bijoe Emmanuel), internet (Shreya Singhal, Anuradha Bhasin), commercial speech (Tata Press 1995), films (K.A. Abbas)', 'Each ground in 19(2) with a case', 'Test of reasonableness: V.G. Row (1952); proportionality'] },
        { type: 'Short note', q: 'Freedom of the press.', outline: ['Not separately mentioned; part of 19(1)(a)', 'Brij Bhushan; Bennett Coleman; Indian Express', 'Pre-censorship'] },
        { type: 'Short note', q: 'Right not to form an association.', outline: ['Damyanti Naranga (1971)', 'Restrictions on unions'] },
        { type: 'Problem', q: 'A State bans all public meetings in a town for six months because a festival is approaching. Advise the organisers.', outline: ['Issue: valid restriction on 19(1)(b)?', 'Rule: 19(3) public order; Himat Lal Shah (1973); Ramlila Maidan (2012)', 'Application: blanket six-month ban is disproportionate', 'Conclusion: likely unreasonable'] }
      ],
      notes: { unit: 'III', note: 'Freedoms under 19(1)(a)–(g), each restriction ground in 19(2), with K.A. Abbas, Kedar Nath, Himmat Lal, Cricket Association and Tikaramji.' }
    },
    '20': {
      title: 'Protection in respect of conviction for offences.',
      summary: 'No person shall be convicted except for violating a law in force at the time of the act, nor be subjected to a penalty greater than that then in force (ex post facto laws). No person shall be prosecuted and punished for the same offence more than once (double jeopardy). No accused person shall be compelled to be a witness against himself (self-incrimination). Cannot be suspended during an emergency (44th Amendment).',
      clauses: ['20(1): bar on retrospective criminal laws; only conviction and sentence, not trial procedure', '20(2): double jeopardy; requires prosecution and punishment by a judicial tribunal', '20(3): right against self-incrimination; covers testimonial compulsion only'],
      amendments: ['44th Amendment, 1978: Articles 20 and 21 cannot be suspended under Article 359'],
      cases: [
        { name: 'Rattan Lal v. State of Punjab', cite: 'AIR 1965 SC 444', i: 'Can a later beneficial law (Probation of Offenders Act) apply to an offence committed earlier?', r: 'Article 20(1) bars only retrospective laws that increase punishment; it does not bar beneficial retrospective laws.', a: 'The Act reduced the rigour of punishment.', c: 'Benefit extended to the accused.' },
        { name: 'Maqbool Hussain v. State of Bombay', cite: 'AIR 1953 SC 325', i: 'Does confiscation of gold by customs authorities bar a later criminal prosecution?', r: 'Article 20(2) applies only where the earlier proceeding was a prosecution and punishment before a court or judicial tribunal.', a: 'Customs authorities are not a court; confiscation is not prosecution.', c: 'Prosecution not barred.' },
        { name: 'State of Bombay v. Kathi Kalu Oghad', cite: 'AIR 1961 SC 1808', i: 'Does taking specimen handwriting or fingerprints violate Article 20(3)?', r: '"To be a witness" means imparting personal knowledge; physical evidence such as fingerprints and handwriting specimens is not testimonial compulsion (11-judge bench).', a: 'Specimens were for identification only.', c: 'No violation.' },
        { name: 'Nandini Satpathy v. P.L. Dani', cite: '(1978) 2 SCC 424', i: 'Does Article 20(3) apply at the police interrogation stage?', r: 'Protection extends to the stage of police investigation and to witnesses who may be exposed to accusation; right to remain silent; right to a lawyer during questioning.', a: 'She was questioned on a long written list.', c: 'She could refuse answers that tended to incriminate her.' },
        { name: 'Selvi v. State of Karnataka', cite: '(2010) 7 SCC 263', i: 'Are narco-analysis, polygraph and brain-mapping tests without consent valid?', r: 'Involuntary administration of these tests violates Article 20(3) and the right to privacy under Article 21.', a: 'The tests extract testimonial information without conscious choice.', c: 'Not permitted without consent; results inadmissible as such.' }
      ],
      questions: [
        { type: 'Essay', q: 'Explain the rights of the accused under Article 20.', outline: ['20(1): Kedar Nath Bajoria (1953), Rattan Lal', '20(2): Maqbool Hussain, S.A. Venkataraman (1958), issue estoppel', '20(3): M.P. Sharma (1954), Kathi Kalu Oghad, Nandini Satpathy, Selvi'] },
        { type: 'Short note', q: 'Double jeopardy.', outline: ['English maxim nemo debet bis vexari', 'Requirements', 'Departmental proceedings not barred'] },
        { type: 'Problem', q: 'Police seek to compel an accused to undergo a narco-analysis test. Advise.', outline: ['Issue: 20(3) and 21', 'Rule: Selvi', 'Application: no consent', 'Conclusion: impermissible'] }
      ],
      notes: { unit: 'IV', note: 'Ex post facto law, double jeopardy and self-incrimination with Nandini Satpathy.' }
    },
    '21': {
      title: 'Protection of life and personal liberty.',
      summary: 'No person shall be deprived of his life or personal liberty except according to procedure established by law. After Maneka Gandhi, the procedure must be fair, just and reasonable. The Supreme Court has read many rights into Article 21, including dignity, livelihood, privacy, shelter, health, a clean environment, speedy trial, legal aid and dying with dignity.',
      clauses: ['Available to all persons', '"Procedure established by law" read with due process after Maneka Gandhi', 'Cannot be suspended in emergency (44th Amendment)'],
      amendments: ['44th Amendment, 1978: made non-suspendable'],
      cases: [
        { name: 'A.K. Gopalan v. State of Madras', cite: 'AIR 1950 SC 27', i: 'Did preventive detention under the Preventive Detention Act, 1950 violate Articles 19 and 21?', r: '"Law" means enacted law; Articles 19, 21 and 22 are separate codes; American due process not adopted.', a: 'The Act followed a procedure enacted by Parliament.', c: 'Act upheld except s.14.' },
        { name: 'Maneka Gandhi v. Union of India', cite: '(1978) 1 SCC 248', i: 'Is any procedure prescribed by law enough to deprive personal liberty?', r: 'Procedure must be fair, just and reasonable; Articles 14, 19 and 21 must be read together.', a: 'Passport impounded without hearing.', c: 'Gopalan\'s narrow view abandoned.' },
        { name: 'Olga Tellis v. Bombay Municipal Corporation', cite: '(1985) 3 SCC 545', i: 'Does eviction of pavement dwellers violate Article 21?', r: 'Right to life includes right to livelihood.', a: 'Eviction must follow a fair procedure with notice.', c: 'Eviction permitted after notice and the monsoon.' },
        { name: 'K.S. Puttaswamy v. Union of India', cite: '(2017) 10 SCC 1', i: 'Is privacy a fundamental right?', r: 'Privacy is intrinsic to life and liberty under Article 21 and Part III; restrictions must meet legality, legitimate aim and proportionality (9-judge bench).', a: 'M.P. Sharma and Kharak Singh overruled to that extent.', c: 'Privacy is a fundamental right.' },
        { name: 'Common Cause v. Union of India', cite: '(2018) 5 SCC 1', i: 'Does Article 21 include the right to die with dignity?', r: 'Passive euthanasia and advance directives are permissible under safeguards.', a: 'Built on Aruna Shanbaug (2011).', c: 'Passive euthanasia and living wills recognised.' },
        { name: 'ADM Jabalpur v. Shivakant Shukla', cite: '(1976) 2 SCC 521', i: 'Could habeas corpus be sought during the 1975 Emergency when Article 21 was suspended?', r: 'Majority: no right to approach courts; Khanna J. dissented.', a: 'Presidential order under Article 359.', c: 'Overruled in Puttaswamy (2017); 44th Amendment made Article 21 non-suspendable.' }
      ],
      questions: [
        { type: 'Essay', q: '"Article 21 is the heart of Part III." Discuss its expanding horizons.', outline: ['Gopalan to Maneka', 'Facets: livelihood (Olga Tellis), dignity (Francis Coralie Mullin 1981), privacy (Puttaswamy), health (Paschim Banga 1996), environment (Subhash Kumar 1991; M.C. Mehta), speedy trial (Hussainara Khatoon), legal aid (M.H. Hoskot 1978), prisoners (Sunil Batra), custodial violence (D.K. Basu), dying with dignity (Common Cause)', 'Conclusion'] },
        { type: 'Short note', q: '"Procedure established by law" vs "due process of law".', outline: ['Origins', 'Gopalan', 'Maneka', 'Substantive due process debate'] },
        { type: 'Problem', q: 'A municipal body demolishes slum dwellings overnight without notice. Advise the residents.', outline: ['Issue: 21 and livelihood/shelter', 'Rule: Olga Tellis; Chameli Singh (1996)', 'Application: no notice, no fair procedure', 'Conclusion: violation; compensation and rehabilitation'] }
      ],
      notes: { unit: 'IV', note: 'Right to life and personal liberty and its various facets, with Sunil Batra, ADM Jabalpur and D.K. Basu.' }
    },
    '21A': {
      title: 'Right to education.',
      summary: 'The State shall provide free and compulsory education to all children aged six to fourteen in such manner as the State may by law determine. Implemented through the Right of Children to Free and Compulsory Education Act, 2009.',
      clauses: ['Age group 6–14', 'Manner determined by law (RTE Act, 2009)', 'Linked with Art. 45 (early childhood care) and Art. 51A(k)'],
      amendments: ['86th Amendment, 2002: inserted Art. 21A, substituted Art. 45 and added Art. 51A(k)'],
      cases: [
        { name: 'Mohini Jain v. State of Karnataka', cite: '(1992) 3 SCC 666', i: 'Is charging capitation fees valid?', r: 'Right to education flows from Article 21; capitation fees are arbitrary.', a: 'High fees denied access to education.', c: 'Capitation fees held illegal.' },
        { name: 'Unni Krishnan J.P. v. State of A.P.', cite: '(1993) 1 SCC 645', i: 'What is the extent of the right to education?', r: 'Every child has a fundamental right to free education up to 14 years; beyond that, subject to economic capacity of the State.', a: 'Mohini Jain partly modified.', c: 'Basis for the 86th Amendment.' },
        { name: 'Society for Unaided Private Schools of Rajasthan v. Union of India', cite: '(2012) 6 SCC 1', i: 'Is s.12(1)(c) RTE Act (25% seats for weaker sections) valid for private schools?', r: 'Valid for unaided non-minority schools; not applicable to unaided minority schools.', a: 'Reasonable restriction under 19(6).', c: 'Upheld; Pramati Educational Trust (2014) exempted all minority schools from the RTE Act.' }
      ],
      questions: [
        { type: 'Short note', q: 'Right to education under Article 21A.', outline: ['From DPSP to fundamental right', 'Mohini Jain, Unni Krishnan', '86th Amendment', 'RTE Act; Society for Unaided Schools; Pramati'] }
      ],
      notes: { unit: 'IV', note: 'Discussed as a facet of Article 21.' }
    },
    '22': {
      title: 'Protection against arrest and detention in certain cases.',
      summary: 'An arrested person must be informed of the grounds of arrest as soon as may be, may consult and be defended by a lawyer of choice, and must be produced before the nearest magistrate within 24 hours. These safeguards do not apply to enemy aliens or preventive detention. Preventive detention beyond three months requires an Advisory Board report; the detenu must be told the grounds and given the earliest opportunity to make a representation.',
      clauses: ['22(1)–(2): rights of arrested persons', '22(3): exceptions: enemy aliens and preventive detention', '22(4)–(7): safeguards in preventive detention; Advisory Board; Parliament may prescribe maximum period'],
      amendments: ['44th Amendment, 1978: reduced Advisory Board period to two months; not yet brought into force'],
      cases: [
        { name: 'D.K. Basu v. State of West Bengal', cite: '(1997) 1 SCC 416', i: 'What safeguards apply against custodial violence and deaths?', r: 'Eleven requirements on arrest: identification of police, arrest memo, informing a relative, medical examination, access to a lawyer and others; breach invites contempt and departmental action.', a: 'Custodial deaths violate Articles 21 and 22.', c: 'Guidelines issued; partly codified in the CrPC (now BNSS).' },
        { name: 'A.K. Roy v. Union of India', cite: '(1982) 1 SCC 271', i: 'Is the National Security Act, 1980 valid? Could the Court direct the 44th Amendment\'s Advisory Board clause to be brought into force?', r: 'Preventive detention is constitutionally permitted; the Court cannot compel the Government to notify an amendment; detenu has no right to legal representation before the Board, but may have a friend.', a: 'Vague terms read down.', c: 'NSA upheld.' },
        { name: 'Arnesh Kumar v. State of Bihar', cite: '(2014) 8 SCC 273', i: 'Should arrest be automatic in offences punishable up to 7 years?', r: 'Police must record reasons satisfying s.41 CrPC; magistrates must not authorise detention mechanically.', a: 'Routine arrests in s.498A cases.', c: 'Guidelines issued.' }
      ],
      questions: [
        { type: 'Essay', q: 'Explain the constitutional safeguards against arbitrary arrest and preventive detention.', outline: ['Punitive vs preventive detention', '22(1)–(2) rights', 'D.K. Basu guidelines', '22(4)–(7)', 'A.K. Gopalan; A.K. Roy', 'Preventive detention laws: NSA, COFEPOSA'] },
        { type: 'Short note', q: 'Advisory Board under Article 22.', outline: ['Composition', 'Three months', '44th Amendment not notified (A.K. Roy)'] }
      ],
      notes: { unit: 'IV', note: 'Rights of the arrested person and preventive detention laws, with A.K. Roy and Mariappan.' }
    },
    '23': {
      title: 'Prohibition of traffic in human beings and forced labour.',
      summary: 'Traffic in human beings, begar and other similar forms of forced labour are prohibited, and contravention is an offence. The State may impose compulsory service for public purposes, without discrimination on grounds only of religion, race, caste or class.',
      clauses: ['Applies against State and private persons', 'Exception: compulsory public service such as military service'],
      amendments: [],
      cases: [
        { name: 'People\'s Union for Democratic Rights v. Union of India', cite: '(1982) 3 SCC 235', i: 'Is paying less than the minimum wage forced labour?', r: '"Forced labour" includes labour or service provided under compulsion of economic circumstances at less than minimum wage.', a: 'Asiad workers were paid below the minimum wage.', c: 'Violation of Article 23.' },
        { name: 'Bandhua Mukti Morcha v. Union of India', cite: '(1984) 3 SCC 161', i: 'What is the State\'s duty regarding bonded labourers in stone quarries?', r: 'Bonded labour violates Articles 21 and 23; letters can be treated as writ petitions.', a: 'Workers lived in inhuman conditions.', c: 'Directions for identification, release and rehabilitation.' },
        { name: 'Sanjit Roy v. State of Rajasthan', cite: '(1983) 1 SCC 525', i: 'Can famine relief workers be paid below the minimum wage?', r: 'Payment below minimum wage is forced labour even in famine relief works.', a: 'The Rajasthan Famine Relief Works Employees (Exemption from Labour Laws) Act excluded minimum wages.', c: 'Exemption struck down.' }
      ],
      questions: [
        { type: 'Short note', q: 'Forced labour under Article 23.', outline: ['Meaning of begar', 'PUDR', 'Bandhua Mukti Morcha', 'Bonded Labour System (Abolition) Act, 1976'] }
      ],
      notes: { unit: 'IV', note: 'Traffic in human beings, begar and forced labour.' }
    },
    '24': {
      title: 'Prohibition of employment of children in factories, etc.',
      summary: 'No child below fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.',
      clauses: ['Absolute for hazardous work', 'Child and Adolescent Labour (Prohibition and Regulation) Act, 1986 (amended 2016)'],
      amendments: [],
      cases: [
        { name: 'M.C. Mehta v. State of Tamil Nadu', cite: '(1996) 6 SCC 756', i: 'How to deal with child labour in Sivakasi match factories?', r: 'Offending employers must pay ₹20,000 per child into a Child Labour Rehabilitation-cum-Welfare Fund; the State must provide employment to an adult family member or contribute ₹5,000.', a: 'Hazardous work in factories.', c: 'Detailed directions issued.' }
      ],
      questions: [
        { type: 'Short note', q: 'Constitutional protection against child labour.', outline: ['Art. 24, 39(e)–(f), 21A, 45', 'M.C. Mehta (1996)', 'Statute and 2016 amendment'] }
      ],
      notes: { unit: 'IV', note: 'Prohibition on employment of children.' }
    },
    '25': {
      title: 'Freedom of conscience and free profession, practice and propagation of religion.',
      summary: 'Subject to public order, morality, health and the other provisions of Part III, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion. The State may regulate secular activities associated with religious practice and provide for social welfare and reform, including throwing open Hindu religious institutions to all classes.',
      clauses: ['25(1): conscience, profession, practice, propagation', '25(2)(a): regulation of secular activities', '25(2)(b): social reform; temple entry', 'Explanation I: Sikhs may carry kirpans', 'Explanation II: "Hindus" includes Sikhs, Jains and Buddhists for 25(2)(b)'],
      amendments: [],
      cases: [
        { name: 'Commissioner, Hindu Religious Endowments v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt', cite: 'AIR 1954 SC 282', i: 'Did the Madras HRCE Act unduly interfere with the management of a math?', r: 'Religion includes rituals and observances integral to it; the essential religious practices test; the State may regulate only secular aspects.', a: 'Some provisions intruded into religious matters.', c: 'Certain provisions struck down.' },
        { name: 'Rev. Stainislaus v. State of Madhya Pradesh', cite: '(1977) 1 SCC 677', i: 'Do anti-conversion laws violate the right to propagate?', r: '"Propagate" means to spread tenets, not to convert; there is no fundamental right to convert another person.', a: 'Laws prohibited conversion by force, fraud or allurement.', c: 'Laws upheld.' },
        { name: 'Bijoe Emmanuel v. State of Kerala', cite: '(1986) 3 SCC 615', i: 'Can students be expelled for not singing the National Anthem due to their faith?', r: 'Standing respectfully without singing is not disrespect; freedom of conscience protects them.', a: 'Jehovah\'s Witnesses stood silently.', c: 'Expulsion set aside.' },
        { name: 'Shayara Bano v. Union of India', cite: '(2017) 9 SCC 1', i: 'Is instant triple talaq (talaq-e-biddat) valid?', r: 'Majority held it manifestly arbitrary and not an essential religious practice.', a: '3:2 decision.', c: 'Set aside; later criminalised by the Muslim Women (Protection of Rights on Marriage) Act, 2019.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss secularism and freedom of religion in India with reference to the essential religious practices test.', outline: ['Indian vs Western secularism; S.R. Bommai (1994)', 'Art. 25 scope', 'Shirur Mutt; Durgah Committee (1961)', 'Stainislaus', 'Bijoe Emmanuel', 'Ismail Faruqui (1994)', 'Shayara Bano; Sabarimala'] },
        { type: 'Short note', q: 'Right to propagate religion.', outline: ['Meaning', 'Stainislaus', 'Anti-conversion statutes'] }
      ],
      notes: { unit: 'IV', note: 'Secularism, freedom of religion, judicial interpretation and restrictions, with Ismail Faruqui, Ayodhya, Bijoe Emmanuel and N. Aditya.' }
    },
    '26': {
      title: 'Freedom to manage religious affairs.',
      summary: 'Subject to public order, morality and health, every religious denomination or section has the right to establish and maintain institutions for religious and charitable purposes, manage its own affairs in matters of religion, own and acquire property, and administer such property in accordance with law.',
      clauses: ['26(a) institutions', '26(b) matters of religion', '26(c)–(d) property'],
      amendments: [],
      cases: [
        { name: 'Shirur Mutt case', cite: 'AIR 1954 SC 282', i: 'What is a "religious denomination"?', r: 'A collection of individuals with a common system of beliefs, common organisation and a distinctive name.', a: 'Followers of Sri Madhwacharya formed a denomination.', c: 'Math held entitled to Article 26 protection.' },
        { name: 'S.P. Mittal v. Union of India', cite: '(1983) 1 SCC 51', i: 'Is the Auroville Society a religious denomination?', r: 'Teachings of Sri Aurobindo were a philosophy, not a religion.', a: 'Followers did not regard it as a separate religion.', c: 'Not a denomination; Auroville (Emergency Provisions) Act upheld.' }
      ],
      questions: [
        { type: 'Short note', q: 'Religious denomination under Article 26.', outline: ['Definition from Shirur Mutt', 'S.P. Mittal', 'Brahmachari Sidheshwar Shai (1995): Ramakrishna Mission'] }
      ],
      notes: { unit: 'IV', note: 'Religious denominations, with Brahmachari Sidheshwar.' }
    },
    '27': {
      title: 'Freedom as to payment of taxes for promotion of any particular religion.',
      summary: 'No person shall be compelled to pay any taxes whose proceeds are specifically appropriated to promoting or maintaining any particular religion or religious denomination.',
      clauses: ['Bars taxes, not fees for services'],
      amendments: [],
      cases: [
        { name: 'Shirur Mutt case', cite: 'AIR 1954 SC 282', i: 'Was the contribution levied under the HRCE Act a tax?', r: 'A fee is a charge for services rendered; it is not barred by Article 27.', a: 'The levy was for supervision of endowments.', c: 'Characterised as a fee in part.' }
      ],
      questions: [{ type: 'Short note', q: 'Tax vs fee under Article 27.', outline: ['Shirur Mutt', 'Secular State not to promote one religion'] }],
      notes: { unit: 'IV', note: 'Article 27.' }
    },
    '28': {
      title: 'Freedom as to attendance at religious instruction or religious worship in certain educational institutions.',
      summary: 'No religious instruction shall be provided in institutions wholly maintained out of State funds, except those established under an endowment or trust requiring it. No person attending a State-recognised or State-aided institution shall be required to take part in religious instruction or worship without consent (or a guardian\'s consent for minors).',
      clauses: ['28(1): wholly State-funded institutions', '28(2): endowment exception', '28(3): consent requirement'],
      amendments: [],
      cases: [
        { name: 'D.A.V. College v. State of Punjab', cite: '(1971) 2 SCC 269', i: 'Did a university provision for study of Guru Nanak\'s life violate Article 28?', r: 'Academic study of a religious figure is not religious instruction.', a: 'Objective was research.', c: 'Valid.' },
        { name: 'Aruna Roy v. Union of India', cite: '(2002) 7 SCC 368', i: 'Did the National Curriculum Framework introducing value education based on religions violate Article 28?', r: 'Imparting knowledge about religions is not religious instruction.', a: 'Curriculum aimed at tolerance.', c: 'Valid.' }
      ],
      questions: [{ type: 'Short note', q: 'Religious instruction vs religious education.', outline: ['Art. 28', 'D.A.V. College', 'Aruna Roy'] }],
      notes: { unit: 'IV', note: 'Article 28, with Aruna Roy and D.A.V. College.' }
    },
    '29': {
      title: 'Protection of interests of minorities.',
      summary: 'Any section of citizens with a distinct language, script or culture has the right to conserve it. No citizen shall be denied admission to State-maintained or State-aided institutions on grounds only of religion, race, caste, language or any of them.',
      clauses: ['29(1): any section of citizens, not only minorities', '29(2): non-discrimination in admissions'],
      amendments: [],
      cases: [
        { name: 'State of Bombay v. Bombay Education Society', cite: 'AIR 1954 SC 561', i: 'Could the State bar English-medium schools from admitting pupils whose mother tongue was not English?', r: 'Article 29(2) applies to all citizens, not only minorities.', a: 'The order denied admission on the ground of language.', c: 'Order struck down.' },
        { name: 'State of Madras v. Champakam Dorairajan', cite: 'AIR 1951 SC 226', i: 'Communal G.O.', r: 'Admission cannot be refused on grounds only of religion or caste under 29(2).', a: 'See Art. 15.', c: 'G.O. struck down.' }
      ],
      questions: [{ type: 'Short note', q: 'Article 29(2) and Article 15(1) compared.', outline: ['Scope', 'Grounds', 'Champakam; Bombay Education Society'] }],
      notes: { unit: 'V', note: 'Cultural and educational rights of minorities.' }
    },
    '30': {
      title: 'Right of minorities to establish and administer educational institutions.',
      summary: 'All religious and linguistic minorities have the right to establish and administer educational institutions of their choice. Compensation on compulsory acquisition of their property must not restrict this right. The State shall not discriminate against minority institutions in granting aid.',
      clauses: ['30(1): establish and administer', '30(1A): compensation on acquisition (44th Amendment)', '30(2): non-discrimination in aid', 'Minority status determined State-wise (T.M.A. Pai)'],
      amendments: ['44th Amendment, 1978: clause (1A)'],
      cases: [
        { name: 'In re Kerala Education Bill', cite: 'AIR 1958 SC 956', i: 'Did the Bill infringe minority rights?', r: 'The right is not absolute; regulations in the interest of educational excellence are permissible, but not those that destroy minority character.', a: 'Presidential reference under Art. 143.', c: 'Some clauses held invalid as applied to minority institutions.' },
        { name: 'Ahmedabad St. Xavier\'s College Society v. State of Gujarat', cite: '(1974) 1 SCC 717', i: 'Can the State compel affiliation and control appointments in minority colleges?', r: 'Regulations must be for the benefit of the institution and not infringe the right to administer.', a: 'Provisions on appointments and discipline were too intrusive.', c: 'Several provisions struck down as applied to minority colleges.' },
        { name: 'T.M.A. Pai Foundation v. State of Karnataka', cite: '(2002) 8 SCC 481', i: 'What is the scope of minority and private educational rights?', r: 'Minority is determined State-wise; unaided minority institutions have maximum autonomy; aided ones may be required to admit some non-minority students (11-judge bench).', a: 'Clarified 11 questions.', c: 'Basis of current law; clarified in Islamic Academy (2003) and P.A. Inamdar (2005) 6 SCC 537.' },
        { name: 'Aligarh Muslim University v. Naresh Agarwal', cite: '2024 INSC 856', i: 'Can an institution created by statute claim minority status?', r: 'Incorporation by statute does not by itself extinguish minority character; courts must look at who conceived and established the institution (7-judge bench, 4:3).', a: 'Azeez Basha v. Union of India (AIR 1968 SC 662) had held AMU was not established by Muslims.', c: 'Azeez Basha overruled; AMU\'s status left to a regular bench applying the new tests.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss the rights of minorities to establish and administer educational institutions with reference to recent trends.', outline: ['Meaning of minority; State-wise', 'Kerala Education Bill', 'St. Xavier\'s', 'T.M.A. Pai, Islamic Academy, P.A. Inamdar', 'AMU (2024)', 'RTE exemption (Pramati)'] },
        { type: 'Problem', q: 'A State requires all aided minority colleges to fill 50% seats through a common entrance merit list. Decide.', outline: ['Issue: reasonable regulation or interference?', 'Rule: T.M.A. Pai; St. Stephen\'s (1992)', 'Application: aided institutions may be asked to admit a reasonable share; 50% has been accepted', 'Conclusion: likely valid if merit-based and transparent'] }
      ],
      notes: { unit: 'V', note: 'Minority institutions and recent trends, with St. Xavier\'s, T.M.A. Pai, Islamic Academy, P.A. Inamdar, Bal Patil and Sidhrajbhai.' }
    },
    '31': {
      title: 'Compulsory acquisition of property. [Omitted]',
      omitted: 'Repealed by the 44th Amendment, 1978 (w.e.f. 20 June 1979).',
      summary: 'Originally guaranteed that no person would be deprived of property save by authority of law, and required compensation for compulsory acquisition. After repeal, the right to property survives as a constitutional (not fundamental) right under Article 300A.',
      clauses: ['Before 1978: property was a fundamental right under 19(1)(f) and 31', 'After 1978: Article 300A in Part XII'],
      amendments: ['1st, 4th, 17th, 25th Amendments curtailed it', '44th Amendment, 1978: repealed'],
      cases: [
        { name: 'State of West Bengal v. Bela Banerjee', cite: 'AIR 1954 SC 92', i: 'What does "compensation" mean?', r: 'Compensation means just equivalent of the property.', a: 'Fixed compensation was inadequate.', c: 'Led to the 4th Amendment.' },
        { name: 'R.C. Cooper v. Union of India (Bank Nationalisation)', cite: '(1970) 1 SCC 248', i: 'Was the nationalisation compensation valid?', r: 'Compensation must be based on relevant principles; Articles 19(1)(f) and 31(2) are not mutually exclusive.', a: 'Principles were irrelevant.', c: 'Act struck down; led to the 25th Amendment substituting "amount".' },
        { name: 'K.T. Plantation v. State of Karnataka', cite: '(2011) 9 SCC 1', i: 'Does Article 300A require compensation?', r: 'Deprivation must be by valid law; compensation is not expressly required but the law must be just, fair and reasonable.', a: 'Roerich and Devika Rani Estate Acquisition Act.', c: 'Act upheld.' }
      ],
      questions: [{ type: 'Essay', q: 'Trace the right to property before 1978 and its present position.', outline: ['Art. 19(1)(f) and 31', 'Bela Banerjee, Cooper', 'Amendments', '44th Amendment', 'Art. 300A: K.T. Plantation; Vidya Devi (2020): human right'] }],
      notes: { unit: 'V', note: 'Right to property prior to 1978 and the present position (Article 300A).' }
    },
    '31A': {
      title: 'Saving of laws providing for acquisition of estates, etc.',
      summary: 'Laws providing for acquisition of estates, State management of property, amalgamation of corporations, and modification of mining leases cannot be challenged under Article 14 or 19. Where an estate is acquired, land within the ceiling limit under personal cultivation must be compensated at not less than market value.',
      clauses: ['Agrarian reform protection', 'Excludes challenge under 14 and 19', 'Second proviso: market value for land within ceiling'],
      amendments: ['1st Amendment, 1951 (inserted, retrospectively)', '4th Amendment, 1955; 17th Amendment, 1964'],
      cases: [
        { name: 'Kochuni v. State of Madras', cite: 'AIR 1960 SC 1080', i: 'Did Article 31A protect a law affecting a "sthanam" property in Kerala?', r: 'The property was not an "estate"; protection did not apply.', a: 'Led to the 17th Amendment widening "estate".', c: 'Law struck down.' },
        { name: 'Waman Rao v. Union of India', cite: '(1981) 2 SCC 362', i: 'Are 31A and Ninth Schedule laws immune after Kesavananda?', r: '31A as originally enacted and later amendments are valid; Ninth Schedule laws added after 24 April 1973 are open to basic structure review.', a: 'Maharashtra land ceiling laws.', c: 'Upheld with the date line.' }
      ],
      questions: [{ type: 'Short note', q: 'Article 31A.', outline: ['Agrarian reform', '1st and 17th Amendments', 'Kochuni', 'Waman Rao'] }],
      notes: { unit: 'V', note: 'Article 31A and the Ninth Schedule.' }
    },
    '31B': {
      title: 'Validation of certain Acts and Regulations.',
      summary: 'Acts and Regulations in the Ninth Schedule shall not be deemed void on the ground of inconsistency with Part III, notwithstanding any judgment to the contrary.',
      clauses: ['Ninth Schedule shield', 'Independent of 31A'],
      amendments: ['1st Amendment, 1951'],
      cases: [
        { name: 'I.R. Coelho v. State of Tamil Nadu', cite: '(2007) 2 SCC 1', i: 'Are laws placed in the Ninth Schedule after 24 April 1973 immune from review?', r: 'Laws inserted after Kesavananda are subject to review on the basis of the basic structure, including the essence of Articles 14, 19 and 21 (9-judge bench).', a: 'Tamil Nadu 69% reservation and others.', c: 'Ninth Schedule protection is not absolute.' }
      ],
      questions: [{ type: 'Short note', q: 'Ninth Schedule and judicial review.', outline: ['Origin', 'Waman Rao', 'I.R. Coelho'] }],
      notes: { unit: 'II', note: 'Discussed with I.R. Coelho in the amendment cases.' }
    },
    '31C': {
      title: 'Saving of laws giving effect to certain directive principles.',
      summary: 'A law giving effect to the policy of the State towards securing the principles in Article 39(b) or (c) cannot be declared void for inconsistency with Article 14 or 19. A law declaring that it gives effect to such policy shall not be questioned on the ground that it does not.',
      clauses: ['Protects laws furthering 39(b)–(c)', 'Second limb (bar on judicial enquiry) struck down in Kesavananda', '42nd Amendment extension to all DPSPs struck down in Minerva Mills'],
      amendments: ['25th Amendment, 1971 (inserted)', '42nd Amendment, 1976 (extension struck down)'],
      cases: [
        { name: 'Kesavananda Bharati v. State of Kerala', cite: '(1973) 4 SCC 225', i: 'Is Article 31C valid?', r: 'First part valid; the clause barring courts from enquiring whether the law actually gives effect to the policy is invalid.', a: 'Judicial review is part of the basic structure.', c: 'Partly upheld.' },
        { name: 'Minerva Mills v. Union of India', cite: '(1980) 3 SCC 625', i: 'Was the 42nd Amendment extending 31C to all directive principles valid?', r: 'Harmony and balance between Parts III and IV is a basic feature.', a: 'Total subordination of 14 and 19 destroyed that balance.', c: 'Extension struck down.' },
        { name: 'Property Owners Association v. State of Maharashtra', cite: '2024 INSC 835', i: 'Does Article 31C survive after Minerva Mills? Is all private property a "material resource of the community"?', r: 'Article 31C as upheld in Kesavananda survives; not all private property is a material resource under 39(b) (9-judge bench).', a: 'MHADA Chapter VIII-A challenged.', c: 'Unanimous on 31C; 8:1 on 39(b).' }
      ],
      questions: [{ type: 'Essay', q: 'Examine the relationship between Fundamental Rights and Directive Principles with reference to Article 31C.', outline: ['Champakam', 'Golak Nath', 'Kesavananda', 'Minerva Mills', 'Property Owners Association (2024)'] }],
      notes: { unit: 'V', note: 'Article 31C and inter-relation of FRs and DPSPs, with Minerva Mills.' }
    },
    '31D': {
      title: 'Saving of laws in respect of anti-national activities. [Omitted]',
      omitted: 'Inserted by the 42nd Amendment, 1976; repealed by the 43rd Amendment, 1977.',
      summary: 'Protected laws prohibiting anti-national activities and associations from challenge under Articles 14, 19 and 31. Repealed after the Emergency.',
      clauses: [], amendments: ['42nd Amendment, 1976 (inserted)', '43rd Amendment, 1977 (omitted)'], cases: [], questions: [], notes: null
    },
    '32': {
      title: 'Remedies for enforcement of rights conferred by this Part.',
      summary: 'The right to move the Supreme Court by appropriate proceedings for enforcement of Part III rights is itself guaranteed. The Court may issue directions, orders or writs, including habeas corpus, mandamus, prohibition, quo warranto and certiorari. Parliament may empower other courts to exercise these powers. The right cannot be suspended except as provided by the Constitution.',
      clauses: ['32(1): right to move the Supreme Court', '32(2): five writs', '32(3): other courts may be empowered', '32(4): no suspension except under the Constitution (Art. 359)', 'Writs: habeas corpus, mandamus, prohibition, certiorari, quo warranto', 'Art. 226 is wider: High Courts can issue writs "for any other purpose"'],
      amendments: [],
      cases: [
        { name: 'Romesh Thappar v. State of Madras', cite: 'AIR 1950 SC 124', i: 'Must a petitioner approach the High Court first?', r: 'The Supreme Court is the protector and guarantor of fundamental rights; it cannot refuse relief on the ground that another remedy exists.', a: 'Direct petition under Article 32.', c: 'Maintainable.' },
        { name: 'Hussainara Khatoon v. Home Secretary, State of Bihar', cite: '(1980) 1 SCC 81', i: 'Undertrial prisoners detained longer than the maximum sentence.', r: 'Speedy trial and free legal aid are part of Article 21; PIL is maintainable.', a: 'Thousands of undertrials languished.', c: 'Release ordered; origin of PIL in India.' },
        { name: 'S.P. Gupta v. Union of India', cite: '1981 Supp SCC 87', i: 'Who has standing to challenge judicial transfers and appointments?', r: 'Liberalised locus standi: any member of the public acting bona fide can sue for persons unable to approach the court.', a: 'Lawyers challenged transfer policy.', c: 'Locus standi relaxed; PIL entrenched.' },
        { name: 'Nilabati Behera v. State of Orissa', cite: '(1993) 2 SCC 746', i: 'Can the Court award compensation for custodial death under Article 32?', r: 'Compensation under public law for violation of Article 21 is distinct from private-law damages; sovereign immunity is no defence.', a: 'Son died in police custody.', c: 'Compensation awarded; follows Rudul Sah (1983) 4 SCC 141.' },
        { name: 'L. Chandra Kumar v. Union of India', cite: '(1997) 3 SCC 261', i: 'Can tribunals exclude the writ jurisdiction of High Courts?', r: 'Judicial review under Articles 32 and 226 is part of the basic structure.', a: 'Article 323A(2)(d) and 323B(3)(d).', c: 'Exclusion clauses struck down.' }
      ],
      questions: [
        { type: 'Essay', q: '"Article 32 is the heart and soul of the Constitution" (Dr. Ambedkar). Explain with reference to the kinds of writs.', outline: ['Nature of Art. 32', 'Five writs, each with a case: habeas corpus (Kanu Sanyal 1973, ADM Jabalpur), mandamus (Praga Tools 1969), prohibition and certiorari (T.C. Basappa 1954, Surya Dev Rai 2003), quo warranto', 'Art. 32 vs 226', 'PIL: Hussainara, S.P. Gupta', 'Compensation: Rudul Sah, Nilabati Behera'] },
        { type: 'Short note', q: 'Writ of habeas corpus.', outline: ['Meaning', 'Against State and private persons', 'Kanu Sanyal; Sunil Batra; ADM Jabalpur'] },
        { type: 'Short note', q: 'Public interest litigation.', outline: ['Relaxed locus standi', 'Epistolary jurisdiction', 'Guidelines against abuse'] }
      ],
      notes: { unit: 'V', note: 'Articles 32 and 226 and kinds of writs, with ADM Jabalpur, Bhim Singh, Kanu Sanyal, Nilabati Behera, Praga Tools, S.P. Gupta, T.C. Basappa and Surya Dev Rai.' }
    },
    '32A': {
      title: 'Constitutional validity of State laws not to be considered in proceedings under article 32. [Omitted]',
      omitted: 'Inserted by the 42nd Amendment, 1976; repealed by the 43rd Amendment, 1977.',
      summary: 'Barred the Supreme Court from considering the validity of State laws in Article 32 proceedings unless Central laws were also challenged. Repealed after the Emergency.',
      clauses: [], amendments: ['42nd Amendment, 1976 (inserted)', '43rd Amendment, 1977 (omitted)'], cases: [], questions: [], notes: null
    },
    '33': {
      title: 'Power of Parliament to modify the rights conferred by this Part in their application to forces, etc.',
      summary: 'Parliament may by law restrict or abrogate fundamental rights for members of the armed forces, forces charged with maintaining public order, intelligence and counter-intelligence bodies, and telecommunication systems set up for those forces, to ensure proper discharge of duties and maintenance of discipline.',
      clauses: ['Only Parliament, not State Legislatures', 'Extended by the 50th Amendment, 1984'],
      amendments: ['50th Amendment, 1984'],
      cases: [
        { name: 'R. Viswan v. Union of India', cite: '(1983) 3 SCC 401', i: 'Can the Army Act apply to General Reserve Engineering Force personnel?', r: 'GREF is integral to the armed forces; restrictions under Article 33 are valid.', a: 'Personnel were subject to Army discipline.', c: 'Restriction upheld.' }
      ],
      questions: [{ type: 'Short note', q: 'Article 33.', outline: ['Scope', 'R. Viswan'] }],
      notes: null
    },
    '34': {
      title: 'Restriction on rights conferred by this Part while martial law is in force in any area.',
      summary: 'Parliament may by law indemnify any person in the service of the Union or a State, or any other person, for acts done to maintain or restore order in an area where martial law was in force, and validate sentences and orders passed there.',
      clauses: ['Martial law is not defined in the Constitution', 'Differs from a national emergency under Art. 352'],
      amendments: [], cases: [],
      questions: [{ type: 'Short note', q: 'Martial law and fundamental rights.', outline: ['Art. 34', 'Comparison with Art. 352 and 359'] }],
      notes: null
    },
    '35': {
      title: 'Legislation to give effect to the provisions of this Part.',
      summary: 'Parliament alone has power to make laws for Articles 16(3), 32(3), 33 and 34, and for prescribing punishment for acts declared offences under Part III (such as under Articles 17 and 23). Existing laws on these matters continue until altered by Parliament.',
      clauses: ['Ensures uniformity across India'],
      amendments: [], cases: [], questions: [], notes: null
    }
  }
};
