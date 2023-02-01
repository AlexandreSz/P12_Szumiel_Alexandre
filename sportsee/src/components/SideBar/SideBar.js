// Import CSS and icons
import '../SideBar/SideBar.css'

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
    <aside>
      <div id="sidebar">
        <div></div>
        <ul>
          <li className="sidebar-icon">
            <img src={Yoga} alt="Icône Yoga" />
          </li>
          <li className="sidebar-icon">
            <img src={Swim} alt="Icône Natation" />
          </li>
          <li className="sidebar-icon">
            <img src={Bike} alt="Icône Vélo" />
          </li>
          <li className="sidebar-icon">
            <img src={Fitness} alt="Icône Fitness" />
          </li>
        </ul>
        <p id="sidebar-copyright">Copyright, SportSee 2020</p>
      </div>
    </aside>
  )
}

export default SideBar
