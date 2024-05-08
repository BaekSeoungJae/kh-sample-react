import "./App.css";
// JSX란 ? JavaScript에 XML을 추가 확장한 문법
// html 태그 사용 시반드시 닫힘 태그가 존재해야 함
// 컴퍼런트가 반환 될 때 태그는 한개 이어야 함. <></>
// 자바스크립트 코드를 중괄호를 사용해 데이터 바인딩 할 수 있음
// 조건부 연산자 : {}내에서 조건부 연산자 사용 가능
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 렌더링
// 인라인 스타일링 :
// import Greeting from "./Greeting";  // return <Greeting />;
import Welcome from "./Welcome";
import Section from "./Section";
import MyComponent from "./MyComponent";
import UserList from "./UserList";
import TodoList from "./TodoList";
import CreateRef from "./Ref";
import NameCard from "./NameCard";

// 컴포넌트의 재활용
function App() {
  return (
    <>
      <NameCard />
    </>
  );
}

/* <Section title="스포츠" content="야구는 역시 LG Twins 이시지" />
<Section title="정치" content="정치는 잘 모릅네다" />
<br />
<MyComponent name="은채" age={20} />
<MyComponent name="카즈하" />
<MyComponent age={25} />
<MyComponent>
  <h1>여기는 르세라핌 입니다.</h1>
</MyComponent> */

export default App;
