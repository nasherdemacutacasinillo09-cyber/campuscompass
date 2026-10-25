// Campus Compass - script.js
// Real data where available (from the group's research doc); items marked verified:false are
// still placeholder/sample data and should be replaced once real info is found.
var S=[
{n:"Bulacan State University (BulSU)",c:"Guinhawa, Malolos City, Bulacan",r:"Bulacan",t:"Public",verified:true,
 openDate:"2026-08-25",
 deadlineDate:"2026-11-27",
 examDate:null,
 examText:"To be announced",
 courses:{type:"list",items:["Architecture","Landscape Architecture","Visual Communication","Broadcasting","Journalism","Theater Arts","Malikhaing Pagsulat","Accountancy","Entrepreneurship","Business Administration","Criminology","Legal Management","Civil Engineering","Mechanical Engineering","Electrical Engineering","Electronics Engineering","Computer Engineering","Industrial Engineering","Biology","Mathematics","Environmental Science","Food Technology","Medical Technology","Nursing","Education","Industrial Technology","Hospitality Management","Tourism Management","Information Technology","Data Science and Analytics"]},
 cs:[0,1,2,3,4,5,6,7,8,10,11,13],
 requirements:["Grade 11 Report Card (SF9 / Form 138) — Certified True Copy with the official school seal, showing 1st and 2nd semester grades","Proof of Residency — Certified True Copy of your Barangay Certificate","Proof of Billing — photocopy of your family's recent electric bill, water bill, or your parent's Income Tax Return (ITR)","ID Photo — digital 2x2 ID picture in formal attire on a plain white background, with full name tag displayed","Declaration Form — generated automatically by email after completing your digital application profile"],
 website:"https://www.bulsu.edu.ph/",
 facebook:"https://www.facebook.com/share/1ENhY2Lq4a/"},

{n:"Polytechnic College of the City of Meycauayan (PCCM)",c:"157 Pag-asa Street, Malhacan, Meycauayan, Bulacan",r:"Bulacan",t:"Public",verified:true,
 openDate:null,
 deadlineDate:null,
 openText:"To be announced",
 deadlineText:"To be announced",
 examDate:null,
 examDates:["2026-02-27","2026-03-26","2026-04-24","2026-05-22"],
 examText:"Batch 1: Feb 27, 2026 · Batch 2: Mar 26, 2026 · Batch 3: Apr 24, 2026 · Batch 4: May 22, 2026",
 courses:{type:"list",items:["Bachelor of Secondary Education major in English","Bachelor of Secondary Education major in Math","Bachelor of Secondary Education major in Social Studies","BS Hospitality Management","BS Office Administration"]},
 cs:[5,6,12],
 qualifications:["At least a Senior High School graduate with a general average or rating of not less than 85% from the previous school attended","Of good moral character","Of good health, certified by a competent physician","Must pass the screening process administered by the College Screening Committee","No pending criminal or civil charges, and not convicted of violating any law"],
 requirements:["Grade 12 Report Card with complete grades and GWA (Form 138 / SF9) — photocopy","Good Moral Certificate — photocopy","PSA Birth Certificate — photocopy","Proof of Residency (Barangay Certificate) — photocopy","2 pcs. 2x2 ID pictures","Transferees: Transcript of Records (TOR) and Transfer Credentials — photocopy","ALS examinees: Certificate of Eligibility for College"],
 website:"https://pccm.edu.ph/admissions/",
 facebook:"https://www.facebook.com/pccmeduph"},

{n:"Meycauayan College",c:"MacArthur Highway, Barangay Calvario, Meycauayan City, Bulacan",r:"Bulacan",t:"Private",verified:true,
 openDate:"2026-05-12",
 deadlineDate:"2026-07-17",
 examDate:null,
 examText:"No entrance exam is listed (N/A) for this intake",
 courses:{type:"list",items:["AB Psychology","BS Criminology","BS Accountancy","BS Accounting Information System","BS Legal Management","BS Business Administration (Financial Management / Marketing Management)","BS Hospitality Management","BS Tourism Management","Bachelor in Secondary Education (English, Filipino, Math, Science)","Bachelor of Elementary Education","Bachelor of Early Childhood Education","Bachelor of Physical Education","Continuing Professional Teacher Education"]},
 cs:[9,8,4,10,3,6,7,5],
 requirements:["Freshmen: must be a Filipino citizen","Freshmen: photocopy of PSA Birth Certificate","Freshmen: original and photocopy of Form 138 / SF9 (High School Report Card)","Freshmen: Certificate of Good Moral Character","Freshmen: colored 2x2 ID picture","Freshmen: photocopy of Marriage Contract (for married female applicants)","Freshmen: result of the Meycauayan College Entrance Examination (MCEE)","Transferees: photocopy of PSA Birth Certificate","Transferees: official Transcript of Records (TOR)","Transferees: original Transfer Credential or Honorable Dismissal","Transferees: photocopy of Marriage Contract (for married female applicants)"],
 tuition:"₱18,000 to ₱25,000 per semester, depending on the specific program",
 website:"https://meycauayancollege.edu.ph/",
 facebook:"https://www.facebook.com/meycauayancollege.bulacan"},

{n:"Our Lady of Fatima University (OLFU)",c:"RISE Tower, Fatima Avenue, corner MacArthur Highway, Valenzuela City, 1440 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openText:"To be announced",
 deadlineText:"To be announced",
 examDate:null,
 examText:"No entrance exam (as stated in the source document)",
 courses:{type:"list",url:"https://fatima.edu.ph/category/programs/college/",note:"See the full list of programs on the official site",items:["BS Entrepreneurship","BS Accounting Information System","BS Accountancy","BS Nutrition and Dietetics with Entrepreneurial Culinary Arts and Nutrition","BS Culinary Management","BS International Hospitality Management","BS International Tourism Management","Bachelor of Secondary Education","Bachelor of Special Needs Education with Specialization in Early Childhood Education","Bachelor of Elementary Education","Bachelor of Early Childhood Education","BA Communication","BS Biology","BS Psychology","BS Environmental Science","BS Medical Laboratory Science (Medical Technology)","BS Pharmacy","BS Nursing","BS Physical Therapy","BS Respiratory Therapy","BS Computer Science","BS Information Technology","BS Entertainment and Multimedia Computing, Major in Digital Animation Technology","BS Criminology","Bachelor of Forensic Science","BS Marine Transportation","BS Marine Engineering","BS Electronics Engineering","BS Civil Engineering","BS Business Administration, Major in Business Operations Management","BS Business Administration, Major in Marketing Management","BS Business Administration, Major in Banking"]},
 cs:[1,2,3,4,5,6,7,8,9,11,13],
 qualifications:["Must be a graduate of an accredited Senior High School (SHS)","No entrance exam is required for most standard undergraduate programs"],
 requirements:["Original Grade 12 Senior High School Report Card (SF9)","Original School Form 10 (with request letter from OLFU)","Original Certificate of Good Moral Character issued in the current year","Two (2) identical copies of a recent 2\"x2\" studio photo (white background)","Clear photocopy of PSA Birth Certificate","For married female applicants: clear photocopy of Marriage Certificate","Clear photocopy of Grade 12 Senior High School Diploma","Admission fee: PHP 500.00"],
 tuition:"PHP 27,432 to PHP 40,000+ per semester, depending on your specific course, lab units, and chosen payment plan",
 website:"https://fatima.edu.ph/",
 facebook:"https://www.facebook.com/share/19mUrorMDH/"},

{n:"Manila Central University (MCU)",c:"Epifanio de los Santos Ave, Morning Breeze Subdivision, Caloocan, 1400 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-10-19",
 deadlineText:"To be announced",
 examDate:null,
 examText:"Unclear in the source document: it says no entrance exam, but also requires an online admission test. Confirm with MCU.",
 courses:{type:"list",items:["BS Biology Major in Microbiology","BS Psychology","BS Computer Science","BS Information Technology with Certificate in Cybersecurity","BA Communication","BS Entertainment and Multimedia Computing with Specialization in Digital Animation Technology","College of Medicine","College of Pharmacy","BS Business Administration","BS Accountancy","BS Entrepreneurship","BS Hospitality Management","BS Tourism Management","Doctor of Dental Medicine (College of Dentistry)","College of Nursing","College of Physical Therapy","BS Radiologic Technology","BS Medical Technology","College of Optometry","Institute of Education"]},
 cs:[2,3,4,5,6,7,9,11,13],
 qualifications:["Must be a graduate (or expected graduate of the current school year) of an eligible Senior High School","All strands are accepted (STEM, ABM, HUMSS, GAS, TVL). Health courses favor STEM or may require bridging","Must take and pass the university's online admission test and guidance evaluation","Must have a clean disciplinary record from the previous school"],
 requirements:["Passport size ID picture with name tag","PSA Birth Certificate","Grade 12 Report Card","Certificate of Good Moral Character"],
 tuition:"₱25,000 to ₱120,000 per semester, depending heavily on the chosen degree program",
 website:"https://mcu.edu.ph/",
 facebook:"https://www.facebook.com/MCU1904"},

{n:"University of the Philippines Diliman (UP Diliman)",c:"Quezon City 1101, Metro Manila",r:"Metro Manila",t:"Public",verified:true,
 openDate:"2026-03-03",
 deadlineDate:"2026-04-13",
 examDate:"2026-08-01",
 notes:["Release of test permit: Jul 24, 2026","UPCAT: Aug 1–2, 2026","Extended submission of grades: Aug 3 – Sep 21, 2026"],
 courses:{type:"list",url:"https://upd.edu.ph/academics/undergraduate/",note:"See the full list of undergraduate programs on the official site",items:["BS Chemical Engineering","BS Civil Engineering","BS Computer Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Geodetic Engineering","BS Industrial Engineering","BS Materials Engineering","BS Mechanical Engineering","BS Mining Engineering","BS Architecture","B Landscape Architecture","BS Clothing Technology","BS Interior Design","B Fine Arts (Industrial Design)","BS Computer Science","BS Applied Physics","BS Biology","BS Chemistry","BS Food Technology","BS Geology","BS Mathematics","BS Molecular Biology and Biotechnology","BS Physics","BS Statistics","BS Business Administration","BS Business Administration and Accountancy","BS Business Economics","BS Economics","BS Public Administration","BA Broadcast Media Arts and Studies","BA Communication Research","BA Creative Writing","BA Journalism","BA Film","BA Speech Communication","BA Anthropology","BA Art Studies","BA Comparative Literature","BA English Studies","BA European Languages","BA Filipino","BA History","BA Linguistics","BA Malikhaing Pagsulat sa Filipino","BA Philosophy","BA Political Science","BA Psychology","BA Sociology","BA Philippine Studies","BA Community Development","BA Social Work","BS Geography","Bachelor of Elementary Education","Bachelor of Secondary Education","Bachelor of Physical Education","BS Sports Science","BS Family Life and Child Development","B Fine Arts","B Music","BS Community Nutrition","BS Hotel, Restaurant and Institution Management","BS Home Economics"]},
 cs:[0,1,2,3,4,5,6,9],
 qualifications:["Academic standing: must be a current Grade 11 student (for upcoming cycles), or a Grade 12 student or high school graduate who has not taken the UPCAT before","High school records: must have complete records and final grades for Grades 8, 9, 10, and 11","School accreditation: must graduate from a DepEd-accredited high school or hold a Philippine Educational Placement Test (PEPT) certificate","University Admission Grade (UPG): determined from a composite of your UPCAT subtest scores (Language Proficiency, Reading Comprehension, Science, Mathematics) and your high school grades, adjusted for socio-economic and geographic equity factors"],
 requirements:["Online Forms 1 and 2B","Hard copy Certified True Copy of SF-10 / Form 137 for Grades 8, 9, 10, and 11","Online Form 2A confirmation (completed by your Grade 12 school official)","Take the UPCAT"],
 website:"https://upd.edu.ph/",
 facebook:"https://www.facebook.com/UPSystemOfficeOfAdmissions"},

{n:"Ateneo de Manila University (ADMU)",c:"Katipunan Ave, Loyola Heights, Quezon City, 1108 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-06-22",
 deadlineDate:"2026-08-24",
 examDate:null,
 examDates:["2026-09-19","2026-09-20"],
 examText:"Batch 1: Sep 19–20, 2026 · Batch 2: To be announced",
 notes:["Batch 1 testing: Sep 19–20, 2026","Batch 2: To be announced"],
 courses:{type:"list",url:"https://www.ateneo.edu/college/academics/degrees-majors",note:"See the full list of degree programs on the official site",items:["AB Art Management","BFA Major in Creative Writing","BFA Major in Information Design","BFA Major in Theater Arts","AB Humanities","AB Interdisciplinary Studies","AB Literature (English)","AB Philosophy","BS Learning Science and Design","BS Communications Technology Management","BS Information Technology Entrepreneurship","BS Legal Management","BS Management","BS Management (Honors)","BS Management Engineering","BS Management of Applied Chemistry","BS Restaurant Entrepreneurship","BS Applied Mathematics - Master in Data Science","BS/M Applied Mathematics with Specialization in Mathematical Finance","BS Applied Physics - BS Materials Science and Engineering","BS Biology","BS Chemistry","BS Chemistry - BS Materials Science and Engineering","BS Computer Engineering","BS Computer Science","BS Computer Science - BS Digital Game Design and Development","BS Electronics Engineering","BS Environmental Science","BS Health Sciences","BS Innovation Design Engineering","BS Life Sciences","BS Management Information Systems","BS Mathematics","BS Physics","AB Chinese Studies","AB Communication","AB Development Studies","AB Economics","AB Economics (Honors)","AB Management Economics","AB European Studies","AB History","AB Diplomacy and International Relations with Specialization in East and Southeast Asian Studies","AB Political Science","AB Psychology","BS Psychology","AB Sociology"]},
 cs:[1,2,3,5,9,10,13],
 qualifications:["First-year local applicants: students currently in their final year of senior high school, or secondary school graduates who have not yet enrolled in any college or university courses","First-year international applicants: students studying in or graduating from a school outside the Philippines with no prior college-level enrollment"],
 requirements:["Recent 1x1 ID photo","PSA / NSO Birth Certificate","Passport, visa, and ACR I-Card (for non-Filipino applicants)","Proof of Philippine citizenship (for dual citizens)","Grade 9 to Grade 11 report cards","International Baccalaureate (IB) results, if applicable","Other academic credentials as required","High School Record Form (requested directly by the Office of Admission and Aid)","Guidance Counselor or Class Adviser recommendation","Subject Teacher recommendation","Personal essay","Certificate of Upper Percentage (for applicants under RA 12006)","Certificate of Indigency (for applicants under RA 12006)","Letter written and signed by the applicant's parents explaining their financial situation (for applicants under RA 12006)","Application fee: PHP 600.00 (exempt: applicants from public or science high schools; applicants from private high schools who belong to the Top 10 of the graduating batch and cannot pay the fee; applicants under RA 12006)"],
 tuition:"Tuition (20 units): ₱110,691.00; Basic fees: ₱17,394.00; Other fees: ₱8,524.00. Science and Engineering programs have slightly higher lab costs, and overload or extra lab charges apply separately.",
 website:"https://www.ateneo.edu",
 facebook:"https://www.facebook.com/ateneodemanila"},

{n:"De La Salle University (DLSU)",c:"2401 Taft Ave, Malate, Manila, 1004 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-07-15",
 deadlineDate:"2026-09-30",
 examDate:null,
 examText:"Sep 5 – Dec 11, 2026",
 courses:{type:"list",items:["BS Computer Science Major in Software Technology","BS Computer Science Major in Network and Information Security","BS Computer Science, Major in Computer Systems Engineering","BS Information Systems","BS Information Technology","BS Computer Science and Master of Science in Computer Science","BS Information Security","Bachelor of Early Childhood Education","Bachelor of Secondary Education Major in English","Bachelor of Secondary Education Major in Science with specialization in Biology","Bachelor of Secondary Education Major in Science with specialization in Chemistry","Bachelor of Secondary Education Major in Science with specialization in Physics","Bachelor of Secondary Education Major in Mathematics","BA English Language Studies","Bachelor in Human Services","BA Behavioral Sciences, Major in Organizational and Social Systems Development","BA Development Studies","BA History","BA Southeast Asian Studies","AB International Studies, Major in American Studies","AB International Studies, Major in European Studies","AB International Studies, Major in Japanese Studies","AB International Studies Major in Chinese Studies","BA Literature Major in Creative Writing","BA Literature Major in Literary and Cultural Studies","BA Philippine Studies, Major in Filipino in Mass Media","BA Political Science","BA Communication Arts","BA Organizational Communication","AB, Major in Philosophy","BA Psychology","BS Psychology","BA Sociology","BA Behavioral Sciences major in Organizational and Social Systems Development and Master of Arts in Behavioral Sciences","BA Philosophy and Artificial Intelligence","BA Literature major in Literature Across the Professions","BA Sports Studies","BS Biochemistry","BS Biology Major in Medical Biology","BS Biology Major in Systematics and Ecology","BS Biology Major in Molecular Biology and Biotechnology","BS Chemistry","BS Chemistry minor in Business Studies","BS Human Biology","BS Mathematics with specialization in Business Application","BS Statistics major in Actuarial Science","BS Physics Minor in Economics","BS Physics Minor in Finance","BS Physics with specialization in Materials Science","BS Physics with Specialization in Medical Instrumentation","BS Premed Physics","BS Animal Biology","BS Statistics Major in Data Science","BS Mathematics with Specialization in Data Science","BS Chemical Engineering","BS Civil Engineering","BS Computer Engineering","BS Electronics Engineering","BS Industrial Engineering","BS Industrial Engineering with specialization in Information Technology","BS Industrial Engineering with specialization in Service Management","BS Industrial Engineering (Honors) and Master of Science in Industrial Engineering","BS Manufacturing and Robotics Engineering with specialization in Industrial Robotics Systems","BS Manufacturing and Robotics Engineering with specialization in Human Robot Interaction","BS Mechanical Engineering with Specialization in Mechatronics Engineering","BS Mechanical Engineering (Honors) with specialization in Mechatronics Engineering and Master of Science in Mechanical Engineering","BS Chemical Engineering (Honors) and Master of Science in Chemical Engineering","BS Civil Engineering (Honors) and Master of Science in Civil Engineering","BS Electronics Engineering (Honors) and Master of Science in Electronics and Communications Engineering","BS Manufacturing Engineering and Management with specialization in Mechatronics and Robotics Engineering and Master of Science in Manufacturing Engineering","BS Accountancy","BS Advertising Management","BS Applied Corporate Management","BS Business Management","BS Entrepreneurship","BS Interdisciplinary Business Studies","BS Legal Management","BS Management of Financial Institutions","BS Marketing Management","BS Management Accounting with Specialization in Business Analytics","BS Business Management with specialization in Business Analytics","BS Applied Economics (Honors) and Master of Science in Economics","BS Applied Economics Major in Industrial Economics","BS Applied Economics Major in Financial Economics","BS Applied Economics (no declared specialization)","BS Applied Economics with specialization in Development Economics and Policy","BS Applied Economics with specialization in Health Economics","BS Applied Economics with specialization in Behavioral Economics","BS Applied Economics with specialization in Economics with Management","BS Applied Economics with specialization in Economics with Business Analytics","BS Applied Economics with specialization in Computational Economics","BA Legal Studies and Sustainable Development (first 2 years in Manila, second 2 years will be taken at the Rufino Campus)"]},
 cs:[1,2,3,4,5,9,10,13],
 qualifications:["Must be a current Grade 12 student","Or a high school graduate with no prior college courses, a PEPT/ALS passer, or a holder of accepted standardized tests like the SAT, IB, or AP"],
 requirements:["Recent 2x2 or passport-size photo","Grade 11 or Grade 12 ID","DLSU Secondary Scholastic Record","Grade 11 Report Card","PSA / NSO Birth Certificate","Certificate of Good Moral Character","Declaration as a New Student Form","Grade 12 Report Card","Certificate of Upper Percentage","Certificate of Indigency from the MSWD Office","Application fee: PHP 800.00 (exempt: DepEd-recognized Philippine public or science high schools; DLSU Manila SHS, DLSU Laguna Integrated School, LSGH Night High School, and DLSZ BRAFENHS; applicants eligible under RA 12006)","Note: the source document marks some of these items as for gap year students only or for applicants under RA 12006. Check the official admission portal to see which ones apply to you."],
 tuition:"₱74,000 to ₱95,000 per trimester (approximately ₱222,000 to ₱285,000 per academic year)",
 website:"https://www.dlsu.edu.ph",
 facebook:"https://www.facebook.com/DLSU.Manila.100"},

{n:"University of Santo Tomas (UST)",c:"1817 España Blvd, Sampaloc, Manila, 1008 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-08-08",
 deadlineDate:"2027-01-08",
 examDate:null,
 examDates:["2026-10-18","2026-12-06","2027-01-24"],
 examText:"Oct 18, 2026 · Dec 6, 2026 · Jan 24, 2027",
 notes:["College application deadline: Jan 8, 2027","LEAPMed (6-year medical program) deadline: Nov 28, 2026. The source document also mentions Nov 27, 2026, so confirm the exact date with UST"],
 courses:{type:"list",items:["BA Asian Studies","BA Behavioral Science","BA Communication","BA Creative Writing","BA Economics","BA History","BA Journalism","BA Legal Management","BA Literature","BA Philosophy","BA Political Science","BA Sociology","BS Applied Mathematics","BS Applied Physics (Major in Instrumentation)","BS Biology (Tracks: Environmental Biology, Industrial Biology, Medical Biology)","BS Chemistry","BS Data Science and Analytics","BS Mathematics (Major in Actuarial Science)","BS Microbiology","BS Molecular Biology and Biotechnology","BS Psychology","BS Architecture","BS Business Administration (Major in Business Economics)","BS Business Administration (Major in Financial Management)","BS Business Administration (Major in Human Resource Management)","BS Business Administration (Major in Marketing Management)","BS Entrepreneurship","BS Accountancy","BS Accounting Information System","BS Management Accounting","BS Chemical Engineering","BS Civil Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Computer Science","BS Information Systems","BS Information Technology","BS Biochemistry","BS Medical Technology","BS Pharmacy","BS Clinical Pharmacy","BS Nursing","BS Occupational Therapy","BS Physical Therapy","BS Speech-Language Pathology","BS Sports Science","Bachelor of Elementary Education","Bachelor of Early Childhood Education","Bachelor of Special Needs Education","Bachelor of Secondary Education major in English","Bachelor of Secondary Education major in Filipino","Bachelor of Secondary Education major in Mathematics","Bachelor of Secondary Education major in Religious and Values Education","Bachelor of Secondary Education major in Science","Bachelor of Secondary Education major in Social Studies","BS Food Technology","BS Nutrition and Dietetics","Bachelor of Library and Information Science","BS Hospitality Management","BS Tourism Management","Bachelor of Fine Arts major in Advertising Arts","Bachelor of Fine Arts major in Industrial Design","Bachelor of Fine Arts major in Interior Design","Bachelor of Fine Arts major in Painting","Bachelor of Music major in Composition","Bachelor of Music major in Musicology","Bachelor of Music major in Performance","Bachelor of Music major in Music Education","Bachelor of Music major in Music Technology","Bachelor of Music major in Music Theory","Bachelor of Music major in Conducting","Bachelor of Physical Education","BS Fitness and Sports Management"]},
 cs:[0,1,2,3,4,5,6,7,9,10,11,13],
 qualifications:["Academic standing: ordinarily, graduating senior high school students for the current school year can apply directly","Entrance test (USTET): applicants must take and pass the USTET (evaluated by exam score [80%] and average grades [20%])","LEAPMed (6-year medical program): open to Grade 12 STEM, GAS-Health Allied, or IB students","LEAPMed: must have a Grade 11 General Weighted Average (GWA) of 90 or higher (or 28 IB points)","LEAPMed: must take both the standard USTET and the specialized LEAPMed entrance test","LEAPMed: the deadline is typically earlier (for example, November 27, 2026 for AY 2027-2028), with an application fee of PHP 3,600.00"],
 requirements:["2x2 ID picture","PSA / NSO Birth Certificate or valid passport","USTET College Application Grades Form (template available online)","Grade 12 Report Card certified by the School Registrar / Principal","PEPT, ALS, or A&E certificate","Clearance from the UST Registrar","Certification that you are part of the Top 10% of the graduating batch","DSWD Certificate of Indigency","Application fee: PHP 600.00 (exempt: applicants awarded Highest Honors based on their Grade 11 academic performance; applicants eligible under the Free College Entrance Examinations Act; children of UST support staff)","Note: the source document marks some of these items as for graduating senior high school students only, gap year students only, PEPT/ALS/A&E passers only, LEAPMed applicants, or applicants eligible under RA 12006. Check the official portal to see which ones apply to you."],
 tuition:"₱47,900 to ₱91,500 per term for most undergraduate programs; ₱163,000 to ₱172,000 per term for the Faculty of Medicine and Surgery",
 website:"https://www.ust.edu.ph",
 facebook:"https://www.facebook.com/UST1611official"},

{n:"Polytechnic University of the Philippines (PUP)",c:"1016 Anonas Street, Sta. Mesa, Manila, Metro Manila",r:"Metro Manila",t:"Public",verified:true,
 openText:"To be announced",
 deadlineText:"To be announced",
 examDate:null,
 examText:"To be announced",
 courses:{type:"list",items:["BS Entrepreneurship","BA Broadcasting","BS Business Administration major in Human Resource Management","BS Business Administration major in Marketing Management","BS Office Administration","BS Tourism Management","Bachelor of Public Administration","BS Accountancy","BS Management Accounting","BS Business Administration Major in Financial Management","BS Architecture","BS Interior Design","BS Environmental Planning","BA English","BA Filipino","BA Philosophy","BA Theater Arts","BS Business Administration major in Human Resource Development Management","Bachelor in Advertising and Public Relation","BA Journalism","BA Communication Research","BS Computer Science","BS Information Technology","Bachelor of Technology and Livelihood Education major in Home Economics, Industrial Arts, Information and Communication Technology","Bachelor of Library and Information Science","Bachelor of Secondary Education major in English, Mathematics, Science, Filipino, Social Studies","Bachelor of Elementary Education","Bachelor of Early Childhood Education","BS Civil Engineering","BS Computer Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Industrial Engineering","BS Mechanical Engineering","BS Railway Engineering (formerly Bachelor of Science in Railway Engineering and Management)","Bachelor in Physical Education","BA Political Science","BA Political Economy","BA International Studies","BA Sociology","BS Economics","BA History","BA Philippine Studies","BS Psychology","Bachelor in Human Services","BS Social Work","Bachelor in Applied Statistics","BS Applied Mathematics major in Actuarial Mathematics","BS Biology","BS Chemistry","BS Food Technology","BS Mathematics","BS Nutrition and Dietetics","BS Physics","Bachelor in Transportation Management","BS Hospitality Management"]},
 cs:[0,1,2,3,4,5,6,7,9,12,13],
 qualifications:["Grade 12 students expecting to graduate at the end of the school year (or graduates of K-12 pilot schools who have not enrolled in any technical, diploma, or degree program after graduation) with a General Weighted Average (GWA) of 82% or higher","Passers of the Philippine Educational Placement Test (PEPT) or the Alternative Learning System (ALS A&E) who are certified eligible for college admission by the Department of Education (DepEd)","Must apply strictly online through the PUP iApply portal. An applicant may take the PUPCET in only one PUP branch or campus per academic year. Multiple applications result in automatic nullification"],
 requirements:["2x2 picture with name tag","Grade 11 Report Card"],
 website:"https://www.pup.edu.ph",
 facebook:"https://www.facebook.com/ThePUPOfficial"},

{n:"Mapúa University",c:"658 Muralla St, Intramuros, Manila, 1002 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-10-07",
 deadlineText:"To be announced",
 examDate:null,
 examText:"Online (Mapúa Program Placement Assessment, MPASS)",
 courses:{type:"list",items:["BS Civil Engineering","BS Construction Engineering and Management","BS Environmental and Sanitary Engineering","BS Geological Science and Engineering","BS Geology","BS Biological Engineering","BS Chemical Engineering","BS Chemistry","BS Materials Science and Engineering","BS Computer Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Energy Engineering","BS Manufacturing Engineering","BS Mechanical Engineering","BS Industrial Engineering","BS Management Science and Engineering","BS Service Engineering and Management","BS Architecture","BS Industrial Design","BS Interior Design","AB Psychology","BS Psychology","BS Physics","BS Technical Communication","BS Education Technology","Bachelor of Physical Education in Sports and Wellness Management"]},
 cs:[0,1,5,9],
 qualifications:["Grade 12 students: currently enrolled as a Senior High School student","Secondary school graduates: graduated from high school or the Alternative Learning System (ALS A&E) and have not yet enrolled in any college-level course","International curricula: finished secondary education through the International Baccalaureate (IB), Cambridge International (IGCSE), or an equivalent program","Assessment (MPASS): must take and pass the Mapúa Program Placement Assessment (MPASS)"],
 requirements:["Accomplished application form","Current school ID","PSA Birth Certificate","Certificate of Upper Percentage","Income Tax Return / Certificate of Indigency / Proof of Compensation (for applicants eligible under RA 12006)","Application fee: PHP 300.00"],
 tuition:"Roughly ₱1,775 to ₱2,160 per unit depending on whether you pay in full or by installment; around ₱48,000 to ₱65,000 for the first term; bachelor's degree tuition ranges from ₱47,000 to ₱60,000 per term; total yearly tuition spans roughly ₱150,000 to ₱200,000+ across the four terms",
 website:"https://www.mapua.edu.ph",
 facebook:"https://www.facebook.com/MapuaUniv"},

{n:"Far Eastern University (FEU)",c:"Nicanor Reyes Sr. Street, Sampaloc, Manila, 1008 Metro Manila",r:"Metro Manila",t:"Private",verified:true,
 openDate:"2026-09-05",
 deadlineDate:null,
 deadlineText:"To be announced",
 examDate:null,
 examDates:["2026-09-12"],
 examText:"Sep 12, 2026 onwards",
 courses:{type:"list",items:["BS Accountancy","BS Business Administration (Financial Management / Marketing Management / Entrepreneurial Management)","BS Business Economics","BS Internal Auditing","BS Human Resource and Organizational Development","BS Architecture (Building Construction / Human Settlement / Urban Design)","Bachelor of Fine Arts major in Studio Arts","Bachelor of Fine Arts major in Visual Communication","BS Applied Mathematics (Data Science / Information Technology / Mathematical Finance)","BS Biology (Medical Biology / Microbiology / Systematic Biology)","BS Chemistry","BA Communication (Digital Film and Media Production / Multimedia Journalism / Strategic Communications)","BA Language and Literature Studies (English Language Studies / Literature Studies and Creative Writing)","BA Interdisciplinary Studies (Philippine Art, Culture, and Heritage / Sustainable Urban Development)","BA International Studies (International Relations & Diplomacy / International Development & Cooperation / Area Studies)","BA Political Science (Philippine Politics / Politics and Law)","BS Psychology","Bachelor of Elementary Education","Bachelor of Secondary Education Major in English","Bachelor of Secondary Education Major in Mathematics","Bachelor of Secondary Education Major in Science","Bachelor of Special Needs Education","BS Exercise and Sports Sciences major in Fitness and Sports Management","Bachelor of Physical Education","BS Nursing","BS Medical Technology","BS Nutrition and Dietetics","BS Pharmacy","BS Hospitality Management (Cruise Line Management / Culinary Arts and Kitchen Operations / Hotel Industry Analytics / Hotel and Resorts Operation)","BS Tourism Management (Travel and Tours Management / Airline Operations and Management / Tourism Foreign Relations and Diplomacy / Tourism Digital Content Creation and Marketing / Tourism and Hospitality Sustainability Leadership)"]},
 cs:[0,3,4,5,6,7,9,11],
 qualifications:["Completion of middle school or senior high school (or PEPT / Non-Formal / ALS equivalency)","Must pass the FEUCAT"],
 requirements:["Grade 11 Report Card","Grade 12 School ID","Certificate of Ranking (for the application fee)","Application fee: PHP 500.00 (exempt: applicants who belong to the Top 10 of their batch)"],
 tuition:"Standard undergraduate programs (IABF, IARFA, IAS, IE, IHSN, ITHM): ₱2,118 per unit; with total semestral expenses: ₱50,000 to ₱85,000+ per semester",
 website:"https://www.feu.edu.ph",
 facebook:"https://www.facebook.com/FarEasternUniversity"},

{n:"Technological University of the Philippines (TUP)",c:"San Marcelino St, Ayala Blvd, Ermita, Manila, 1000",r:"Metro Manila",t:"Public",verified:true,
 openDate:"2026-09-28",
 deadlineDate:"2026-11-26",
 examDate:null,
 examDates:["2027-01-16","2027-01-17","2027-01-23","2027-01-24","2027-01-30","2027-01-31"],
 examText:"Jan 16–17, 23–24, 30–31, 2027",
 courses:{type:"list",items:["BS Food Technology","Bachelor of Engineering Technology major in Computer Engineering Technology","Bachelor of Engineering Technology major in Civil Technology","Bachelor of Engineering Technology major in Electrical Technology","Bachelor of Engineering Technology major in Electronics Communications Technology","Bachelor of Engineering Technology major in Electronics Technology","Bachelor of Engineering Technology major in Instrumentation and Control Technology","Bachelor of Engineering Technology major in Mechanical Technology","Bachelor of Engineering Technology major in Mechatronics Technology","Bachelor of Engineering Technology major in Railway Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Automotive Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Foundry Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Heating Ventilating & Air-Conditioning / Refrigeration Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Power Plant Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Welding Technology","Bachelor of Engineering Technology major in Mechanical Engineering Technology option in Dies and Moulds Technology","Bachelor of Technology in Apparel and Fashion","Bachelor of Technology in Nutrition and Food Technology","Bachelor of Technology in Print Media Technology","Bachelor of Technology and Livelihood Education major in Information and Communication Technology","Bachelor of Technology and Livelihood Education major in Home Economics","Bachelor of Technology and Livelihood Education major in Industrial Arts","Bachelor of Technical Vocational Teachers Education major in Animation","Bachelor of Technical Vocational Teachers Education major in Beauty Care and Wellness","Bachelor of Technical Vocational Teachers Education major in Computer Programming","Bachelor of Technical Vocational Teachers Education major in Electrical","Bachelor of Technical Vocational Teachers Education major in Electronics","Bachelor of Technical Vocational Teachers Education major in Food Service Management","Bachelor of Technical Vocational Teachers Education major in Fashion and Garment","Bachelor of Technical Vocational Teachers Education major in Heat Ventilation & Air Conditioning","Bachelor of Technical Teacher Education","BS Civil Engineering","BS Electrical Engineering","BS Electronics Engineering","BS Mechanical Engineering","BA Management major in Industrial Management","BS Entrepreneurship Management","BS Hospitality Management","Bachelor of Applied Science in Laboratory Technology","BS Computer Science","BS Environmental Science","BS Information System","BS Information Technology","BS Architecture","Bachelor of Fine Arts","Bachelor in Graphics Technology major in Architecture Technology","Bachelor in Graphics Technology major in Industrial Design","Bachelor in Graphics Technology major in Mechanical Drafting Technology"]},
 cs:[0,1,2,5,6,13],
 qualifications:["Educational attainment: must be a Senior High School (SHS) graduate or a candidate for graduation from a DepEd-recognized school","Academic performance: a clean academic record with no failing grades (no un-remedied 75% or below) in Senior High School","Good moral character: a clear disciplinary record and a Certificate of Good Moral Character from your previous school","Admission testing: must take and pass the TUP Scholastic Admission Test (TUPSAT)","Health and fitness: must pass the physical and medical evaluation by the TUP University Clinic to be fit for technical and shop-work intensive courses","Interview screening: must pass the departmental interview handled by the faculty of your chosen college"],
 requirements:["Printed ERS Application Form","Photocopy of Grade 11 Report Card","Photocopy of latest Grade 12 Report Card","Photocopy of Grade 12 Report Card (for gap year students only)","Photocopy of proof of income (any one of: Income Tax Return, Certificate of Low Income, Certificate of Employment with Compensation, or Employment Contract for OFWs)","Photocopy of PSA Birth Certificate"],
 website:"https://www.tup.edu.ph",
 facebook:"https://www.facebook.com/tupmanilaofficial"}
];

// how to get to each school (same order as S)
var M=[
["Official route from Meycauayan: take a jeep, van, or e-jeep from MacArthur Highway or the Meycauayan Common Terminal bound for Malolos Crossing. A ride via NLEX saves time versus the traffic-heavy MacArthur Highway. From Malolos Crossing, BulSU is a short tricycle ride away.","From Metro Manila: a bus to Malolos from Cubao, Monumento, or Sampaloc, e.g. Baliwag Transit, via NLEX or MacArthur Highway.","UV Express: from SM North EDSA or Fairview to Malolos, then a tricycle to the campus."],
["Train: LRT-1 or the EDSA Carousel to Monumento, then a jeep or bus to Meycauayan along MacArthur Highway.","UV Express or bus: from Cubao or Monumento to Meycauayan.","In Meycauayan: a tricycle to the campus, or a short jeep ride to Malhacan."],
["Train: LRT-1 or the EDSA Carousel to Monumento, then a jeep or bus to Meycauayan along MacArthur Highway.","UV Express or bus: from Cubao or Monumento to Meycauayan.","In Meycauayan: a tricycle to the campus along MacArthur Highway."],
["Train: LRT-1 Monumento or Balintawak, then a jeep or bus along MacArthur Highway to Valenzuela.","Jeep or bus: routes from Monumento, Caloocan, or Malanday passing A. Bonifacio Ave.","Tricycle: from the highway or terminal straight to the campus."],
["Train: LRT-1 Monumento station, then a short jeep or tricycle ride along EDSA.","Jeep: jeeps along EDSA or Rizal Ave. from Monumento or Grace Park.","Bus: EDSA buses passing Monumento, then transfer to a jeep or tricycle."],
["Train: LRT-2 Katipunan, then a jeep or tricycle into the campus. You can also take MRT-3 to North Avenue, then a jeep to Philcoa or UP Campus.","Jeep: ride a jeep signed UP Campus, Philcoa, or Katipunan. Buses also run along Commonwealth Ave.","Inside campus: take an Ikot or Toki jeep to your college."],
["Train: LRT-2 Katipunan; the campus is right along Katipunan Ave.","Jeep: from Cubao or Marikina, take a jeep that passes Katipunan. From Commonwealth, take a jeep to Philcoa or Katipunan.","Grab or taxi: faster outside rush hour."],
["Train: LRT-1 Vito Cruz, then walk or take a jeep along Taft Ave. From MRT-3, get off at Taft Avenue and transfer to LRT-1 EDSA station.","Jeep: many jeeps run along Taft Ave. from Pasay, Malate, and Quiapo.","Bus: take an EDSA bus bound for Taft or Pasay, then transfer to a train or jeep."],
["Train: LRT-1 Doroteo Jose or Blumentritt, or LRT-2 Recto, then a jeep or tricycle to España.","Jeep: take a jeep that passes España Blvd. from Quiapo or Recto.","Bus or Grab: from EDSA or Cubao, get off at España and walk or take a jeep."],
["Train: LRT-2 Pureza, a few minutes on foot or a short jeep ride to the campus.","Jeep: jeeps passing Ramon Magsaysay Blvd., Sta. Mesa, or Pureza.","Bus or Grab: a bus bound for Sta. Mesa, or Grab if you are carrying a lot."],
["Train: LRT-1 Central Terminal or Carriedo, then a short jeep ride or walk into Intramuros.","Jeep: jeeps along Taft Ave. or Recto that pass near Intramuros and Muralla St.","Bus or Grab: buses along Taft or Recto, then a short walk into Intramuros."],
["Train: LRT-2 Legarda, then a short walk or tricycle to the campus.","Jeep: jeeps along España Blvd. or Nicanor Reyes St. from Quiapo or Recto.","Bus or Grab: EDSA or Recto-bound buses, then transfer to a jeep near España."],
["Train: LRT-1 UN Avenue, then walk to the campus.","Jeep: jeeps along Taft Ave., Kalaw, or UN Ave. from Quiapo or Recto.","Bus: a bus bound for Baclaran or Pasay that passes Taft; get off at UN Ave."]
];

// course filter list used by the dropdown and the course-offerings data above
var CO=["Architecture","Engineering","Information Technology","Business Administration","Accountancy","Education","Hospitality Management","Tourism Management","Criminology","Psychology","Legal Management","Nursing","Office Administration","Entrepreneurship"];

var K=["BulSU","PCCM","MeyColl","OLFU","MCU","UP","ADMU","DLSU","UST","PUP","Mapua","FEU","TUP"];
var LP=["r","r","r","r","r","l","l","l","l","r","l","l","l"];
var LL=[[14.856,120.811],[14.737,120.961],[14.737,120.965],[14.700,120.983],[14.751,120.983],[14.654,121.065],[14.640,121.078],[14.565,120.993],[14.610,120.989],[14.598,121.011],[14.591,120.975],[14.609,120.992],[14.587,120.983]];

// School logo files, same order as S. Put each file in assets/logos/schools/ using these names.
// If a file is missing, the card shows the school's short name instead (never a different logo).
var LG=["bulsu.png","pccm.png","meycauayan-college.png","olfu.png","mcu.png","up-diliman.png","ateneo.png","dlsu.png","ust.png","pup.png","mapua.png","feu.png","tup.png"];
var LOGO_DIR="assets/logos/schools/";
var CMP=[];
S.forEach(function(s,i){s.m=M[i];s.id=i;s.k=K[i];s.ll=LL[i];s.logo=LG[i]});

var $=function(i){return document.getElementById(i)};
var reg="All",TODAY=new Date();TODAY.setHours(0,0,0,0);
function dl(x){return Math.ceil((new Date(x+"T00:00:00")-TODAY)/864e5)}
function fd(x){return new Date(x+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}
function openStr(s){return s.openDate?fd(s.openDate):(s.openText||"Not yet available")}
function dlStr(s){return s.deadlineDate?fd(s.deadlineDate):(s.deadlineText||"Not yet available")}
function exStr(s){return s.examDate?fd(s.examDate):(s.examText||"Not yet available")}
function stt(s){if(!s.openDate)return"na";if(TODAY<new Date(s.openDate+"T00:00:00"))return"up";if(!s.deadlineDate)return"on";return TODAY>new Date(s.deadlineDate+"T00:00:00")?"cl":"on"}
var SL={up:"Upcoming",on:"Open now",cl:"Closed",na:"Dates TBA"};
function appStr(s){return s.openDate&&s.deadlineDate?openStr(s)+" to "+dlStr(s):s.openDate?openStr(s)+", deadline to be announced":"To be announced"}
function cd(s){var st=stt(s);if(st==="na")return"Dates not yet available";if(st==="cl")return"Closed";if(st==="up")return"Opens in "+dl(s.openDate)+(dl(s.openDate)===1?" day":" days");if(!s.deadlineDate)return"Open now, deadline to be announced";var k=dl(s.deadlineDate);return k===0?"Deadline is today":"<b>"+k+"</b> "+(k===1?"day":"days")+" left"}
function setReg(r){reg=r;
document.querySelectorAll(".seg button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.r===r)});render()}
document.querySelectorAll(".seg button").forEach(function(b){b.onclick=function(){setReg(b.dataset.r)}});

function base(){var q=$("q").value.toLowerCase(),ty=$("type").value,c=$("course").value;return S.filter(function(s){return (reg==="All"||s.r===reg)&&(!ty||s.t===ty)&&(c===""||s.cs.indexOf(+c)>-1)&&(s.n+" "+s.c).toLowerCase().indexOf(q)>-1})}
function sortKey(s){return s.deadlineDate||"9999-99-99"}
function list(){var st=$("stat").value;return base().filter(function(s){return !st||stt(s)===st}).sort(function(a,b){return sortKey(a)<sortKey(b)?-1:sortKey(a)>sortKey(b)?1:0})}
function nrq(s){return s.requirements.filter(function(x){return x.indexOf("Note:")!==0}).length}
function coursesLine(s){if(s.courses.type==="list")return s.courses.items.slice(0,3).join(", ")+(s.courses.items.length>3?", …":"");if(s.courses.type==="link")return "See official programs list";return "Not yet available"}

/* school logo: shows the image if the file exists, otherwise the short name */
function logoHtml(s,cls){return '<span class="lg'+(cls?" "+cls:"")+'" aria-hidden="true"><img src="'+LOGO_DIR+s.logo+'" alt="" onload="this.parentNode.classList.add(\'ok\')"><span class="mono">'+s.k+'</span></span>'}

/* ---- reveal-once helpers (cards re-render on every filter; seen cards never animate again) ---- */
var SEEN={},cardIO=null,staticIO=null;
function revealEl(el){el.classList.add("in");var d=parseInt((el.style.getPropertyValue("--d")||"0"),10)||0;setTimeout(function(){el.classList.add("done")},900+d)}
function makeIO(onSeen){return("IntersectionObserver" in window)?new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){revealEl(e.target);o.unobserve(e.target);if(onSeen)onSeen(e.target)}})},{threshold:.1,rootMargin:"0px 0px -5% 0px"}):null}
function revealCards(){
if(cardIO)cardIO.disconnect();
cardIO=makeIO(function(el){SEEN[el.dataset.id]=1});
document.querySelectorAll("#grid .school").forEach(function(el,i){
if(SEEN[el.dataset.id]||!cardIO){el.classList.add("in","done");return}
el.style.setProperty("--d",(i%3)*80+"ms");cardIO.observe(el)})}

function render(){var L=list(),c=$("course").value,cn=c===""?"":CO[+c];
$("rc").textContent=L.length+(L.length===1?" school":" schools")+(cn?" offering "+cn:"");
$("grid").innerHTML=L.length?L.map(function(s){var q=encodeURIComponent(s.n+" "+s.c),st=stt(s);
return '<article class="school rv" data-id="'+s.id+'"><header class="sh">'+logoHtml(s)+'<div class="shm"><div class="chips"><span class="tag'+(s.r==="Bulacan"?" b":"")+'">'+s.r+'</span> <span class="tag">'+s.t+'</span> <span class="st '+st+'">'+SL[st]+'</span>'+(s.verified===false?' <span class="tag unv">Unverified sample data</span>':'')+'</div><h3>'+s.n+'</h3>'+(cn?'<div class="row">Course: <b>'+cn+'</b></div>':'')+'</div></header>'+
'<div class="cdp'+(st==="on"&&s.deadlineDate&&dl(s.deadlineDate)<=14?" hot":"")+(st==="na"?" na":"")+'">'+cd(s)+'</div>'+
'<div class="blk"><h4>Location</h4><p>'+s.c+'</p></div>'+
'<div class="blk"><h4>Dates</h4><dl class="dates"><dt>Opens</dt><dd>'+openStr(s)+'</dd><dt>Deadline</dt><dd>'+dlStr(s)+'</dd><dt>Exam</dt><dd>'+exStr(s)+'</dd></dl>'+(nrq(s)?'<p class="row" style="margin:8px 0 0">Requirements: <b>'+nrq(s)+'</b></p>':'')+'</div>'+
'<div class="blk"><h4>Courses</h4><p>'+coursesLine(s)+'</p></div>'+
'<details class="exp"><summary>How to get there</summary><ul>'+s.m.map(function(x){return '<li>'+x.replace(/^([^:]+): /,'<b>$1:</b> ')+'</li>'}).join("")+'</ul></details>'+
'<label class="cmp"><input type="checkbox" data-id="'+s.id+'"'+(CMP.indexOf(s.id)>-1?" checked":"")+'> Compare</label>'+
'<div class="acts"><button class="btn" data-open data-id="'+s.id+'">Full details</button><a class="btn o" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination='+q+'">Get directions</a></div></article>'}).join(""):'<p class="sub">No matches. Try another course or clear the filters.</p>';
revealCards();
drawBoard(base());drawMap(L);drawCal(L);drawCmp()}
function drawBoard(B){var c={on:0,up:0,cl:0,na:0},a=$("stat").value,T=[["on","Open now"],["up","Upcoming"],["cl","Closed"],["na","Dates TBA"]];
B.forEach(function(s){c[stt(s)]++});
$("board").innerHTML=T.map(function(x){return '<button class="'+x[0]+(a===x[0]?" sel":"")+'" data-s="'+x[0]+'"><b>'+c[x[0]]+'</b>'+x[1]+'</button>'}).join("");
var so=B.filter(function(s){return stt(s)==="on"&&s.deadlineDate}).sort(function(a,b){return sortKey(a)<sortKey(b)?-1:sortKey(a)>sortKey(b)?1:0}).slice(0,3),oo=B.some(function(s){return stt(s)==="on"});
$("soon").innerHTML='<b>Closing soon</b><ul class="evl">'+(so.length?so.map(function(s){return '<li><span><b>'+cd(s)+'</b> '+s.n+', until '+dlStr(s)+'</span></li>'}).join(""):'<li>'+(oo?'No open applications with a known deadline for the current filters.':'No open applications for the current filters.')+'</li>')+'</ul>'}
function drawMap(L){var on={},g='<rect width="365" height="470" rx="12" fill="#e9eef5"/><line x1="0" y1="278" x2="365" y2="278" stroke="#777" stroke-dasharray="6 5"/><text x="12" y="30" class="rg">Bulacan</text><text x="12" y="300" class="rg">Metro Manila</text>';
L.forEach(function(s){on[s.id]=1});
S.forEach(function(s){var x=(s.ll[1]-120.78)*1000+20,y=(14.98-s.ll[0])*1000+20,l=LP[s.id]==="l";
g+='<g class="pin '+stt(s)+(on[s.id]?"":" off")+'" data-id="'+s.id+'" tabindex="0" role="button" aria-label="'+s.n+'"><circle cx="'+x+'" cy="'+y+'" r="9"/><text x="'+(l?x-14:x+14)+'" y="'+(y+4)+'" text-anchor="'+(l?"end":"start")+'">'+s.k+'</text></g>'});
$("map").innerHTML=g}

/* ---- dialogs (shared open / close animation) ---- */
function openDlg(d){d.showModal();requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.add("show")})})}
function closeDlg(d,cb){if(!d.open)return;d.classList.remove("show");setTimeout(function(){try{d.close()}catch(e){}if(cb)cb()},180)}

/* ---- compare: selection summary, floating tray, and the pop-up ---- */
function setTray(n,names){var t=$("tray");t.classList.toggle("show",n>0);t.setAttribute("aria-hidden",n>0?"false":"true");document.body.classList.toggle("has-tray",n>0);
$("trayCount").textContent=n+(n===1?" school selected":" schools selected")+(n<2?" (pick "+(2-n)+" more)":"");$("trayNames").textContent=names;
[$("trayGo"),$("trayClear")].forEach(function(b){b.tabIndex=n>0?0:-1});$("trayGo").disabled=n<2}
function drawCmp(){var C=CMP.map(function(i){return S[i]}),n=C.length;
var chips=n?'<div class="sel-list">'+C.map(function(s){return '<span class="sel-chip" title="'+s.n+'">'+s.k+'<button type="button" data-rm="'+s.id+'" aria-label="Remove '+s.k+' from comparison">&times;</button></span>'}).join("")+'</div>':'';
$("cmpout").innerHTML=(n<2?'<p class="sub" style="margin-bottom:10px">'+(n===0?'No schools selected yet. Tick Compare on a school card.':'Pick 1 more school to see the comparison.')+'</p>':'')+chips+
'<div class="acts" style="margin-top:12px"><button class="btn" type="button" data-go'+(n<2?' disabled':'')+'>Compare now</button>'+(n?'<button class="btn o" type="button" data-clear>Clear selection</button>':'<a class="btn o" href="#schools">Go to schools</a>')+'</div>';
setTray(n,C.map(function(s){return s.k}).join(", "))}
function unpick(i){var x=CMP.indexOf(i);if(x>-1)CMP.splice(x,1);var cb=document.querySelector('#grid input[data-id="'+i+'"]');if(cb)cb.checked=false}
function clearCmp(){CMP.slice().forEach(unpick);$("cmpmsg").textContent="";drawCmp()}
function nv(t){return{h:t,na:t==="Not yet available"}}
function cmpRows(){return[
["Region",function(s){return nv(s.r)}],
["Type",function(s){return nv(s.t)}],
["Admission status",function(s){var k=stt(s);return{h:SL[k],na:k==="na"}}],
["Applications open",function(s){return nv(openStr(s))}],
["Deadline",function(s){return nv(dlStr(s))}],
["Entrance exam",function(s){return nv(exStr(s))}],
["Location",function(s){return nv(s.c)}],
["Courses",function(s){var c=s.courses;if(c.type==="list")return{h:'<ul class="sc">'+c.items.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'+(c.url?'<a href="'+c.url+'" target="_blank" rel="noopener">'+(c.note||"See the official programs list")+'</a>':'')};if(c.type==="link")return{h:'<a href="'+c.url+'" target="_blank" rel="noopener">'+(c.note||"See the official programs list")+'</a>'};return nv("Not yet available")}],
["Qualifications",function(s){return s.qualifications&&s.qualifications.length?{h:'<ul>'+s.qualifications.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'}:nv("Not yet available")}],
["Tuition fee",function(s){return s.tuition?nv(s.tuition):nv(s.t==="Public"?"Not listed (public school)":"Not yet available")}],
["Requirements",function(s){return s.requirements.length?{h:'<ul>'+s.requirements.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'}:nv("Not yet available")}]]}
function openCmp(){if(CMP.length<2){$("cmpmsg").textContent="Pick at least 2 schools to compare.";return}
var C=CMP.map(function(i){return S[i]}),n=C.length;
var h='<div class="cmpx"><div class="cmpg" style="--n:'+n+'"><div class="cmp-row cmp-sch">'+C.map(function(s){return '<div class="cmp-cell">'+logoHtml(s,"sm")+'<div><b>'+s.k+'</b><small>'+s.n+'</small></div></div>'}).join("")+'</div>';
cmpRows().forEach(function(r){h+='<div class="cmp-row"><div class="cmp-cat">'+r[0]+'</div>'+C.map(function(s){var v=r[1](s);return '<div class="cmp-cell'+(v.na?" na":"")+'">'+v.h+'</div>'}).join("")+'</div>'});
$("cmpBody").innerHTML=h+'</div></div>';
openDlg($("cmpdlg"));$("cmpBody").firstChild.scrollTop=0}

function openD(i){var s=S[i],st=stt(s),q=encodeURIComponent(s.n+" "+s.c);
var J=[["Application",appStr(s),stt(s)==="cl"||stt(s)==="on"],["Entrance exam",exStr(s),!!s.examDate&&dl(s.examDate)<0],["Results","Watch for the school's announcement",false],["Confirmation","Watch for the school's announcement",false],["Enrollment","Watch for the school's announcement",false]];
var web=s.website||"https://www.google.com/search?q="+encodeURIComponent(s.n+" admission");
var coursesHtml=s.courses.type==="list"?'<ul class="row" style="margin:0;padding-left:18px">'+s.courses.items.map(function(c){return '<li>'+c+'</li>'}).join("")+'</ul>'+(s.courses.url?'<p class="row" style="margin:8px 0 0"><a href="'+s.courses.url+'" target="_blank" rel="noopener">'+(s.courses.note||"See the official programs list")+'</a></p>':''):s.courses.type==="link"?'<p class="row" style="margin:0"><a href="'+s.courses.url+'" target="_blank" rel="noopener">'+(s.courses.note||"See the official programs list")+'</a></p>':'<p class="row" style="margin:0">Not yet available — check the official website.</p>';
$("dbody").innerHTML='<div><span class="tag'+(s.r==="Bulacan"?" b":"")+'">'+s.r+'</span> <span class="tag">'+s.t+'</span> <span class="st '+st+'">'+SL[st]+'</span>'+(s.verified===false?' <span class="tag unv">Unverified sample data</span>':'')+'</div><div class="dh">'+logoHtml(s,"lgx")+'<h3>'+s.n+'</h3></div><div class="cdp'+(st==="on"&&s.deadlineDate&&dl(s.deadlineDate)<=14?" hot":"")+'">'+cd(s)+'</div>'+
'<h4>Courses offered</h4>'+coursesHtml+
(s.qualifications&&s.qualifications.length?'<h4>Qualifications</h4><ul class="row" style="margin:0;padding-left:18px">'+s.qualifications.map(function(q){return '<li>'+q+'</li>'}).join("")+'</ul>':'')+
'<h4>Requirements</h4>'+(s.requirements.length?'<ul class="row" style="margin:0;padding-left:18px">'+s.requirements.map(function(r){return '<li>'+r+'</li>'}).join("")+'</ul>':'<p class="row" style="margin:0">Not yet available — check the official website.</p>')+
(s.tuition?'<h4>Tuition fee</h4><p class="row" style="margin:0">'+s.tuition+'</p>':'')+
'<h4>Admission journey</h4><ul class="tl">'+J.map(function(x){return '<li class="'+(x[2]?"done":"")+'"><b>'+x[0]+'</b><br>'+x[1]+'</li>'}).join("")+'</ul>'+
(s.notes&&s.notes.length?'<h4>Other important dates</h4><ul class="row" style="margin:0;padding-left:18px">'+s.notes.map(function(n){return '<li>'+n+'</li>'}).join("")+'</ul>':'')+
'<h4>Location</h4><p style="margin:0">'+s.c+'</p><h4>How to get there</h4><ul class="row" style="margin:0;padding-left:18px">'+s.m.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'+
'<div class="acts" style="margin-top:14px"><a class="btn" target="_blank" rel="noopener" href="'+web+'">'+(s.website?"Official website":"Find the official website")+'</a>'+(s.facebook?'<a class="btn o" target="_blank" rel="noopener" href="'+s.facebook+'">Facebook page</a>':'')+'<a class="btn o" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination='+q+'">Get directions</a></div>';
openDlg($("dlg"))}
$("course").innerHTML='<option value="">All courses</option>'+CO.map(function(c,i){return '<option value="'+i+'">'+c+'</option>'}).join("");
$("course").onchange=render;$("explore").onclick=function(){render();$("schools").scrollIntoView()};
$("board").onclick=function(e){var b=e.target.closest("button");if(b){$("stat").value=$("stat").value===b.dataset.s?"":b.dataset.s;render()}};
$("grid").onclick=function(e){var b=e.target.closest("[data-open]");if(b)openD(+b.dataset.id)};
$("grid").onchange=function(e){var t=e.target;if(t.type!=="checkbox")return;var i=+t.dataset.id,x=CMP.indexOf(i);$("cmpmsg").textContent="";
if(t.checked){if(CMP.length>=3){t.checked=false;$("cmpmsg").textContent="You can compare up to 3 schools.";return}CMP.push(i)}else if(x>-1)CMP.splice(x,1);drawCmp()};
$("map").onclick=function(e){var g=e.target.closest(".pin");if(g&&!g.classList.contains("off"))openD(+g.dataset.id)};
$("map").onkeydown=function(e){var g=e.target.closest&&e.target.closest(".pin");if(g&&e.key==="Enter"&&!g.classList.contains("off"))openD(+g.dataset.id)};
function closeD(){closeDlg($("dlg"))}
$("dx").onclick=closeD;$("dlg").onclick=function(e){if(e.target===this)closeD()};
$("dlg").addEventListener("cancel",function(e){e.preventDefault();closeD()});
$("q").oninput=render;$("type").onchange=render;$("stat").onchange=render;

/* compare controls */
$("cmpout").onclick=function(e){var r=e.target.closest("[data-rm]"),g=e.target.closest("[data-go]"),c=e.target.closest("[data-clear]");
if(r){unpick(+r.dataset.rm);$("cmpmsg").textContent="";drawCmp()}else if(g&&!g.disabled)openCmp();else if(c)clearCmp()};
$("trayGo").onclick=openCmp;$("trayClear").onclick=clearCmp;
function closeCmp(cb){closeDlg($("cmpdlg"),cb)}
$("cmpX").onclick=$("cmpClose").onclick=function(){closeCmp()};
$("cmpBack").onclick=function(){closeCmp(function(){$("schools").scrollIntoView()})};
$("cmpdlg").addEventListener("cancel",function(e){e.preventDefault();closeCmp()});
/* close on a backdrop click: judge where the press STARTED (keyboard "clicks" report 0,0 and used to close the dialog) */
var cmpDownOut=false;
$("cmpdlg").addEventListener("pointerdown",function(e){var r=this.getBoundingClientRect();cmpDownOut=e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom});
$("cmpdlg").onclick=function(e){var out=cmpDownOut&&e.target===this;cmpDownOut=false;if(out)closeCmp()};

/* calendar */
var CM=new Date(TODAY.getFullYear(),TODAY.getMonth(),1),CD=null,LB={o:"Applications open",d:"Deadline",x:"Exam"};
function p2(n){return n<10?"0"+n:""+n}
function drawCal(L){var ev=[],y=CM.getFullYear(),m=CM.getMonth(),f=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate(),g="",i,d,t0=TODAY.getFullYear()+"-"+p2(TODAY.getMonth()+1)+"-"+p2(TODAY.getDate());
L.forEach(function(s){if(s.openDate)ev.push({k:s.openDate,t:"o",s:s.n});if(s.deadlineDate)ev.push({k:s.deadlineDate,t:"d",s:s.n});if(s.examDate)ev.push({k:s.examDate,t:"x",s:s.n});if(s.examDates)s.examDates.forEach(function(k){ev.push({k:k,t:"x",s:s.n})})});
$("mt").textContent=CM.toLocaleDateString("en-US",{month:"long",year:"numeric"});
["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(function(x){g+='<b class="dow">'+x+'</b>'});
for(i=0;i<f;i++)g+="<span></span>";
for(d=1;d<=n;d++){var k=y+"-"+p2(m+1)+"-"+p2(d),ts={};ev.forEach(function(e){if(e.k===k)ts[e.t]=1});
g+='<button class="day'+(k===CD?" sel":"")+(k===t0?" tdy":"")+'" data-k="'+k+'"><span>'+d+'</span><span class="dots">'+Object.keys(ts).map(function(t){return '<i class="dot '+t+'"></i>'}).join("")+'</span></button>'}
$("calg").innerHTML=g;
var pre=y+"-"+p2(m+1),sh=ev.filter(function(e){return CD?e.k===CD:e.k.indexOf(pre)===0}).sort(function(a,b){return a.k<b.k?-1:a.k>b.k?1:0});
$("evl").innerHTML=sh.length?sh.map(function(e){return '<li><i class="dot '+e.t+'"></i><span><b>'+fd(e.k)+'</b>: '+LB[e.t]+', '+e.s+'</span></li>'}).join(""):'<li>Nothing scheduled this '+(CD?"day":"month")+'.</li>'}
$("calg").onclick=function(e){var b=e.target.closest(".day");if(b){CD=CD===b.dataset.k?null:b.dataset.k;drawCal(list())}};
$("pm").onclick=function(){CM=new Date(CM.getFullYear(),CM.getMonth()-1,1);CD=null;drawCal(list())};
$("nm").onclick=function(){CM=new Date(CM.getFullYear(),CM.getMonth()+1,1);CD=null;drawCal(list())};

/* requirements checklist (general reference list) */
var R=[["Report card (Form 138)","Get it from your SHS adviser or registrar. Some schools ask for Grade 11 and first-semester Grade 12 grades."],["PSA birth certificate","A clear copy. Bring the original too if requested."],["Good moral certificate","Issued by your SHS. Ask early."],["Certificate of enrollment","Proof that you are currently in Grade 12."],["ID photo","Usually 2x2 or 1x1 with a white background. Size depends on the school."],["Valid ID","Student ID, or your parent or guardian's ID."],["Email and mobile number","For the admission portal and result notices."],["Application fee or proof of payment","Some schools waive it. Check the official announcement."],["Scanned copies","PDF or JPG, small file size, and every page clear."]];
$("chk").innerHTML=R.map(function(r,i){return '<li><label><input type="checkbox"><div><b>'+r[0]+'</b><br><span>'+r[1]+'</span></div></label></li>'}).join("");
function cnt(){var n=$("chk").querySelectorAll("input:checked").length;$("bar").style.width=(n/R.length*100)+"%";$("cnt").textContent=n+" of "+R.length+" ready"}
$("chk").onchange=cnt;cnt();

setReg("All");

/* ============================================================
   New interface behavior: clock, header, side nav, reveals, glow, tips
   ============================================================ */

/* Philippine Standard Time clock (Asia/Manila), updates every second */
(function(){
var d=$("clkDate"),t=$("clkTime");if(!d||!t)return;
var df=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Manila",weekday:"long",year:"numeric",month:"long",day:"numeric"});
var tf=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Manila",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:true});
function tick(){var n=new Date();d.textContent=df.format(n);t.textContent=tf.format(n)}
tick();setInterval(tick,1000);
})();

/* header hides while scrolling down and glides back when scrolling up; side menu on small screens */
(function(){
var body=document.body,hdr=$("top"),mb=$("menuBtn"),lastY=window.scrollY,ticking=false,lock=0;
var links=[].slice.call(document.querySelectorAll(".side a[href^='#']"));
function setH(h){hdr.classList.toggle("hide",h);body.classList.toggle("hdr-off",h)}
function setActive(id){links.forEach(function(l){l.classList.toggle("active",l.getAttribute("href")==="#"+id)})}
function setNav(o){body.classList.toggle("nav-open",o);mb.setAttribute("aria-expanded",o?"true":"false");mb.setAttribute("aria-label",o?"Close menu":"Open menu")}
function onScroll(){var y=window.scrollY;hdr.classList.toggle("scrolled",y>10);
if(y<=140){setH(false);lastY=y}else if(y-lastY>6){setH(true);lastY=y}else if(lastY-y>6){setH(false);lastY=y}
if(Date.now()>lock&&window.innerHeight+y>=document.documentElement.scrollHeight-4)setActive("about");
ticking=false}
window.addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
hdr.addEventListener("focusin",function(){setH(false)});
onScroll();

mb.onclick=function(){setNav(!body.classList.contains("nav-open"))};
$("navBk").onclick=function(){setNav(false)};
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&body.classList.contains("nav-open")){setNav(false);mb.focus()}});
if(window.matchMedia){window.matchMedia("(min-width:1100px)").addEventListener&&window.matchMedia("(min-width:1100px)").addEventListener("change",function(e){if(e.matches)setNav(false)})}

links.forEach(function(a){a.addEventListener("click",function(){
setActive(a.getAttribute("href").slice(1));lock=Date.now()+1300;
a.classList.remove("glow");void a.offsetWidth;a.classList.add("glow");
setNav(false)});
a.addEventListener("animationend",function(){a.classList.remove("glow")})});

if("IntersectionObserver" in window){
var navIO=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting&&Date.now()>lock)setActive(en.target.id)})},{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(function(s){navIO.observe(s)})}

$("toTop").onclick=function(){window.scrollTo(0,0)};
})();

/* gentle one-time reveal for static content */
(function(){
var io=makeIO(null),G=[["section h2","rv-l"],["section .sub",""],[".note",""],[".panel",""],["#board",""],[".filters",""],["ol.steps li",""],[".about-text",""],[".devs li",""],[".contact-card",""]];
G.forEach(function(g){document.querySelectorAll(g[0]).forEach(function(el,i){
el.classList.add("rv");if(g[1])el.classList.add(g[1]);
if(/li$/.test(g[0]))el.style.setProperty("--d",(i%5)*70+"ms");
if(io)io.observe(el);else{el.classList.add("in","done")}})})
})();

/* soft glow on press for buttons and chips */
document.addEventListener("click",function(e){
var t=e.target.closest(".btn,.seg button,.side-b,.tip-t,.x-btn,.day,.board button,.menu-btn,.chips button,.sel-chip button,.cmp,.exp summary,.pin,.calh button");
if(!t||t.disabled)return;
t.classList.remove("pulse");void t.offsetWidth;t.classList.add("pulse")});
document.addEventListener("animationend",function(e){if(e.animationName==="glowPulse"||e.animationName==="attn"||e.animationName==="pinGlow")e.target.classList.remove("pulse","attn")});

/* floating guidance tips: one at a time, optional, never repeated in a session */
(function(){
var TIPS=[
{sec:"status",txt:"Your college journey starts with the right information!",act:"schools"},
{sec:"schools",txt:"You know how to get there? Click here to view the directions!",act:"dir"},
{sec:"mapa",txt:"Tap a pin on the map to open that school's details.",act:null},
{sec:"kalendaryo",txt:"Don't miss a date. Tap a day to see what's scheduled.",act:null},
{sec:"compare",txt:"Compare your options and find the school that fits your goals!",act:"cmp"},
{sec:"req",txt:"Not sure about the admission requirements? Click here to see the full details!",act:"req"}];
var on=true,shown={},cur=null,tm=null,btn=$("tipsBtn");
try{on=sessionStorage.getItem("cc-tips")!=="off";shown=JSON.parse(sessionStorage.getItem("cc-tips-seen")||"{}")||{}}catch(e){}
function save(){try{sessionStorage.setItem("cc-tips",on?"on":"off");sessionStorage.setItem("cc-tips-seen",JSON.stringify(shown))}catch(e){}}
function label(){btn.textContent="Guide tips: "+(on?"On":"Off");btn.setAttribute("aria-pressed",on?"true":"false")}
function hide(){clearTimeout(tm);if(cur){cur.el.classList.remove("show");cur.el.setAttribute("aria-hidden","true");cur=null}}
function show(t){if(!on||shown[t.sec]||cur)return;shown[t.sec]=1;save();cur=t;t.el.classList.add("show");t.el.setAttribute("aria-hidden","false");tm=setTimeout(hide,12000)}
function go(el){if(!el){$("schools").scrollIntoView();return}el.scrollIntoView({block:"center"});el.classList.add("attn")}
var ACT={
schools:function(){$("schools").scrollIntoView()},
dir:function(){go(document.querySelector("#grid .school .acts a"))},
cmp:function(){go(document.querySelector("#grid .school .cmp"))},
req:function(){var L=list().filter(function(s){return s.requirements.length});if(L.length)openD(L[0].id);else $("schools").scrollIntoView()}};
var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){var t=e.target._tip;
if(e.isIntersecting){clearTimeout(t.w);t.w=setTimeout(function(){show(t)},1100)}else clearTimeout(t.w)})},{threshold:.9}):null;
TIPS.forEach(function(t){var host=document.querySelector("#"+t.sec+">.wrap"),h=document.querySelector("#"+t.sec+" h2");if(!host||!h)return;
var el=document.createElement("div");el.className="tip";el.setAttribute("role","status");el.setAttribute("aria-hidden","true");
el.innerHTML='<div class="tip-c">'+(t.act?'<button class="tip-t" type="button">'+t.txt+'</button>':'<span class="tip-t plain">'+t.txt+'</span>')+'<button class="tip-x" type="button" aria-label="Dismiss tip">&times;</button></div>';
host.appendChild(el);t.el=el;
el.addEventListener("click",function(e){if(e.target.closest(".tip-x")){hide();return}if(t.act&&e.target.closest(".tip-t")){hide();ACT[t.act]()}});
if(io){h._tip=t;io.observe(h)}});
btn.onclick=function(){on=!on;if(!on)hide();else shown={};save();label()};
label();
})();
