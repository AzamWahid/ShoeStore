import React from 'react'
import  {createContext} from 'react'
import RedLabel from '../Images/RedLabel.jpg'
import GS7914 from '../Images/GS7914-1.jpg'
import SNEAKER from '../Images/SNEAKER SS-2151.jpg'
import weinbrenner from '../Images/weinbrenner.jpg'

const shoes = {
    'shoe1': {
        Name: "RedLabel",
        image: RedLabel
    },
    'shoe2': {
        Name: "GS7914-1",
        image: GS7914
    }, 
     'shoe3': {
        Name: "SNEAKER",
        image: SNEAKER
    },
    'shoe4': {
        Name: "weinbrenner",
        image: weinbrenner
    }
}


export const GlobalContext = createContext(shoes);


export const GlobalProvider = ({ children }) => {
return (
    <GlobalContext.Provider value={{shoes}}>      {children} </GlobalContext.Provider>
  )
}
