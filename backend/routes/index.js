const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3200;

app.use(cors());
app.use(bodyParser.json());

// การตั้งค่า multer สำหรับการอัปโหลดไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// เส้นทางสำหรับการส่งฟอร์มพร้อมการอัปโหลดไฟล์
app.post('/submit', upload.single('image'), (req, res) => {
  const formData = req.body;
  const file = req.file;
  console.log('ข้อมูลฟอร์ม:', formData);
  console.log('ไฟล์:', file);
  res.json({ message: 'ส่งฟอร์มเรียบร้อยแล้ว!' });
});

// เส้นทางสำหรับการอัปโหลดไฟล์
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('ไฟล์ถูกอัปโหลดสำเร็จ');
});

// การเก็บข้อมูลพนักงานในหน่วยความจำ
let employees = [];

// เพิ่มพนักงาน
app.post('/api/employees', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// ลบพนักงาน
app.delete('/api/employees/:id', (req, res) => {
  const { id } = req.params;
  employees = employees.filter(employee => employee.id !== id);
  res.status(204).send();
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:${port}`);
});
