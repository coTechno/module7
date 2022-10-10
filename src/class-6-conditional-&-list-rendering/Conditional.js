import React from 'react'

function Conditional() {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            
            {
                (count%2) && <p>even number = {count} </p>
            }

            <button 
                onClick={() => setCount(count+1) }
            >inc +1 </button>
        </div>
    )
}

export default Conditional