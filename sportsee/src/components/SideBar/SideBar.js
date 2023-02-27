// Import CSS and icons
import React from 'react'
import '../SideBar/SideBar.css'
import { Link } from 'react-router-dom'
import Yoga from '../../assets/icons/iconMeditation.svg'
import Swim from '../../assets/icons/iconSwiming.svg'
import Bike from '../../assets/icons/iconBike.svg'
import Fitness from '../../assets/icons/iconDumbBell.svg'

/**
 * It returns a React component that displays navigation on the left.
 * @returns A React component
 */
function SideBar() {
  return (
    <aside className="sidebar">
      <nav>
        <Link to="#">
          <img src={Yoga} alt="Icon Yoga" />
        </Link>
        <Link to="#">
          <img src={Swim} alt="Icon Nage" />
        </Link>
        <Link to="#">
          <img src={Bike} alt="Icon Vélo" />
        </Link>
        <Link to="#">
          <img src={Fitness} alt="Icon Musculation" />
        </Link>
      </nav>
      <footer>
        <p>Copyright, SportSee 2022</p>
      </footer>
    </aside>
  )
}

export default SideBar
