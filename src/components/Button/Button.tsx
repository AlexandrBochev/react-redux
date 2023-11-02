import { NavLink } from "react-router-dom"
import { ButtonProps } from "../../models/models"

const Button = ({ children, linck }: ButtonProps) => {

  return (
    <NavLink
      to={ linck }
      className="border rounded-md w-28 font-semibold text-center text-white uppercase bg-slate-400 hover:bg-slate-500 active:bg-slate-400 py-0.5 px-4 m-1"
    >
      { children }
    </NavLink>
  )
}

export { Button }