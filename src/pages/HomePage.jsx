import { auth } from "../config/firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    console.log(auth, 'auth object')
    const navigate = useNavigate();

    const handleSignOut = () => {
        // if signout is successful, navigate them back to the login page
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => console.log(error))
    }
    return (
        <div>
            You are on the home page
            <p>{auth.currentUser?.displayName}</p>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}