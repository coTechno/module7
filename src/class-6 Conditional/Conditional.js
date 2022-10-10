import React from 'react'

function Conditional() {
    const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div>
        {
            isLoading && <p>Loading... Please Wait!!!</p>
        }
        <button onClick={()=>setIsLoading(!isLoading)}>
            Toggle
        </button>
    </div>
  )
}

export default Conditional