import {IconButton} from "@mui/material";

const SvgLinkIcon = ({children, url}) => {
    return (
        <a href={url} target="_blank" >
            <IconButton>
                {children}
            </IconButton>
        </a>
    )
}

export default SvgLinkIcon;