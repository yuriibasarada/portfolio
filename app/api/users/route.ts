import User from "@/models/user";
import {connectToDB} from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB()

    const users = await User.find({})


    return new Response(JSON.stringify(users), {status: 200})
  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch all prompts", {status: 500})
  }
}

export const POST = async (request: Request) => {
  const {email, username} = await request.json();

  try {
    await connectToDB();
    const newUser = new User({email, username});

    await newUser.save();
    return new Response(JSON.stringify(newUser), {status: 201})
  } catch (error) {
    return new Response("Failed to create a new prompt", {status: 500});
  }
}