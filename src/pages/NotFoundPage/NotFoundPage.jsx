import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
        <h1>Nothing Found</h1>
        <h2>Maybe are you looking for these links?</h2>
        <ul>
            <li>
                <Link to={"/movies"}>Movies</Link>
            </li>
            <li>
                <Link to={"/moviedetails"}>Movie Details</Link>
            </li>
        </ul>
    </div>
  )
}
