import "./App.css";

const member = {
  name: "백승재",
  job: "취준생",
  addr: "서울시 광진구",
  gender: "남성",
};

function getMember(user) {
  return user ? (
    <h1> {member.name}님, 환영 합니다.</h1>
  ) : (
    <h1>환영 합니다. 방문자님.</h1>
  );
}

const Greeting = () => {
  return (
    <div className="App">
      <div>{getMember(true)}</div>
      <p className="title-name">안녕하세요. 저는 {member.name} 입니다.</p>
      <p className="title-name">직업은 {member.job} 입니다.</p>
      <p className="title-name">주소는 {member.addr} 입니다.</p>
      <p className="title-name">성별은 {member.gender} 입니다.</p>
    </div>
  );
};
export default Greeting;
