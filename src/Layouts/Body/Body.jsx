import React from "react";
import IntroductionSection from "./Sections/IntroductionSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ResumeSection from "./Sections/ResumeSection";
export default class Body extends React.Component {
    render() {
        return (
            <>
                <div className="overflow-x-hidden">
                    <IntroductionSection></IntroductionSection>
                    <ResumeSection></ResumeSection>
                    <ProjectsSection></ProjectsSection>
                    {this.props.children}
                </div>
            </>
        );
    }
}
