const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

export const connectionSrt = `mongodb+srv://${encodeURIComponent(MONGODB_USERNAME)}:${encodeURIComponent(MONGODB_PASSWORD)}@cluster0.pialxaa.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Cluster0`;
