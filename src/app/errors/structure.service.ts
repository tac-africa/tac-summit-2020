import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { IStructure } from '../shared/advisory-board.model';


@Injectable({
  providedIn: 'root'
})
export class StructureService {
  structure: IStructure[] = [{
    "id": 1,
    "name": "Prof. Ibrahim Agboola Gambari",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/Ibrahim-Gambari.png",
    "title": "Founder/Chairman of Savannah Center, AU Chairperson - APRM Panel of Eminent Person.",
    "structure_level": "advisory board",
    "bio": "Ambassador Gambari, is a Nigerian scholar-diplomat, he was the first Under-Secretary-General and Special Adviser to the Secretary-General on Africa,1999-2005. In that capacity, he worked closely with heads of government, key policymakers as well as institutions in the continent to develop the New Partnership for Africa’s Development (NEPAD). During this period, he was concurrently the Resident Special Representative of the Secretary-General and Head of the United Nations Mission to Angola,2002-2003. He has been a delegate to the Assembly of the African Union as a national delegate,1984-1985 and as a member of the UN Secretary-General’s delegation,2000-2012. Ibrahim Gambari was appointed First Chancellor, Kwara State University in Nigeria,2013."
  },
  {
    "id": 2,
    "name": "P.J. Ingram MBE BSc MA GCGI ",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/ingram.png",
    "title": "Managing Editor, Grey Hare Media Limited, London, United Kingdom ",
    "structure_level": "advisory board",
    "bio": "Philip is a widely published journalist, specialising in the security and intelligence arenas who has built a long and senior career in British Military Intelligence, with years of experience in all aspects of intelligence and security as well as strategic planning.He presents and interview on screen, with the output being delivered to large organisations such as INTERPOL.Philip have commentatedfor BBC TV News and Radio, BBC Mundo, TRT World, CNN, ABC, CBC, Japanese NTV, RT.com and many others as well as presenting INTERPOL World TV.He retain other business interests in the armoured vehicle and specialist molecular detection, and specialist Cyber Intelligence where he Chairs a company.He is frequently quoted in the mainstream press.His broad experience sets him up as a perfect chairfor conferences and roundtables and He have been a speaker at dinner events stirring up a little debate amongst the diners where appropriate and at a number of high - level roundtable and spotlight events.He is a PTSD survivor.Specialities: Journalism(print, online and video), business mentoring, marketing, risk management, change management, SEO, writing, presenting, podcasting and interviewing;with a splash of cyber security and cyber intelligence."
  },
  {
    "id": 3,
    "name": "AIG C.K. Aderanti",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/aderanti.png",
    "title": "Assistant Inspector General of Police (Rtd), President/CEO Daniel Security Systems Limited, Nigeria",
    "structure_level": "advisory board",
    "bio": "Cornelius Kayode Aderanti, Mni. – served with the Nigeria Police Force for 35 years meritoriously in the following capacities:- First African to the appointed in the UN training center; Deputy Defense Adviser(Police) Permanent Mission of Nigeria to the UN Headquarters, New york; Senior Police Liaison Adviser, in the office of Operations, African Division(DPKO), UN Headquarters, New york; Head, INTERPOL National Central Bureau, AbujaCP / Director, Directorate of peacekeeping operations and training, Headquarters, AbujaCommissioner of Police Lagos State CommandAssistant Inspector General of Police Zone 2 Lagos– In - Charge of South West CommandsAssistant Inspector General of Police Zone 1, Kano– In - Charge of North West commandsAssistant Inspector General of Police Zone 3 Yola– In - Charge of Northeast Commands.AIG C.K.Aderanti, mni(Rtd.) is an astute administrator and a result - driven stickler for perfection."
  },
  {
    "id": 4,
    "name": "Mark Bond",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/mark-bond.png",
    "title": "Principal Consultant The Institute for Drone Technology, Australia. Member INTERPOL Drone Expert Forum",
    "structure_level": "Scientific Committe",
    "bio": "Mark Bond started his career as an Australian Army Officer, holding command postings in both infantry, and special Forces.  After his carrer in Defence he ran a number of porjects in Iraq prividing private military security consultancy advise to the US Department of Counter Terrorism Special Operations, the Iraqi National Parliament and the US Army Corps of Engineers.  Since his time in Iraq Mark has been providing specialist consulting advice on enterprise management systems across a number of industries.Mark is the Institute for Drone Technology’s Principal Consultant where his primary focus is on the development and implementation of best practices frameworks, developing documentation, technical writing and implementation, reviewing and testing drone operations.Prior to starting at the Institute for Drone Technology, Mark provided consulting advice on Private Military Operations.  Business Resilience, Corporate Security Management, Training consulting and Travel Security."
  },
  {
    "id": 5,
    "name": "Jerry Akubo",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/jerry.png",
    "title": "National Technical Consultant - INTERPOL NCB Abuja, CEO/Founder - TAC Initiative Africa, Member INTERPOL Drone Expert Forum",
    "structure_level": "Scientific Committe",
    "bio": "Jerry Innocent Akubo, National Technical Consultant, INTERPOL National Central Bureau, Abuja and also the CEO/Founder TAC NGO Africa.  Actively engaged in Law Enforcement Technology Advisory domain for over two (2) decades now – in the following areas:-Project deployment officer – OASIS Africa Project deployed by INTERPOL to all the Saharan African BorderNational Technical Consultant – In-Charge of Expanding INTERPOL I-24/7 databases to relevant Law Enforcement Agencies within NigeriaEstablished a Digital Resource Center for the Research & Planning Department of the NPFEstablished an Intelligence Support System (ISS) for the Criminal Intelligence within the Police ForceFocal point – INTERPOL Cybercrime Expert GroupFocal Point – INTERPOL Drone Expert ForumFocal Point - Computer Forensic InstituteCountry Representative/Authorized Training Partner - Institute for Drone Technology, Australia.Jerry Innocent Akubo is an International Security Consultant who is often found sharing his insights at global INTERPOL events on demystifying remote sensing apparatus, security assessment of Emerging technology platforms and initiatives geared towards encouraging the use of technology Against Crime."
  },
  {
    "id": 6,
    "name": "Sanjana Rathi",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/sanjana2.jpg",
    "title": "Former IT project support at INTERPOL, Research Analyst - Cyber Peace Foundation, India. ",
    "structure_level": "Scientific Committe",
    "bio": "Sanjana Rathi is a Research Analyst working for Cyber Peace Foundation in the domain of Cyber Diplomacy - 'TheCyberDiplomat' initiative and Technology Policy. She is also a scholar studying Security & Diplomacy at Tel Aviv University. Previously, she has worked with international law enforcement, defense think-tank, academia, and the private sector in Singapore, Israel, UK, and India. Her domain of expertise is in technology, innovation, cybersecurity, and business development. She is a Computer Science Engineer and also holds an MSc. Degree in Digital Innovation from the London School of Economics. Besides that, she has a Diploma in Cyber Law and Forensics from the National Law School of India University."
  },
  {
    "id": 7,
    "name": "Ackson Kondwani Mwenda",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/akson.png",
    "title": "Aerospace Engineer | Founder African Drone Voice.Zambian.",
    "structure_level": "Scientific Committe",
    "bio": "Ackson is an Aerospace engineer who is active in the drone industry with precision agriculture at WeflyAgri and is also pushing for cross border drone delivery through his innitiative African Drone Voice. He was educated in Kharkiv, Ukraine at National Aerospace University and also worked as a trainee Aircraft maintenance engineer at Zambia Flying Doctor service on Cessna 208B caravan Aircraft. He also served as the National point of contact for Zambia at SGAC  Space Generation Advisory Council in support of the United Nations on space applications. He branched off from aviation to the drone industry and has been active in it since 2017 in aerial mapping and data processing. He is passionate about seeing unmanned traffic management systems being fully active for cross border Drone trade to become a reality in Africa."
  },
  {
    "id": 8,
    "name": "Brooke Taspall",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/BROOKE.png",
    "title": "CEO, Drone Alert Systems, Member INTERPOL Drone Expert Forum",
    "structure_level": "Scientific Committe",
    "bio": "Ms Tapsall has been a professional in the spatial science industry for 18 years, working around the world before establishing companies and initiatives which provide valuable services to the Drone Industry, specialising in Drone Security and Intelligence. Ms Tapsall is the founder and CEO of DroneALERT – a global drone incident reporting and management system and CEO of AGICS – a drone service and consultancy provider.Ms Tapsall is a member of the INTERPOL Drone Expert Forum (invitation only forum)Honouree of the Women to Watch in UAS 2018 for 'Safety Technology' from Women and Drones USA.Member of the Swiss SUSI Consortium for implementing UTM in SwitzerlandProgram Committee Member for Commercial UAV Expo 2020 and Amsterdam Drone Week 2020 Consultant to the European CommissionTAC UAV scientific committee"
  },
  {
    "id": 9,
    "name": "David Mc Creary",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/david.png",
    "title": "President/CEO, New Age Aerial, Sacramento, California - USA. Member INTERPOL Drone Expert Forum",
    "structure_level": "Scientific Committe",
    "bio": "NewAgeAerial is a result of a lifelong passion for all things aeronautical. Some of my earliest memories are in the right seat of the family Cessna, with family history reaching back to the Canadian territories in the '20s and WW2. Having flown radio control models since forever, then teaching others how to successfully solo became a leadership role in my recreational passion. This in turn spawned into a profession that reaches back to my earlier work in both architectural and civil fields as a way of offering new viewpoints, surveys and processes that were not possible or cost prohibitive with traditional aircraft before  the use of 'drones'.Original presenting member of the Drone Experts Group - Singapore INTERPOLMaster level of Pix4D photogrammetry which includes development with instruction for these subjects: forensics, agriculture, infrastructure"
  },
  {
    "id": 10,
    "name": "Jan Otto Johansen ",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/jan.jpg",
    "title": "Police Superintendent Head of C-UAV Bomb squad, Norweigian Police, Member INTERPOL Drone Expert Forum",
    "structure_level": "Scientific Committe",
    "bio": "Mr. Johansen has more than 15 years of experience from law enforcement and started his career as a street police before specialising in intelligence and intelligence management. As Head of C-UAV at the Norwegian National Police Special Response Unit he has worked up great knowlegde and experience in this domain. In addition to this Mr. Johansen is a certified drone pilot and instructor playing a key role in the implementation of police use of drones in Norway.Mr. Johansen is a member of the INTERPOL Drone Expert Forum. At the 3rd Drone Expert Forum he presented on his experience on the implementation of drones. He has also been one of the keynote speakers at a High-Level International Conference on countering the threats posed by unmanned aircraft systems at the EU-commision"
  },
  {
    "id": 11,
    "name": "Orville McCalla",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/Orville-McCalla.png",
    "title": "CEO/President AeroStream Consulting Inc, Canada .",
    "structure_level": "Scientific Committe",
    "bio": "As CEO and President of AeroStream Consulting Inc., Orville McCalla has more than 15 years’ experience in the aviation industry, delivering solutions from the ground up to sustainable operations. Orville is a personable, highly motivated and results-oriented individual with strong commitment to safety and excellence. Orville has held positions such as Director, Business Development & Client Relations, Associate Business Development Manager, Aeronautical Analyst, and Technical Records Administrator. He has progressive thought leadership and is known for his ability to think outside the box, to find solutions to complex challenges, and sustainable business relationships.Orville is keen on fostering healthy, sustainable business relationships, and has successfully developed and implemented business campaigns penetrating new markets, successfully re-established business relationships, and fostered strategic partnerships that are directly linked to client’s Key Performance Indicators (KPIs).Orville has worked with airlines in North America including Canada, as well as airlines in Africa, assisting with maintaining compliance with civil aviation regulations and other regulatory authorities. He holds a private pilot’s licence, a diploma in Aviation Operations and has obtained his Quality Systems Auditor certificate from the Canadian Council for Aviation and Aerospace.”"
  },
  {
    "id": 12,
    "name": "Yong LI",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604140/young-li.jpg",
    "title": "CEO-Clear Sky UAV Security Management and consulting, China",
    "structure_level": "Scientific Committe",
    "bio": "Yong LI has been engaged in aviation industry services for nearly 17 years. Contact with UAV comes from the case of manned helicopter converted into unmanned helicopter in 2010. After entering the UAV industry, mainly in the UAV public security applications and UAV countermeasures.In recent years, Yong has focused on the development and application of UAV in the field of public security, including the UAV counter system. Provided technical support and consulting services for government agencies, security departments, enterprises and individuals in Greater China and Southeast Asia for UAV security application and management.Especially in the security application of waterproof UAV, Yong has made a lot of research and promotion for waterproof UAV in coastal defense patrol, coastal monitoring and maritime rescue.”"
  }
  ]

  constructor(private http: HttpClient) { }

  getStructure(): Observable<IStructure[]> {
    return of<IStructure[]>(this.structure)
  }
}


