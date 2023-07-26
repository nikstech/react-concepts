import React from 'react'

const Child = () => {
  console.log("Child C");
  return (
    <div>Child C</div>
  )
}

export default React.memo(Child)