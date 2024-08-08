
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SvgLinkIcon from "./SvgLinkIcon";

const LinkBar = () => {
    return (
        <div >
            <SvgLinkIcon url={'https://github.com/Nathaniel-T-Rose'}>
                <GitHubIcon />
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/nathaniel-rose-dev'}>
                <LinkedInIcon/>
            </SvgLinkIcon>
        </div>
    )
}

export default LinkBar