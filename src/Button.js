/* //css 인라인 스타일로 적용
const baseButtonStyle={
  padding: '14px 27px',
  borderRadius: '30px',
  outline: 'none',
  cursor: 'pointer',
  fontSize:'17px',
};


const blueButtonStyle={
  ...baseButtonStyle,
  color: '#7090ff',
  border: 'solid 1px #7090ff',
  backgroundColor: 'rgb(0,89,255,0.2)',
};

const redButtonStyle={
  ...baseButtonStyle,
  color: '#ff4664',
  border: 'soild 1px #ff4664',
  backgroundColor: 'rgba(255, 78, 78, 0.2)',
};


function Button({children, onClick, color}){
  const style= color === 'red' ? redButtonStyle : blueButtonStyle;
  return <button style={style} onClick={onClick}>{children}</button>;
}
*/
import './Button.css';

function Button({children, onClick, color='blue', className=''}){
  const classNames=`Button ${color} ${className}`;
  return(
    <button className={classNames} onClick={onClick}>{children}</button>
  )
}
export default Button;