document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const combo = document.getElementById('combo').value;
    const account = document.getElementById('account').value.trim();
    
    try {
      const res = await fetch('data.json');
      const data = await res.json();
  
      const user = data.users.find(u =>
        u.name === name && u.combo === combo && u.account === account
      );
  
      if (user) {
        // ✅ sessionStorage에 사용자 정보 저장
        sessionStorage.setItem('userData', JSON.stringify(user));
  
        // ✅ 쿼리스트링 없이 이동
        window.location.href = 'account.html';
      } else {
        alert('입력하신 정보가 일치하지 않습니다. 다시 시도해주세요.');
      }
  
    } catch (err) {
      console.error(err);
      alert('서버에 문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
    }
  });
  

// 제품 섹션
const products = [
    {
      img: 'photos/pdt_1.png',
      desc: '<strong>화이트 트러플 92 어드밴스드앰플</strong><br>한 방울로 채워지는 활력 에너지<br>고농축 비건 양산화 앰플'
    },
    {
      img: 'photos/pdt_2-1.png',
      desc: '<strong>화이트 트러플 로얄 인텐시브 세럼</strong><br>피부 속부터 겉까지 프리미엄 안티에이징<br>비건 향산화 세럼'
    },
    {
      img: 'photos/pdt_3-1.png',
      desc: '<strong>달바 화이트 트러플 아로마틱 스프레이 세럼 8퍼센트</strong><br>건조함부터 탄력까지 고영양 고보습 저자극 케어<br>더블 레이어링 세럼'
    },
    {
      img: 'photos/pdt_4.png',
      desc: '<strong>더블 세럼 올인원 멀티밤</strong><br>주름 집중 케어 + 미백관리, 한 번에 더블 블랜딩<br>고기능성 올인원 멀티밤'
    }
  ];
  
  
  let currentIndex = 0;
  const slider = document.querySelector('.slider');
  const descEl = document.getElementById('productDesc');
  const prevBtn = document.querySelector('.prod-btn.left');
  const nextBtn = document.querySelector('.prod-btn.right');
  
  function updateProduct(idx) {
    slider.style.transform = `translateX(-${idx * 100}%)`;
    descEl.innerHTML = products[idx].desc;  // ★ innerHTML 으로 변경
  }
  
  // 초기 표시
  updateProduct(currentIndex);
  
  // 좌/우 버튼 이벤트
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateProduct(currentIndex);
  });
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateProduct(currentIndex);
  });
  
  