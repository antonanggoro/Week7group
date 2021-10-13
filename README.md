# Week7group
Week 7 Challange Group

di chapter ini kami mengerjakan project secara tim, tugas kami di chapter ini adalah :
Melanjutkan project yang sudah dibuat pada chapte 6 ✔️
Menggunakan design pattern MVC pada struktur kode yang besifat monolith ✔️
Menggunakan design pattern MCR pada struktur kode yang bersifat JSON REST API
Menggunakan asynchronous pada setipa function ✔️
Menyesuaikan tabel database dengan konsep yang diinginkan ✔️
Membuat tingakatan 2 tingkatan user yaitu:
SuperAdmin memiliki hak akses ke semua data yang berada pada database. ✔️
PlayerUser memiliki hak akses terbatas sesuai dengan cakupan pada design game
PlayerUser menggunakan JWT
Proses buat/create room ✔️
Antara player 1 dengan player lainnya bisa bertanding di satu endpoint room dengan menyediakan endpoint pembuatan room dengan input nama kemudian server akan merespon dengan kode, sehingga 2 user bisa bermain bersama dengan room kode yang sama. ✔️ (saya mengerjakan hingga player 1 masuk, player 2 masuk dilanjutkan oleh anggota tim lain)
Player akan bermain maksimal 3 ronde
Hasil dari setiap pertandingan akan di record ke database user_game_history dan list ditampilkan ke endpooint private yang bisa di akses hanya user.
Setelah permainan selesai skor pada game history akan bertambah
Note: point yang di centang adalah bagian tugas yang saya kerjakan

Menjalankan project:
Syarat untuk bisa menjalan project ini adalah:

pastikan di komputer sudah terinstall:
- git (min v2.25.1 or higher)
- Node.js (min v14.15.4 or higher)
- npm (min v7.23.0 or higer)
Langkah pertama untuk menjalankan project sbb:
di terminal copas code berikut:
# clone repo
$ git clone https://github.com/emrizki/binar-chp7-challenge.git

# masuk ke dalam repo
$ cd binar-chp7-challenge

# hapus origin repo saat ini
$ cd remote remove origin
kemudian install dependencies menggunakan NPM:
# install dependencies
$ npm install

# start development server
$ npm run dev
jangan lupa buat file .env sejajar dengan file pacckage.json dan isi file tsb dengan:

SECRET_KEY=mysecret
Authors
Anton - [https://github.com/antonanggoro]
Biandi - [https://github.com/biandi0107]
Deandro Farlinno - [https://github.com/noobstonks]
M Rizki - https://github.com/emrizki

Base Project - Deandro Farlinno - Anton - Biandi - Rizki 
Engine Template - Deandro Farlino - Anton - Biandi
Authorization - Deandro Farlino - Anton - Rizki 
Create Room - Deandro Farlino - Rizki
Fight - Deandro Farlino - Rizki 
MVC - Deandro Farlino - Biadi
MVR - Biandi - Rizki 
