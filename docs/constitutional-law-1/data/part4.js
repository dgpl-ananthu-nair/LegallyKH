window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};
window.COI.parts['IV'] = {
  key: 'IV', part: 'IV', title: 'Directive Principles of State Policy', range: 'Art. 36–51',
  intro: 'Part IV sets out principles that are fundamental in the governance of the country and that the State must apply in making laws. Under Article 37 they are not enforceable by any court. Courts use them to interpret fundamental rights and statutes, and since Minerva Mills the harmony between Parts III and IV is treated as part of the basic structure.',
  groups: [
    { slug: 'all', name: 'Definition and Application', range: '36–37', ids: ['36', '37'] },
    { slug: 'socialist', name: 'Social and Economic Order', range: '38–39A', ids: ['38', '39', '39A'] },
    { slug: 'welfare', name: 'Work, Welfare and Education', range: '40–47', ids: ['40', '41', '42', '43', '43A', '43B', '44', '45', '46', '47'] },
    { slug: 'others', name: 'Agriculture, Environment, Heritage, Judiciary and Peace', range: '48–51', ids: ['48', '48A', '49', '50', '51'] }
  ],
  articles: {
    '36': {
      title: 'Definition.',
      summary: 'In Part IV, "the State" has the same meaning as in Part III (Article 12), unless the context otherwise requires.',
      clauses: ['Borrows the Article 12 definition'], amendments: [], cases: [],
      questions: [{ type: 'Short note', q: 'Classification of Directive Principles.', outline: ['Socialist: 38, 39, 39A, 41, 42, 43, 43A, 47', 'Gandhian: 40, 43, 43B, 46, 47, 48', 'Liberal-intellectual: 44, 45, 48, 48A, 49, 50, 51', 'Source: Irish Constitution'] }],
      notes: { unit: 'V', note: 'Lists Articles 36 to 51 with a one-line description of each.' }
    },
    '37': {
      title: 'Application of the principles contained in this Part.',
      summary: 'The provisions of Part IV are not enforceable by any court, but they are nevertheless fundamental in the governance of the country, and it is the duty of the State to apply them in making laws.',
      clauses: ['Non-justiciable', 'Fundamental in governance', 'Duty of the State in legislation'],
      amendments: [],
      cases: [
        { name: 'State of Madras v. Champakam Dorairajan', cite: 'AIR 1951 SC 226', i: 'Can a Directive Principle (Art. 46) justify a law that violates a fundamental right (Art. 29(2))?', r: 'Directive Principles must conform to and run subsidiary to fundamental rights.', a: 'The Communal G.O. contravened Article 29(2).', c: 'G.O. struck down; fundamental rights prevail.' },
        { name: 'Kesavananda Bharati v. State of Kerala', cite: '(1973) 4 SCC 225', i: 'How do Parts III and IV relate when Parliament amends the Constitution?', r: 'Parts III and IV are complementary; the Directive Principles may be implemented without destroying the basic structure.', a: 'Upheld the first part of Article 31C.', c: 'DPSPs given greater weight in interpreting the scope of fundamental rights.' },
        { name: 'Minerva Mills v. Union of India', cite: '(1980) 3 SCC 625', i: 'Can all fundamental rights in Articles 14 and 19 be subordinated to every Directive Principle?', r: 'Harmony and balance between Parts III and IV is a basic feature; neither has absolute primacy.', a: 'The 42nd Amendment gave all DPSPs primacy over 14 and 19.', c: 'Extension struck down; harmonious construction.' },
        { name: 'Unni Krishnan J.P. v. State of A.P.', cite: '(1993) 1 SCC 645', i: 'Can a non-justiciable DPSP become an enforceable right?', r: 'Directive Principles can give content to fundamental rights; Articles 41 and 45 read with Article 21 yield a right to education up to 14 years.', a: 'Education was a DPSP under Article 45.', c: 'Right to education read into Article 21.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss the relationship between Fundamental Rights and Directive Principles of State Policy.', outline: ['Nature: justiciable vs non-justiciable (Art. 37)', 'Phase 1: primacy of FRs (Champakam)', 'Phase 2: Golak Nath; 25th Amendment, Art. 31C', 'Phase 3: Kesavananda; Minerva Mills: harmonious construction', 'Phase 4: DPSPs read into FRs (Unni Krishnan, Olga Tellis, M.C. Mehta)', 'Property Owners Association (2024) on 39(b) and 31C', 'Conclusion: complementary'] },
        { type: 'Short note', q: 'Non-justiciability of Directive Principles.', outline: ['Art. 37 text', 'Reasons: finances, flexibility', 'Value: guide legislation and interpretation; Ambedkar: "novel feature"'] }
      ],
      notes: { unit: 'V', note: 'Judicial pronouncements on FRs vs DPSPs: Champakam, Golak Nath, Kesavananda, Minerva Mills.' }
    },
    '38': {
      title: 'State to secure a social order for the promotion of welfare of the people.',
      summary: 'The State shall strive to promote the welfare of the people by securing a social order in which justice, social, economic and political, informs all institutions of national life. The State shall strive to minimise inequalities in income and eliminate inequalities in status, facilities and opportunities among individuals and groups.',
      clauses: ['38(1): social order based on justice', '38(2): minimise inequalities of income (44th Amendment, 1978)'],
      amendments: ['44th Amendment, 1978: clause (2)'],
      cases: [
        { name: 'Air India Statutory Corporation v. United Labour Union', cite: '(1997) 9 SCC 377', i: 'Must contract labour be absorbed when contract labour is abolished?', r: 'Articles 38, 39 and 43 inform the meaning of labour statutes; social justice is a constitutional goal.', a: 'Employees of the abolished contract were found to be workers of the principal employer.', c: 'Absorption directed (later overruled on this point in Steel Authority of India v. National Union Waterfront Workers, 2001).' }
      ],
      questions: [{ type: 'Short note', q: 'Welfare State under Article 38.', outline: ['Justice: social, economic, political', 'Link with Preamble', '38(2) inserted 1978'] }],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '39': {
      title: 'Certain principles of policy to be followed by the State.',
      summary: 'The State shall direct its policy towards securing: (a) adequate means of livelihood for all citizens, men and women equally; (b) distribution of ownership and control of the material resources of the community to subserve the common good; (c) an economic system that does not result in concentration of wealth and means of production to the common detriment; (d) equal pay for equal work for men and women; (e) protection of the health and strength of workers and children from abuse; (f) opportunities for children to develop in a healthy manner and in conditions of freedom and dignity.',
      clauses: ['39(a) livelihood', '39(b) material resources for common good', '39(c) prevent concentration of wealth', '39(d) equal pay for equal work', '39(e) health of workers and children', '39(f) children: healthy development (reworded by 42nd Amendment)', 'Laws furthering 39(b)–(c) protected by Art. 31C'],
      amendments: ['42nd Amendment, 1976: reworded clause (f)'],
      cases: [
        { name: 'State of Karnataka v. Ranganatha Reddy', cite: '(1977) 4 SCC 471', i: 'Are privately owned buses "material resources of the community" under 39(b)?', r: 'Krishna Iyer J. (minority on this point) read 39(b) to include all private resources.', a: 'Nationalisation of contract carriages.', c: 'Nationalisation upheld; the wide reading was later followed in Sanjeev Coke (1983).' },
        { name: 'Randhir Singh v. Union of India', cite: '(1982) 1 SCC 618', i: 'Is "equal pay for equal work" enforceable?', r: 'Although only a DPSP, equal pay for equal work is a constitutional goal enforceable through Articles 14 and 16.', a: 'Delhi Police drivers did the same work as other drivers but were paid less.', c: 'Equal pay directed.' },
        { name: 'Property Owners Association v. State of Maharashtra', cite: '2024 INSC 835', i: 'Is all privately owned property a "material resource of the community"?', r: 'Not all private property qualifies; it depends on the nature of the resource, its impact on community well-being, scarcity and concentration (9-judge bench, 8:1).', a: 'MHADA Chapter VIII-A acquisition of cessed buildings.', c: 'Wide Krishna Iyer view rejected; Sanjeev Coke overruled to that extent.' }
      ],
      questions: [
        { type: 'Essay', q: 'Explain Article 39 and its role in shaping economic justice in India.', outline: ['Each clause', '39(b)–(c) and Art. 31C', 'Ranganatha Reddy; Sanjeev Coke', 'Randhir Singh on 39(d)', 'Property Owners Association (2024)', 'Statutes: MGNREGA (39(a)), Equal Remuneration Act'] },
        { type: 'Short note', q: 'Equal pay for equal work.', outline: ['39(d)', 'Randhir Singh', 'State of Punjab v. Jagjit Singh (2017): temporary employees'] }
      ],
      notes: { unit: 'V', note: 'Listed, with examples of implementing laws (MGNREGA, Child Labour Act).' }
    },
    '39A': {
      title: 'Equal justice and free legal aid.',
      summary: 'The State shall secure that the operation of the legal system promotes justice on the basis of equal opportunity, and shall provide free legal aid by suitable legislation or schemes, so that opportunities for securing justice are not denied to any citizen because of economic or other disabilities.',
      clauses: ['Inserted by 42nd Amendment, 1976', 'Implemented by the Legal Services Authorities Act, 1987 (NALSA, SLSA, Lok Adalats)'],
      amendments: ['42nd Amendment, 1976: inserted'],
      cases: [
        { name: 'M.H. Hoskot v. State of Maharashtra', cite: '(1978) 3 SCC 544', i: 'Is a prisoner entitled to a copy of the judgment and free legal services for appeal?', r: 'Free legal aid to an indigent accused is part of fair procedure under Article 21, read with 39A.', a: 'Copy of judgment not supplied in time.', c: 'State must provide a copy and counsel.' },
        { name: 'Khatri (II) v. State of Bihar', cite: '(1981) 1 SCC 627', i: 'Must a magistrate inform an accused of the right to free legal aid? (Bhagalpur blindings)', r: 'The right to free legal aid arises at the first production before a magistrate; the magistrate must inform the accused.', a: 'Undertrials were not offered counsel.', c: 'Duty to inform laid down.' }
      ],
      questions: [{ type: 'Short note', q: 'Free legal aid as a constitutional right.', outline: ['Art. 39A', 'Hoskot; Hussainara Khatoon; Khatri', 'Legal Services Authorities Act, 1987'] }],
      notes: { unit: 'V', note: 'Listed as one of the four DPSPs added by the 42nd Amendment.' }
    },
    '40': {
      title: 'Organisation of village panchayats.',
      summary: 'The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.',
      clauses: ['Gandhian principle', 'Given constitutional status by Part IX (73rd Amendment, 1992)'],
      amendments: [], cases: [],
      questions: [{ type: 'Short note', q: 'From Article 40 to Part IX.', outline: ['Gandhian ideal', 'Balwant Rai Mehta Committee (1957)', '73rd Amendment, 1992'] }],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '41': {
      title: 'Right to work, to education and to public assistance in certain cases.',
      summary: 'Within the limits of its economic capacity and development, the State shall make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and other undeserved want.',
      clauses: ['Qualified by economic capacity', 'Basis of MGNREGA and social security schemes'],
      amendments: [],
      cases: [{ name: 'Unni Krishnan J.P. v. State of A.P.', cite: '(1993) 1 SCC 645', i: 'Extent of the right to education.', r: 'Articles 41 and 45 read with 21: free education up to 14; beyond that within economic capacity.', a: 'See Art. 21A.', c: 'Basis of the 86th Amendment.' }],
      questions: [], notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '42': {
      title: 'Provision for just and humane conditions of work and maternity relief.',
      summary: 'The State shall make provision for securing just and humane conditions of work and for maternity relief.',
      clauses: ['Maternity Benefit Act, 1961', 'Workplace safety laws'],
      amendments: [],
      cases: [{ name: 'Municipal Corporation of Delhi v. Female Workers (Muster Roll)', cite: '(2000) 3 SCC 224', i: 'Are women on muster roll (daily wage) entitled to maternity benefit?', r: 'Articles 39 and 42 and CEDAW require maternity relief for all working women irrespective of the nature of employment.', a: 'MCD denied benefit to casual workers.', c: 'Maternity benefit extended.' }],
      questions: [], notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '43': {
      title: 'Living wage, etc., for workers.',
      summary: 'The State shall endeavour to secure, by suitable legislation, economic organisation or other means, to all workers a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities, and shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas.',
      clauses: ['Living wage is higher than minimum wage', 'Cottage industries: Gandhian'],
      amendments: [], cases: [], questions: [],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '43A': {
      title: 'Participation of workers in management of industries.',
      summary: 'The State shall take steps, by suitable legislation or otherwise, to secure participation of workers in the management of undertakings, establishments or other organisations engaged in any industry.',
      clauses: ['Inserted by 42nd Amendment, 1976'],
      amendments: ['42nd Amendment, 1976: inserted'], cases: [], questions: [],
      notes: { unit: 'V', note: 'Listed as added by the 42nd Amendment.' }
    },
    '43B': {
      title: 'Promotion of co-operative societies.',
      summary: 'The State shall endeavour to promote voluntary formation, autonomous functioning, democratic control and professional management of co-operative societies.',
      clauses: ['Inserted by 97th Amendment, 2011, together with Part IXB and the word "co-operative societies" in 19(1)(c)'],
      amendments: ['97th Amendment, 2011: inserted'],
      cases: [{ name: 'Union of India v. Rajendra N. Shah', cite: '(2021) 10 SCC 1', i: 'Was Part IXB validly enacted without ratification by half the States?', r: 'Co-operative societies are a State subject (Entry 32, List II); Part IXB required ratification under Article 368(2).', a: 'No ratification was obtained.', c: 'Part IXB struck down for State co-operatives; survives for multi-State co-operatives. Article 43B was not affected.' }],
      questions: [], notes: null
    },
    '44': {
      title: 'Uniform civil code for the citizens.',
      summary: 'The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.',
      clauses: ['Liberal-intellectual principle', 'Personal laws differ by religion on marriage, divorce, succession, adoption', 'Goa has had a common civil code since Portuguese rule; Uttarakhand enacted a UCC in 2024'],
      amendments: [],
      cases: [
        { name: 'Mohd. Ahmed Khan v. Shah Bano Begum', cite: '(1985) 2 SCC 556', i: 'Is a divorced Muslim wife entitled to maintenance under s.125 CrPC beyond iddat?', r: 's.125 is secular and applies to all; the Court lamented that Article 44 remained a dead letter.', a: 'Husband had paid only iddat maintenance and mahr.', c: 'Maintenance upheld; followed by the Muslim Women (Protection of Rights on Divorce) Act, 1986.' },
        { name: 'Sarla Mudgal v. Union of India', cite: '(1995) 3 SCC 635', i: 'Can a Hindu husband convert to Islam to marry again without dissolving the first marriage?', r: 'Second marriage is void and bigamy under s.494 IPC; the Court urged a UCC.', a: 'Conversion was used to evade monogamy.', c: 'Prosecution for bigamy maintainable.' },
        { name: 'Danial Latifi v. Union of India', cite: '(2001) 7 SCC 740', i: 'Is the 1986 Act valid?', r: 'Read so that a reasonable and fair provision for the wife\'s future must be made within the iddat period.', a: 'Reading down saved the Act.', c: 'Act upheld as read.' }
      ],
      questions: [{ type: 'Essay', q: 'Discuss Article 44 and the judicial approach to a uniform civil code.', outline: ['Text and aim', 'Constituent Assembly debate', 'Shah Bano; Sarla Mudgal; Danial Latifi; John Vallamattom (2003); Shayara Bano', 'Goa; Uttarakhand UCC 2024', 'Arguments for and against'] }],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '45': {
      title: 'Provision for early childhood care and education to children below the age of six years.',
      summary: 'The State shall endeavour to provide early childhood care and education for all children until they complete the age of six years.',
      clauses: ['Originally provided for free and compulsory education up to 14 within ten years', 'Substituted by the 86th Amendment, 2002 when education for 6–14 became Art. 21A'],
      amendments: ['86th Amendment, 2002: substituted'], cases: [], questions: [],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '46': {
      title: 'Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections.',
      summary: 'The State shall promote with special care the educational and economic interests of the weaker sections, in particular SCs and STs, and shall protect them from social injustice and all forms of exploitation.',
      clauses: ['Basis for protective discrimination policies', 'Read with Art. 15(4), 16(4), 335'],
      amendments: [],
      cases: [{ name: 'State of Kerala v. N.M. Thomas', cite: '(1976) 2 SCC 310', i: 'See Article 16.', r: 'Article 46 supports classification in favour of SCs and STs under Article 16(1).', a: 'Exemption from departmental tests.', c: 'Upheld.' }],
      questions: [], notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '47': {
      title: 'Duty of the State to raise the level of nutrition and the standard of living and to improve public health.',
      summary: 'The State shall regard raising the level of nutrition and standard of living and improving public health as among its primary duties, and shall endeavour to bring about prohibition of intoxicating drinks and drugs injurious to health, except for medicinal purposes.',
      clauses: ['Basis of prohibition laws', 'Public health as part of Art. 21'],
      amendments: [],
      cases: [
        { name: 'State of Bombay v. F.N. Balsara', cite: 'AIR 1951 SC 318', i: 'Is the Bombay Prohibition Act valid?', r: 'Prohibition furthers Article 47; restrictions are reasonable, though some provisions were too wide.', a: 'Most provisions upheld.', c: 'Act largely upheld.' },
        { name: 'Paschim Banga Khet Mazdoor Samity v. State of W.B.', cite: '(1996) 4 SCC 37', i: 'Does denial of emergency treatment by government hospitals violate Article 21?', r: 'Providing adequate medical facilities is a primary duty of a welfare State (Art. 47 with 21).', a: 'Injured man turned away by several hospitals.', c: 'Compensation awarded; directions issued.' }
      ],
      questions: [], notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '48': {
      title: 'Organisation of agriculture and animal husbandry.',
      summary: 'The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines, and take steps to preserve and improve breeds and prohibit the slaughter of cows and calves and other milch and draught cattle.',
      clauses: ['Basis of cow-slaughter laws'],
      amendments: [],
      cases: [
        { name: 'Mohd. Hanif Qureshi v. State of Bihar', cite: 'AIR 1958 SC 731', i: 'Is a total ban on slaughter of cattle valid?', r: 'Total ban on cows and calves valid; ban on useless cattle beyond a certain age unreasonable.', a: 'Balanced 19(1)(g) with Article 48.', c: 'Partly upheld.' },
        { name: 'State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat', cite: '(2005) 8 SCC 534', i: 'Is a total ban on slaughter of cow progeny including bulls and bullocks valid?', r: 'Read with Articles 48, 48A and 51A(g), a total ban is a reasonable restriction (7-judge bench).', a: 'Hanif Qureshi partly overruled.', c: 'Ban upheld.' }
      ],
      questions: [], notes: { unit: 'V', note: 'Cow-slaughter laws cited as implementing Article 48.' }
    },
    '48A': {
      title: 'Protection and improvement of environment and safeguarding of forests and wild life.',
      summary: 'The State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country.',
      clauses: ['Inserted by 42nd Amendment, 1976', 'Read with Art. 21 and 51A(g)'],
      amendments: ['42nd Amendment, 1976: inserted'],
      cases: [
        { name: 'M.C. Mehta v. Union of India (Oleum Gas Leak)', cite: '(1987) 1 SCC 395', i: 'What is the liability of an enterprise engaged in hazardous activity?', r: 'Absolute liability with no exceptions, replacing Rylands v. Fletcher strict liability.', a: 'Oleum gas leak from Shriram Foods and Fertilisers, Delhi.', c: 'Absolute liability laid down.' },
        { name: 'Vellore Citizens Welfare Forum v. Union of India', cite: '(1996) 5 SCC 647', i: 'Pollution by tanneries in Tamil Nadu.', r: 'Precautionary principle and polluter pays principle are part of Indian environmental law, flowing from Articles 21, 47, 48A and 51A(g).', a: 'Tanneries discharged untreated effluents.', c: 'Directions and compensation ordered.' }
      ],
      questions: [{ type: 'Essay', q: 'Explain the constitutional basis of environmental protection in India.', outline: ['Art. 48A, 51A(g), 21', 'Subhash Kumar (1991)', 'M.C. Mehta cases', 'Vellore Citizens: sustainable development, precautionary, polluter pays', 'T.N. Godavarman (forests)', 'Statutes: EPA 1986, Air and Water Acts'] }],
      notes: { unit: 'V', note: 'Listed as added by the 42nd Amendment.' }
    },
    '49': {
      title: 'Protection of monuments and places and objects of national importance.',
      summary: 'The State shall protect every monument, place or object of artistic or historic interest declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export.',
      clauses: ['Ancient Monuments and Archaeological Sites and Remains Act, 1958'], amendments: [], cases: [], questions: [],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '50': {
      title: 'Separation of judiciary from executive.',
      summary: 'The State shall take steps to separate the judiciary from the executive in the public services of the State.',
      clauses: ['Implemented largely by the CrPC, 1973 (judicial magistrates separated from executive magistrates)', 'Independence of judiciary is part of the basic structure'],
      amendments: [], cases: [],
      questions: [{ type: 'Short note', q: 'Separation of judiciary from executive.', outline: ['Art. 50', 'CrPC 1973', 'Link with independence of judiciary; S.P. Gupta, Second Judges case (1993)'] }],
      notes: { unit: 'V', note: 'Listed under DPSPs.' }
    },
    '51': {
      title: 'Promotion of international peace and security.',
      summary: 'The State shall endeavour to promote international peace and security, maintain just and honourable relations between nations, foster respect for international law and treaty obligations, and encourage settlement of international disputes by arbitration.',
      clauses: ['Basis for reading international conventions into domestic law where consistent'],
      amendments: [],
      cases: [{ name: 'Vishaka v. State of Rajasthan', cite: '(1997) 6 SCC 241', i: 'In the absence of a law on sexual harassment at the workplace, can the Court lay down guidelines?', r: 'International conventions consistent with fundamental rights (CEDAW) can be read into Articles 14, 15, 19(1)(g) and 21, aided by Article 51(c) and 253.', a: 'Bhanwari Devi was gang-raped while working as a saathin.', c: 'Vishaka guidelines issued; later the POSH Act, 2013.' }],
      questions: [], notes: { unit: 'V', note: 'Listed under DPSPs.' }
    }
  }
};
window.COI.parts['IVA'] = {
  key: 'IVA', part: 'IVA', title: 'Fundamental Duties', range: 'Art. 51A',
  intro: 'Part IVA was added by the 42nd Amendment, 1976 on the recommendation of the Swaran Singh Committee, drawing on the Constitution of the USSR. It lists eleven duties of every citizen. The eleventh, on education of children, was added by the 86th Amendment, 2002. The duties are not directly enforceable, but courts use them to interpret laws and to judge the reasonableness of restrictions.',
  groups: [{ slug: 'all', name: 'Fundamental Duties', range: '51A', ids: ['51A'] }],
  articles: {
    '51A': {
      title: 'Fundamental duties.',
      summary: 'It is the duty of every citizen of India: (a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem; (b) to cherish the noble ideals of the freedom struggle; (c) to uphold the sovereignty, unity and integrity of India; (d) to defend the country; (e) to promote harmony and renounce practices derogatory to the dignity of women; (f) to preserve our composite culture; (g) to protect the natural environment and have compassion for living creatures; (h) to develop scientific temper, humanism and the spirit of inquiry and reform; (i) to safeguard public property and abjure violence; (j) to strive towards excellence; (k) for a parent or guardian, to provide opportunities for education to a child between six and fourteen.',
      clauses: ['Only on citizens', 'Clauses (a)–(j): 42nd Amendment, 1976 (Swaran Singh Committee)', 'Clause (k): 86th Amendment, 2002', 'Enforced indirectly: Prevention of Insults to National Honour Act, 1971; environmental laws', 'Justice Verma Committee (1999) on operationalising duties'],
      amendments: ['42nd Amendment, 1976: inserted Part IVA', '86th Amendment, 2002: clause (k)'],
      cases: [
        { name: 'AIIMS Students Union v. AIIMS', cite: '(2002) 1 SCC 428', i: 'Was institutional preference of 33% plus reservation in postgraduate seats valid?', r: 'Fundamental duties, though not enforceable by writ, are equally important as fundamental rights and guide interpretation; 51A(j) calls for excellence.', a: 'Excessive preference compromised merit.', c: 'Institutional reservation struck down.' },
        { name: 'M.C. Mehta v. Union of India', cite: '(1983) 1 SCC 471; (1988) 1 SCC 471', i: 'Should the State teach environmental protection?', r: 'Under 51A(g), the Government must introduce compulsory lessons on environmental protection in schools and colleges.', a: 'Ganga pollution case.', c: 'Directions issued.' },
        { name: 'Bijoe Emmanuel v. State of Kerala', cite: '(1986) 3 SCC 615', i: 'Did standing silently during the National Anthem violate 51A(a)?', r: 'Respect is shown by standing; there is no legal duty to sing.', a: 'No disrespect shown.', c: 'Expulsion set aside.' },
        { name: 'Shyam Narayan Chouksey v. Union of India', cite: '(2018) 2 SCC 574', i: 'Is playing the National Anthem in cinemas mandatory?', r: 'The 2016 interim order made it mandatory; in 2018 the Court modified it to optional and left it to the Government.', a: 'Relied on 51A(a).', c: 'Made optional.' }
      ],
      questions: [
        { type: 'Essay', q: 'Discuss the nature and significance of Fundamental Duties. Are they enforceable?', outline: ['Origin: 42nd Amendment, Swaran Singh Committee, USSR', 'List of eleven', 'Non-justiciable but used in interpretation', 'AIIMS Students Union; M.C. Mehta; Mohan Kumar Singhania (1992)', 'Justice Verma Committee', 'Conclusion: rights and duties are correlative'] },
        { type: 'Short note', q: 'Article 51A(g): duty to protect the environment.', outline: ['Text', 'With 48A and 21', 'M.C. Mehta; Vellore Citizens'] }
      ],
      notes: { unit: 'V', note: 'Fundamental Duties under Article 51A and the inter-relation with FRs and DPSPs.' }
    }
  }
};
