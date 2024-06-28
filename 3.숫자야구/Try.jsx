import React, { memo } from "react";

// PurComponet를 적용하기 위해 memo컴포넌트를 감싸줘서 추가
// memo는 부모의 컴포넌트 리랜더링을 막는다(state, props는 불가)
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

// displayName으로 원상태로 되돌려주기 위해 사용.
Try.displayName = "Try";

export default Try;
