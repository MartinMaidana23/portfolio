import React, {useState, createContext} from 'react'

export const LangContext = createContext()

const LangProvider = ({children}) => {


    const [lang, setLang] = useState(window.navigator.language.slice(0,2) || 'en')

    const handleLangChange = () => {
      const newLang = lang === 'es' ? 'en' : 'es'
      setLang(newLang)
    }

  return (
    <LangContext.Provider value={{
        lang,
        setLang,
        handleLangChange
    }}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider