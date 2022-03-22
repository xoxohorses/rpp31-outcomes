import styles from '../styles/Home.module.css';

export default function Spacer(props) {
  const divStyle = {
    width: props.width ? props.width : props.size,
    height: props.height ? props.height : props.size,
  };
  return <div style={divStyle}></div>;
}
