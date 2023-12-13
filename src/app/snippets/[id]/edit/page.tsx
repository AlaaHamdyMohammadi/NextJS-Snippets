import React from 'react'

interface SnippetEditPageProps{
    params:{
        id: string 
    }
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt(props.params.id)
    return (
    <div>Editing {id}</div>
  )
}
