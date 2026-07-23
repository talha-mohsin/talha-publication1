// src/services/api.js

const API_URL = "https://sourcecodetesting.com/brand/hassan/sendMail.php";

export const sendMailData = async (dataObject) => {
  // React state (JSON object) ko FormData mein convert karein
  // taake PHP backend usay asaani se $_POST ke zariye receive kar sake.
  const formData = new FormData();
  for (const key in dataObject) {
    formData.append(key, dataObject[key]);
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      // Note: Jab hum FormData use karte hain, toh 'Content-Type' header 
      // manually set karne ki zarurat nahi hoti, browser khud set karta hai.
      body: formData, 
    });

    console.log("response ====>", response)

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Agar aapka PHP script JSON return karta hai (jaise { "status": "success" })
    const result = await response.text(); 
    
    // Agar PHP strictly JSON bhej raha hai toh aap response.json() use kar sakte hain
    // const result = await response.json(); 

    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};