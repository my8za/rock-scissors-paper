import React from 'react'

const Box = ({ title, item, result }) => {
  let gameResult;

  if(title === 'Computer' && result !== 'tie' && result !== '') {
    // title이 computer인가 && 결과가 비기지않고 && 결과가 비어있지 않다ㅏ면
    gameResult = result === 'win' ? 'lose' : 'win';
  } else {
    gameResult = result
  }

  return (
    <div className={`box ${gameResult}`}>
      <h1>{title}</h1>
      <img className='item-img' src={item && item.img}/>
      <h2>{gameResult}</h2>
    </div>
  )
}

export default Box;