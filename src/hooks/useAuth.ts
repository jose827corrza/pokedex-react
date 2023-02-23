import {useContext} from 'react'

import {AuthContext} from '../context/AuthContext'

// Para que retorne los valore directamente
export default () => useContext(AuthContext)