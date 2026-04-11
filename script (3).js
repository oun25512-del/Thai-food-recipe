// ===== DATA =====
const presetRecipes = [
  {name:"ผัดไทย",emoji:"🍜",cat:"ก๋วยเตี๋ยว",time:"20 นาที",level:"ง่าย",spicy:1,custom:false,
   ingredients:[{amt:"200 ก.",item:"เส้นจันทน์แช่น้ำ"},{amt:"150 ก.",item:"กุ้งสด"},{amt:"2 ฟอง",item:"ไข่ไก่"},{amt:"100 ก.",item:"เต้าหู้แข็ง"},{amt:"3 ช้อนโต๊ะ",item:"น้ำตาลปี๊บ"},{amt:"3 ช้อนโต๊ะ",item:"น้ำมะขามเปียก"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"ตามชอบ",item:"ถั่วงอก ต้นหอม มะนาว"}],
   steps:["ตั้งกระทะใส่น้ำมัน ผัดกระเทียมและเต้าหู้จนเหลืองหอม","ใส่กุ้ง ผัดจนสุก แล้วดันออกด้านข้างกระทะ","ใส่เส้นจันทน์ ผัดให้เส้นนิ่ม ปรุงด้วยน้ำตาลปี๊บ มะขาม น้ำปลา","ดันเส้นออกข้าง ตีไข่ใส่กลางกระทะ คลุกเคล้าให้เข้ากัน","ใส่ถั่วงอก ต้นหอม ผัดต่อ 1 นาที จัดจาน บีบมะนาว"],
   tip:"ใช้ไฟแรงจะได้กลิ่นหอม และเส้นไม่เละ"},
  {name:"ต้มยำกุ้ง",emoji:"🍲",cat:"ต้ม-แกง",time:"25 นาที",level:"ปานกลาง",spicy:3,custom:false,
   ingredients:[{amt:"300 ก.",item:"กุ้งสด"},{amt:"1 ลิตร",item:"น้ำซุป"},{amt:"3 ก้าน",item:"ตะไคร้ทุบ"},{amt:"5 ใบ",item:"ใบมะกรูด"},{amt:"3 แว่น",item:"ข่าแก่"},{amt:"5-7 เม็ด",item:"พริกขี้หนูสด"},{amt:"3 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"2 ช้อนโต๊ะ",item:"น้ำมะนาว"},{amt:"1 ช้อนโต๊ะ",item:"น้ำพริกเผา"}],
   steps:["ต้มน้ำซุปให้เดือด ใส่ตะไคร้ทุบ ข่า ใบมะกรูด","ใส่เห็ดฟาง ต้มให้สุก","ใส่กุ้ง พอสุกใส่น้ำพริกเผา","ปรุงรสด้วยน้ำปลา น้ำมะนาว","ใส่พริกขี้หนู ตักเสิร์ฟร้อนๆ โรยผักชี"],
   tip:"บีบมะนาวหลังยกลงจากเตา รสจะไม่ขม"},
  {name:"แกงเขียวหวาน",emoji:"🥘",cat:"กับข้าว",time:"35 นาที",level:"ปานกลาง",spicy:2,custom:false,
   ingredients:[{amt:"500 ก.",item:"ไก่หั่นชิ้น"},{amt:"400 มล.",item:"กะทิ"},{amt:"3 ช้อนโต๊ะ",item:"พริกแกงเขียวหวาน"},{amt:"200 ก.",item:"มะเขือเปราะ"},{amt:"10 ใบ",item:"ใบโหระพา"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"1 ช้อนชา",item:"น้ำตาลปี๊บ"}],
   steps:["เคี่ยวหัวกะทิในหม้อ ใส่พริกแกง ผัดจนหอมแตกมัน","ใส่ไก่ ผัดให้สุกทั่ว","เติมหางกะทิ ต้มให้เดือด","ใส่มะเขือ ต้มจนสุก ปรุงรสด้วยน้ำปลา น้ำตาล","ใส่ใบโหระพา ชิมรส ยกลง"],
   tip:"ผัดพริกแกงกับหัวกะทิให้แตกมันก่อน รสชาติจะเข้มข้นกว่า"},
  {name:"ลาบหมู",emoji:"🥗",cat:"ยำ-ลาบ",time:"20 นาที",level:"ง่าย",spicy:2,custom:false,
   ingredients:[{amt:"400 ก.",item:"หมูสับ"},{amt:"3 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"2 ช้อนโต๊ะ",item:"น้ำมะนาว"},{amt:"2 ช้อนโต๊ะ",item:"ข้าวคั่ว"},{amt:"1 ช้อนชา",item:"พริกป่น"},{amt:"ตามชอบ",item:"ต้นหอม ผักชี สะระแหน่"},{amt:"ตามชอบ",item:"หัวหอมแดงซอย"}],
   steps:["คั่วข้าวสารในกระทะจนเหลือง บดพักไว้","ต้มหมูสับในน้ำเดือดจนสุก ตักขึ้นพักให้สะเด็ดน้ำ","คลุกหมูกับน้ำปลา มะนาว พริกป่น ชิมรส","ใส่ข้าวคั่ว หัวหอม ต้นหอม ผักชี สะระแหน่","คลุกเบาๆ จัดจาน เสิร์ฟกับผักสด"],
   tip:"คั่วข้าวเองจะหอมกว่าซื้อสำเร็จรูป คั่วไฟกลางจนเหลืองทอง"},
  {name:"ข้าวผัดกุ้ง",emoji:"🍚",cat:"กับข้าว",time:"15 นาที",level:"ง่าย",spicy:0,custom:false,
   ingredients:[{amt:"2 ถ้วย",item:"ข้าวสวยเย็น"},{amt:"150 ก.",item:"กุ้งสด"},{amt:"2 ฟอง",item:"ไข่ไก่"},{amt:"3 กลีบ",item:"กระเทียม"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"1 ช้อนโต๊ะ",item:"ซีอิ๊วขาว"},{amt:"ตามชอบ",item:"ต้นหอม มะนาว"}],
   steps:["ผัดกระเทียมในน้ำมันจนหอม","ใส่กุ้ง ผัดจนเริ่มสุก ดันออกข้าง","ตีไข่ใส่ คนให้เข้ากัน","ใส่ข้าว ผัดด้วยไฟแรง ปรุงรสน้ำปลา ซีอิ๊ว","ใส่ต้นหอม ผัดต่อ 30 วินาที จัดจาน"],
   tip:"ใช้ข้าวเย็นหรือค้างคืน เส้นจะไม่เละ"},
  {name:"ส้มตำไทย",emoji:"🥗",cat:"ยำ-ลาบ",time:"10 นาที",level:"ง่าย",spicy:3,custom:false,
   ingredients:[{amt:"1 ถ้วย",item:"มะละกอดิบขูด"},{amt:"5 เม็ด",item:"พริกขี้หนู"},{amt:"2 กลีบ",item:"กระเทียม"},{amt:"5 ลูก",item:"มะเขือเทศราชินี"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"2 ช้อนโต๊ะ",item:"น้ำมะนาว"},{amt:"1 ช้อนโต๊ะ",item:"น้ำตาลปี๊บ"},{amt:"2 ช้อนโต๊ะ",item:"ถั่วลิสงคั่ว"}],
   steps:["โขลกพริกกระเทียมในครกให้หยาบ","ใส่มะเขือเทศ โขลกพอแตก","ใส่มะละกอ คลุกด้วยสาก","ปรุงรสด้วยน้ำปลา มะนาว น้ำตาล ชิมรสสามเส้า","ใส่ถั่วลิสง คลุก เสิร์ฟ"],
   tip:"รสสามเส้า หวาน เปรี้ยว เค็ม ต้องสมดุลกัน"},
  {name:"บัวลอยน้ำขิง",emoji:"🍡",cat:"ของหวาน",time:"30 นาที",level:"ง่าย",spicy:0,custom:false,
   ingredients:[{amt:"1 ถ้วย",item:"แป้งข้าวเหนียว"},{amt:"ตามชอบ",item:"สีผสมอาหาร"},{amt:"1 ลิตร",item:"น้ำเปล่า"},{amt:"150 ก.",item:"น้ำตาลทราย"},{amt:"3 แว่น",item:"ขิงแก่"},{amt:"3 ใบ",item:"ใบเตย"}],
   steps:["นวดแป้งข้าวเหนียวกับน้ำทีละน้อย ให้เนียนไม่ติดมือ","แบ่งแป้ง ใส่สีผสมอาหารตามชอบ","ปั้นแป้งเป็นลูกเล็กขนาดปลายนิ้ว","ต้มน้ำให้เดือด ใส่ขิง น้ำตาล ใบเตย","ใส่บัวลอย ต้มจนลอยขึ้น ตักเสิร์ฟร้อนๆ"],
   tip:"บัวลอยสุกเมื่อลอยขึ้นลอยอยู่บนผิวน้ำ"},
  {name:"ผัดซีอิ๊ว",emoji:"🍜",cat:"ก๋วยเตี๋ยว",time:"15 นาที",level:"ง่าย",spicy:0,custom:false,
   ingredients:[{amt:"200 ก.",item:"เส้นใหญ่"},{amt:"200 ก.",item:"เนื้อไก่หั่นชิ้น"},{amt:"2 ฟอง",item:"ไข่ไก่"},{amt:"100 ก.",item:"คะน้า"},{amt:"3 ช้อนโต๊ะ",item:"ซีอิ๊วดำหวาน"},{amt:"1 ช้อนโต๊ะ",item:"ซีอิ๊วขาว"},{amt:"1 ช้อนชา",item:"น้ำตาลทราย"}],
   steps:["ผัดกระเทียมจนหอม ใส่ไก่ผัดให้สุก","ดันออกข้าง ใส่ไข่ คนให้เข้ากัน","ใส่เส้น ปรุงรสด้วยซีอิ๊วดำ ซีอิ๊วขาว น้ำตาล","ผัดด้วยไฟแรงจนเส้นหอม","ใส่คะน้า ผัดต่อ 1 นาที จัดจาน"],
   tip:"ไฟแรงคือหัวใจของผัดซีอิ๊ว"},
  {name:"ไก่ทอดกระเทียม",emoji:"🍗",cat:"ทอด-ย่าง",time:"30 นาที",level:"ง่าย",spicy:0,custom:false,
   ingredients:[{amt:"500 ก.",item:"ไก่หั่นชิ้น"},{amt:"5 กลีบ",item:"กระเทียมบด"},{amt:"1 ช้อนโต๊ะ",item:"รากผักชีบด"},{amt:"1 ช้อนโต๊ะ",item:"ซีอิ๊วขาว"},{amt:"1 ช้อนชา",item:"พริกไทยป่น"},{amt:"ตามต้องการ",item:"แป้งทอดกรอบ"}],
   steps:["หมักไก่กับกระเทียม รากผักชี ซีอิ๊ว พริกไทย 30 นาที","คลุกไก่กับแป้งทอดกรอบให้ทั่ว","ตั้งน้ำมันให้ร้อนจัด ทอดไก่ด้วยไฟกลาง-แรง","ทอดจนเหลืองกรอบ ตักขึ้นสะเด็ดน้ำมัน","เสิร์ฟพร้อมข้าวสวยและซอสพริก"],
   tip:"หมักไก่ค้างคืนในตู้เย็น เนื้อจะนุ่มและรสเข้มข้นกว่า"},
  {name:"น้ำพริกกะปิ",emoji:"🌶",cat:"น้ำพริก",time:"20 นาที",level:"ง่าย",spicy:3,custom:false,
   ingredients:[{amt:"2 ช้อนโต๊ะ",item:"กะปิดี"},{amt:"10 เม็ด",item:"พริกขี้หนูสด"},{amt:"5 กลีบ",item:"กระเทียม"},{amt:"3 ช้อนโต๊ะ",item:"น้ำมะนาว"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"1 ช้อนชา",item:"น้ำตาลปี๊บ"}],
   steps:["คั่วกะปิในกระทะโดยไม่ใส่น้ำมัน จนหอม","โขลกพริกและกระเทียมในครกจนละเอียด","ใส่กะปิ โขลกให้เข้ากัน","ปรุงรสด้วยน้ำปลา มะนาว น้ำตาล","เสิร์ฟพร้อมผักสด ปลาทูทอด"],
   tip:"กะปิระยองรสชาติหอมกว่า ควรใช้กะปิที่ดี"},
  {name:"แกงมัสมั่น",emoji:"🍛",cat:"กับข้าว",time:"60 นาที",level:"ปานกลาง",spicy:1,custom:false,
   ingredients:[{amt:"500 ก.",item:"เนื้อวัวหั่นชิ้น"},{amt:"400 มล.",item:"กะทิ"},{amt:"3 ช้อนโต๊ะ",item:"พริกแกงมัสมั่น"},{amt:"300 ก.",item:"มันฝรั่ง"},{amt:"2 หัว",item:"หอมใหญ่"},{amt:"50 ก.",item:"ถั่วลิสง"},{amt:"2 ช้อนโต๊ะ",item:"น้ำปลา"},{amt:"2 ช้อนโต๊ะ",item:"น้ำตาลปี๊บ"}],
   steps:["เคี่ยวหัวกะทิ ใส่พริกแกงผัดจนหอม","ใส่เนื้อ ผัดให้สุกทั่ว","เติมกะทิ ต้มด้วยไฟกลาง-อ่อน 30 นาที","ใส่มันฝรั่ง หอมใหญ่ ถั่วลิสง ต้มจนสุกนิ่ม","ปรุงรสด้วยน้ำปลา น้ำตาล มะขาม ชิมรส"],
   tip:"ใช้ไฟอ่อนเคี่ยวนานๆ เนื้อจะนุ่มและรสเข้มข้น"},
  {name:"ข้าวมันไก่",emoji:"🍚",cat:"กับข้าว",time:"45 นาที",level:"ง่าย",spicy:0,custom:false,
   ingredients:[{amt:"1 ตัว",item:"ไก่ทั้งตัว"},{amt:"3 ถ้วย",item:"ข้าวหอมมะลิ"},{amt:"1 ช้อนโต๊ะ",item:"กระเทียมบด"},{amt:"1 ช้อนโต๊ะ",item:"ขิงบด"},{amt:"ตามชอบ",item:"ซีอิ๊วดำ ต้นหอม"}],
   steps:["ต้มไก่กับขิง ตะไคร้ ใบเตย น้ำเกลือ 30-40 นาที","ตักไก่ขึ้น พักให้เย็น เก็บน้ำซุปไว้","ผัดกระเทียมขิง ใส่ข้าว ผัดให้เข้ากัน","ต้มข้าวกับน้ำซุปในหม้อหุงข้าว","เสิร์ฟพร้อมไก่หั่น น้ำจิ้ม และซุปร้อนๆ"],
   tip:"ลูบไก่ด้วยน้ำมันงาทันทีหลังต้มเสร็จ ผิวจะเงางาม"}
];

// ===== STORAGE (localStorage) =====
let customRecipes = [];

function loadCustom() {
  try {
    const stored = localStorage.getItem('krua_thai_custom');
    if (stored) customRecipes = JSON.parse(stored);
  } catch (e) { customRecipes = []; }
  renderGrid(allRecipes());
}

function saveCustom() {
  try { localStorage.setItem('krua_thai_custom', JSON.stringify(customRecipes)); } catch (e) {}
}

function allRecipes() { return presetRecipes.concat(customRecipes); }

// ===== STATE =====
let currentCat = 'ทั้งหมด';

// ===== HELPERS =====
function getSpicy(n) {
  return n === 0 ? 'ไม่เผ็ด' : n === 1 ? '🌶 น้อย' : n === 2 ? '🌶🌶 กลาง' : '🌶🌶🌶 มาก';
}

// ===== RENDER GRID =====
function renderGrid(list) {
  const grid = document.getElementById('recipeGrid');
  document.getElementById('countBadge').textContent = list.length + ' เมนู';
  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = '<p class="empty-msg">🍽️ ไม่พบเมนู<br><small>ลองเพิ่มเมนูของคุณเอง!</small></p>';
    return;
  }
  list.forEach(function (r) {
    const d = document.createElement('div');
    d.className = 'card' + (r.custom ? ' custom-card' : '');
    const lvlCls = r.level === 'ง่าย' ? 'green' : '';
    d.innerHTML =
      (r.custom ? '<div class="custom-badge">ของฉัน</div>' : '') +
      '<div class="card-img">' + r.emoji + '</div>' +
      '<div class="card-body"><div class="card-name">' + r.name + '</div>' +
      '<div class="card-meta"><span class="tag ' + lvlCls + '">' + r.level + '</span>' +
      '<span class="card-time">⏱ ' + r.time + '</span></div></div>';
    d.addEventListener('click', function () { openDetail(r); });
    grid.appendChild(d);
  });
}

// ===== FILTER =====
function applyFilter() {
  const all = allRecipes();
  let list = all;
  if (currentCat === 'เมนูของฉัน') list = customRecipes;
  else if (currentCat !== 'ทั้งหมด') list = all.filter(r => r.cat === currentCat);
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (q) list = list.filter(r => r.name.toLowerCase().includes(q) || r.cat.toLowerCase().includes(q));
  renderGrid(list);
}

document.getElementById('searchBtn').addEventListener('click', applyFilter);
document.getElementById('searchInput').addEventListener('keydown', e => { if (e.key === 'Enter') applyFilter(); });
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.getAttribute('data-cat');
    applyFilter();
  });
});

// ===== DETAIL MODAL =====
function openDetail(r) {
  const ings = r.ingredients.map(i => `<li><span class="amt">${i.amt || ''}</span>${i.item}</li>`).join('');
  const steps = r.steps.map((s, i) => `<li><div class="step-num">${i + 1}</div><span>${s}</span></li>`).join('');
  const deleteBtn = r.custom ? '<button class="delete-btn" id="deleteBtn">🗑 ลบเมนูนี้</button>' : '';
  document.getElementById('modalTitle').innerHTML =
    `<span style="font-size:2.5rem;display:block;text-align:center;margin-bottom:4px">${r.emoji}</span><h2>${r.name}</h2>`;
  document.getElementById('modalBody').innerHTML =
    '<div class="info-row">' +
    `<div class="info-box"><div class="val">⏱ ${r.time}</div><div class="lbl">เวลาทำ</div></div>` +
    `<div class="info-box"><div class="val">${r.level}</div><div class="lbl">ระดับ</div></div>` +
    `<div class="info-box"><div class="val" style="font-size:0.82rem">${getSpicy(r.spicy)}</div><div class="lbl">ความเผ็ด</div></div>` +
    '</div>' +
    '<div class="section-sub">🧺 วัตถุดิบ</div>' +
    `<ul class="ingredient-list">${ings}</ul>` +
    '<div class="section-sub">👨‍🍳 วิธีทำ</div>' +
    `<ul class="step-list">${steps}</ul>` +
    (r.tip ? `<div class="tip-box"><strong>💡 เคล็ดลับ</strong>${r.tip}</div>` : '') +
    deleteBtn;
  if (r.custom) {
    document.getElementById('deleteBtn').addEventListener('click', function () {
      customRecipes = customRecipes.filter(x => x !== r);
      saveCustom();
      closeModal('detailModal');
      applyFilter();
    });
  }
  document.getElementById('detailModal').classList.add('open');
}

document.getElementById('closeDetail').addEventListener('click', () => closeModal('detailModal'));
document.getElementById('detailModal').addEventListener('click', function (e) { if (e.target === this) closeModal('detailModal'); });

function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ===== ADD MENU =====
let selectedEmoji = '🍽️';

document.querySelectorAll('.emoji-opt').forEach(el => {
  el.addEventListener('click', function () {
    document.querySelectorAll('.emoji-opt').forEach(x => x.classList.remove('selected'));
    el.classList.add('selected');
    selectedEmoji = el.getAttribute('data-e');
  });
});

function addIngRow(amt, item) {
  const row = document.createElement('div');
  row.className = 'ing-row';
  row.innerHTML =
    `<input class="inp-amt" type="text" placeholder="ปริมาณ" value="${amt || ''}">` +
    `<input type="text" placeholder="ชื่อวัตถุดิบ" value="${item || ''}">` +
    `<button class="remove-ing">✕</button>`;
  row.querySelector('.remove-ing').addEventListener('click', () => row.remove());
  document.getElementById('ingList').appendChild(row);
}

document.getElementById('btnAddIng').addEventListener('click', () => addIngRow('', ''));

document.getElementById('btnAddMenu').addEventListener('click', function () {
  document.getElementById('fName').value = '';
  document.getElementById('fTime').value = '';
  document.getElementById('fTip').value = '';
  document.getElementById('fSteps').value = '';
  document.getElementById('ingList').innerHTML = '';
  addIngRow('', ''); addIngRow('', ''); addIngRow('', '');
  document.getElementById('addModal').classList.add('open');
});
document.getElementById('closeAdd').addEventListener('click', () => closeModal('addModal'));
document.getElementById('addModal').addEventListener('click', function (e) { if (e.target === this) closeModal('addModal'); });

document.getElementById('submitMenu').addEventListener('click', function () {
  const name = document.getElementById('fName').value.trim();
  if (!name) { document.getElementById('fName').style.borderColor = '#C85A1A'; document.getElementById('fName').focus(); return; }
  document.getElementById('fName').style.borderColor = '';
  const rows = document.querySelectorAll('#ingList .ing-row');
  const ings = [];
  rows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    const amt = inputs[0].value.trim();
    const item = inputs[1].value.trim();
    if (item) ings.push({ amt, item });
  });
  if (!ings.length) { alert('กรุณาใส่วัตถุดิบอย่างน้อย 1 รายการ'); return; }
  const stepsRaw = document.getElementById('fSteps').value.trim();
  const steps = stepsRaw
    ? stepsRaw.split('\n').map(s => s.replace(/^\d+\.\s*/, '').trim()).filter(Boolean)
    : ['(ไม่ได้ระบุวิธีทำ)'];
  const newR = {
    name,
    emoji: selectedEmoji,
    cat: document.getElementById('fCat').value,
    time: document.getElementById('fTime').value.trim() || 'ไม่ระบุ',
    level: document.getElementById('fLevel').value,
    spicy: parseInt(document.getElementById('fSpicy').value),
    ingredients: ings,
    steps,
    tip: document.getElementById('fTip').value.trim(),
    custom: true
  };
  customRecipes.push(newR);
  saveCustom();
  closeModal('addModal');
  applyFilter();
});

// ===== MY MENUS =====
document.getElementById('btnMyMenus').addEventListener('click', function () {
  const body = document.getElementById('myIngBody');
  if (!customRecipes.length) {
    body.innerHTML = '<div class="no-custom">🍽️ คุณยังไม่มีเมนูของตัวเอง<br><small>กด <strong>＋ เพิ่มเมนู</strong> เพื่อเริ่มต้น</small></div>';
  } else {
    body.innerHTML = customRecipes.map(r => {
      const chips = r.ingredients.map(i =>
        `<span class="ing-chip"><span class="amt-part">${i.amt || ''}</span>${i.item}</span>`
      ).join('');
      return `<div class="my-ing-card"><h4>${r.emoji} ${r.name}</h4><div class="ing-chips">${chips}</div></div>`;
    }).join('');
  }
  document.getElementById('myModal').classList.add('open');
});
document.getElementById('closeMyModal').addEventListener('click', () => closeModal('myModal'));
document.getElementById('myModal').addEventListener('click', function (e) { if (e.target === this) closeModal('myModal'); });

// ===== INIT =====
loadCustom();
