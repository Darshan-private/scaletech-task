import React, { useState } from "react";

const ProfileImage = () => {
  const [profileImage, setProfileImage] = useState(
    "/images/abstract-user-flat-4.svg"
  ); // Default profile image

  // Handle file change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setProfileImage(imageUrl);
    }
  };

  // Open file dialog when edit icon is clicked
  const triggerFileSelect = () => {
    document.getElementById("profileImageInput").click();
  };

  return (
    <div style={{ position: "relative", width: "150px", height: "150px" }}>
      {/* Profile Image */}
      <img
        src={profileImage}
        alt="Profile"
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
      />

      {/* Edit Icon */}
      <div
        onClick={triggerFileSelect}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        <svg
          style={{ width: "24px", height: "24px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM325.8 139.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-21.4 21.4-71-71 21.4-21.4c15.6-15.6 40.9-15.6 56.6 0zM119.9 289L225.1 183.8l71 71L190.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
        </svg>
      </div>
      <input
        id="profileImageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImage;
