import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <section className="user-data">
        <div className="photo-section">
          <img className="photo" src={user.photo_url} />
        </div>
        <div className="info-block">
          <span className="userfullname-block">
            {user.first_name} {user.last_name}
          </span>
          <span className="username-block">@{user.username}</span>
        </div>
      </section>
    </div>
  );
};

export default Profile;
