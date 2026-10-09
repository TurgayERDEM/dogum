const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const tulipScreen = document.getElementById('tulipScreen');
const bgMusic = document.getElementById('bgMusic');
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelopeScreen');
const messageScreen = document.getElementById('messageScreen');

// Butona tıklayınca müzik başlasın ve lale ekranı gelsin
startBtn.addEventListener('click', () => {
    bgMusic.play();
    startScreen.classList.add('hidden');
    tulipScreen.classList.remove('hidden');
});

// Kullanıcı aşağı kaydırdığında zarf görünür olsun
window.addEventListener('scroll', () => {
    // Sayfa biraz kaydırıldıysa zarfı göster
    if (window.scrollY > 150) {
        envelope.classList.remove('hidden');
    }
});

// Zarfa tıklanınca titreşim dursun, zarf gizlensin ve mesaj açılsın
envelope.addEventListener('click', () => {
    envelope.classList.remove('vibrating');
    envelope.classList.add('hidden');
    envelopeScreen.classList.add('hidden');
    messageScreen.classList.remove('hidden');
    
    // Otomatik olarak mesajın olduğu yere kaydır
    messageScreen.scrollIntoView({ behavior: 'smooth' });
});

// Form gönderildiğinde sayfanın "kapanması" (başka bir ekrana geçmesi)
const form = document.getElementById('responseForm');
form.addEventListener('submit', () => {
    // Formspree yönlendirme yapacağı için buradaki işlemden sonra sayfa değişecektir.
    alert("Mesajın iletildi! Sayfa kapanıyor...");
});