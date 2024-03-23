import React from "react";

type FancyButtonProps = {
    href: string;
    text: string;
}

const FancyButton = React.forwardRef(({ href, text }: FancyButtonProps, ref:any) => {
    return (
        <a ref={ref} href={`${href}`} className="FancyButton">
          {text}
        </a>
      )
});

  export default FancyButton;