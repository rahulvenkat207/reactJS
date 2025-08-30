import React from 'react'

export const ChildrenProp = () => {
  return (
    <ChildrenList>
        <h2>This is my name</h2>
        <p>The labours are working</p>
  
    </ChildrenList>
  );
}   




export const ChildrenList = ({children}) => {
  return (
    <div>{children}</div>
  )
}

