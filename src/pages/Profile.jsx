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
  const [activationCode, setActivationCode] = useState('');
  const [activatedProducts, setActivatedProducts] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activatedProduct, setActivatedProduct] = useState('');

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

  const handleActivateCode = () => {
    if (activationCode) {
      setActivatedProducts((prev) => [...prev, activationCode]);
      setActivatedProduct('Product Name'); // Replace with actual product name
      setActivationCode('');
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="relative flex flex-col items-center text-gray-900 p-8">
      <div className="hero-background"/>
      <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
        <div className="relative mb-8 flex flex-col items-center justify-center">
          <img
            src={profile.profilePic}
            alt={profile.username}
            className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shadow-md"
          />
          {isEditing && (
            <div className="flex gap-3 mt-3">
              <label htmlFor="profile-pic" className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300">
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
              <p className="text-gray-400 mt-3">Website: <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{profile.website}</a></p>
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

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Activar Codi de Producte</h2>
          <div className="mt-4 flex flex-col items-center">
            <input
              type="text"
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
              placeholder="Introdueix el codi d'activació"
              className="block w-full rounded-md border-0 py-1.5 text-white bg-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
            <button
              onClick={handleActivateCode}
              className="mt-4 px-4 py-2 bg-black rounded-lg text-white"
            >
              Activa
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Productes Activats</h2>
          <ul className="mt-4">
            {activatedProducts.map((code, index) => (
              <li key={index} className="text-lg">✔️ {code}</li>
            ))}
          </ul>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Codi Activat</h2>
            <p className="text-2xl font-bold">{activationCode}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
            >
              Tanca
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;