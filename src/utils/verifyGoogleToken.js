const axios = require("axios");

const verifyGoogleToken = async (tokenId) => {
  const googleApiUrl = `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`;

  try {
    const response = await axios.get(googleApiUrl);
    return response.data; // Thông tin người dùng từ Google
  } catch (error) {
    throw new Error("Invalid Google token");
  }
};

module.exports = {
  verifyGoogleToken,
};
