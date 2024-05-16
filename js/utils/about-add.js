import { getAboutData } from "../api/about.js";
import { renderAbout } from "../rendering/about.js";

export const about = async () => {
   const data = await getAboutData();
   renderAbout(data);
};
