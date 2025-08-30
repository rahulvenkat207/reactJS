import React from 'react';

//passing prop and accessing prop
//parent component
export const UserProfile = () => {
  return (
    <div>
        <UserList
            name = "Alice"
            age = {30}
            isVerified = {true}
        />


    </div>
  )
}

//children component
const UserList = (props) => {
  return (
     <div>
        <h2>User Profile</h2>
        <p>Name  : {props.name}</p>
        <p>Age : {props.age}</p>
     </div>
  )
}

export default UserList


// 4. Dynamic Props via Objects

// function App() {
//   const userData = {
//     name: 'Bob',
//     age: 45,
//     isVerified: false,
//   };

//   return (
//     <div>
//       {/* Passing all properties from the userData object */}
//       <UserProfile {...userData} />
//     </div>
//   );
// }
