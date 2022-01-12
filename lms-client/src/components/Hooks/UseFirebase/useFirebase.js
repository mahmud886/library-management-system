import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut ,signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import initializationFirebase from "../../firebase/firebase.init";
// import initializationFirebase from "../../Pages/Authentication/firebase/Firebase.init";

initializationFirebase()


const useFirebase =()=>{

    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [firebaseError, setFirebaseError]=useState('')
    const [successMsg, setSuccessMsg]=useState('')
    const auth = getAuth();
    const history = useHistory();
    // const location = useLocation()
    
    ///create  new account by email ---------------
    const createAccount =(email, password, name)=>{
      console.log(name, email,password)
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccessMsg('congratulations!! Account successfully created')
        setFirebaseError('');
        const newUser = {email, displayName:name};
        setUser(newUser);

        //save use to the database-------------------saveduser
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
            // const destination = location?.state?.from || "/";
            // history(destination);
            history.replace("/");
        }).catch((error) => {
        }); 
       
      })
      .catch((error) => {
        setFirebaseError(error.message);
      })
      .finally(()=> setIsLoading(false)
      )
    }
    
    //log in email password ------------------------ 
    const passwordLogin = (email, password)=>{
      setIsLoading(true)
       signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.replace("/");
     })
        .catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false));
        
      }
    
//On auth state change-------------------------state change
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
        else {
            setUser({})
        }
        setIsLoading(false)
          });
          return unsubscribe;
      },[auth]);

    //signOut------------------------------loguot
    const logOut=()=>{
      const doit = window.confirm('Are you sure You want to loged out?');
      if(doit){
        const auth = getAuth();
         signOut(auth)
         .then(() => {
         }).catch((error) => {
          setFirebaseError(error.message);
        })
        .finally(()=> setIsLoading(false))
      }
        
    };
   
    return{
        user,
        createAccount,
        passwordLogin,
        logOut,
        isLoading,
        firebaseError,
        successMsg,
        setFirebaseError,
        

    }

}
export default useFirebase;