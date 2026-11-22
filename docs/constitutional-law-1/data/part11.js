(function () {
const A = (title, summary, x = {}) => ({ title, summary, clauses: x.k || [], amendments: x.m || [], cases: x.c || [], questions: x.q || [], notes: null, omitted: x.o });
const C = (name, cite, i, r, a, c) => ({ name, cite, i, r, a, c });
const Q = (type, q, outline) => ({ type, q, outline });
window.COI = window.COI || {}; window.COI.parts = window.COI.parts || {};

window.COI.parts['XI'] = {
  key: 'XI', part: 'XI', title: 'Relations between the Union and the States', range: 'Art. 245–263',
  intro: 'Part XI divides legislative power between Parliament and the States through the three Lists of the Seventh Schedule, gives Parliament residuary power and overriding power in specified situations, and governs administrative relations, inter-State water disputes and the Inter-State Council. The Sarkaria (1988) and Punchhi (2010) Commissions reviewed these relations.',
  groups: [
    { slug: 'chi-distribution-of-legislative-powers', chapter: 'Chapter I · Legislative Relations', name: 'Distribution of Legislative Powers', range: '245–255', ids: ['245', '246', '246A', '247', '248', '249', '250', '251', '252', '253', '254', '255'] },
    { slug: 'chii-general', chapter: 'Chapter II · Administrative Relations', name: 'General', range: '256–261', ids: ['256', '257', '257A', '258', '258A', '259', '260', '261'] },
    { slug: 'chii-disputes-relating-to-waters', name: 'Disputes relating to Waters', range: '262', ids: ['262'] },
    { slug: 'chii-co-ordination-between-states', name: 'Co-ordination between States', range: '263', ids: ['263'] }
  ],
  articles: {
    '245': A('Extent of laws made by Parliament and by the Legislatures of States.', 'Parliament may make laws for the whole or any part of India, and a State Legislature for the whole or any part of the State. No law of Parliament is invalid on the ground that it has extra-territorial operation.', {
      k: ['State laws may have extra-territorial effect only if there is a sufficient territorial nexus'],
      c: [
        C('State of Bombay v. R.M.D. Chamarbaugwalla', 'AIR 1957 SC 699', 'Could Bombay tax a prize competition run from Bangalore through a newspaper circulated in Bombay?', 'Doctrine of territorial nexus: a State law may affect persons or things outside the State if there is a sufficient and real connection with the State.', 'Entry forms were collected and the competition promoted in Bombay.', 'Tax upheld.'),
        C('GVK Industries Ltd. v. Income Tax Officer', '(2011) 4 SCC 36', 'Can Parliament legislate for extra-territorial aspects without any nexus with India?', 'Parliament may legislate on extra-territorial aspects only where they have an impact on or nexus with India.', 'Taxation of fees paid abroad.', 'Limited power recognised (5-judge bench).')
      ]
    }),
    '246': A('Subject-matter of laws made by Parliament and by the Legislatures of States.', 'Parliament has exclusive power over matters in List I (Union List). Parliament and State Legislatures both have power over List III (Concurrent List). State Legislatures have exclusive power over List II (State List), subject to clauses (1) and (2). Parliament may legislate on any matter for areas not included in a State.', {
      k: ['List I: 97 entries originally (now 98 after GST changes); List II: 66 (now 59); List III: 47 (now 52)', '42nd Amendment moved education, forests, weights and measures, protection of wild animals and administration of justice to List III', 'Doctrine of pith and substance; doctrine of colourable legislation; incidental and ancillary powers'],
      c: [
        C('Prafulla Kumar Mukherjee v. Bank of Commerce, Khulna', 'AIR 1947 PC 60', 'Is a provincial money-lending law invalid because it affects promissory notes (a federal subject)?', 'Pith and substance: if a law is in substance on a permitted subject, incidental encroachment on another list does not invalidate it.', 'Bengal Money-lenders Act.', 'Law upheld.'),
        C('State of Bombay v. F.N. Balsara', 'AIR 1951 SC 318', 'Is the Bombay Prohibition Act invalid because it affects import of liquor (Union subject)?', 'In pith and substance the Act was on intoxicating liquor (State List); incidental effect on imports is permissible.', 'Prohibition law.', 'Largely upheld.'),
        C('K.C. Gajapati Narayan Deo v. State of Orissa', 'AIR 1953 SC 375', 'What is colourable legislation?', 'A legislature cannot do indirectly what it cannot do directly; the question is one of competence, not motive.', 'Orissa Agricultural Income Tax (Amendment) Act.', 'Act upheld; doctrine explained.')
      ],
      q: [
        Q('Essay', 'Explain the scheme of distribution of legislative powers between the Union and the States.', ['Art. 245, 246, Seventh Schedule', 'Union supremacy: non-obstante clause', 'Residuary power (248)', 'Parliament\'s power over State List: 249, 250, 252, 253, 356', 'Interpretation: pith and substance, colourable legislation, harmonious construction, repugnancy (254)', 'Sarkaria and Punchhi Commissions']),
        Q('Short note', 'Doctrine of pith and substance.', ['Meaning', 'Prafulla Kumar Mukherjee', 'Balsara', 'Incidental encroachment'])
      ]
    }),
    '246A': A('Special provision with respect to goods and services tax.', 'Parliament and State Legislatures both have power to make laws on goods and services tax, except that Parliament alone may legislate on GST where supply takes place in the course of inter-State trade or commerce (IGST).', {
      k: ['Inserted by the 101st Amendment, 2016', 'Petroleum products and alcohol for human consumption outside GST for now', 'GST Council under Art. 279A'],
      m: ['101st Amendment, 2016'],
      c: [C('Union of India v. Mohit Minerals Pvt. Ltd.', '(2022) 10 SCC 700', 'Are GST Council recommendations binding on Parliament and States?', 'Recommendations have persuasive value; Article 246A gives simultaneous power to Parliament and States, and the GST Council is a product of co-operative federalism.', 'IGST on ocean freight.', 'Recommendations not binding; levy struck down.')]
    }),
    '247': A('Power of Parliament to provide for the establishment of certain additional courts.', 'Parliament may provide for additional courts for better administration of laws made by it or existing laws on Union List matters.', {}),
    '248': A('Residuary powers of legislation.', 'Parliament has exclusive power to make any law on any matter not enumerated in the Concurrent List or State List, including any tax not mentioned in either List. Article 248 is subject to Article 246A.', {
      k: ['Entry 97, List I', 'Differs from the USA, where residuary power is with the States'],
      c: [C('Union of India v. H.S. Dhillon', '(1971) 2 SCC 779', 'Could Parliament levy wealth tax on agricultural land under its residuary power?', 'If a matter is not in List II, Parliament can legislate under Entry 97 of List I and Article 248.', 'Wealth tax on agricultural land.', 'Law upheld (4:3).')]
    }),
    '249': A('Power of Parliament to legislate with respect to a matter in the State List in the national interest.', 'If the Rajya Sabha declares by a resolution supported by two-thirds of members present and voting that it is necessary in the national interest, Parliament may legislate on a State List matter. The resolution remains in force for up to one year and may be renewed; the law ceases six months after the resolution lapses.', {}),
    '250': A('Power of Parliament to legislate with respect to any matter in the State List if a Proclamation of Emergency is in operation.', 'While a Proclamation of Emergency is in operation, Parliament may legislate on any State List matter. Such laws cease six months after the Proclamation ends.', {}),
    '251': A('Inconsistency between laws made by Parliament under articles 249 and 250 and laws made by the Legislatures of States.', 'Where a State law is repugnant to a law made by Parliament under Article 249 or 250, the Parliamentary law prevails while it is in force.', {}),
    '252': A('Power of Parliament to legislate for two or more States by consent and adoption of such legislation by any other State.', 'If two or more State Legislatures pass resolutions requesting it, Parliament may legislate on a State List matter for those States; other States may adopt the law by resolution. Only Parliament may amend or repeal it.', { k: ['Examples: Prize Competitions Act, 1955; Wild Life (Protection) Act, 1972; Water (Prevention and Control of Pollution) Act, 1974; Transplantation of Human Organs Act, 1994'] }),
    '253': A('Legislation for giving effect to international agreements.', 'Parliament may make any law for the whole or any part of India to implement any treaty, agreement or convention with other countries or decisions of international bodies, notwithstanding the distribution of powers.', {
      k: ['Examples: Environment (Protection) Act, 1986; Air Act, 1981'],
      c: [C('Maganbhai Ishwarbhai Patel v. Union of India', 'AIR 1969 SC 783', 'Did the Kutch award settlement require legislation?', 'Settlement of a boundary dispute is not cession; executive action suffices, but where a treaty affects rights of citizens or requires changes in law, legislation under Article 253 is needed.', 'Indo-Pakistan Western Boundary Tribunal award.', 'No amendment required.')]
    }),
    '254': A('Inconsistency between laws made by Parliament and laws made by the Legislatures of States.', 'If a State law on a Concurrent List matter is repugnant to a law of Parliament, the Parliamentary law prevails and the State law is void to the extent of repugnancy. But if the State law has been reserved for and received the President\'s assent, it prevails in that State, though Parliament may later amend or repeal it.', {
      k: ['Repugnancy tests (M. Karunanidhi): direct conflict; Parliament intended an exhaustive code; both occupy the same field', 'Presidential assent under 254(2) is purpose-specific (Kaiser-I-Hind, 2002)'],
      c: [
        C('M. Karunanidhi v. Union of India', '(1979) 3 SCC 431', 'Was the Tamil Nadu Public Men (Criminal Misconduct) Act repugnant to the IPC and Prevention of Corruption Act?', 'Repugnancy arises only if the two laws are fully inconsistent, absolutely irreconcilable, and cannot stand together; the State Act supplemented the central laws.', 'Prosecution of a former Chief Minister.', 'No repugnancy.'),
        C('Zaverbhai Amaidas v. State of Bombay', 'AIR 1954 SC 752', 'Did a later Central law on the same subject impliedly repeal a State law that had received presidential assent?', 'Under the proviso to 254(2), Parliament may later override a State law; where it occupies the same field, the State law yields.', 'Essential Supplies (Temporary Powers) Act amendments.', 'State law overridden.')
      ],
      q: [Q('Short note', 'Doctrine of repugnancy.', ['Art. 254(1) and (2)', 'Tests: Deep Chand (1959), Karunanidhi', 'Presidential assent; Kaiser-I-Hind'])]
    }),
    '255': A('Requirements as to recommendations and previous sanctions to be regarded as matters of procedure only.', 'An Act is not invalid merely because a required recommendation or previous sanction was not given, if assent was later given by the Governor or President as required.', {}),
    '256': A('Obligation of States and the Union.', 'The executive power of every State shall be exercised to ensure compliance with laws made by Parliament, and the Union\'s executive power extends to giving directions to States for that purpose.', { k: ['Failure to comply can attract Art. 365 (presumption of breakdown of constitutional machinery)'] }),
    '257': A('Control of the Union over States in certain cases.', 'States shall exercise executive power so as not to impede the Union\'s executive power. The Union may give directions to States on construction and maintenance of means of communication of national or military importance and on protection of railways within the State.', {}),
    '257A': A('Assistance to States by deployment of armed forces or other forces of the Union. [Omitted]', 'Allowed the Union to deploy armed forces in States to deal with grave law-and-order situations.', { o: 'Inserted by the 42nd Amendment, 1976; omitted by the 44th Amendment, 1978.' }),
    '258': A('Power of the Union to confer powers, etc., on States in certain cases.', 'The President may, with the consent of a State Government, entrust to it functions on any matter within the Union\'s executive power. A law of Parliament may confer powers and impose duties on a State, with costs met by the Union.', {}),
    '258A': A('Power of the States to entrust functions to the Union.', 'The Governor may, with the consent of the Government of India, entrust to it functions on any matter within the State\'s executive power.', { m: ['7th Amendment, 1956'] }),
    '259': A('Armed Forces in States in Part B of the First Schedule. [Omitted]', 'Related to armed forces of Part B States.', { o: 'Omitted by the 7th Amendment, 1956.' }),
    '260': A('Jurisdiction of the Union in relation to territories outside India.', 'The Government of India may, by agreement with the government of a territory not part of India, undertake executive, legislative or judicial functions vested in that government.', {}),
    '261': A('Public acts, records and judicial proceedings.', 'Full faith and credit shall be given throughout India to public acts, records and judicial proceedings of the Union and every State. Final judgments of civil courts are executable anywhere in India according to law.', {}),
    '262': A('Adjudication of disputes relating to waters of inter-State rivers or river valleys.', 'Parliament may provide by law for adjudication of disputes about the use, distribution or control of waters of inter-State rivers, and may exclude the jurisdiction of the Supreme Court and other courts over such disputes.', {
      k: ['Inter-State River Water Disputes Act, 1956 (s.11 excludes court jurisdiction)', 'River Boards Act, 1956'],
      c: [C('State of Karnataka v. State of Tamil Nadu (Cauvery)', '(2018) 4 SCC 1', 'Can the Supreme Court hear appeals against a water tribunal award despite Article 262?', 'Article 262 and s.11 bar original suits on the dispute, not appeals by special leave under Article 136 against the tribunal\'s final award; drinking water is at the highest pedestal.', 'Cauvery Water Disputes Tribunal award, 2007.', 'Award modified; Tamil Nadu\'s share reduced and Karnataka\'s increased; scheme framed.')]
    }),
    '263': A('Provisions with respect to an inter-State Council.', 'The President may establish an Inter-State Council to inquire into and advise on disputes between States, investigate subjects of common interest, and make recommendations for better co-ordination of policy and action.', { k: ['Set up in 1990 on the Sarkaria Commission\'s recommendation, chaired by the Prime Minister', 'Zonal Councils exist under the States Reorganisation Act, 1956'],
      q: [Q('Essay', 'Discuss co-operative federalism in India with reference to the Sarkaria and Punchhi Commission recommendations.', ['Meaning: Granville Austin', 'Constitutional tools: Art. 263, Finance Commission, GST Council, NITI Aayog', 'Sarkaria Commission (1988) on Governors, Art. 356, Inter-State Council', 'Punchhi Commission (2010)', 'S.R. Bommai; Mohit Minerals; Services case (2023)', 'Conclusion'])] })
  }
};
})();
