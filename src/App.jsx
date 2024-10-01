// /* 컴포넌트 함수
// JSX라는 리액트만의 문법체계(돔생성 스크립트 구문을 HTML형식을 본따 만든 템플릿)
// 컴포넌트 함수 생성 규칙
// 1.무조건 이름 대문자(대문자 아닌 소문자로 작성하면 일반 태그로 인식해서 오류발생)
// 2. JSX반환
// 3. export문으로 내보냄
// 4. 하나의 컴포넌트 함수는 단일 요소만 반환 가능
// 5. 결국은 자바스크립트이기 때문에 JS예약어는 사용 불가(class)
// 6. 컴포넌트 호출은 먼저 import문으로 해당 함수명 가져온 뒤 호출
// 7. 컴포넌트 호출방식<컴포넌트 함수명/>
// 8 .만약 불필요한 Wrapping요소 없이 그룹화 하고 싶을 때 fragment<></> 형태로 감싸줌
// */
import { BtnA, BtnB } from './Btn';
import List from './List';
import Title from './Title';

function App() {
	return (
		<>
			<Title />
			<List />
			<BtnA />
			<BtnB />
		</>
	);
}


//작업 내보내기 가져오기import 해야 됨.
export default App;