async function calculate() {
  const username = document.getElementById('username').value.trim();
  const platform = document.getElementById('platform').value;
  const resultDiv = document.getElementById('result');

  if (!username) {
    resultDiv.innerHTML = '<p style="color: red;">Iltimos, nikni kiriting!</p>';
    return;
  }

  // Yuklanish jarayonini ko'rsatish
  resultDiv.innerHTML = '<p style="color: #3b82f6;">Haqiqiy ma\'lumotlar yuklanmoqda... ⏳</p>';

  if (platform === 'tiktok') {
    try {
      // TikTok ochiq API xizmatiga so'rov yuborish
      const response = await fetch(`https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`);
      const data = await response.json();

      if (data.code === 0 && data.data) {
        const user = data.data.user;
        const stats = data.data.stats;

        const followers = stats.followerCount;
        const totalLikes = stats.heartCount;
        const videoCount = stats.videoCount;

        // O'rtacha ko'rishlar va taxminiy daromadni hisoblash
        const avgViews = Math.round((totalLikes / (videoCount || 1)) * 3);
        const earnings = ((avgViews * videoCount) / 1000 * 0.02).toFixed(2);

        resultDiv.innerHTML = `
          <p><strong>Platforma:</strong> TikTok (Real data 🟢)</p>
          <p><strong>Profil:</strong> ${user.nickname} (@${user.uniqueId})</p>
          <p><strong>Obunachilar:</strong> ${followers.toLocaleString()} ta</p>
          <p><strong>Jami layklar:</strong> ${totalLikes.toLocaleString()} ta</p>
          <p><strong>Taxminiy daromad:</strong> $${earnings}</p>
        `;
      } else {
        resultDiv.innerHTML = '<p style="color: red;">Profil topilmadi yoki nik xato kiritildi!</p>';
      }
    } catch (error) {
      resultDiv.innerHTML = '<p style="color: red;">Ma\'lumotlarni olishda xatolik yuz berdi. Qayta urinib ko\'ring.</p>';
    }
  } else {
    // Boshqa platformalar uchun (Instagram/YouTube) hozircha statik bildirishnoma
    resultDiv.innerHTML = '<p style="color: orange;">Hozirda haqiqiy ma\'lumotlar faqat TikTok uchun faol!</p>';
  }
}
