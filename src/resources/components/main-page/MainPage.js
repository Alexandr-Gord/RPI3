import React from "react";
import {Container, Divider, Typography} from "@material-ui/core";
import PhotographerOfTheDay from "./PhotographerOfTheDay";
import AboutUs from "./AboutUs";
import {Trans, useTranslation} from "react-i18next";
import DIRECTORS from "../../js/PhotographersDao"

// Выбор случайного директора дня
if (sessionStorage["photographerOfTheDay"] === undefined) {
    sessionStorage["photographerOfTheDay"] = JSON.stringify(getRandomDirector());
}

function getRandomDirector() {
    const size = DIRECTORS.length;
    const n = Math.floor(size * Math.random());
    return DIRECTORS[n];
}

function AboutWebsite() {
    // Применить перевод
    useTranslation();

    return (
        <div style={{marginTop: "10%", marginBottom: "10%"}}>
            <Typography variant={"h3"} align={"center"} paragraph={true}>
                <Trans>
                    This portal is dedicated to photographers and their work
                </Trans>
            </Typography>
            <div style={{marginTop: "5%", marginLeft: "15%", marginRight: "15%"}}>
                <Typography variant={"h5"} align={"center"}>
                    <Trans>
                        Photography is a relatively young art. The first black and white photograph was taken in 1822, but it has not survived, so
                    </Trans>
                    <Trans>
                        many editions are based on the "View from the Window" made by Joseph Niepce in 1826. He was also the author of the unsaved picture.
                    </Trans>
                    <Trans>
                        After this event, the photo begins to develop rapidly. Grayscale and blurry silhouettes turn into crisp black and white images.
                    </Trans>
                    <Trans>
                        Soon, in 1861, color photography appeared. In our time, photography has long gone to the digital level.
                    </Trans>
                    <Trans>
                        People who devote their lives to the art of capturing are called photographers.
                    </Trans>
                    <Trans>
                        A photographer is a bright and extraordinary personality. A person who knows how to convey the full range of emotions in photography, making people cry or laugh.
                    </Trans>
                </Typography>
            </div>
        </div>
    );
}

function MainPage() {
    return (
        <Container maxWidth={"xl"}>
            <AboutWebsite/>
            <Divider style={{marginTop: "75px", marginBottom: "75px"}}/>
            <PhotographerOfTheDay director={JSON.parse(sessionStorage["photographerOfTheDay"])}/>
            <Divider style={{marginTop: "75px", marginBottom: "75px"}}/>
            <AboutUs/>
        </Container>
    );
}

export default MainPage;
