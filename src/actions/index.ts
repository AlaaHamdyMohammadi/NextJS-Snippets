'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

/*
Need two arguments: 
    1- id of this snippet
    2- code to be edit it
*/
export  async function editSnippet(id: number, code: string){
    // console.log(id, code);
    await db.snippet.update({
        where: {id},
        data: {code},
    })

    redirect(`/snippets/${id}`);
}