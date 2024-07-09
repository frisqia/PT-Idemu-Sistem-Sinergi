-------------------------

CREATE TABLE students (
    NIM  INT PRIMARY KEY UNIQUE NOT NULL,
    Nama VARCHAR (255) NOT NULL,
    Alamat VARCHAR(500) NOT NULL,
    Jurusan VARCHAR(255) NOT NULL,
	Umur INT  NOT NULL
);

-------------------

INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (123456, 'John', 'Jl.Merdeka No.1', 'Teknik Informatika', 21);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (234567, 'Alice', 'Jl.Gatot Subroto', 'Sistem Informasi', 23);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (345678, 'Bob', 'Jl.Sudirman No. 5', 'Teknik Informatika', 20);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (456789, 'Cindy', 'Jl.Pahlawan No.2', 'Manajemen', 22);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (567890, 'David', 'Jl.Diponegoro No.3', 'Teknik Elektro', 25);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (678901, 'Emily', 'Jl.Cendrawasih No. 4', 'Manajemen', 24);
INSERT INTO students (NIM, Nama, Alamat, Jurusan, Umur)VALUES (789012, 'Frank', 'Jl.Ahmad Yani No.6', 'Teknik Informatika', 19);

-------------------------

CREATE TABLE subject (
	id INT AUTO_INCREMENT PRIMARY KEY,
    Subject VARCHAR(255) NOT NULL, 
    NIM INT NOT NULL, 
    Nilai INT NOT NULL,
    Dosen_pengajar VARCHAR(255) NOT NULL,
    FOREIGN KEY (NIM) REFERENCES students(NIM) ON DELETE CASCADE
);

---------------------------
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (1, 'Pemrograman Web', 123456, 85, 'Pak Budi');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (2, 'Basis Data', 234567, 70, 'Ibu Ani');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (3, 'Jaringan Komputer', 345678, 75, 'Pak Dodi');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (4, 'Sistem Operasi', 123456, 90, 'Pak Budi');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (5, 'Manajemen Proyek', 456789, 80, 'Ibu Desi');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (6, 'Sastra Inggris', 567890, 85, 'Ibu Eka');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (7, 'Statistika', 678901, 75, 'Pak Farhan');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (8, 'Alogaritma', 789012, 65, 'Pak Galih');
INSERT INTO subject (ID, Subject, NIM, Nilai, Dosen_pengajar)VALUES (9, 'Pemrograman Java', 123456, 95, 'Pak Budi');

----------------
select * from students;
select * from subject;

-------------
 1. Update alamat mahasiswa dengan NIM '123456' menjadi 'Jl.Raya No.5'
UPDATE students
SET Alamat = 'Jl.Raya No.5'
WHERE NIM = 123456;

-------------------------

 2. Tampilkan NIM, nama, dan jurusan dari mahasiswa yang memiliki jurusan 'Teknik Informatika', serta tampilkan juga nama dosen pembimbingnya
SELECT s.NIM, s.Nama, s.Jurusan, sub.Dosen_pengajar
FROM students s
JOIN subject sub ON s.NIM = sub.NIM
WHERE s.Jurusan = 'Teknik Informatika';

-----------------
 3. Tampilkan 5 nama mahasiswa dengan umur tertua
SELECT Nama
FROM students
ORDER BY Umur DESC
LIMIT 5;

-----------------------------

 4. Tampilkan nama mahasiswa, mata kuliah yang diambil dan nilai yang diperoleh untuk setiap mata kuliah. Hanya tampilkan data mahasiswa yang memiliki nilai lebih bagus dari 70
SELECT s.Nama, sub.Subject, sub.Nilai
FROM students s
JOIN subject sub ON s.NIM = sub.NIM
WHERE sub.Nilai > 70;
