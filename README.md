# eNyomtatas - Frontend

This is the frontend repository of eNyomtatas. 

If you want to run the project, you just have to do 
```sh
$ npm install
```
And after that, you have to export your own PORT enviroment variable if you don't want to use the default 1337.
On Unix:
```sh
export NODE_PORT=*portYouWantToUse*
node index
```
On Windows:
```sh
set NODE_PORT=*portYouWantToUse*
node index
```
After that the Node.Js is serving the frontend files on the localhost:$NODE_PORT$.

TODO: Add automatic reloading so frontend development will be so much easier.
