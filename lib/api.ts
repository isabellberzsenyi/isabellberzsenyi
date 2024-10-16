import { createClient } from "@/prismicio";
import { AboutPageDocumentData, HomePageDocumentData, ProjectDocument, ProjectDocumentData } from "@/prismicio-types";
import { create } from "domain";
import { ProjectDocumentDataWithUID } from "./types";

const HOME = 'home_page';
const ABOUT = 'about_page';
const PROJECT = 'project';
const FOOTER = 'footer';

export async function getProject(uid: string): Promise<ProjectDocumentData> {
  const client = createClient();
  const { data } = await client.getByUID(PROJECT, uid);
  return data;
};

export async function getAllProjects(): Promise<ProjectDocumentDataWithUID[]> {
  const client = createClient();
  const resp = await client.getAllByType(PROJECT);

  return resp.map((project) => ({
    uid: project.uid,
    project_title: project.data.project_title,
    project_date: project.data.project_date,
    project_preview_image: project.data.project_preview_image,
    project_preview_text: project.data.project_preview_text,
  }));
}

export async function getHome(): Promise<HomePageDocumentData> {
  const client = createClient();
  const { data } = await client.getSingle(HOME);
  return data;
}