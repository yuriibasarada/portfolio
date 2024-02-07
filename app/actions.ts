'use server'

export async function getSkills() {
  const res =  await fetch(`${process.env.URL}/api/skills`)
  return res.json()
}