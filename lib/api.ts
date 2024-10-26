import { createClient } from "@/prismicio";
import { 
  AboutPageDocumentData, 
  CaseStudyDocument, 
  CaseStudyDocumentData, 
  FooterDocumentData, 
  HomePageDocumentData,
  NavigationDocumentData,
  SharedDocumentData, 
} from "@/prismicio-types";

const NAVIGATION = 'navigation';
const HOME = 'home_page';
const ABOUT = 'about_page';
const CASE_STUDY = 'case_study';
const FOOTER = 'footer';
const SHARED = 'shared';

export async function getCaseStudy(uid: string): Promise<CaseStudyDocumentData> {
  const client = createClient();
  const { data } = await client.getByUID(CASE_STUDY, uid);
  return data;
};

export async function getCaseStudies(): Promise<CaseStudyDocument[]> {
  const client = createClient();
  const resp = await client.getAllByType(CASE_STUDY);
  return resp;
};

export async function getHome(): Promise<HomePageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(HOME);
  return data;
};

export async function getAbout(): Promise<AboutPageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(ABOUT);
  return data;
};

export async function getShared(): Promise<SharedDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(SHARED);
  return data;
}

export async function getNavigation(): Promise<NavigationDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(NAVIGATION);
  return data;
};

export async function getFooter(): Promise<FooterDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(FOOTER);
  return data;
};
