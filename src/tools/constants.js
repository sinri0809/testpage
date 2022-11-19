// groupt of ux writing 
const uxInputPlaceholder = [
  "00이 콘서트 언제 하지?",
  "hot issue"
];

const contentsCategories = [
  "😻latest", "🍕hottest", '⏰someone special'
];

const loadingUXWriting = [
  {
    icon: "🔮",
    writing: "오늘은 최애가 내 꿈에 나올 것만 같아"
  },
  {
    icon: "🎧",
    writing: "최애 콘서트까지 D-5, 라이브 방송은 아이돌플러스에서"
  },
];

const randomIndex = Math.floor(Math.random() * 2); // 0~1 

export {
  randomIndex,
  uxInputPlaceholder,
  contentsCategories,
  loadingUXWriting
};