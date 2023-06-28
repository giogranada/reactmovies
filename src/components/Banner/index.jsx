import { BannerApp } from "./style";

export function Banner({title, children}){
    return(
        <BannerApp>
            <h1>{title}</h1>
            {children}
        </BannerApp>
    )
}