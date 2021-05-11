let types = ['BP', 'SQ', 'DL'];
let services = ['GITHUB', 'GOOGLE', 'FACEBOOK', 'NAVER', 'KAKAO'];
let lines = [];
let users = [];

for (let i = 0; i < 100; i++) {
  let bp = (Math.random() * 299).toFixed(2) + 1;
  let sq = (Math.random() * 299).toFixed(2) + 1;
  let dl = (Math.random() * 299).toFixed(2) + 1;
  let cert_count = Math.floor(Math.random() * 15);
  let user_id = Math.floor(Math.random() * 1000) + 1000;
  while (true) {
    if (users.includes(user_id)) {
      user_id = Math.floor(Math.random() * 1000) + 1000;
    } else {
      users.push(user_id);
      break;
    }
  }
  console.log(
    `(${user_id}, ${bp}, ${sq}, ${dl}, ${cert_count}),`
  );
}
console.log('################################');
users.forEach((id, index) => {
  let service = services[Math.floor(Math.random() * 5)]
  console.log(`(${id}, 'user_${id}@${service.toLowerCase()}.com', 'AAAA', '${service}'),`);
});
console.log('################################');
users.forEach((id, index) => {
  console.log(
    `(${id}, 'test_user_${index}', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'),`
  );
});
