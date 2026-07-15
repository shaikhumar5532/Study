import {useState} from 'react'

function UseStateRunOnce() {

    useState(() => {
        console.log("Hello World")
    },[])

    return (
        <>
            <h1>
                Hello

            </h1>
        </>
    )
}

export default UseStateRunOnce