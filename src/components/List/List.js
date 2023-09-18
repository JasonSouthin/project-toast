import React from "react";

const VALID_TAGS = ["ul", "ol"];

function List({
    as: Tag = VALID_TAGS[0],
    children,
    className,
    ...delegated
}) {
    if (!VALID_TAGS.includes(Tag)) {
        throw new Error(
            `Unrecognized tag ${Tag}: Expected tags: ${VALID_TAGS}`
        );
    }
    return (
        <Tag
            {...delegated}
            className={className}>
            {children}
        </Tag>
    );
}

export default React.memo(List);
