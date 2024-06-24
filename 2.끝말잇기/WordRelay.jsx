const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("김요한");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  state = {
    word: "김요한",
    value: "",
    result: "",
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult: "정답입니다";
      setWord(value);
      value("");
      inputRef.current.focus();
    } else {
      setResult: "땡입니다";
      setValue("");
      inputRef.current.focus();
    }
  };

  // 컨트롤드 인풋(Controoled Input)
  /**
   * React 상태(state)와 연결된 인풋, 컴포넌트의 상태에 의해 제어
   * const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
   */

  // 언컨트롤드 인풋(Uncontrolled Input)
  /*
  * React 상태와 독립적으로 DOM에 직접 값을 관리하는 인풋이다. 기본값을 설정할 땐
  'defaultValue'를 사용하고, 'value'를 사용하면 컨트롤드 인풋으로 간주한다.
const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Current Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
            </div>
   */

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          id="wordInput"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.current.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
