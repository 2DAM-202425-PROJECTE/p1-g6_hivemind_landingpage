import React, { useState } from 'react';
import { Edit2, Camera, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'John Doe',
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
      <div className="relative flex flex-col items-center text-gray-900 p-8">
        <div className="hero-background"/>
        <div className="w-full max-w-2xl bg-opacity-75 bg-black p-8 rounded-lg shadow-xl">

          <div className="relative mb-8 flex flex-col items-center justify-center">
            <img
                src={profile.profilePic}
                alt={profile.username}
                className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
            />
            {isEditing && (
                <div className="flex gap-3 mt-3">
                  <label htmlFor="profile-pic"
                         className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300">
                    <Camera size={20}/>
                    <input
                        type="file"
                        id="profile-pic"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden"
                    />
                  </label>
                  <button
                      type="button"
                      onClick={handleRemoveProfilePic}
                      className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300"
                  >
                    <X size={20}/>
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
                    className="mt-3 w-full p-3 rounded-md text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <h1 className="text-2xl text-white mt-2">{profile.username}</h1>
            )}
            {isEditing ? (
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="mt-3 w-full p-3 rounded-md text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <p className="text-white mt-2">{profile.email}</p>
            )}
          </div>

          <div className="mt-6">
            {isEditing ? (
                <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Write something about yourself"
                    className="w-full p-3 rounded-md text-white bg-black border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <p className="text-gray-400">{profile.bio}</p>
            )}
          </div>

          <div className="mt-6">
            {isEditing ? (
                <>
                  <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleInputChange}
                      placeholder="Location"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                      type="text"
                      name="website"
                      value={profile.website}
                      onChange={handleInputChange}
                      placeholder="Website"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                      type="text"
                      name="hobbies"
                      value={profile.hobbies}
                      onChange={handleInputChange}
                      placeholder="Hobbies"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </>
            ) : (
                <>
                  <p className="text-gray-400 mt-3">Location: {profile.location}</p>
                  <p className="text-gray-400 mt-3">Website: <a href={profile.website} target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-500 hover:underline">{profile.website}</a>
                  </p>
                  <p className="text-gray-400 mt-3">Hobbies: {profile.hobbies}</p>
                </>
            )}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {isEditing ? (
                <>
                  <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 rounded-md bg-gray-400 text-gray-900 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                      onClick={handleSave}
                      className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </>
            ) : (
                <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Edit2 size={20} className="mr-2"/>
                  Edit Profile
                </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Profile;
