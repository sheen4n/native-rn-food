import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer cfyZJsa1YlhqGvLnB_kS57Y2rQXWrzSfLVRr0IU9YG3bdMZsD6Bwep2VFDlaFca5m3b7FLKrBtNBiaFWqU2KcO3h1QLhQXxt226oSJggF1Le3w_Oxb8Yyli_mhaxXXYx"
  }
});
