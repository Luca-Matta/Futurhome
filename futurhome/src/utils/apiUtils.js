export const addLike = async (postId) => {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";

  console.log("postId:", postId);
  console.log("Adding like...");

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
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const removeLike = async (postId) => {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";

  console.log("postId:", postId);
  console.log("Removing like...");

  if (!postId) {
    throw new Error("postId is required");
  }

  try {
    const response = await fetch(`/api/post/${postId}/remove-like`, {
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
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
