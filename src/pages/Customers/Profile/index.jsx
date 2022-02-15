import './profile.css'
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams();

    return (
        <div id="profile">
            <div className="profile">
                <div className="profileCust">
                    <h2>This Is Profile Page From {username}</h2>
                </div>
                <button
                    onClick={() => {
                        navigate('/customers')
                    }}
                >Go To Customers Page</button>
            </div>
        </div>
    )
}

export default Profile;