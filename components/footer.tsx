"use client";
import Link from "next/link";
import React, {Components, useState, useEffect} from 'react';
import data from './social.json';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import YoutubeIcon from '@mui/icons-material/YouTube';

interface Social {
    key: String,
    link: String,
    icon: String
}

const Icon = ({ linkIcon }: { linkIcon: string }) => {
    switch (linkIcon) {
        case 'Facebook':
            return <FacebookIcon className="text-[#3f50b5]"/>;
        case 'Instagram':
            return <InstagramIcon className="text-[#8d6e63]" />;
        case 'Twitter':
            return <TwitterIcon className="text-[#2196f3]" />;
        case 'Youtube':
            return <YoutubeIcon className="text-[#f44336]" />;
        default:
            return null;
    }
}

export default function Footer() {
    const [social, setSocial] = useState<Social>();
    
    useEffect(()=>{
        setSocial(data); 
    },[data])

    return (
        <footer className="w-full py-1 bg-[#dcdcdc]">
            <ul className="list-none leading-3">
                {social && social.map((link:Object) => {
                    return (
                        <li key={link.key} className="pr-2 inline-block">
                            <Link href={link.link} target="_blank" className="pr-2 inline-block">
                                <Icon linkIcon={link.icon} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}