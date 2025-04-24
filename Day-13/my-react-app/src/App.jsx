import './App.css';
import UserProfile from './UserProfile ';
import kohli from './assets/kohli.png';
import sachin from './assets/sachin.png';
import dhoni from './assets/dhoni.png';
import Counter from './Counter';
import UserList from './UserList';

function App() {
  return (
    // <div className="bg-cyan-50">
    //   <h1 className="pt-10 flex justify-center font-bold text-orange-500">
    //     Users Profile
    //   </h1>
    //   <div className="flex justify-center items-center min-h-screen w-full">
    //     <div className="grid grid-cols-1 md:grid-cols-3 space-x-2 p-3 shadow-md rounded-2xl bg-white">
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

    // <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
    //   <Counter></Counter>
    // </div>

    <div className="flex justify-center items-center min-h-screen w-full bg-pink-50 ">
      <UserList></UserList>
    </div>
  );
}

export default App;
