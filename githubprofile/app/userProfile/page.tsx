import React from 'react'
import Userprofile, {UserProfileProps} from '../components/UserProfile'

const UserProfile = ({  avatar_url,
    username,
    bio,
    location,
    public_repos,
  }: UserProfileProps) => {

  return (
    <div><Userprofile
    avatar_url={avatar_url} 
    username={username} 
    bio={bio} 
    location={location} 
    public_repos={public_repos} 
    /></div>
  )
}
export default UserProfile
