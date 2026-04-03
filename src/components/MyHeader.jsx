let addStyle = (e) => {
    e.target.classList.contains('styled') ? e.target.classList.remove('styled') : e.target.classList.add('styled');
  }

const MyHeader = ({customStyle, children}) => <h1 style= {{color: customStyle, lineHeight:'3rem'}} onMouseOver={addStyle}> {children} </h1>

export default MyHeader;