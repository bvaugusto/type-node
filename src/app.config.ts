import express, { Application } from "express";
import mongoose from "mongoose";

class App {
    
    public app: Application;
    public port: number;
    
    constructor(appConfig: { port: number, middlewares: any, controllers: any }) {
        this.app = express();
        this.port = appConfig.port;
        this.setMongooseConnection();
        this.setMiddlewares(appConfig.middlewares);
        this.setController(appConfig.controllers);
    }

    public listen() {
        this.app.listen(this.port, () => console.log('Express has bee started'));
    }

    private setMiddlewares(middlewares: { forEach: (mid: (middleware: any) => void) => void; }) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    private setController(controllers: { forEach: (con: (con: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/',controller.router);
        });
    }

    private setMongooseConnection() {
        mongoose.connect('mongodb://localhost:27017/type', { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
    }
}

export default App;