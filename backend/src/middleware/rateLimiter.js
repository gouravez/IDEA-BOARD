import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = "my-limit-key";

    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again after some time!" });
    }

    next();
  } catch (error) {
    console.error("Rate limit error in middleware:", error);

    return res
      .status(500)
      .json({ message: "Internal Server Error during rate limit check" });
  }
};

export default rateLimiter;
