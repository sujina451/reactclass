import React from 'react'
import ComA from './ComA'
import GlobalContextProvider from './GlobalContext'
import ComB from './ComB'
import ComC from './ComC'

const Show = () => {
    return (
        <>

        <GlobalContextProvider>
        <ComA/>
        <ComB/>
        <ComC/>
        </GlobalContextProvider>

        </>
    )
}

export default Show
