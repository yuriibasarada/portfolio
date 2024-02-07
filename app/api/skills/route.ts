import Skill from "@/models/skills";
import {connectToDB} from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB()

    const skills = await Skill.find({})


    return new Response(JSON.stringify(skills), {status: 200})
  } catch (error) {
    return new Response(`${error} Failed to fetch all prompts`, {status: 500})
  }
}