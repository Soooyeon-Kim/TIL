import React, {useMemo, useState} from 'react';

const App = () => {
  const [value, setValue] = useState(1)

  const something = useMemo(() => {
        let sum = 0;
        for(let i = 0; i < 999999999; i++) {
            sum += i;
        }
        return sum;
    }, []);
    
    return (
        <div>
            <button onClick={() => {
                setValue((current) => {
                    return current + 1;
                })
            }}>
                {value}
            </button>
            <div>{something}</div>
        </div>
    )
} 

export default App;
