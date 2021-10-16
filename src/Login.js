import React,{useState}from 'react';
import { useDispatch } from 'react-redux';
import {auth} from './firebase';
import { login } from './features/userSlice';
import './Login.css';



export default function Login() {
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [profilepic,setProfilePic] = useState('');
  const dispatch = useDispatch();
  const register = () =>{
    if (!name){
      return alert('Please enter a full name');
    }
  
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) =>{
      //ONCE USER IS CREATED 
      //UPDATE PROFILE
      //REASON : ADD PROFILE PIC
      userAuth.user.updateProfile({
        // displayName and photoURL are keys that refer to firebase
        displayName: name,
        photoURL: profilepic

      })
      .then(
        //dispatch login action //push user(current state) into redux store
        ()=>{
          dispatch(login({
            // this is payload for login action
              email: userAuth.user.email,
              uid:userAuth.user.uid,
              displayName:name,
              photoUrl: profilepic
          }))
        }
        )

    }).catch((error)=>{
      alert(error)
    })
    


  };
  const loginToApp = (e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      //dispatch to store from firebase
      //dispatch to login action
      //payload for login action
      dispatch(login({
        email:userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL


      }))
    }).catch((error)=>{
      alert(error);
    })
    

  }
  return (
      <div className="login">
        <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="logo" />
        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="full name required if registering" />
          <input placeholder = "profile picture URL (optional)" 
           value={profilepic} onChange={(e)=> setProfilePic(e.target.value)}
          type="text" />
          <input placeholder="email" value={email}
           type="email" onChange={(e)=> setEmail(e.target.value)}/>
          <input placeholder="password" type="password" 
          value={password} onChange={(e)=> setPassword(e.target.value)}
          />
          <button type="submit" onClick={loginToApp}>Signin</button>


        </form>
        <p>Not a member? {' '}
          <span className="login__register"onClick={register}>
            Register Now
          </span>
          </p>

      </div>
  );
}
