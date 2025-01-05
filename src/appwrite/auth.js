import conf from "@/lib/conf";
import { Client, Account, ID, OAuthProvider } from "appwrite";


export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // async loginWithOAuth(provider) {
  //   try {
  //     return this.account.createOAuth2Session(
  //       OAuthProvider.Google,
  //       "http://localhost:8081/",
  //       "http://localhost:8081/login",
        
  //     );
  //   } catch (error) {
  //     console.log("Appwrite service :: loginWithOAuth :: error", error);
  //     throw error;
  //   }
  // }


  







  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
