// Language system
let currentLang = localStorage.getItem('stillwater_lang') || 'en';

const translations = {
  en: {
    landingTitle: "Understand your love patterns<br>and the relationships that matter",
    landingSub: "Not daily horoscopes. A clear map of why your relationships unfold the way they do — and how to move forward.",
    startFree: "Start Free Analysis",
    previewLabel: "What you'll see",
    previewText: "“You often attract people who need space, yet deep down you want stability. This pattern leaves you feeling uncertain.”",
    whyReturn: "Why people come back",
    whyReturnText: "Because they finally see their own patterns clearly, and can analyze important relationships without limits once unlocked.",
    onboardingTitle: "Tell us about your birth",
    onboardingSub: "Used to create your personal love pattern map",
    birthDate: "Birth Date",
    birthTime: "Birth Time (if known)",
    birthPlace: "Birth Place",
    birthPlacePlaceholder: "e.g. Bangkok",
    currentStatus: "Current Status",
    selectStatus: "Select status",
    statusSingle: "Single — want to understand myself first",
    statusTalking: "Talking to someone",
    statusRecent: "Recently ended — want to understand what happened",
    statusPattern: "Want to understand my relationship patterns",
    seeMyMap: "See My Pattern",
    myPattern: "My Pattern",
    loveMap: "Your Love Pattern Map",
    attachmentStyle: "Attachment Style",
    unlockFull: "Unlock Full Pattern",
    unlockDesc: "See communication style, repeating patterns, and what to adjust",
    unlockBtn: "Unlock for 199 THB",
    communicationStyle: "Communication Style",
    repeatingPatterns: "Repeating Patterns",
    strengthsCautions: "Strengths & Cautions",
    wantBonds: "Want to understand a specific relationship?",
    analyzeBonds: "Analyze Bonds",
    bondsTitle: "Bonds",
    addPerson: "+ Add Person",
    noBonds: "No bonds yet — add someone you want to understand",
    addNew: "Add New Relationship",
    nameLabel: "Name or Nickname",
    typeLabel: "Type",
    typeRomantic: "Romantic / Someone I'm interested in",
    typeEx: "Ex",
    typeFamily: "Family",
    typeOther: "Other",
    analyze: "Analyze",
    attraction: "Attraction",
    fullReport: "Full Report",
    fullReportDesc: "Friction points, communication advice, and long-term outlook",
    unlockBond: "Unlock for 249 THB",
    friction: "Friction Points",
    commAdvice: "Communication Advice",
    outlook: "Outlook",
    view: "View →",
    paymentAlert: "In the full version, this will connect to payment."
  },
  th: {
    landingTitle: "เข้าใจรูปแบบความรักของตัวเอง<br>และความสัมพันธ์กับคนที่คุณสนใจ",
    landingSub: "ไม่ใช่ดวงรายวัน แต่เป็นแผนที่ที่อธิบายว่าทำไมความสัมพันธ์ของคุณถึงเป็นแบบนี้ และจะเดินต่ออย่างไร",
    startFree: "เริ่มวิเคราะห์ฟรี",
    previewLabel: "ตัวอย่างสิ่งที่คุณจะได้",
    previewText: "“คุณมักดึงดูดคนที่ต้องการพื้นที่ แต่ลึก ๆ ต้องการความมั่นคง รูปแบบนี้ทำให้คุณรู้สึกไม่แน่ใจบ่อยครั้ง”",
    whyReturn: "ทำไมคนถึงกลับมาใช้ซ้ำ",
    whyReturnText: "เพราะได้เห็นรูปแบบของตัวเองชัดเจน และวิเคราะห์ความสัมพันธ์กับคนสำคัญได้ไม่จำกัดเมื่อปลดล็อก",
    onboardingTitle: "บอกข้อมูลเกิดของคุณ",
    onboardingSub: "ใช้สำหรับสร้างแผนที่รูปแบบความรักเฉพาะตัวคุณ",
    birthDate: "วันเกิด",
    birthTime: "เวลาเกิด (ถ้าทราบ)",
    birthPlace: "สถานที่เกิด",
    birthPlacePlaceholder: "เช่น กรุงเทพฯ",
    currentStatus: "สถานะปัจจุบัน",
    selectStatus: "เลือกสถานะ",
    statusSingle: "โสด อยากเข้าใจตัวเองก่อนหาคู่",
    statusTalking: "กำลังคุยกับใครบางคน",
    statusRecent: "เพิ่งเลิก อยากเข้าใจว่าเกิดอะไรขึ้น",
    statusPattern: "อยากเข้าใจรูปแบบความสัมพันธ์ของตัวเอง",
    seeMyMap: "ดูแผนที่ของฉัน",
    myPattern: "My Pattern",
    loveMap: "แผนที่รูปแบบความรักของคุณ",
    attachmentStyle: "รูปแบบการผูกพัน",
    unlockFull: "ปลดล็อกเต็มรูปแบบ",
    unlockDesc: "ดูวิธีสื่อสาร จุดที่มักพัง และสิ่งที่ควรปรับ",
    unlockBtn: "ปลดล็อก 199 บาท",
    communicationStyle: "วิธีสื่อสารในความสัมพันธ์",
    repeatingPatterns: "รูปแบบที่มักเกิดขึ้นซ้ำ",
    strengthsCautions: "จุดแข็งและสิ่งที่ควรระวัง",
    wantBonds: "อยากรู้ว่าความสัมพันธ์กับคนสำคัญเป็นอย่างไร?",
    analyzeBonds: "วิเคราะห์ Bonds",
    bondsTitle: "Bonds",
    addPerson: "+ เพิ่มคน",
    noBonds: "ยังไม่มี Bonds — เพิ่มคนที่คุณอยากเข้าใจความสัมพันธ์",
    addNew: "เพิ่มความสัมพันธ์ใหม่",
    nameLabel: "ชื่อหรือชื่อเล่น",
    typeLabel: "ประเภท",
    typeRomantic: "ความรัก / คนที่สนใจ",
    typeEx: "คนรักเก่า",
    typeFamily: "ครอบครัว",
    typeOther: "อื่น ๆ",
    analyze: "วิเคราะห์",
    attraction: "จุดดึงดูด",
    fullReport: "รายงานเต็ม",
    fullReportDesc: "จุดเสียดสี วิธีสื่อสาร และแนวโน้มระยะยาว",
    unlockBond: "ปลดล็อก 249 บาท",
    friction: "จุดเสียดสี",
    commAdvice: "วิธีสื่อสารที่ควรปรับ",
    outlook: "แนวโน้ม",
    view: "ดู →",
    paymentAlert: "ในเวอร์ชันจริงจะเชื่อมระบบจ่ายเงินที่นี่"
  }
};

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('stillwater_lang', lang);
  location.reload();
}

function getSunSign(dateStr) {
  if (!dateStr) return currentLang === 'th' ? 'ไม่ทราบ' : 'Unknown';
  const d = new Date(dateStr);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const signsEn = [
    [1, 20, 'Capricorn'], [2, 19, 'Aquarius'], [3, 21, 'Pisces'], [4, 20, 'Aries'],
    [5, 21, 'Taurus'], [6, 21, 'Gemini'], [7, 23, 'Cancer'], [8, 23, 'Leo'],
    [9, 23, 'Virgo'], [10, 23, 'Libra'], [11, 22, 'Scorpio'], [12, 22, 'Sagittarius']
  ];
  const signsTh = [
    [1, 20, 'มังกร'], [2, 19, 'กุมภ์'], [3, 21, 'มีน'], [4, 20, 'เมษ'],
    [5, 21, 'พฤษภ'], [6, 21, 'เมถุน'], [7, 23, 'กรกฎ'], [8, 23, 'สิงห์'],
    [9, 23, 'กันย์'], [10, 23, 'ตุลย์'], [11, 22, 'พิจิก'], [12, 22, 'ธนู']
  ];
  const signs = currentLang === 'th' ? signsTh : signsEn;
  for (let i = 0; i < signs.length; i++) {
    const [m, lastDay, sign] = signs[i];
    if (month === m && day <= lastDay) return sign;
    if (month === m && day > lastDay) return signs[(i + 1) % 12][2];
  }
  return currentLang === 'th' ? 'มังกร' : 'Capricorn';
}

// Real chart data structure (from calc_engine.py / Swiss Ephemeris)
// In production, frontend will call backend API that runs calculate_chart()
function getRealChartData(user) {
  // Placeholder: returns structure matching calc_engine.py output
  // Replace with fetch('/api/chart', { method: 'POST', body: JSON.stringify(user) })
  return {
    sun: { sign: getSunSign(user.birthdate) },
    moon: { sign: 'Unknown' }, // requires backend
    ascendant: user.birthtime ? { sign: 'Unknown' } : null
  };
}

function generatePatternInsights(user) {
  const chart = getRealChartData(user);
  const sign = chart.sun.sign;
  const isTh = currentLang === 'th';

  const statusMap = isTh ? {
    single: 'คุณกำลังมองหาความเข้าใจตัวเองก่อนจะเปิดใจกับใครใหม่',
    talking: 'คุณกำลังอยู่ในช่วงที่อยากรู้ว่าความสัมพันธ์นี้จะไปต่อได้หรือไม่',
    recent: 'คุณเพิ่งผ่านความสัมพันธ์ที่จบลง และอยากเข้าใจว่าเกิดอะไรขึ้นจริง ๆ',
    pattern: 'คุณสังเกตเห็นรูปแบบซ้ำในความสัมพันธ์และอยากเข้าใจที่มาของมัน'
  } : {
    single: 'You want to understand yourself before opening up to someone new',
    talking: 'You are in a stage of wondering if this connection can go further',
    recent: 'You recently ended a relationship and want to understand what really happened',
    pattern: 'You have noticed repeating patterns and want to understand where they come from'
  };
  const statusText = statusMap[user.status] || (isTh ? 'คุณอยากเข้าใจรูปแบบความรักของตัวเองให้ชัดเจนขึ้น' : 'You want clearer insight into your own love patterns');

  const summaries = isTh ? {
    'มังกร': 'คุณให้ความสำคัญกับความมั่นคงและความจริงจังในความสัมพันธ์ มักดึงดูดคนที่ดูมีอนาคต แต่บางครั้งอาจปิดกั้นความรู้สึกของตัวเองจนอีกฝ่ายรู้สึกห่าง',
    'กุมภ์': 'คุณต้องการอิสระและพื้นที่ในความสัมพันธ์ แต่ลึก ๆ ต้องการคนที่เข้าใจความเป็นตัวเองที่ไม่เหมือนใคร',
    'มีน': 'คุณให้และรับอารมณ์ได้ลึกซึ้ง มักดึงดูดคนที่ต้องการการดูแล แต่บางครั้งอาจสูญเสียขอบเขตของตัวเอง',
    'เมษ': 'คุณตรงไปตรงมาและเริ่มต้นเร็ว แต่บางครั้งอาจเร่งรีบจนข้ามขั้นตอนการสร้างความไว้ใจ',
    'พฤษภ': 'คุณต้องการความมั่นคงและความสม่ำเสมอ มักดึงดูดคนที่ให้ความรู้สึกปลอดภัย',
    'เมถุน': 'คุณสื่อสารเก่งและชอบความหลากหลาย แต่บางครั้งอาจให้ความรู้สึกไม่แน่ชัดกับอีกฝ่าย',
    'กรกฎ': 'คุณปกป้องคนที่รักอย่างมาก แต่บางครั้งอาจปิดกั้นตัวเองด้วยกำแพงอารมณ์',
    'สิงห์': 'คุณต้องการการยอมรับและความพิเศษในความสัมพันธ์',
    'กันย์': 'คุณใส่ใจรายละเอียดและอยากให้ความสัมพันธ์สมบูรณ์แบบ',
    'ตุลย์': 'คุณต้องการความสมดุลและความยุติธรรม แต่บางครั้งอาจหลีกเลี่ยงความขัดแย้ง',
    'พิจิก': 'คุณรักลึกและต้องการความจริงใจอย่างเต็มที่',
    'ธนู': 'คุณต้องการอิสระและการเติบโตในความสัมพันธ์'
  } : {
    'Capricorn': 'You value stability and seriousness in relationships. You often attract people who seem to have a future, yet you may hold back your feelings until the other person feels distant.',
    'Aquarius': 'You need freedom and space, yet deep down you want someone who truly understands your uniqueness.',
    'Pisces': 'You give and receive emotion deeply. You often attract people who need care, but you may lose your own boundaries.',
    'Aries': 'You are direct and move quickly, sometimes skipping the trust-building stage.',
    'Taurus': 'You want consistency and security. You attract people who feel safe, yet you may resist necessary change.',
    'Gemini': 'You communicate well and enjoy variety, but you can leave others feeling uncertain.',
    'Cancer': 'You protect those you love fiercely, yet emotional walls can keep people out.',
    'Leo': 'You need recognition and to feel special in a relationship.',
    'Virgo': 'You pay close attention to details and want the relationship to feel right.',
    'Libra': 'You seek balance and fairness, sometimes avoiding conflict until it builds.',
    'Scorpio': 'You love deeply and need full honesty.',
    'Sagittarius': 'You need freedom and growth inside the relationship.'
  };

  const attachment = isTh
    ? `จากข้อมูลเกิดของคุณ (${sign}) ร่วมกับสถานะปัจจุบัน: ${statusText} รูปแบบการผูกพันของคุณมีแนวโน้มที่จะส่งผลต่อวิธีที่คุณเข้าใกล้หรือถอยห่างจากคนที่สนใจ`
    : `Based on your birth data (${sign}) and current status: ${statusText}. Your attachment pattern influences how you move closer or pull away.`;

  return {
    summary: summaries[sign] || (isTh ? 'คุณมีรูปแบบความรักที่เฉพาะตัว' : 'You have a distinct love pattern'),
    attachment,
    communication: isTh
      ? 'คุณมักสื่อสารผ่านการกระทำมากกว่าคำพูดตรง ๆ เมื่อรู้สึกไม่มั่นใจจะเงียบหรือถอย'
      : 'You tend to show care through actions rather than direct words. When unsure, you go quiet or step back.',
    patterns: isTh
      ? 'รูปแบบที่มักเกิดขึ้นซ้ำคือการดึงดูดคนที่มีพลังงานตรงข้ามในช่วงแรก แล้วค่อย ๆ เจอจุดที่ความต้องการพื้นฐานไม่ตรงกัน'
      : 'A common pattern is attracting someone with opposite energy at first, then discovering mismatched core needs over time.',
    strengths: isTh
      ? 'จุดแข็งของคุณคือความสามารถในการสังเกตและใส่ใจ สิ่งที่ควรระวังคือการคาดหวังให้อีกฝ่ายเข้าใจโดยไม่ต้องพูด'
      : 'Your strength is careful observation and attention. The caution is expecting the other person to understand without clear words.'
  };
}

function generateBondReport(user, bond) {
  const userSign = getSunSign(user.birthdate);
  const bondSign = getSunSign(bond.date);
  const isTh = currentLang === 'th';
  const type = bond.type;

  const summary = isTh
    ? `ระหว่างคุณ (${userSign}) กับ ${bond.name} (${bondSign}) มีแรงดึงดูดในช่วงแรก แต่ความต้องการพื้นฐานอาจไม่ตรงกันในระยะยาว`
    : `Between you (${userSign}) and ${bond.name} (${bondSign}) there is clear early attraction, yet core needs around stability and freedom may differ over time.`;

  return {
    summary,
    attraction: isTh
      ? `จุดดึงดูดหลักมาจากความแตกต่างของพลังงานที่ทำให้ทั้งคู่รู้สึกว่าอีกฝ่ายเติมเต็มส่วนที่ขาด`
      : `The main attraction comes from complementary energy that makes each person feel the other fills a missing piece.`,
    friction: isTh
      ? 'จุดเสียดสีมักเกิดเมื่อฝ่ายหนึ่งต้องการความใกล้ชิดมากขึ้น ขณะที่อีกฝ่ายต้องการพื้นที่'
      : 'Friction usually appears when one person wants more closeness while the other needs space to process.',
    communication: isTh
      ? 'ควรพูดถึงความต้องการตรง ๆ และให้เวลาซึ่งกันและกันในการตอบสนอง'
      : 'Speak needs directly and give each other time to respond without interpreting silence as rejection.',
    outlook: isTh
      ? 'การเข้าใจพลวัตนี้จะช่วยให้คุณไม่นำรูปแบบเดิมไปใช้กับความสัมพันธ์ใหม่'
      : 'Understanding this dynamic helps you avoid repeating the same pattern in future relationships.'
  };
}
