import React,{useState} from "react"


export interface HeaderProps {
  label: string
}

const Header = (props: HeaderProps) => {

  const [data, setData] = useState("Logged Out")

  const Login = (e:any) => {
    e.preventDefault()
    setData("Login Successfull")
    localStorage.setItem("Status", "Login Successfull")
  }
   const Logout = (e: any) => {
     e.preventDefault()
     setData("Logout Successfull")
     localStorage.setItem("Status", "Logout Successfull")
   }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.label}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>{data}</h4>
            <span>   </span>

            <button className="btn btn-outline-success" onClick={Login}>
              Login
            </button>
            <button className="btn btn-outline-danger" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
