import React, { useState } from 'react';
import { Edit2, Camera, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: ' John Doe',
    email: 'john@example.com',
    bio: 'Frontend developer passionate about creating beautiful and functional web applications.',
    location: 'New York, USA',
    website: 'https://johndoe.com',
    hobbies: 'Coding, Hiking, Photography',
    profilePic: '/placeholder.svg',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePic = () => {
    setProfile((prev) => ({ ...prev, profilePic: '/placeholder.svg' }));
  };

  const handleSave = () => {
    console.log('Saving profile:', profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../public/fondo.webp') center center / cover no-repeat;
          }
          .profile-page {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
          .profile-container {
            background: rgba(0, 0, 0, 0.75);
            padding: 2.5rem;
            border-radius: 1rem;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            max-width: 650px;
            width: 100%;
          }
          .profile-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
            position: relative;
          }
          .profile-header img {
            border-radius: 50%;
            border: 4px solid white;
            width: 100px;
            height: 100px;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          .profile-header .buttons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }
          .camera-button, .remove-button {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            padding: 0.5rem;
            cursor: pointer;
            transition: background 0.3s;
          }
          .camera-button:hover, .remove-button:hover {
            background: rgba(255, 255, 255, 0.4);
          }
          .profile-header h1, .profile-header p {
            margin: 0.5rem 0;
          }
          .profile-bio, .profile-info {
            margin: 1.5rem 0;
            text-align: center;
            font-size: 1rem;
            color: #ddd;
          }
          .profile-bio textarea, .profile-header input, .profile-info input {
            width: 100%;
            padding: 0.8rem;
            border-radius: 0.5rem;
            border: none;
            resize: none;
            font-size: 1rem;
            font-family: inherit;
            background-color: black;
            color: white;
          }
          .profile-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
          }
          .profile-actions button {
            padding: 0.6rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: transform 0.2s, background 0.3s;
          }
          .profile-actions .cancel-button {
            background: #ccc;
            color: black;
          }
          .profile-actions .cancel-button:hover {
            background: #bbb;
            transform: scale(1.05);
          }
          .profile-actions .save-button {
            background: #007bff;
            color: white;
          }
          .profile-actions .save-button:hover {
            background: #0056b3;
            transform: scale(1.05);
          }
          .profile-actions .edit-button {
            background: #007bff;
            color: white;
          }
          .profile-actions .edit-button:hover {
            background: #0056b3;
            transform: scale(1.05);
          }
        `}
      </style>
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={profile.profilePic}
            alt={profile.username}
            className="profile-avatar"
          />
          {isEditing && (
            <div className="buttons">
              <label className="camera-button">
                <Camera size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  style={{ display: 'none' }}
                />
              </label>
              <button
                onClick={handleRemoveProfilePic}
                className="remove-button"
              >
                <X size={16} />
              </button>
            </div>
          )}
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
              placeholder="Username"
            />
          ) : (
            <h1>{profile.username}</h1>
          )}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        <div className="profile-bio">
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              rows="4"
              placeholder="Write something about yourself"
            />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
                placeholder="Location"
              />
              <input
                type="text"
                name="website"
                value={profile.website}
                onChange={handleInputChange}
                placeholder="Website"
              />
              <input
                type="text"
                name="hobbies"
                value={profile.hobbies}
                onChange={handleInputChange}
                placeholder="Hobbies"
              />
            </>
          ) : (
            <>
              <p>Location: {profile.location}</p>
              <p>Website: <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a></p>
              <p>Hobbies: {profile.hobbies}</p>
            </>
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="cancel-button"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="save-button"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              <Edit2 size={16} className="mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;