import { createClient } from "@/prismicio";
import { HomePageDocumentData, ProjectDocumentData } from "@/prismicio-types";

const HOME = 'home_page';
const PROJECT = 'project';
const FOOTER = 'footer';

export async function getProject(uid: string): Promise<ProjectDocumentData> {
  const client = createClient();
  const { data } = await client.getByUID(PROJECT, uid);
  return data;
}

export async function getHome(): Promise<HomePageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(HOME);
  return data;
}