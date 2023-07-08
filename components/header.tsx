"use client"; 
import Head from 'next/head';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import data from './works.json';

interface Links {
    key: string,
    link: string
}

export default function Header() {
    const [links, setLink] = useState<Links[] | undefined>();

    useEffect(() => {
        setLink(data);
    },[data])

    return (
        <header className="bg-[#add8e6] w-full">
            <ul className="list-none">
                {links && links.map((link:Links) =>
                    (
                        <li key={link.key} className="pr-2 sm:pr-5 inline-block">
                            <Link className="text-yellow-200 font-bold text-lg" target="_blank" href={link.link}>{link.key}</Link>
                        </li>
                    )
                )}
            </ul>
        </header>
    )
}