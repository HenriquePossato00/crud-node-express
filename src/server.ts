import app from "./app.js";
import { connectToDataBase } from "./config/db.js";
import { env } from "./config/env.js";

async function startServer() {
    await connectToDataBase();
    
    const PORT = env.port;
    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

startServer();