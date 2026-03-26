export const sendEmail = async (formData) => {
  try {
    const response = await fetch("http://localhost:8080/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.text();
  } catch (error) {
    throw error;
  }
};