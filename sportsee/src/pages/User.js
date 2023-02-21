import { Link } from 'react-router-dom'

/**
 * @component - shows a page to select a user
 * @returns User Selection Page
 */
const User = () => {
  return (
    <div className="content">
      <h2>Veuillez choisir l'utilisateur :</h2>
      <div className="content__button">
        <Link to="/user/12">Karl</Link>
        <Link to="/user/18">Cecilia</Link>
      </div>
    </div>
  )
}

export default User
