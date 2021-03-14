import React from 'react'
import ContentLoader from "react-content-loader";

export default function PlaceholderItems(){
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={420}
            viewBox="0 0 300 420"
            backgroundColor="#d6d6d6"
            foregroundColor="#ecebeb"
        >
            <rect x="-6" y="0" rx="0" ry="0" width="250" height="250" />
            <rect x="1" y="261" rx="0" ry="0" width="170" height="25" />
            <rect x="1" y="296" rx="0" ry="0" width="110" height="14" />
            <rect x="191" y="277" rx="0" ry="0" width="54" height="24" />
            <rect x="0" y="316" rx="0" ry="0" width="243" height="2" />
            <circle cx="15" cy="338" r="15" />
            <rect x="36" y="331" rx="0" ry="0" width="37" height="17" />
            <rect x="78" y="331" rx="0" ry="0" width="77" height="17" />
            <rect x="192" y="332" rx="0" ry="0" width="55" height="16" />
        </ContentLoader>
    )
}