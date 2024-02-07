'use server'

export async function getSkills() {
  const res =  await fetch(`${process.env.URL}/api/skills`)
  return res.json()
}

export async function getProjects() {
  const res =  await fetch(`${process.env.URL}/api/projects`)
  return res.json()
}