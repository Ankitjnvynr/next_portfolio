import conf from "../conf/conf";
import { Client, Account, ID, OAuthProvider } from "appwrite";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

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


  

  async loginWithOAuth() {
    try {
      // Appwrite OAuth configuration
      const provider = "google"; // Or any other provider (e.g., "github", "facebook")
      const redirectUri = AuthSession.makeRedirectUri({
        useProxy: true, // Use Expo proxy in development
      });
  
      // Construct OAuth URL for Appwrite
      const authUrl = `${conf.appwriteUrl}/account/sessions/oauth2/${provider}?project=${conf.appwriteProjectId}&success=${encodeURIComponent(redirectUri)}&failure=${encodeURIComponent(redirectUri)}`;
  
      console.log("OAuth URL:", authUrl);
  
      // Start the OAuth flow
      const result = await AuthSession.startAsync({ authUrl });
  
      if (result.type === "success" && result.params.success) {
        console.log("OAuth success:", result);
        const user = await this.getCurrentUser(); // Fetch user session
        return user;
      } else {
        console.error("OAuth flow canceled or failed");
      }
    } catch (error) {
      console.error("Error during OAuth login:", error);
    }
  }





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
