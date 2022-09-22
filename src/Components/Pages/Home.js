import React, { useContext } from 'react';
import { Context } from '../Context/Context';
function Home() {
    const a=useContext(Context);
  return (
    <div>
        hasnain {a}
    </div>
  )
}

export default Home
