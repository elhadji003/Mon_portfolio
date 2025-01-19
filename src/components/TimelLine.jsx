import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const TimelLine = () => {
    return (
        <div className="p-5 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
                Mon Parcours
            </h2>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Mai 2024</Timeline.Time>
                        <Timeline.Title>Stage chez VOLKENO</Timeline.Title>
                        <Timeline.Body>
                            J'ai participé à la conception et au développement de solutions
                            innovantes en utilisant des technologies modernes telles que
                            React, Node.js, et Tailwind CSS. Ce stage m'a permis de renforcer
                            mes compétences en gestion de projets Agile.
                        </Timeline.Body>
                        <Button
                            className="mt-3"
                            color="primary"
                            size="sm"
                            icon={HiArrowNarrowRight}
                        >
                            En savoir plus
                        </Button>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );
};

export default TimelLine;
