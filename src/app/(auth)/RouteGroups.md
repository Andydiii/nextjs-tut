# Route Groups
sometimes we need to group the routes into one folder e.g. register, login, forgot password, all these three are authentication routes so put them in auth folder.


add () to folder name tells nextjs this is only for group routes purpose, and dont add this folder into the url path segments. so url path for login is still http://localhost:3000/login not http://localhost:3000/auth/login