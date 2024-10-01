import { Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';
import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';
import Posts from './components/sub/Posts';
import Youtube from './components/sub/Youtube';

export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/members' element={<Members />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/youtube' element={<Youtube />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/posts' element={<Posts />} />
			</Routes>

			<Footer />
		</>
	);
}
/*
화면 렌더링 방식
SSR and CSR

SSR Server Side Rendering (HTML파일을 불러오는 방식)
-각각의 서브 페이지를 index.html, sub1.html, sub2.html형식으로 분리한 방식
-각 메뉴 클릭시 일일이 서버쪽에 요청해서 해당 html파일을 가져오는 방식


CSR Client Side Rendering (React 작업방식)
- 처음에 서버로부터 빈 index.html파일을 초기에 한 번 가져옴.
- 이때 컴파일 완료된 리액트 컴포넌트 자바스크립트 파일도 한번에 모두 가져옴
- 이후 부터는 메뉴를 클릭할때마다 서버쪽의 정보를 불러오는 것이 아닌
- 클라이언트 단에서 미리 한 번에 불러온 컴포넌트 요소들을 실시간으로 index.html 안쪽에서 바꿔치기
*/
