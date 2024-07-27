"use client"
      //https://youtu.be/y-r7hKhxUKw
import Image from "next/image";
import { signIn, signOut,useSession } from "next-auth/react";

export default function Home() {
    const {data:session,status}=useSession()

    if(status === "authenticated"){
      return <>
            <h1>hello {session.user?.name}</h1>
        <button onClick={()=>signOut()}>signOut</button>
      </>
    }
  return (
    <div className="flex flex-col gap-3">
      <button onClick={()=>signIn("github")}>login github</button>
      <button onClick={()=>signOut()}>logout github</button>
    </div>
  );
}
