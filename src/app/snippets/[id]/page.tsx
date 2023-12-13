import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function SnippetShowPage({params}) {
    console.log(params)
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })
    if(!snippet){
        return notFound()
    }
  return (
    <div>Show a snippet: {snippet.title}</div>
  )
}
