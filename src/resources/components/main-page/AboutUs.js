import React from "react";
import {Avatar, Grid, makeStyles, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {useTranslation, Trans} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    teamDiv: {
        marginBottom: theme.spacing(3)
    },
    personDiv: {
        display: "flex",
        flexFlow: "column",
        justifyItems: "center",
        alignItems: "center",
        textAlign: "center"
    },
    personImage: {
        width: "200px",
        height: "200px",
        marginBottom: theme.spacing(2)
    }
}));

function TeamMember(props) {
    const classes = useStyles();

    return (
        <div className={classes.personDiv}>
            <Avatar alt={props.name}
                    src={props.img}
                    className={classes.personImage}
            />
            <Typography variant={"h5"} paragraph={true}>
                <Trans>
                    {props.name}
                </Trans>
            </Typography>
            <a href={props.github}>
                <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    color={"black"}
                />
            </a>
        </div>
    );
}

function AboutUs() {
    const classes = useStyles();
    useTranslation();

    return (
        <Grid container justify={"center"} spacing={3} className={classes.teamDiv}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <TeamMember
                    name={"Marya Mashkova"}
                    img={"https://sun9-63.userapi.com/impg/qLuuKJdd3lbPMrd4w60iNlTHYn87tuYYnQPI0w/MKtpXzq5coo.jpg?size=1620x2160&quality=96&sign=f5b5e41c95d57205c8e8b27e48eed15c&type=album"}
                    github={"https://github.com/Luminating"}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <TeamMember
                    name={"Pavel Gordeyuk"}
                    img={"https://avatars.githubusercontent.com/u/79221599?v=4"}
                    github={"https://github.com/Luminating"}
                />
            </Grid>
        </Grid>
    );
}

export default AboutUs;