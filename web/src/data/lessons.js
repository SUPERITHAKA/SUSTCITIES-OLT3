// Sustainable Cities OLT – introductory educational content.
// These are conceptual learning exercises, not professional flood-risk advice.
export const lessons = [
  {
    id: 'stormwater',
    number: '01',
    icon: '🌧️',
    tag: 'THE WATER CYCLE',
    title: 'Understanding Stormwater',
    shortTitle: 'Stormwater basics',
    description: 'Discover where rainwater goes when it reaches a city.',
    mission: 'Become a Runoff Detective',
    duration: '8–10 min',
    accent: 'blue',
    intro: 'Rain is part of a natural cycle. Buildings, roads and other city surfaces change how that water moves, where it collects, and what it carries along the way.',
    concepts: [
      { title: 'Runoff', icon: '↗', text: 'Water that moves across the ground instead of soaking in. Large paved areas can increase how much runoff reaches drains and streams.' },
      { title: 'Infiltration', icon: '↓', text: 'Rainwater entering the soil. Vegetation, healthy soils and permeable surfaces can help make space for infiltration.' },
      { title: 'Catchments', icon: '◉', text: 'A catchment is the area that drains toward a common outlet. What happens upstream can affect people and waterways downstream.' }
    ],
    questions: [
      { id: 's01', level: 'Starter', question: 'What is stormwater?', options: ['Only drinking water supplied to homes', 'Rainfall or melted snow that flows over surfaces', 'Only water stored in swimming pools', 'Water used in factories'], correct: 1, hint: 'Think about where rain and snowmelt go after reaching the ground.', explanation: 'Stormwater is rainwater or snowmelt that can flow across land and built surfaces. Some infiltrates, evaporates or is stored, and some becomes runoff.' },
      { id: 's02', level: 'Starter', question: 'What usually happens when a city replaces grass with more asphalt?', options: ['Surface runoff often increases', 'All water soaks into the pavement', 'Rainfall intensity becomes zero', 'The catchment disappears'], correct: 0, hint: 'Compare a paved parking lot with a vegetated field during heavy rain.', explanation: 'Asphalt is typically impervious. Replacing permeable ground with pavement usually reduces infiltration and increases stormwater runoff.' },
      { id: 's03', level: 'Starter', question: 'What does infiltration mean?', options: ['Rainwater turning directly into ice', 'Water flowing faster through a pipe', 'Water entering the soil', 'The evaporation of all stormwater'], correct: 2, hint: 'The process takes water from the ground surface into the ground.', explanation: 'Infiltration is the movement of water from the land surface into soil. Soil type, compaction, saturation and vegetation all affect it.' },
      { id: 's04', level: 'Explorer', question: 'What is a drainage catchment?', options: ['A building with a green roof', 'An area that drains to a shared outlet', 'A tank used for drinking water', 'A street that never floods'], correct: 1, hint: 'Follow the path of water downhill toward a stream, drain or low point.', explanation: 'A catchment is an area whose water drains toward a common point or outlet. Its boundaries help planners understand where runoff comes from.' },
      { id: 's05', level: 'Explorer', question: 'Why can litter on a street become a water-quality problem?', options: ['Litter increases the amount of rainfall', 'Litter always filters pollutants', 'Runoff can carry litter into drains and waterways', 'Litter makes pavement permeable'], correct: 2, hint: 'Think about what moving water picks up from roads and sidewalks.', explanation: 'Stormwater can carry litter, sediments, oils and other contaminants off urban surfaces and into receiving waters.' },
      { id: 's06', level: 'Explorer', question: 'Which condition is most likely to increase peak runoff?', options: ['Gentle rainfall on absorbent dry soil', 'A small vegetated area', 'Intense rain over large paved areas', 'Rainfall intercepted by trees'], correct: 2, hint: 'A peak happens when a lot of water reaches the drainage system in a short time.', explanation: 'Intense rainfall combined with extensive impervious areas can produce high flow rates quickly, raising peak runoff.' },
      { id: 's07', level: 'Explorer', question: 'What can happen to stormwater entering a conventional storm drain?', options: ['It is always cleaned to drinking-water standards', 'It may flow to a waterway without wastewater treatment', 'It automatically evaporates inside the drain', 'It never leaves the street'], correct: 1, hint: 'Storm drains and sanitary sewers are not necessarily the same system.', explanation: 'In many separate drainage systems, stormwater flows to streams or lakes without passing through a wastewater treatment plant. Local systems vary.' },
      { id: 's08', level: 'Challenge', question: 'What is a combined sewer overflow (CSO)?', options: ['A rain garden that stores runoff', 'A fully permeable sidewalk', 'A flood map produced by a city', 'An overflow from a sewer that carries both sewage and stormwater'], correct: 3, hint: 'The word “combined” refers to two kinds of water sharing a sewer.', explanation: 'In combined systems, excess flow during wet weather can cause an overflow of wastewater mixed with stormwater. This is a serious water-quality concern.' },
      { id: 's09', level: 'Challenge', question: 'Which site is most likely to support natural infiltration?', options: ['A compacted concrete plaza', 'A large sealed parking lot', 'A healthy vegetated area with suitable soil', 'A completely paved rooftop'], correct: 2, hint: 'Look for living soil rather than sealed surfaces.', explanation: 'Vegetation and uncompacted, suitable soil generally provide more opportunities for infiltration than asphalt or concrete.' },
      { id: 's10', level: 'Challenge', question: 'Why should stormwater be considered across the whole catchment?', options: ['Upstream changes can affect downstream flows', 'Drainage always stops at property boundaries', 'All surfaces produce identical runoff', 'Flooding is independent of topography'], correct: 0, hint: 'Stormwater does not follow property lines.', explanation: 'Runoff is connected across a catchment. Paving, storage and drainage changes upstream can influence downstream flow and flood conditions.' }
    ]
  },
  {
    id: 'drainage',
    number: '02',
    icon: '🌱',
    tag: 'NATURE-BASED SOLUTIONS',
    title: 'Sustainable Drainage',
    shortTitle: 'Green solutions',
    description: 'Design a city that gives rainwater room to move safely.',
    mission: 'Become a Green City Builder',
    duration: '8–10 min',
    accent: 'green',
    intro: 'Sustainable stormwater management can work with natural processes. Well-designed green infrastructure helps reduce, slow, store, filter or reuse runoff.',
    concepts: [
      { title: 'Soak it in', icon: '↓', text: 'Rain gardens and some permeable pavements can allow runoff to infiltrate where ground conditions are suitable.' },
      { title: 'Slow it down', icon: '≈', text: 'Swales, vegetated spaces and detention facilities can reduce the speed or peak of runoff reaching a drain.' },
      { title: 'Plan for upkeep', icon: '✓', text: 'Sediment, litter and vegetation management matter. Even good designs need maintenance and a site-specific assessment.' }
    ],
    questions: [
      { id: 'd01', level: 'Starter', question: 'What is the main purpose of a rain garden?', options: ['Create more sealed pavement', 'Collect runoff and help manage it using soil and plants', 'Stop all rain from falling', 'Replace drinking-water pipes'], correct: 1, hint: 'Think of a planted depression that collects rainwater.', explanation: 'A rain garden is a planted, shallow area designed to temporarily hold and manage runoff through infiltration, storage and plant/soil processes.' },
      { id: 'd02', level: 'Starter', question: 'What is a benefit of permeable pavement?', options: ['It prevents evaporation everywhere', 'It increases surface sealing', 'It can allow water to pass through its surface', 'It removes the need for all maintenance'], correct: 2, hint: 'Pay attention to the word “permeable”.', explanation: 'Permeable pavement can let water pass through to a designed base and possibly underlying soil, reducing surface runoff when appropriately maintained.' },
      { id: 'd03', level: 'Starter', question: 'How can a green roof help manage stormwater?', options: ['By retaining some rainfall and delaying runoff', 'By guaranteeing that no flood is possible', 'By increasing traffic congestion', 'By converting rainfall to drinking water instantly'], correct: 0, hint: 'Plants and growing media can temporarily hold rainwater.', explanation: 'Green roofs can retain part of rainfall and delay the release of the remainder, although performance depends on design, season and storm conditions.' },
      { id: 'd04', level: 'Explorer', question: 'What does a stormwater detention basin primarily do?', options: ['Store runoff temporarily and release it more slowly', 'Turn all water into groundwater immediately', 'Produce rainfall', 'Always contain a permanent deep pool'], correct: 0, hint: 'Detention is about holding water for a period of time.', explanation: 'A detention basin temporarily stores stormwater and releases it at a controlled rate to reduce downstream peaks.' },
      { id: 'd05', level: 'Explorer', question: 'How does a retention pond differ from a typical dry detention basin?', options: ['A retention pond never receives runoff', 'Retention ponds commonly maintain a permanent pool of water', 'Detention basins are always inside buildings', 'Retention ponds are made only of concrete'], correct: 1, hint: 'One of these facilities usually has water even between storms.', explanation: 'Retention ponds (wet ponds) typically maintain a permanent pool; dry detention basins generally drain down after the storm.' },
      { id: 'd06', level: 'Explorer', question: 'What is a vegetated swale?', options: ['An underground electrical conduit', 'A completely sealed storage tank', 'A shallow planted channel that conveys and can treat runoff', 'A rooftop solar panel'], correct: 2, hint: 'Look for a planted, channel-shaped feature.', explanation: 'A vegetated swale is a shallow channel using vegetation and soil to convey, slow and sometimes infiltrate or filter runoff.' },
      { id: 'd07', level: 'Explorer', question: 'How can urban trees help during rainfall?', options: ['Their leaves and branches can intercept some rain', 'They guarantee the drainage network never overflows', 'They remove all pollutants from a city', 'They make impermeable surfaces absorb water'], correct: 0, hint: 'Think about rain landing on leaves before it reaches the ground.', explanation: 'Trees can intercept some precipitation and support soil health and evapotranspiration. The benefit varies by tree species and conditions.' },
      { id: 'd08', level: 'Challenge', question: 'Why must permeable pavement be maintained?', options: ['To prevent all plant growth in the city', 'To ensure water always flows to basements', 'To increase vehicle speed', 'Because sediment can clog pores and reduce performance'], correct: 3, hint: 'What happens if tiny gaps become filled with dirt?', explanation: 'Sediment can reduce pavement permeability, so cleaning and maintenance are essential for long-term performance.' },
      { id: 'd09', level: 'Challenge', question: 'Which approach is usually more resilient for a neighbourhood?', options: ['Rely on one unmaintained drain', 'Combine several appropriate drainage measures across the catchment', 'Remove all vegetation', 'Direct every roof drain toward a single low point'], correct: 1, hint: 'Think of managing water close to its source and along its path.', explanation: 'Using a combination of well-sited solutions can provide distributed storage, infiltration and flow control, reducing reliance on one element.' },
      { id: 'd10', level: 'Challenge', question: 'What should be checked before designing an infiltration-based solution?', options: ['Only the colour of nearby buildings', 'Whether students like its name', 'Soil, groundwater, contamination, available space and local regulations', 'Only the expected number of website visitors'], correct: 2, hint: 'An infiltration design must fit actual local conditions.', explanation: 'Infiltration systems require site-specific checks of soils, groundwater, potential contamination, space, safety and relevant local requirements.' }
    ]
  },
  {
    id: 'resilience',
    number: '03',
    icon: '🛟',
    tag: 'SAFER AND STRONGER CITIES',
    title: 'Flood Resilience',
    shortTitle: 'Flood resilience',
    description: 'Learn how people and communities can prepare for flooding.',
    mission: 'Become a Resilience Champion',
    duration: '8–10 min',
    accent: 'orange',
    intro: 'Flood resilience is about reducing risk, preparing for disruptions and recovering. Good infrastructure matters, but accessible warnings and community action matter too.',
    concepts: [
      { title: 'Know the risk', icon: '◎', text: 'Flood risk depends on the hazard and what people, buildings and services are exposed to it.' },
      { title: 'Act safely', icon: '!', text: 'Official alerts, safe evacuation routes and avoiding floodwater are essential during an emergency.' },
      { title: 'Build together', icon: '♧', text: 'Inclusive planning, maintained infrastructure and community preparedness help neighbourhoods recover.' }
    ],
    questions: [
      { id: 'r01', level: 'Starter', question: 'What does flood resilience mean?', options: ['Never experiencing heavy rain', 'The ability to prepare for, cope with and recover from flooding', 'Eliminating every waterway', 'Using only one kind of flood defence'], correct: 1, hint: 'Think before, during and after a flood.', explanation: 'Flood resilience involves reducing impacts and improving the ability of people, services and places to prepare, respond, adapt and recover.' },
      { id: 'r02', level: 'Starter', question: 'What is an appropriate first response to an official flood warning?', options: ['Ignore the alert', 'Walk to the lowest road', 'Follow official guidance and check your safe route', 'Drive into standing floodwater'], correct: 2, hint: 'Reliable local instructions help protect you and others.', explanation: 'Follow trusted local warnings and emergency directions. Make decisions using official information about nearby conditions.' },
      { id: 'r03', level: 'Starter', question: 'Why should drivers avoid flooded roads?', options: ['Water depth and road damage may be hidden', 'Floodwater improves tire grip', 'All flooded roads are shallow', 'Road signs stop working permanently'], correct: 0, hint: 'You often cannot see the road underneath the water.', explanation: 'Floodwater can conceal depth, fast-moving currents and damaged roads. Never drive through it; turn around and find a safe route.' },
      { id: 'r04', level: 'Explorer', question: 'Which combination best explains flood risk?', options: ['Weather alone, with no people or buildings involved', 'Hazard, exposure and vulnerability', 'The number of green roofs alone', 'The colour of a drainage pipe'], correct: 1, hint: 'Risk rises when a hazard affects exposed, vulnerable people or assets.', explanation: 'Flood risk is influenced by the flood hazard and by the exposure and vulnerability of people, buildings and infrastructure.' },
      { id: 'r05', level: 'Explorer', question: 'What is a useful household flood-preparedness action?', options: ['Store important documents and supplies in safer locations', 'Block all emergency exits', 'Wait until a flood to make a plan', 'Ignore people who need assistance'], correct: 0, hint: 'Preparation happens before an emergency.', explanation: 'Having a simple emergency plan, important information and essential supplies ready can make a flood response safer.' },
      { id: 'r06', level: 'Explorer', question: 'How can flood-risk maps help communities?', options: ['They guarantee future floods will follow one exact line', 'They make warnings unnecessary', 'They show areas that may be exposed to flooding', 'They automatically repair drainage systems'], correct: 2, hint: 'Maps can help identify where a problem may occur.', explanation: 'Flood maps inform planning and preparedness by showing modelled or historically identified hazard areas. They have uncertainty and should be used with local guidance.' },
      { id: 'r07', level: 'Explorer', question: 'Why is accessibility important in flood communication?', options: ['Only engineers need warnings', 'Accessible messages can reach people with different needs', 'Warnings should contain only images', 'All residents use the same device and language'], correct: 1, hint: 'Not everyone receives information in the same way.', explanation: 'Flood warnings should consider disability, language, connectivity and other needs so more people can understand and act on critical information.' },
      { id: 'r08', level: 'Challenge', question: 'Which approach is a good example of climate adaptation?', options: ['Assume past rainfall patterns will never change', 'Stop recording rainfall', 'Depend only on an old drainage estimate', 'Update drainage plans using changing risk and current evidence'], correct: 3, hint: 'Adaptation means updating decisions when conditions change.', explanation: 'Climate adaptation means planning for current and possible future risks, including changes in intense precipitation and urban development.' },
      { id: 'r09', level: 'Challenge', question: 'Why combine green and engineered flood measures?', options: ['They can complement each other across different storm conditions', 'Every single measure works equally well everywhere', 'Engineered drainage is always unnecessary', 'Green measures never need maintenance'], correct: 0, hint: 'Different solutions address different parts of a complex problem.', explanation: 'Well-designed combinations of natural and engineered systems can provide multiple, complementary benefits, but still require maintenance and site-specific assessment.' },
      { id: 'r10', level: 'Challenge', question: 'What should you avoid after a flood?', options: ['Checking official recovery instructions', 'Contacting appropriate local services', 'Entering potentially contaminated water or unsafe buildings', 'Documenting damage when it is safe'], correct: 2, hint: 'Floodwater and damaged structures can remain dangerous.', explanation: 'Floodwater can carry contaminants, and buildings may have electrical or structural hazards. Follow official safety and recovery guidance.' }
    ]
  }
];

export const TOTAL_QUESTIONS = lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0);
