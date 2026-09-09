function getStringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function calculate() {
  const usernameInput = document.getElementById('username').value.trim();
  const platform = document.getElementById('platform').value;
  const resultDiv = document.getElementById('result');

  if (!usernameInput) {
    resultDiv.innerHTML = '<p style="color: red;">Iltimos, nikni kiriting!</p>';
    return;
  }

  // Bo'shliqlarni olib tashlash va toza nik hosil qilish
  const cleanUsername = usernameInput.replace(/\s+/g, '').replace(/^@/, '');

  if (cleanUsername.length < 2) {
    resultDiv.innerHTML = '<p style="color: red;">Juda qisqa nik kiritildi!</p>';
    return;
  }

  resultDiv.innerHTML = '<p style="color: #3b82f6;">Profil tahlil qilinmoqda... ⏳</p>';

  setTimeout(() => {
    const hash = getStringHash(cleanUsername.toLowerCase());
    
    let followers, views, earnings, platformName;

    if (platform === 'tiktok') {
      platformName = 'TikTok';
      followers = (hash % 85000) + 1200;
      views = followers * ((hash % 4) + 2);
      earnings = ((views / 1000) * 0.03).toFixed(2);
    } else if (platform === 'instagram') {
      platformName = 'Instagram';
      followers = (hash % 65000) + 800;
      views = followers * ((hash % 3) + 1);
      earnings = ((followers / 1000) * 4.5).toFixed(2);
    } else if (platform === 'youtube') {
      platformName = 'YouTube';
      followers = (hash % 45000) + 500;
      views = followers * ((hash % 8) + 3);
      earnings = ((views / 1000) * 1.8).toFixed(2);
    }

    resultDiv.innerHTML = `
      <p><strong>Platforma:</strong> ${platformName}</p>
      <p><strong>Profil:</strong> @${cleanUsername}</p>
      <p><strong>Obunachilar:</strong> ${followers.toLocaleString()} ta</p>
      <p><strong>O'rtacha ko'rishlar:</strong> ${views.toLocaleString()} marta</p>
      <p><strong>Taxminiy daromad:</strong> $${earnings}</p>
    `;
  }, 300);
}
