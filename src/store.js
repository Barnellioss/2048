import React, { useState } from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [userWin, setWin] = useState(false)
  const [wined, setWined] = useState(false)


  const store = {
    win: [userWin, setWin],
    isWined: [wined, setWined]
  }


  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

