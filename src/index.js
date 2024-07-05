import { app } from "./app.js";

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.post("/api/cookie", (req, res) => {
  console.log("Setting cookies");
  const options = {
    httpOnly: true,
    domain: "https://frontend-theta-steel-11.vercel.app",
    path: "/",
    sameSite: "None",
    secure: true,
  };
  return res
    .status(200)
    .cookie("TestCookie", "helloIamatestcookie", {
      httpOnly: true,
    //   domain: "https://frontend-theta-steel-11.vercel.app",
      domain: "*",
    //   path: "/",
      sameSite: "none",
      secure: true,
    })
    .json({ message: "Cookies set" });
});
