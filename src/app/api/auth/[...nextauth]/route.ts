import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'




const handler=NextAuth({
    providers:[
        GithubProvider({
            clientId:process.env.CLIENTID!,
            clientSecret:process.env.SECRET!
            
        })
    ]
})



export{
    handler as GET,
    handler as POST
}