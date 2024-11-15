export const addLike = async (postId) => {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";

  console.log("postId:", postId);

  if (!postId) {
    throw new Error("postId is required");
  }

  try {
    const response = await fetch(`/api/post/${postId}/add-like`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-Pre-Release-Key": preReleaseKey,
      },
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Unexpected response format:", text);
      throw new Error("Unexpected response format");
    }

    const data = await response.json();

    if (response.ok) {
      console.log("Likes:", data.likes);
      return data.likes;
    } else {
      console.error("Error:", data);
      throw new Error(data.message || "Failed to add like");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const removeLike = async (postId) => {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";

  console.log("postId:", postId);

  if (!postId) {
    throw new Error("postId is required");
  }

  try {
    const response = await fetch(`/api/post/${postId}/add-like`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-Pre-Release-Key": preReleaseKey,
      },
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Unexpected response format:", text);
      throw new Error("Unexpected response format");
    }

    const data = await response.json();

    if (response.ok) {
      console.log("Likes:", data.likes);
      return data.likes;
    } else {
      console.error("Error:", data);
      throw new Error(data.message || "Failed to add like");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
