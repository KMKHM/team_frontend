const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

// 나와 친구 사이의 거리 구하기
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
  // test => 서울부터 부산까지 322.4091958604872 (km)
};

// 나와 친구사이에 걸리는 시간
const getTime = distance => {
  // 단위 m
  const d = Math.round(distance);
  if (d >= 2880) return 1440;
  return d / 2;
};

// 편지 받은 시간
const formatDate = receiveDate => {
  const date = new Date(receiveDate); // "2022-07-14T15:03:55.461Z"
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
};

// 친구 생일
const getBirth = date => {
  const birth = new window.Date(date);
  return `${birth.getMonth() + 1}월 ${birth.getDate()}일`;
};

// 만나이로 친구 나이 구하기
const getAge = date => {
  // date: "1995-07-15"
  const birth = date.split('-');
  const today = new Date();
  const birthDate = new Date(birth[0], birth[1] - 1, birth[2]);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export { getDistance, getTime, formatDate, getBirth, getAge };
