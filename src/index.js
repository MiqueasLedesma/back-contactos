import app from "./app.js";
import sequelize from "./db/db.js";
import './models/contacts.js'

const main = async () => {
    try {
        await sequelize.sync({ force: true })
    } catch (error) {
        console.error(error);
    }
    const port = 3001;
    app.listen(port, () => console.log(`%listening on port ${port}`));
}

main();

