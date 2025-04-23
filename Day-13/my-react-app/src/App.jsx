
import './App.css'
import UserProfile from './UserProfile '
import kohli from './assets/kohli.png'
import sachin from './assets/sachin.png'
import dhoni from './assets/dhoni.png'
import Counter from './Counter'

function App() {

  return(
    // <div className='bg-gray-200'>
    //   <div className="flex justify-center items-center min-h-screen w-full">
    //     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 p-3 shadow-md rounded-2xl bg-white'>
    //       <UserProfile 
    //         name="Virat Kohli" 
    //         age={36} 
    //         location="Delhi" 
    //         avatarUrl={kohli} 
    //       />
    //       <UserProfile 
    //         name="Sachin" 
    //         age={55} 
    //         location="Mumbai" 
    //         avatarUrl={sachin} 
    //       />
    //       <UserProfile 
    //         name="Dhoni" 
    //         age={41} 
    //         location="Hyderabad" 
    //         avatarUrl={dhoni}
    //       />
    //     </div>
    //   </div> 
    // </div>
    
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <Counter></Counter>
    </div>
  )
}

export default App
