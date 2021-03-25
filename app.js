function Setwaktu(){
  let waktu = new Date()
  let day = ['Minggu', 'Senin', 'Selasa','Rabu','Kamis','Jumat','Sabtu']
  let jam = waktu.getHours()
  let minute = waktu.getMinutes()
  let second = waktu.getSeconds()
  let dte = waktu.getDate()
  let moth = waktu.toLocaleString('id-ID', { month : 'long'})
  let year = waktu.getFullYear()

  let SetJam = jam+":"+minute+":"+second
  const SetTgl = day[waktu.getDay()]+','+ dte+"/"+moth+"/"+year

  document.getElementById('jam').innerHTML = SetJam
  document.getElementById('tanggal').innerHTML = SetTgl

  setTimeout('Setwaktu()', 1000)

}

Setwaktu()
console.log(Setwaktu)

