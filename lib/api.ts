import { createClient } from "@/prismicio";
import { 
  AboutPageDocumentData, 
  FooterDocumentData, 
  HomePageDocumentData,
  NavigationDocumentData,
  SharedDocumentData, 
  // ProjectDocument, 
  // ProjectDocumentData 
} from "@/prismicio-types";
import { create } from "domain";
// import { ProjectDocumentDataWithUID } from "./types";

const HOME = 'home_page';
const ABOUT = 'about_page';
// const PROJECT = 'project_page';
const FOOTER = 'footer';
const SHARED = 'shared';

// export async function getProject(uid: string): Promise<ProjectDocumentData> {
//   const client = createClient();
//   const { data } = await client.getByUID(WO, uid);
//   return data;
// };

export async function getHome(): Promise<HomePageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(HOME);
  return data;
};

export async function getAbout(): Promise<AboutPageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(ABOUT);
  return data;
}

export async function getShared(): Promise<SharedDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(SHARED);
  return data;
}

export async function getNavigation(): Promise<NavigationDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle('navigation');
  return data;
}

export async function getFooter(): Promise<FooterDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(FOOTER);
  return data;
}