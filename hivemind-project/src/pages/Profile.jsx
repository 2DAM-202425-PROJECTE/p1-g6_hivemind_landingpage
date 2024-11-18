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
      <div className="relative flex flex-col items-center text-white hivemind-hero-section mt-10">
        <div className="hero-background"/>
        <div className="bg-black bg-opacity-75 p-10 rounded-lg shadow-xl max-w-2xl w-full">
          <div className="flex flex-col mb-8 relative items-center justify-center">
            <img
                src={profile.profilePic}
                alt={profile.username}
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
            />
            {isEditing && (
                <div className="flex gap-2 mt-2">
                  <label className="bg-white bg-opacity-20 rounded-full p-2 cursor-pointer hover:bg-opacity-40">
                    <Camera size={16}/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden"
                    />
                  </label>
                  <button
                      onClick={handleRemoveProfilePic}
                      className="bg-white bg-opacity-20 rounded-full p-2 cursor-pointer hover:bg-opacity-40"
                  >
                    <X size={16}/>
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
                    className="mt-2 w-full p-3 rounded-md text-white bg-black border-none"
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
                    className="mt-2 w-full p-3 rounded-md text-white bg-black border-none"
                />
            ) : (
                <p className="text-white mt-2">{profile.email}</p>
            )}
          </div>
          <div className="text-center mt-6">
            {isEditing ? (
                <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Write something about yourself"
                    className="w-full p-3 rounded-md text-white bg-black border-none resize-none"
                />
            ) : (
                <p className="text-gray-400">{profile.bio}</p>
            )}
          </div>
          <div className="text-center mt-6">
            {isEditing ? (
                <>
                  <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleInputChange}
                      placeholder="Location"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border-none"
                  />
                  <input
                      type="text"
                      name="website"
                      value={profile.website}
                      onChange={handleInputChange}
                      placeholder="Website"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border-none"
                  />
                  <input
                      type="text"
                      name="hobbies"
                      value={profile.hobbies}
                      onChange={handleInputChange}
                      placeholder="Hobbies"
                      className="w-full p-3 mt-3 rounded-md text-white bg-black border-none"
                  />
                </>
            ) : (
                <>
                  <p className="text-gray-400 mt-3">Location: {profile.location}</p>
                  <p className="text-gray-400 mt-3">Website: <a href={profile.website} target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-400">{profile.website}</a></p>
                  <p className="text-gray-400 mt-3">Hobbies: {profile.hobbies}</p>
                </>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {isEditing ? (
                <>
                  <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 rounded-md bg-gray-400 text-black hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                      onClick={handleSave}
                      className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </>
            ) : (
                <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Edit2 size={16} className="mr-2"/>
                  Edit Profile
                </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Profile;