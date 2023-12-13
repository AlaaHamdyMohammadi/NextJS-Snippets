import SnippetEditForm from '@/components/SnippetEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'

interface SnippetEditPageProps{
    params:{
        id: string 
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({where: {id}});

    if(!snippet){
        return notFound();
    }



    return (
      <div>
        Editing title: <span className='font-bold'>{snippet.title}</span>
        <SnippetEditForm snippet={snippet}/>
      </div>
    );
}
