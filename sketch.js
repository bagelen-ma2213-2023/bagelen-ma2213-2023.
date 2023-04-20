//Link API Data Cuaca Desa Bagelen
let urlAPI ='https://api.openweathermap.org/data/2.5/weather?q=BAGELEN&appid=6690fa214e4146088bb8f1946c21cfad&units=metric'
let dataAPI;

//Link Spread Sheet Data Digram Pie
let dataPiejk;
let urljk ='https://docs.google.com/spreadsheets/d/e/2PACX-1vRpWBFwRvvzkTvxvaKy3pVuwi1GJjnWwLF6FhnZnOXbjvQGstTwoyBeL93peQIwgKOLr5dXVwYC58a7/pub?gid=0&single=true&output=csv'

let dataPieAgama ;
let urlAgama = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpWBFwRvvzkTvxvaKy3pVuwi1GJjnWwLF6FhnZnOXbjvQGstTwoyBeL93peQIwgKOLr5dXVwYC58a7/pub?gid=1567924219&single=true&output=csv'

let dataPendidikan;
let urlpen = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpWBFwRvvzkTvxvaKy3pVuwi1GJjnWwLF6FhnZnOXbjvQGstTwoyBeL93peQIwgKOLr5dXVwYC58a7/pub?gid=1855419027&single=true&output=csv'

let dataPekerjaan;
let urlpek = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpWBFwRvvzkTvxvaKy3pVuwi1GJjnWwLF6FhnZnOXbjvQGstTwoyBeL93peQIwgKOLr5dXVwYC58a7/pub?gid=1769094819&single=true&output=csv'


//Gambar dan font
let latar;
let itera;
let logo;
let mtk;
let sumber;
let bagan;
let peta;
let CP;
let f1;
let f2;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15;


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('white')
  noStroke()
  textFont(RobotoMonoExtraLight)
  
// Nama Desa
  textSize (20)
  text (data.name,50,640)
  
// Cuaca
  textSize (30)
  text(data.weather [0].main,290, 620)
  textSize(13)
  text('Cuaca',290, 640)
  
// Temperatur
  textSize(40)
  text(data.main.temp+"°c",50, 690)

// kecepatan angin
  textSize (30)
  text(data.wind.speed +" km/h ",290, 690)
  textSize(13)
  text('Kecepatan Angin',290, 710)
  
// Kelembaban
  textSize (30)
  text (data.main.humidity + " % ",290, 770)
  textSize(13)
  text('Kelembaban',290, 790)
  
}


function preload(){
  dataAPI              = loadJSON(urlAPI)
  peta                 = loadImage('Peta.png')
  latar                = loadImage('Latar.jpg')
  logo                 = loadImage('LogoDesa.png')
  bagan                = loadImage('bagan.png')
  itera                = loadImage('ITERA.png')
  mtk                  = loadImage('mtk.png')
  CP                   = loadImage('Kontak.png')
  sumber               = loadImage('sumber.png')
  f1                   = loadFont('f1.otf')
  f2                   = loadFont('f2.otf')
  RobotoMonoSemiBold   = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium     = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
  dataPiejk            = loadTable(urljk, 'csv', 'header');
  dataPieAgama         = loadTable(urlAgama, 'csv', 'header');
  dataPendidikan       = loadTable(urlpen, 'csv', 'header');
  dataPekerjaan        = loadTable(urlpek, 'csv', 'header');
}


function setup() {
  createCanvas(1600, 3600);
}


function draw() {
  background("white");
  noStroke()
  
  
  //Background
  image(latar,0,0,1600,850);
  fill(51,66,87,200);
  rect(0,0,1600,850);
  fill("#001BCB");
  rect(0, 0, 520, 850)
  image(logo,110,140,300,300);
  image(itera,80,25,50,50);
  image(mtk,390,25,50,50);
  
  //Organigram
  image(bagan,100,1450,930,450)
  
  //Tulisan background
  fill('white');
  textFont(f1);
  textSize(35);
  text("Dashboard",150,60);
  textSize(25)
  text("Desa Bagelen",165, 110)
  textFont(f1)
  textSize(25)
  text("Kec. Gedong Tataan",120,450)
  text("Pesawaran, Lampung",107,480)
  text("Kec. Gedong Tataan",120,450)
  text("Pesawaran, Lampung",107,480)
  
  
  //Informasi Cuaca
  textFont(RobotoMonoMedium)
  fill('white')
  textSize (20)
  judul = ('Informasi Cuaca')

  text (judul,50,540)
  fill (51,66,87,200);
  rect (47,580,422,250,20);

  //Info Cuaca
  infoCuaca (0, 0, dataAPI, 500/20)
  
  textFont(RobotoMonoExtraLight)
  fill("white");
  noStroke();
  textSize(18);
  
  var currentYear   = year();
  var currentMonth  = month();
  var currentDay    = day();
  var currentHour   = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate   = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime   = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

  //Tanggal
  text(currentDate, 50, 570);
  //Waktu
  text(currentTime, 377,570);
  
  //Contak Person
  image(sumber,50,720,200,85)
  fill('#454C51')
  rect(0,3455,1600,145)
  image(CP,0,3455,500,145)
  
  //Peta
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  text ("Peta Desa",1280,980)
  image(peta,1070,1010,500,391)
  
  
  //Tentang Rejomulyo
  fill('#82BEC0')
  rect(100,952,920,450);
  textSize(20)
  textFont(RobotoMonoSemiBold)
  fill('black')
  text("Mengenal Desa Bagelen",410,980)
  
  textSize(15)
  textFont(RobotoMonoExtraLight)
  text("Desa Bagelen Gedong Tataan adalah sebuah desa yang terletak di Kecamatan Tataan, Kabupaten Lampung"  ,110,1020)
  text("Selatan, Provinsi Lampung, Indonesia. Desa ini terletak sekitar 10 km dari pusat kota Kalianda."     ,110,1040+r)
  text("Desa Bagelen Gedong Tataan memiliki luas wilayah sekitar 785,34 hektar dengan jumlah penduduk"       ,110,1060+2*r)
  text("sekitar 3.000 jiwa. Mayoritas penduduk desa ini bermata pencaharian sebagai petani dan nelayan."     ,110,1080+3*r)
  text("Desa Bagelen Gedong Tataan memiliki beberapa objek wisata yang menarik untuk dikunjungi, diantaranya",110,1110+4*r)
  text("adalah Pantai Gedong Tataan yang terkenal dengan keindahan alamnya yang masih asri dan belum"        ,110,1130+5*r)
  text("banyak terjamah oleh wisatawan. Selain itu,desa ini juga memiliki potensi wisata budaya dengan"      ,110,1150+6*r)
  text("adanya tradisi masyarakat setempat yang masih dijaga dengan baik. Selain itu, desa ini juga"         ,110,1170+7*r)
  text("memiliki beberapa fasilitas umum seperti sekolah dasar, madrasah ibtidaiyah, puskesmas, dan"         ,110,1190+8*r)
  text("juga beberapa sarana olahraga seperti lapangan sepak bola dan bola voli. Desa Bagelen Gedong"        ,110,1210+9*r)
  text("Tataan terkenal dengan produksi kopi robusta dan cengkeh yang berkualitas tinggi."                   ,110,1230+10*r)
  
  
//FData Usia
  fill('#82BEC0')
  rect(100,2051,800,400)
  fill('black')
  
  textFont(RobotoMonoMedium)
  textSize(30)
  text("Data Statistik Desa Bagelen",550,2000)
  textSize(18)
  text("Data Usia",450,2080)
  text("---------",450,2100)
  
  //Garis 
  textFont(RobotoMonoExtraLight)
  rect(180,2100,1,300)
  rect(180,2400,650,1)
  
  //Diagram Balok
  textSize(10)
  fill('#288DE6')
  rect(215,2110,75,290)
  fill('black')
  text('2827',240,2120)
  
  fill('#1DE42A')
  rect(340,2180,75,220)
  fill('black')
  text('2137',365,2190)
  
  fill('#F3F300')
  rect(465,2190,75,210)
  fill('black')
  text('2076',490,2200)
  
  fill('#F69310')
  rect(590,2240,75,160)
  fill('black')
  text('1549',615,2250)
  
  fill('#F61027')
  rect(715,2380,75,20)
  fill('black')
  text('118',742,2390)
  
  textSize(18)
  textFont(RobotoMonoSemiBold)
  text("----------------------------------------------------",950,2060)
  text(" Dari data disamping, dapat diketahui bahwa jumlah  ",950,2100)
  text(" penduduk usia 0 - 20 tahun ada sebanyak 2827 jiwa. ",950,2140)
  text(" Ini menunjukkan bahwa cukup banyak terdapat anak   ",950,2180)
  text(" -anak dan remaja di desa Bagelen. Kemudian bisa di-",950,2220)
  text(" lihat juga penduduk dengan usia produktif (20 - 60 ",950,2260)
  text(" tahun) berjumlah kurang lebih 4000 jiwa. Untuk usia",950,2300)
  text(" 60 - 75 tahun ada sebanyak 1549 jiwa,  sedangkan   ",950,2340)
  text(" usia diatas 75 tahun ada sebanyak 118 jiwa.        ",950,2380)
  text("----------------------------------------------------",950,2420)
  
  //Jumlah Data
  textSize(16)
  fill ('black');
  text(0,   170,2400);
  text(500, 140,2350);
  text(1000,140,2300);
  text(1500,140,2250);
  text(2000,140,2200);
  text(2500,140,2150);
  text(3000,140,2100);
  
  //Text Dibawah Diagram
  text('0-20 Thn' , 215,2420);
  text('20-40 Thn', 340,2420);
  text('40-60 Thn', 465,2420);
  text('60-75 Thn', 590,2420);
  text('>75 Thn'  , 715,2420);
  
  
  //Tampilan Pie Chart
  anglesjk = dataPiejk.getColumn('sudut')
  pieChartjk(200, anglesjk);
  
  anglesagama = dataPieAgama.getColumn('sudut')
  pieChartagama(200, anglesagama);
  
  anglespen = dataPendidikan.getColumn('sudut')
  pieChartpen(200, anglespen);
  
  anglespek = dataPekerjaan.getColumn('sudut')
  pieChartpek(200, anglespek);
  
}

//Jenis Kelamin
function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ['#920097','#002B75'];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      275,
      2670,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i]));
      lastAnglejk += radians(anglesjk[i]);
  }
  
  //Data Jenis Kelamin
  //Text
  fill('black')
  textSize(18)
  textFont(RobotoMonoMedium)
  text("Data Jenis Kelamin",180,2538)
  text("------------------",180,2558)
  
  textFont(RobotoMonoExtraLight)
  text("Laki-Laki         = 3759",140,2828)
  text("Perempuan         = 4128",140,2858)
  
  //Penanda Warna
  fill(piecolorjk[1]) ;
  circle(300,2823,18);
  fill(piecolorjk[0]) ;
  circle(300,2853,18);
}

//Agama
function pieChartagama(diameter, dataPieAgama) {
  let lastAngle = 0;
  var piecoloragama = ['#005F73 ','#DF8207 ','#893904'];  
  for (var i = 0; i < dataPieAgama.length; i++) {
    fill(piecoloragama[i])
    arc(
      720,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i]));
      lastAngle += radians(anglesagama[i]);
  }

  //Data Agama
  //Text
  fill('black')
  textFont(RobotoMonoMedium)
  text("Data Agama",660,2538)
  text("----------",660,2558)
  
  textFont(RobotoMonoExtraLight)
  text("Islam        = 7865",615,2820)
  text("Katholik     = 14"  ,615,2850)
  text("Kristen      = 8"   ,615,2880)
  
  //Penanda Warna
  fill(piecoloragama[0]) ;
  circle(730,2815,16);
  fill(piecoloragama[1]);
  circle(730,2845,16);
  fill(piecoloragama[2]);
  circle(730,2875,16);
}
  
//Pendidikan
function pieChartpen(diameter, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpen = ['#001219','#005F73','#0A9396','#94D2BD','#E9D8A6','#EE9B00',
                     '#CA6702','#BB3E03','#6F4601','#5339D2','#50A2FF','#9CCBFF',
                     '#DFEEFF']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpen[i])
    arc(
      1180,2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespen[i]));
      lastAngle += radians(anglespen[i]);
  }
 
  // Data Pendidikan
  //Text
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pendidikan",1100,2538)
  text("---------------",1100,2558)
  
  //Text Kiri
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Tdk/Blm Sekolah      = 170" ,970,2815)
  text("Masih Bersekolah     = 1757",970,2835)
  text("SD/Sederajat         = 380" ,970,2855)
  text("SMP/Sederajat        = 500" ,970,2875)
  text("SMA/Sederajat        = 610" ,970,2895)
  text("D1/Sederajat         = 80"  ,970,2915)
  text("D2/Sederajat         = 40"  ,970,2935)
  
  //Text Kanan
  text("D3/Sederajat         = 40" ,1210,2815)
  text("S1/Sederajat         = 83" ,1210,2835)
  text("S2/Sederajat         = 14" ,1210,2855)
  text("Tidak Tamat SD       = 33" ,1210,2875)
  text("Tidak Tamat SLTP     = 113",1210,2895)
  text("Tidak Tamat SLTA     = 73" ,1210,2915)
  
  //Penanda Warna Kiri
  fill(piecolorpen[0]) ;
  circle(1100,2810,10);
  fill(piecolorpen[1]) ;
  circle(1100,2830,10);
  fill(piecolorpen[2]) ;
  circle(1100,2850,10);
  fill(piecolorpen[3]) ;
  circle(1100,2870,10);
  fill(piecolorpen[4]) ;
  circle(1100,2890,10);
  fill(piecolorpen[5]) ;
  circle(1100,2910,10);
  fill(piecolorpen[6]) ;
  circle(1100,2930,10);
  
  //Penanda Warna Kanan
  fill(piecolorpen[7]) ;
  circle(1340,2810,10);
  fill(piecolorpen[8]) ;
  circle(1340,2830,10);
  fill(piecolorpen[9]) ;
  circle(1340,2850,10);
  fill(piecolorpen[10]) ;
  circle(1340,2870,10);
  fill(piecolorpen[11]) ;
  circle(1340,2890,10);
  fill(piecolorpen[12]) ;
  circle(1340,2910,10);
  
}

//Pekerjaan
function pieChartpek(diameterpek, dataPekerjaan) {
  let lastAnglepek = 0;
  var piecolorpek = ['#001219','#005F73','#0A9396','#94D2BD ',
                     '#E9D8A6','#EE9B00','#CA6702','#BB3E03']
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(piecolorpek[i])
    arc(
      275,3170,
      diameterpek,
      diameterpek,
      lastAnglepek,
      lastAnglepek + radians(anglespek[i]));
      lastAnglepek += radians(anglespek[i]);
  }
  
  //Data Pekerjaan
  //Text
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pekerjaan",200,3020)
  text("--------------",200,3040)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("378       = Petani"              ,455,3088)
  text("650       = Buruh Tani"          ,455,3113)
  text("186       = Pegawai Negeri Sipil",455,3138)
  text("98        = Pengrajin"           ,455,3163)
  text("56        = Pedagang Keliling"   ,455,3188)
  text("24        = Peternak"            ,455,3213)
  text("19        = TNI/POLRI"           ,455,3238)
  text("4         = Bidan"               ,455,3263)
  
  //penanda warna
  fill(piecolorpek[0]) ;
  ellipse(500,3085,10,10);
  fill(piecolorpek[1]) ;
  ellipse(500,3110,10,10);
  fill(piecolorpek[2]) ;
  ellipse(500,3135,10,10);
  fill(piecolorpek[3]) ;
  ellipse(500,3160,10,10);
  fill(piecolorpek[4]) ;
  ellipse(500,3185,10,10);
  fill(piecolorpek[5]) ;
  ellipse(500,3210,10,10);
  fill(piecolorpek[5]) ;
  ellipse(500,3235,10,10);
  fill(piecolorpek[6]) ;
  ellipse(500,3260,10,10);
}


//CODING BY KELOMPOK 2 VDS
//Anggota
//-Yoga Andriyanto_121160008
//-Peniel Manoah Judea Hutagalung_119160092
//-Dyah Ayu Widyastuti_121160073
//-Tiara Juliana_121160107
//-Risma Dewi_121160051
//-Eni Perlove_121160088
//-Cornellia Marsela_121160014

//SEKIAN DAN TERIMA KASIH