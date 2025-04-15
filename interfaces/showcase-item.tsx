import { ReactNode } from "react";

type showcaseEventHandler = () => void;

export interface ShowcaseItem{
    displayPanel: ReactNode;
    controlPanel: ReactNode;
    eventTargets: ReactNode[];
    inputs: ReactNode[];
    eventHandlers: showcaseEventHandler[];
    description: string;
    title: string;
    imageURL: string;
}