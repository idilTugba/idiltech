'use client'

import {useParams} from 'next/navigation';

export default function Project(){
    const params = useParams();
    
    return (
        <div>
            <iframe 
                style={{width:'95%', height:'90%', margin: '0 auto'}} 
                src={`/projects/${params.project}/index.html`}>
            </iframe>  
        </div>
    )
}