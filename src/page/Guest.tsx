import React from 'react'
import Chat from "../component/Chat";

function Guest() {
    return (
        <Chat myId="guest" enemyId="host" />

    )
}

export default Guest