import React, { useContext, useState } from "react";
import { MainContext } from "../Context/MainContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, SetUser } = useContext(MainContext);
  const [userName, setUserName] = useState(user?.name || "");
  const [userPhoto, setUserPhoto] = useState(user?.photo || "");
  const [isEdit, setIsEdit] = useState(false);

  const HandleSave = async () => {
    if (!userName.trim() || !userPhoto.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      SetUser({ ...user, name: userName, photo: userPhoto });
      updateProfile(user, {
        displayName: userName,
        photoURL: userPhoto,
      });
      toast.success("Profile Updated!!");
      setIsEdit(false);
      return;
    } catch (error) {
      toast.error("Failed to updateProfile");
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        <div className="card bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center gap-6 mb-6">
            <img
              src={userPhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              {!isEdit ? (
                <>
                  <p className="text-xl font-semibold">{userName}</p>
                  <button
                    onClick={() => setIsEdit(true)}
                    className="btn bg-blue-500 text-white mt-2"
                  >
                    Edit Profile
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs mb-2"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full max-w-xs mb-2"
                    value={userPhoto}
                    onChange={(e) => setUserPhoto(e.target.value)}
                  />
                  <div className="flex gap-4">
                    <button
                      onClick={HandleSave}
                      className="btn bg-green-500 text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEdit(false)}
                      className="btn bg-gray-500 text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
