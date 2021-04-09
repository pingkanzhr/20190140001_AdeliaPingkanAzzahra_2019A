// /
//  * Kode Vanilla Javascript(Javascript Murni) Untuk Menambahkan Value
//  * Pada Elemen HTML
//  */
document.getElementById('nama').innerHTML = 'Adelia Pingkan';

// //
//  * Kode Jquery Untuk Menambahkan Value
//  * Pada Elemen HTML
// *//

$('#nim').html('20190140001');

/**
 * Jquery menggunakan selector sama seperti css
 * . untuk class
 * # untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
 * misal: <button></button maka tinggal tulis button
 * Dalam kode berikut, kita akan menampilkan console.log saat document ready
 */
 $(function() {
   console.log( "Hello" );
});

// Kode Jquery Untuk Menyembunyikan Elemen
$("#hide").on("click", function() {
   $("#nama").hide();
});

// Kode Jquery Untuk Menampilkan Kembali Elemen
$("#show").on("click", function() {
   $("#nama").show();
});

// Coba Ini :)))
$("#toggle").on("click", function() {
   $("#nama").toggle();
})

// Kode Jquery Untuk Fade In Elemen HTML
$("#fadeIn").on("click", function(){
   $("#tanggal").fadeIn();
 });

// Kode Jquery Untuk Fade In Elemen HTML
$("#fadeOut").on("click", function(){
   $("#tanggal").fadeOut();
 });

// Coba Ini :))
$("#fadeToggle").on("click", function(){
   $("#tanggal").fadeToggle();
 });

// Kode Jquery Untuk Slide Up Elemen HTML
$("#slideUp").on("click", function(){
   $("#img").slideUp();
 });

// Kode Jquery Untuk Slide Up Elemen HTML
$("#slideDown").on("click", function(){
   $("#img").slideDown();
 });

// Coba Ini :)))
$("#slideToggle").on("click", function(){
   $("#img").slideToggle();
 });