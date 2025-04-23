

const UserProfile  = (props) => {
  return (
    <div >
      <h1><strong>Name: </strong> <span className="text-blue-700 font-bold">{props.name}</span></h1>
      <h1><strong>Age: </strong> <span className="text-blue-700 font-bold">{props.age}</span></h1>
      <h1><strong>Location: </strong> <span className="text-blue-700 font-bold">{props.location}</span></h1>
      <img src={props.avatarUrl} alt="User Avatar" className="w-[160px] h-[220px]  mt-2" />
    </div>
  )
}

export default UserProfile 
