const Button = ({ text, className, id }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`${className ?? ""} cta-wrapper`}
            type="button"
        >
            <div className="cta-button group">
                <div className="bg-circle"></div>
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </button>
    );
};

export default Button;
