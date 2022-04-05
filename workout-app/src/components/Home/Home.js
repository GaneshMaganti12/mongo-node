import "./Home.css"

export default function Home(){

// const get=async()=>{
//     const res=await fetch("http://localhost:8888/workouts",{method:"GET"
// })
// const data=await res.json()
// console.log(data)
// // return(data.map(each=>(<img src={each.imageurl}/>)))

// }

    return(
        <div className="main-home-container">
        <div className="main-home-container-2">
            <div>
            <div className="input-group input-cust">
                <span class="input-group-text">Search</span>
                {/* <textarea class="form-control" aria-label="With textarea" onChange={settingvalue}></textarea> */}
                <input type="text" className="input-cont"/>
             </div>
             </div>
             <div className="card shadow">
               <img src="https://img.freepik.com/free-vector/family-riding-bikes-city-park_74855-5243.jpg?t=st=1647305796~exp=1647306396~hmac=4640dc17ff5a392e32a8307be80b9a5c82a2f208646d28f75c4d72bd2643f379&w=1380" alt="workout" className="cardimage"/>
               <h1 className="card-head-calorie">calorie/hour:  calorie</h1>
               <h1 className="card-head">Cycling</h1>
               <p className="card-para">Cycling can help to protect you from serious diseases such as stroke, heart attack, some cancers, depression, diabetes, obesity and arthritis.</p> 
            </div>
        </div>
        </div>
    )
}