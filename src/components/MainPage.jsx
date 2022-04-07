import DSC from '../img/img/DSC.jpg'
import ArrowButton from './ArrowButton';

const MainPage = (props) =>   {
  return(
    <header>
      <div className="main-image">
        <img src= {DSC} alt="" />
      </div>
      <div className="hero-text">
        <h1>Hi, I'm Joeri, an aspiring Web Developer.</h1>
        <h2>You can discover my projects and more about me below!</h2>
      </div>
      <div className='arrow-container'>
        {/* <button className='arrow bounce' onClick={() => setName()}>&#8595;</button> */}
      </div>
      <ArrowButton onClickFunction1={props.onClick1} />
    </header>
  )
}

export default MainPage;