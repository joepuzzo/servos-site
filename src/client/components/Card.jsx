import ChevronDown from '@spectrum-icons/workflow/ChevronDown';

export const Card = ({ children, id, next }) => {
  const scrollDown = () => {
    // Get the target element
    const card = document.getElementById(next);

    // Get the height of the fixed header
    const headerHeight = document.querySelector('header').offsetHeight; // Replace 'header' with the correct selector for your header

    // Calculate position to scroll to (element's top position - header's height)
    const positionToScrollTo = card.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // Scroll to the calculated position
    window.scrollTo({
      top: positionToScrollTo,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  return (
    <div className="card" id={id}>
      <div className="card-content">
        {children}
        {next ? (
          <button className="round-button" onClick={scrollDown}>
            <ChevronDown size="XL" />
          </button>
        ) : null}
      </div>
    </div>
  );
};
