export default function Title(props) {
	console.log(props);
	return <h1 className='title'>{props.text}</h1>;
}
