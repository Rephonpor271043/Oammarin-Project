import React, { Component } from 'react'
const data = [
        { id: 1, title: 'ภาพสวย', pic:'./images/p1.jpg' },
        {id: 2, title: 'ภาพงาน', pic: './images/p1.jpg'},
        {id: 3, title: 'ภาพดี', pic: './images/p1.jpg'}
]
console.log(data)
export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>ข้อมูลส่วนตัว</h1>
                {data.map((itam) => {
                  return(
                      <div key={itam.id}>
                      <img src={itam.pic} width="300" />
                  <h3>{itam.title}</h3>   
                  </div>              
                   )
                })}
            </div>
        )
    }
}