import React from 'react'

const Home = () => {
  const style={
    zIndex:"float",
    backgroundColor:'red',
  }
  return (
    <>
      <div className='container mb-5'>
          <h1 style={style}>
            welcome to RAPID...
          </h1>
      </div>
      <div className='container-fluid mb-5 '>
        <img src='./rapid.jpg' className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto' width={1500} />
      </div>
    </>
  )
}

export default Home