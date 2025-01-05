import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //   unique checking not implemented yet
  async isUniqueNumber(client, collectionId, randomNumber) {
    try {
      const query = await client.database.listDocuments(collectionId, [
        Appwrite.Query.equal("randomNumber", randomNumber),
      ]);

      return query.total === 0; // Returns true if no matching document found
    } catch (error) {
      console.error("Error checking for unique number:", error);
      return false;
    }
  }

  async createOrder({ supplierId, shopeeId, status, view }) {
    try {
      let orderId = Math.floor(100000 + Math.random() * 900000);
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        orderId,
        {
          supplierId,
          shopeeId,
          status,
          view,
        }
      );
    } catch (error) {
      console.log("Appwrite serviece:: createOrder ", error);
    }
  }

  async updateOrder(orderId, { supplierId, shopeeId, status, view }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        orderId,
        {
          supplierId,
          shopeeId,
          status,
          view,
        }
      );
    } catch (error) {
      console.log("Appwrite  serviece:: updateOrder ", error);
    }
  }

  async deleteOrder(orderId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        orderId
      );
      return true;
    } catch (error) {
      console.log("Appwrite  serviece:: deleteOrder ", error);
      return false;
    }
  }

  async getOrder(orderId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        orderId
      );
    } catch (error) {
      console.log("Appwrite   serviece:: getOrder ", error);
      return false;
    }
  }

  async getAllOrder(quiries) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        quiries
      );
    } catch (error) {
      console.log("Appwrite   serviece:: getAllOrder ", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serviece:: uploadFile ", error);
      return false;
    }
  }



  // file  upload service

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite  serviece:: deleteFile ", error);
    }
  }

  getFilePreview (fileId) {
    try {
      this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log("Appwrite serviece:: getFilePreview ", error);
    }
  }

}

const service = new Service();

export default service;
