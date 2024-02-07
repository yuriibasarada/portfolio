export interface IMenuItem {
  name: string,
  path: string
}
export interface Project {
  id: string,
  name: string,
  title: string,
  short_description: string,
  tag: string,
  tags: [string],
  has_metrics: boolean
}