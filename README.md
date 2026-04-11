# 🍜 ครัวไทยแท้

เว็บแอปรวมเมนูและสูตรอาหารไทยต้นตำรับ เพิ่มเมนูส่วนตัวได้ บันทึกไว้ในเครื่อง ไม่ต้องล็อกอิน

## ✨ ฟีเจอร์

- 📖 สูตรอาหารไทยตั้งต้น 12 เมนู พร้อมวัตถุดิบและวิธีทำ
- 🔍 ค้นหาและกรองตามหมวดหมู่
- ➕ เพิ่มเมนูของตัวเองพร้อมเลือก Emoji
- 📋 ดูสรุปวัตถุดิบเมนูของฉัน
- 💾 บันทึกข้อมูลผ่าน `localStorage` (ไม่หายแม้ปิดเบราว์เซอร์)

## 🗂 โครงสร้างไฟล์

```
krua-thai/
├── index.html   ← โครงสร้าง HTML หลัก
├── style.css    ← สไตล์ทั้งหมด
├── script.js    ← ข้อมูลเมนูและ logic ทั้งหมด
└── README.md    ← ไฟล์นี้
```

## 🚀 วิธีใช้งาน

### เปิดในเครื่อง
เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย

### Deploy บน GitHub Pages
1. Push ทุกไฟล์ขึ้น GitHub repository
2. ไปที่ **Settings → Pages**
3. เลือก **Branch: main** → **/ (root)**
4. กด **Save** — รอสักครู่ จะได้ลิงก์ `https://username.github.io/repo-name`

## 🛠 Tech Stack

- HTML5 + CSS3 (ไม่มี framework)
- Vanilla JavaScript (ES6+)
- Google Fonts: Playfair Display + Sarabun
- localStorage สำหรับบันทึกเมนูส่วนตัว
