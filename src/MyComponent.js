const MyComponent = (props) => {
  const { name, age, children } = props;
  return (
    <>
      <p>안녕하세요, 제 이름은 {name}입니다.</p>
      <p>나이는 {age}입니다.</p>
      <p>그룹 이름은 {children}</p>
    </>
  );
};
MyComponent.defaultProps = {
  name: "없는 이름",
  age: 0,
};

export default MyComponent;
