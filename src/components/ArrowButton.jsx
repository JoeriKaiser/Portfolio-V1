const ArrowButton = (props) => {
  return(
  <div className="arrow-container">
    <button className='arrow bounce' onClick={props.onClickFunction1}>&#8595;</button>
  </div>
  )
}
export default ArrowButton;