export const AosWrapper = (prop) => {
    const { children, animation = "", delay = "", anchor = "" } = prop
    return (
        <div data-aos={animation} data-aos-delay={delay} data-aos-anchor-placement={anchor}>
            {children}
        </div>
    );
};
export const UnderHightlight = (prop) => {
    const { children } = prop
    return (<>&nbsp;
        <span className="highlight-text bottom-hightlight">
            {children}
        </span>
        &nbsp;</>);
};
export const HightlightButton = (prop) => {
    const { children, onClick } = prop
    return (<button onClick={onClick} className="highlight-btn highlight-text">
        {children}
    </button >);
};
export const SectionHeading = (prop) => {
    const { children } = prop
    return (<h2 className="section-heading">
        {children}
    </h2 >);
};