import "./Header.css"

export default function Header(){

    return(
        <div className="main-container">
          <h1>Workouts</h1>
          {/* <button onClick={logout}>Logout</button> */}
          {/* <button type="button" class="btn btn-outline-secondary" >Secondary</button> */}
          <button type="button" class="btn btn-secondary">Logout</button>
        </div>
    )
}